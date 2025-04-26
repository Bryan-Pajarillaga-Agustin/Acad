import { useState, useEffect, useRef } from "react"
import TasksContainer from "./TasksContainer/TasksContainer"
import { BottomOptions } from "./BottomOptions/Bottom_Options"
import { DropDown } from "./DropDown/DropDown"
import { OptionsTab } from "./OptionsTab/OptionsTab"
import ViewTask from "./ViewTask/ViewTask"
import TaskPrompt from "./TaskPrompt/TaskPrompt"
import SortPrompt from "./SortPrompt/SortPrompt"
import Button from "../../Components/Button"
import s from "../Overview/Tasks.module.css"
import styles from "./TasksContainer/Tasks_Container.module.css"
export const Tasks = ({page, showTaskPrompt, setShowTaskPrompt, setEditing, editing, showSortPrompt, setShowSortPrompt}) => {

    // Refs

    const searchValue = useRef(null)
    const taskEditingP = useRef(null)

    // Booleans

    const [selectTask, setSelectTask] = useState(false)
    const [searching, setSearching] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)
    const [sorting, setSorting] = useState(true)

    // Data Variables

    const [selectedTasks, setSelectedTasks] = useState([])
    const [optionTabNumber, setOptionTabNumber] = useState(1)

    // Arrays & objects

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("dataTask")) != null ? JSON.parse(localStorage.getItem("dataTask")) : [])
    const [updateTasks, setUpdateTasks] = useState(tasks.map(task => ({ ...task, isChecked: false })));
    const [filteredTasks, setFilteredTasks] = useState(null)
    const [openedTask, setOpenedTask] = useState({index: null, isOpened: false})
    const [type, setType] = useState("Pending")
    const [editedValue, setEditedValue] = useState(null)
    const [sortOptions, setSortOptions] = useState([
        {description: "Newest to Oldest", state: true},
        {description: "Oldest to Newest", state: false},
        {description: "From A-Z", state: false},
        {description: "From Z-A", state: false},
    ])

    // Array Of styles for each task

    function handleType(){
        setShowDropDown(false)
    }

    function writeTask(data){
        let dataTask = tasks
        let letters = "qwertyuiopasdfghjklzxcvbnm"
        let randId = ""
        for(let i = 0; i < 10; i++){
            let random = Math.floor(Math.random()*(letters.length - 1))
            randId = randId.concat(letters[random])
        }
        let newTask = { 
            id: randId, 
            task: data, 
            dateCreated: {fullDate: new Date(), time: Date.now()}, 
            selected: false,
            style: "default",
            
            cName: [
                    JSON.stringify(styles.col),
                    JSON.stringify(styles.br),
                    JSON.stringify(styles.fs),
                    JSON.stringify(styles.bgC),
                    JSON.stringify(styles.fW)
                ],
            isChecked: false,
            type: "pending"
        }
        dataTask.unshift(newTask)
        localStorage.setItem("dataTask", JSON.stringify(dataTask))
        setUpdateTasks([...dataTask])
    }
    
    function handleMarking(changedData, upData){
        if(selectedTasks.length >= 1) {
            if(searching) 
                setFilteredTasks([...changedData]);

            setUpdateTasks([...upData]);
        }
    }

    function handleEditing(e) {
        setEditedValue(e.target.innerText)
    }

    const handleSearch = (e) => {
        if(searchValue.current.value == "") {
            setSearching(false)
        } else {
            setSearching(true)
            setFilteredTasks(tasks.filter((task) => task.task.toLowerCase().includes(searchValue.current.value.toLowerCase())))
            setSorting(false)
        }
    }

    function handleSelectedTasks(val){
        setSelectedTasks(val == null ? [] : [...val])
    }

    function handleOpenedTask(obj) {
        setOpenedTask(obj)
    }

    function handleIsSorting(){
        let data = sortOptions
        for(let i = 0; i < sortOptions.length; i++){
            if(data[i].state == true) {
                setSorting(true)
                break
            } else if(i==sortOptions.length - 1 && sortOptions[i].state == false) {
                setSorting(false)
            }
        }
    }
    
    function saveChanges(index){
        let task = tasks
        task[index].task = editedValue
        setUpdateTasks([...task])
    }

    const unselectAll = () => {
        let data = tasks
        let filtTasks = filteredTasks

        if(searching) {
            filtTasks = filtTasks.map(task => {
                return { ...task, isChecked: false }
            })

            handleSelectedTasks(null)
        } else {
            data = data.map(task => {
                return { ...task, isChecked: false };;
            }); 

            handleSelectedTasks(null)
        }


        if(!searching) {
            setUpdateTasks(prevCheckboxes => {
                return prevCheckboxes.map(task => {
                    return { ...task, isChecked: false };;
                });
            });
         } else {
            setFilteredTasks([...filtTasks])
         }
    };

    useEffect(() => {
        // Update parent component with changes
        setTasks([...updateTasks]);
        localStorage.setItem("dataTask", JSON.stringify(updateTasks))
    }, [ filteredTasks, updateTasks ]);

    useEffect(()=>{if(sorting != null){console.log(sorting)}},[sorting])

    return  (
        <>
            <div className={page == 2 ? s.Task_Wrapper : s.Hide_Task_Wrapper} id="Tasks">
                <TaskPrompt showTaskPrompt={showTaskPrompt} setShowTaskPrompt={setShowTaskPrompt} writeTask={(data)=>{writeTask(data)}}/>
                <div className={s.Tasks_Editor}>
                    <h2 className={s.Title_wrapper}>
                        Tasks 
                        <i className={`fa fa-bars`} onClick={()=>{showDropDown ? setShowDropDown(false) : setShowDropDown(true)}}></i>
                        <DropDown type={type} setType={(val)=>{setType(val)}} showDropDown={showDropDown} handleType={(val)=>{handleType(val)}} unselectAll={(val)=>{unselectAll(val)}}/>
                    </h2>
                    <OptionsTab 
                        optionTabNumber={optionTabNumber} 
                        updateTasks={updateTasks}
                        filteredTasks={filteredTasks} 
                        setShowTaskPrompt={(val)=>{setShowTaskPrompt(val)}}
                        searching={searching} 
                        setSearching={(val)=>setSearching(val)}
                        handleSearch={()=>{handleSearch()}}
                        selectedTask={selectedTasks}
                        handleMarking={(changeData, upData)=>{handleMarking(changeData, upData)}}
                        markAsPending={(val)=>{markAsPending(val)}}
                        unselectAll={()=>unselectAll()}
                        setBgColor={(val)=>setBgColor(val)}
                        setColor={(val)=>setColor(val)}
                        setShowSortPrompt={(val)=>{setShowSortPrompt(val)}}/>
                    
                    <div className={s.Search_wrapper}>
                        <div>
                            <label htmlFor="search-bar">
                                <i className={"fa fa-search"}></i>
                            </label>
                            <input
                                ref={searchValue}
                                id="search-bar"
                                type="text"
                                placeholder="Type Task..."
                                onChange={()=>{if(searchValue.current.value == "") {handleIsSorting(), handleSearch()}}}/>
                            <Button content={"Search"} className={s.Search_button} func={()=>{handleSearch(), handleIsSorting()}}/>
                        </div>
                    </div>
                    <BottomOptions 
                        selectedTask={selectedTasks} 
                        handleSelectedTasks={(val)=>handleSelectedTasks(val)} 
                        selectTask={selectTask} setSelectTask={setSelectTask} 
                        unselectAll={()=>{unselectAll()}} 
                        tasks={tasks} 
                        setTasks={(val)=>{setUpdateTasks(val)}}
                        filteredTasks={filteredTasks} 
                        setFilteredTasks={(val)=>{setFilteredTasks(val)}}
                        searching={searching}
                        setUpdateTasks={(val)=>setUpdateTasks(val)}
                        updateTasks={updateTasks}/>
                    <TasksContainer 
                        selectedTasks={selectedTasks} 
                        setSelectedTasks={()=>setSelectedTasks()} 
                        selectTask={selectTask} 
                        tasks={tasks} 
                        setTasks={(val)=>{setTasks(val)}} 
                        del={(i)=>{del(i)}} 
                        handleSelectedTasks={(val)=>handleSelectedTasks(val)}
                        filteredTask={filteredTasks} 
                        setFilteredTask={(val)=>{setFilteredTasks(val)}}
                        searching={searching}
                        handleOpenedTask={(obj)=>{handleOpenedTask(obj)}} 
                        openedTask={openedTask}
                        setShowTaskPrompt={(val)=>{setShowTaskPrompt(val)}}
                        editing={editing}
                        setEditing={(val)=>{setEditing(val)}}
                        setOpenedTask={(val)=>{setOpenedTask(val)}}
                        type={type} 
                        setSorting={(val)=>{setSorting(val)}}
                        sorting={sorting}
                        sortOptions={sortOptions}/>
                    <ViewTask 
                        openedTask={openedTask} 
                        setOpenedTask={(val)=>{setOpenedTask(val)}} 
                        tasks={tasks} 
                        taskEditingP={taskEditingP}
                        saveChanges={(changes, index)=>{saveChanges(changes, index)}} 
                        editing={editing}
                        filteredTask={filteredTasks}
                        searching={searching}
                        setEditing={(val)=>{setEditing(val)}}
                        handleEditing={(e)=>{handleEditing(e)}}
                        editedValue={editedValue}/>
                    <SortPrompt 
                        showSortPrompt={showSortPrompt}
                        setShowSortPrompt={(val)=>{setShowSortPrompt(val)}}
                        sortOptions={sortOptions}
                        setSortOptions={(val)=>{setSortOptions(val)}}
                        setSorting={(val)=>{setSorting(val)}}
                        sorting={sorting}/>
                </div>
            </div>
        </>
    )
}