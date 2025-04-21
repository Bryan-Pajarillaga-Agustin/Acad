import { useState, useEffect, useRef } from "react"
import TasksContainer from "./TasksContainer/TasksContainer"
import { BottomOptions } from "./BottomOptions/Bottom_Options"
import { DropDown } from "./DropDown/DropDown"
import { OptionsTab } from "./OptionsTab/OptionsTab"
import ViewTask from "./ViewTask/ViewTask"
import TaskPrompt from "./TaskPrompt/TaskPrompt"
import Button from "../../Components/Button"
import s from "../Overview/Tasks.module.css"
export const Tasks = ({page, showTaskPrompt, setShowTaskPrompt, setEditing, editing}) => {

    // Refs

    const searchValue = useRef(null)
    const taskEditingP = useRef(null)

    // Booleans

    const [selectTask, setSelectTask] = useState(false)
    const [searching, setSearching] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)

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
            date: null, 
            selected: false, 
            isChecked: false,
            type: "pending"
        }
        dataTask.unshift(newTask)
        localStorage.setItem("dataTask", JSON.stringify(dataTask))
        setUpdateTasks([...dataTask])
    }

    function markAsFinished(){
        if(selectedTasks.length >= 1) {
            setUpdateTasks(prevCheckboxes => {
                return prevCheckboxes.map(task => {
                    return { ...task, type: "finished" };;
                });
            });
        }
    }

    function handleEditing(e) {
        setEditedValue(e.target.innerText)
    }

    const handleSearch = () => {
        if(searchValue.current.value == "") {
            setSearching(false)
        } else {
            setSearching(true)
            setFilteredTasks(tasks.filter((task) => task.task.toLowerCase().includes(searchValue.current.value.toLowerCase())))
        }
    }

    const selectAll = () => {
        let data = tasks
        let filtTasks = filteredTasks
        let checkedData = []
        let checkedFiltTasks = []

        if(searching) {
            filtTasks = filtTasks.map(task => {
                return { ...task, isChecked: true }
            })

            for(let i = 0; i < filtTasks.length; i ++) {
                if(filtTasks[i].isChecked) checkedFiltTasks.push(filtTasks[i].id)
            }

            handleSelectedTasks([...checkedFiltTasks])
        } else {
            data = data.map(task => {
                return { ...task, isChecked: true };;
            });

            for(let i = 0; i < data.length; i ++) {
                if(data[i].isChecked) checkedData.push(data[i].id)
            }
            handleSelectedTasks([...checkedData])
        }

        if(!searching) {
            setUpdateTasks(prevCheckboxes => {
                return prevCheckboxes.map(task => {
                    return { ...task, isChecked: true };;
                });
            });
        } else {
            setFilteredTasks([...filtTasks])
        }
    };

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

    function handleSelectedTasks(val){
        setSelectedTasks(val == null ? [] : [...val])
    }

    function handleOpenedTask(obj) {
        setOpenedTask(obj)
    }
    
    function saveChanges(index){
        let task = tasks
        task[index].task = editedValue
        setUpdateTasks([...task])
    }

    useEffect(() => {
        // Update parent component with changes
        setTasks([...updateTasks]);
        localStorage.setItem("dataTask", JSON.stringify(updateTasks))
    }, [updateTasks]);

    return  (
        <>
            <div className={page == 2 ? s.Task_Wrapper : s.Hide_Task_Wrapper} id="Tasks">
                <TaskPrompt showTaskPrompt={showTaskPrompt} setShowTaskPrompt={setShowTaskPrompt} writeTask={(data)=>{writeTask(data)}}/>
                <div className={s.Tasks_Editor}>
                    <h2 className={s.Title_wrapper}>
                        Tasks 
                        <i className={`fa fa-bars`} onClick={()=>{showDropDown ? setShowDropDown(false) : setShowDropDown(true)}}></i>
                        <DropDown type={type} setType={(val)=>{setType(val)}} showDropDown={showDropDown} handleType={(val)=>{handleType(val)}}/>
                    </h2>
                    <OptionsTab 
                        optionTabNumber={optionTabNumber} 
                        setOptionTabNumber={(i)=>setOptionTabNumber(i)} 
                        setShowTaskPrompt={(val)=>{setShowTaskPrompt(val)}}
                        searchValue={searchValue} 
                        searching={searching} 
                        setSearching={(val)=>setSearching(val)}
                        handleSearch={()=>{handleSearch()}}
                        selectedTask={selectedTasks}
                        markAsFinished={()=>{markAsFinished()}}/>
                    
                    <div className={s.Search_wrapper}>
                        <div>
                            <label htmlFor="search-bar">
                                <i className={"fa fa-search"}></i>
                            </label>
                            <input
                                ref={searchValue}
                                id="search-bar"
                                type="text" 
                                placeholder={"Search Task"} 
                                onChange={()=>{handleSearch()}}/>
                            <Button content={"Search"} className={s.Search_button}/>
                        </div>
                    </div>
                    <BottomOptions 
                        selectedTask={selectedTasks} 
                        handleSelectedTasks={(val)=>handleSelectedTasks(val)} 
                        selectTask={selectTask} setSelectTask={setSelectTask} 
                        selectAll={()=>{selectAll()}} 
                        unselectAll={()=>{unselectAll()}} 
                        Tasks={tasks} 
                        setTasks={(val)=>{setUpdateTasks(val)}}
                        filteredTask={filteredTasks} 
                        setFilteredTask={(val)=>{setFilteredTasks(val)}}
                        searching={searching}/>
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
                        type={type} />
                    <ViewTask 
                        openedTask={openedTask} 
                        setOpenedTask={(val)=>{setOpenedTask(val)}} 
                        tasks={tasks} 
                        taskEditingP={taskEditingP}
                        saveChanges={(changes, index)=>{saveChanges(changes, index)}} 
                        editing={editing}
                        setEditing={(val)=>{setEditing(val)}}
                        handleEditing={(e)=>{handleEditing(e)}}
                        editedValue={editedValue}/>
                </div>
            </div>
        </>
    )
}