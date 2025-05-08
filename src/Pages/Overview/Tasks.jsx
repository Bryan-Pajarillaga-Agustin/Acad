import { useState, useEffect, useRef } from "react"
import TasksContainer from "./TasksContainer/TasksContainer"
import { BottomOptions } from "./BottomOptions/Bottom_Options"
import { DropDown } from "./DropDown/DropDown"
import { OptionsTab } from "./OptionsTab/OptionsTab"
import ViewTask from "./ViewTask/ViewTask"
import TaskPrompt from "./TaskPrompt/TaskPrompt"
import SortPrompt from "./SortPrompt/SortPrompt"
import Changes from "./ChangesPrompt/Changes"
import Button from "../../Components/Button"
import s from "../Overview/Tasks.module.css"
import styles from "./TasksContainer/Tasks_Container.module.css"
import { auth } from "../../Firebase/Firebase"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../../Firebase/Firebase"
import Loading from "../../Components/Loading"
export const Tasks = ({page, paging, setPage, setPaging, setEditing, editing, user, getTask, setShowNavbar, setShowSaveChanges, showSaveChanges, setLoading }) => {

    // LocalStorage

    const loc = JSON.parse(localStorage.getItem("Changes"))

    // Refs

    const searchValue = useRef(null)

    // Booleans

    const [selectTask, setSelectTask] = useState(false)
    const [searching, setSearching] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)
    const [sorting, setSorting] = useState(false)
    
    const [showSortPrompt, setShowSortPrompt] = useState(false)
    const [showTaskPrompt, setShowTaskPrompt] = useState(false)
    // Data Variables

    const [selectedTasks, setSelectedTasks] = useState([])
    const [optionTabNumber, setOptionTabNumber] = useState(1)

    // Strings

    const [type, setType] = useState("Pending")

    // Arrays & objects

    const [tasks, setTasks] = useState(getTask)
    const [numberOfChanges, setNumberOfChanges] = useState(loc ? loc.length - 1 : null)
    const [updateTasks, setUpdateTasks] = useState(tasks.map(task => ({ ...task, isChecked: false })));
    const [filteredTasks, setFilteredTasks] = useState(null)
    const [openedTask, setOpenedTask] = useState({index: null, isOpened: false})
    const [editedValue, setEditedValue] = useState(null)
    const [sortOptions, setSortOptions] = useState([
        {description: "Newest to Oldest", state: false},
        {description: "Oldest to Newest", state: false},
        {description: "From A-Z", state: false},
        {description: "From Z-A", state: false},
    ])

    // Array Of styles for each task

    function handleType(){
        setShowDropDown(false)
    }

    const writeTask = async (data) => {
        let dataTask = [...tasks]; // Assuming 'tasks' is an array in your component state
        const userUID = user.uid?.toString(); // Get the user UID
        const docRef = doc(db, "Users", userUID); // Correctly create a document reference
    
    
        let letters = "qwertyuiopasdfghjklzxcvbnm";
        let randId = "";
        for (let i = 0; i < 10; i++) {
            let random = Math.floor(Math.random() * (letters.length)); //Corrected random number generation
            randId = randId.concat(letters[random]);
        }
        let newTask = {
            id: randId,
            task: data,
            dateCreated: { fullDate: new Date(), time: Date.now() },
            selected: false,
            style: "default",
            cName: [
                JSON.stringify(styles.col),
                JSON.stringify(styles.br),
                JSON.stringify(styles.fs),
                JSON.stringify(styles.bgC),
                JSON.stringify(styles.fW),
            ],
            isChecked: false,
            type: "pending",
        };
    
        dataTask.unshift(newTask);
        try {
            await updateDoc(docRef, {
                tasks: arrayUnion(newTask), // Directly add the newTask
            });
            setShowTaskPrompt(false);
            //  Update state with the new task.  Don't rely on docSnap.Tasks, which might be outdated.
            setUpdateTasks([...dataTask]);  //Update from local state after successful write
    
        } catch (error) {
            console.log("Error writing task:", error);
        }
    };
    
    function handleMarking(filtData, upData, prevData){
        const locStor = JSON.parse(localStorage.getItem("Changes")) != null ?
        JSON.parse(localStorage.getItem("Changes")) : []
        if(locStor.length == 0) { 
            locStor.push(updateTasks)
        }
        if(locStor.length >= 1) {
            locStor.push(upData)
        }
        localStorage.setItem("Changes", JSON.stringify(locStor))
        console.log(JSON.parse(localStorage.getItem("Changes")))
        setNumberOfChanges(locStor.length - 1)
        if(selectedTasks.length >= 1) { //Updates the UI in the client-server
            if(searching) 
                setFilteredTasks([...filtData]);

            setUpdateTasks([...upData]);
        }
    }

    function handleSearch() {
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
        setFilteredTasks([...updateTasks.filter((task) => task.task.toLowerCase().includes(searchValue.current.value.toLowerCase()))])
    }, [ updateTasks ]);

    useEffect(()=>{if(getTask?.tasks){setUpdateTasks(getTask.tasks)}},[getTask])

    useEffect(()=>{
        const locStor = JSON.parse(localStorage.getItem("Changes"))

        if(locStor?.length >= 2) {
            setShowSaveChanges(true)
            setShowNavbar(false)
        }
    },[])

    useEffect(()=>{
        console.log(selectedTasks)
    },[selectedTasks])

    if(page == 2) return  (
        <>
            <div className={page == 2 ? s.Task_Wrapper : s.Hide_Task_Wrapper} id="Tasks">
                <TaskPrompt showTaskPrompt={showTaskPrompt} setShowTaskPrompt={setShowTaskPrompt} writeTask={(data)=>{writeTask(data)}} setShowNavbar={val=>setShowNavbar(val)}/>
                <div className={s.Tasks_Editor}>
                    <h2 className={s.Title_wrapper}>
                        Tasks 
                        <i className={`fa fa-bars`} onClick={()=>{showDropDown ? setShowDropDown(false) : setShowDropDown(true)}}></i>
                        <DropDown 
                                   type={type} 
                                   setType={(val)=>{setType(val)}} 
                                   showDropDown={showDropDown} 
                                   handleType={(val)=>{handleType(val)}} 
                                   unselectAll={(val)=>{unselectAll(val)}}
                                   setSortOptions={(val)=>{setSortOptions(val)}}
                                   setSorting={(val)=>{setSorting(val)}} />
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
                        handleMarking={(changeData, upData, prevData)=>{handleMarking(changeData, upData, prevData)}}
                        markAsPending={(val)=>{markAsPending(val)}}
                        unselectAll={()=>unselectAll()}
                        setBgColor={(val)=>setBgColor(val)}
                        setColor={(val)=>setColor(val)}
                        setShowSortPrompt={(val)=>{setShowSortPrompt(val)}}
                        numberOfChanges={numberOfChanges}
                        setNumberOfChanges={(val)=>setNumberOfChanges(val)}
                        user={user}
                        setUpdateTask={(val)=>{setUpdateTasks(val)}}
                        setShowNavbar={val=>setShowNavbar(val)}
                        setLoading={val=>setLoading(val)} />
                    
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
                        updateTasks={updateTasks}
                        handleMarking={(changeData, upData, prevData)=>{handleMarking(changeData, upData, prevData)}} />
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
                        filteredTasks={filteredTasks}
                        saveChanges={(changes, index)=>{saveChanges(changes, index)}} 
                        editing={editing}
                        searching={searching}
                        setEditing={(val)=>{setEditing(val)}}
                        editedValue={editedValue}
                        user={user}
                        setUpdateTask={(val)=>{setUpdateTasks(val)}}
                        setShowNavbar={(val)=>{setShowNavbar(val)}}
                        setLoading={val=>setLoading(val)}
                        handleMarking={(val, tasks)=>handleMarking(val, tasks)} />
                    <SortPrompt 
                        showSortPrompt={showSortPrompt}
                        setShowSortPrompt={(val)=>{setShowSortPrompt(val)}}
                        sortOptions={sortOptions}
                        setSortOptions={(val)=>{setSortOptions(val)}}
                        setSorting={(val)=>{setSorting(val)}}
                        sorting={sorting}
                        setShowNavbar={(val)=>{setShowNavbar(val)}} />
                    <Changes 
                        showSaveChanges={showSaveChanges}
                        numberOfChanges={numberOfChanges}
                        setNumberOfChanges={(val)=>setNumberOfChanges(val)}
                        user={user}
                        setUpdateTask={(val)=>{setUpdateTasks(val)}}
                        setPaging={(val)=>{setPaging(val)}}
                        paging={paging}
                        setPage={(val)=>{setPage(val)}}
                        setShowSaveChanges={(val)=>{setShowSaveChanges(val)}}
                        setShowNavbar={(val)=>{setShowNavbar(val)}}
                        setLoading={val=>setLoading(val)} />
                </div>
            </div>
        </>
    )
}