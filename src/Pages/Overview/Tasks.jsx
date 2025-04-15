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

    function writeTask(data){
        let dataTask = tasks
        let letters = "qwertyuiopasdfghjklzxcvbnm"
        let randId = ""
        for(let i = 0; i < 10; i++){
            let random = Math.floor(Math.random()*(letters.length - 1))
            randId = randId.concat(letters[random])
        }
        let newTask = { id: randId, task: data, date: null, selected: false }
        dataTask.unshift(newTask)
        localStorage.setItem("dataTask", JSON.stringify(dataTask))
        setUpdateTasks([...dataTask])
    }

    const search = () => {
    }

    const selectAll = () => {
        
        let data = tasks
        data = data.map(task => {
            return { ...task, isChecked: true };;
        });
        console.log(data)
        for(let i = 0; i < data.length; i++) {
            if(data[i].isChecked) {
                handleSelectedTasks(data[i].id)
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
        console.log(data)
        for(let i = 0; i < data.length; i++) {
            if(!data[i].isChecked) {
                handleSelectedTasks(null)
            }
        }

        setUpdateTasks(prevCheckboxes => {
            return prevCheckboxes.map(task => {
                return { ...task, isChecked: false };;
            });
        });
    };

    function handleSelectedTasks(val){
        setSelectedTasks(val == null ? [] : prev=>[...prev, val])
        setUpdatedSelectedTasks(val == null ? [] : prev=>[...prev, val])
    }

    useEffect(() => {
        // Update parent component with changes
        setTasks([...updateTasks]);
    }, [updateTasks]);

    
    useEffect(()=>{
        if(searchValue.current.value == "") {
            console.log("not")
        } else {
            console.log(searching, searchValue.current.value)
        }
    },[searching])

    return  (
        <>
            <div className={page == 2 ? s.Task_Wrapper : s.Hide_Task_Wrapper} id="Tasks">
                <TaskPrompt showTaskPrompt={showTaskPrompt} setShowTaskPrompt={setShowTaskPrompt} writeTask={(data)=>{writeTask(data)}}/>
                <div className={s.Tasks_Editor}>
                    <h2 className={s.Title_wrapper}>Tasks</h2>
                    <OptionsTab 
                        search={search} 
                        optionTabNumber={optionTabNumber} 
                        setOptionTabNumber={(i)=>setOptionTabNumber(i)} 
                        setShowTaskPrompt={(val)=>{setShowTaskPrompt(val)}}
                        searchValue={searchValue} 
                        searching={searching} 
                        setSearching={(val)=>setSearching(val)}/>
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
                        searchValue={searchValue} 
                        searching={searching}
                        setOpenedTask={()=>{setOpenedTask}} />
                </div>
            </div>
        </>
    )
}