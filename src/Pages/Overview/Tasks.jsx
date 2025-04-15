import { useState, useEffect, useRef } from "react"
import TasksContainer from "./TasksContainer/TasksContainer"
import { BottomOptions } from "./BottomOptions/Bottom_Options"
import { OptionsTab } from "./OptionsTab/OptionsTab"
import TaskPrompt from "./TaskPrompt/TaskPrompt"
import s from "../Overview/Tasks.module.css"
export const Tasks = ({page, showTaskPrompt, setShowTaskPrompt}) => {

    // Refs

    const searchValue = useRef(null)

    // Booleans

    const [selectTask, setSelectTask] = useState(false)
    const [searching, setSearching] = useState(false)

    // Data Variables

    const [selectedTasks, setSelectedTasks] = useState([])
    const [updateSelectedTasks, setUpdatedSelectedTasks] = useState([])
    const [optionTabNumber, setOptionTabNumber] = useState(1)
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("dataTask")) != null ? JSON.parse(localStorage.getItem("dataTask")) : [])
    const [updateTasks, setUpdateTasks] = useState(tasks.map(task => ({ ...task, isChecked: false })));
    const [filteredTasks, setFilteredTasks] = useState(null)
    function writeTask(data){
        let dataTask = tasks
        let letters = "qwertyuiopasdfghjklzxcvbnm"
        let randId = ""
        for(let i = 0; i < 10; i++){
            let random = Math.floor(Math.random()*(letters.length - 1))
            randId = randId.concat(letters[random])
        }
        let newTask = { id: randId, task: data, date: null, selected: false, isChecked: false }
        dataTask.unshift(newTask)
        localStorage.setItem("dataTask", JSON.stringify(dataTask))
        setUpdateTasks([...dataTask])
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
        let checkedData = []
        data = data.map(task => {
            return { ...task, isChecked: true };;
        });
        console.log(data)
        for(let i = 0; i < data.length; i++) {
            if(data[i].isChecked) {
                checkedData.push(data[i].id)
            }

            if(i == data.length - 1) {
                handleSelectedTasks(checkedData)
                checkedData = []
            }
        }

        setUpdateTasks(prevCheckboxes => {
            return prevCheckboxes.map(task => {
                return { ...task, isChecked: true };;
            });
        });
    };

    const unselectAll = () => {
        let data = tasks
        data = data.map(task => {
            return { ...task, isChecked: false };;
        });
        handleSelectedTasks(null)

        setUpdateTasks(prevCheckboxes => {
            return prevCheckboxes.map(task => {
                return { ...task, isChecked: false };;
            });
        });
    };

    function handleSelectedTasks(val){
        setSelectedTasks(val == null ? [] : [...val])
        setUpdatedSelectedTasks(val == null ? [] : [...val])
    }

    useEffect(() => {
        // Update parent component with changes
        setTasks([...updateTasks]);
    }, [updateTasks]);

    return  (
        <>
            <div className={page == 2 ? s.Task_Wrapper : s.Hide_Task_Wrapper} id="Tasks">
                <TaskPrompt showTaskPrompt={showTaskPrompt} setShowTaskPrompt={setShowTaskPrompt} writeTask={(data)=>{writeTask(data)}}/>
                <div className={s.Tasks_Editor}>
                    <h2 className={s.Title_wrapper}>Tasks</h2>
                    <OptionsTab 
                        optionTabNumber={optionTabNumber} 
                        setOptionTabNumber={(i)=>setOptionTabNumber(i)} 
                        setShowTaskPrompt={(val)=>{setShowTaskPrompt(val)}}
                        searchValue={searchValue} 
                        searching={searching} 
                        setSearching={(val)=>setSearching(val)}
                        handleSearch={()=>{handleSearch()}}/>
                    <BottomOptions 
                        selectedTask={selectedTasks} 
                        handleSelectedTasks={(val)=>handleSelectedTasks(val)} 
                        selectTask={selectTask} setSelectTask={setSelectTask} 
                        selectAll={()=>{selectAll()}} 
                        unselectAll={()=>{unselectAll()}} 
                        Tasks={tasks} 
                        setTasks={(val)=>{setUpdateTasks(val)}}/>
                    <TasksContainer 
                        selectedTasks={selectedTasks} 
                        setSelectedTasks={()=>setSelectedTasks()} 
                        data={Tasks} 
                        selectTask={selectTask} 
                        tasks={tasks} 
                        setTasks={(val)=>{setTasks(val)}} 
                        del={(i)=>{del(i)}} 
                        handleSelectedTasks={(val)=>handleSelectedTasks(val)}
                        filteredTask={filteredTasks} 
                        searching={searching}
                        setOpenedTask={()=>{setOpenedTask}} />
                </div>
            </div>
        </>
    )
}