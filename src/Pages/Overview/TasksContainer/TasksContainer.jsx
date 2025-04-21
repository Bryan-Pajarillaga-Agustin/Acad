import { useEffect, useOptimistic, useRef, useState } from "react";
import Button from "../../../Components/Button";
import { Tasks } from "../Tasks";
import s from "./Tasks_Container.module.css"



const TasksContainer = ({ handleSelectedTasks, selectTask, tasks, setTasks, searching, filteredTask, setFilteredTask, setShowTaskPrompt, setOpenedTask, editing, setEditing, type }) => {

    // Use a local state to manage checkbox states efficiently
    const [taskCheckboxes, setTaskCheckboxes] = useState(tasks.map(task => ({ ...task, isChecked: false })));
    
    const handleCheckboxChange = (taskId) => {
        let data = tasks
        let checkedData = []
        data = data.map(task => {
            if (task.id === taskId) {
                return { ...task, isChecked: !task.isChecked ? true : false };
            }
            return task;
        });
        for(let i = 0; i < data.length; i++) {
            if(data[i].isChecked) {
                checkedData.push(data[i].id)
            }

            if(i == data.length - 1) {
                console.log(data)
                handleSelectedTasks(checkedData)
                checkedData = []
            }
        }
        setTasks(prevCheckboxes => {
            return prevCheckboxes.map(task => {
                if (task.id === taskId) {
                    return { ...task, isChecked: !task.isChecked ? true : false };
                }
                return task;
            });
        });
        if(searching) setFilteredTask(prevCheckboxes => {
            return prevCheckboxes.map(task => {
                if (task.id === taskId) {
                    return { ...task, isChecked: !task.isChecked ? true : false };
                }
                return task;
            });
        });
    };

    useEffect(()=>{
        setTaskCheckboxes([...tasks])
    }, [tasks])


    useEffect(()=>{
        console.log(selectTask)
    },[selectTask])

    useEffect(()=>{
        console.log(editing)
    },[editing])

    //COMPONENT 1 - task-wrapper and each task

    const EachList = () => {
        if(searching && filteredTask != null) {
            return <div className={s.Task_Container} key={"Task_Container"}>
                {filteredTask.map((task) => {
                    if(task.type === "pending" && type === "Pending") {
                        return <label htmlFor={"task" + task.id} className={`${s.Pending} ${s.tasks}`}  key={task.id} onDoubleClick={()=>{setEditing(true), setOpenedTask({index: i, isOpened: true})}}>
                                <i style={selectTask == false ? {display: "none"} : {display: "block"}} className={`fa fa-check-square ${task.isChecked ? s.checked : s.unchecked}`}></i>
                                <input
                                    style={{display: "none"}}
                                    type="checkbox"
                                    id={"task" + task.id}
                                    onChange={() => {selectTask ? handleCheckboxChange(task.id) : false}}
                                />
                                {task.task}
                            </label>
                    } else if(task.type === "finished" && type === "Finished") {
                        return <label htmlFor={"task" + task.id} className={`${s.Finished} ${s.tasks}`} key={task.id} onDoubleClick={()=>{setEditing(true), setOpenedTask({index: i, isOpened: true})}}>
                                <i style={selectTask == false ? {display: "none"} : {display: "block"}} className={`fa fa-check-square ${task.isChecked ? s.checked : s.unchecked}`}></i>
                                <input
                                    style={{display: "none"}}
                                    type="checkbox"
                                    id={"task" + task.id}
                                    onChange={() => {selectTask ? handleCheckboxChange(task.id) : false}}
                                />
                                {task.task}
                            </label>
                    } else if(type === "All Tasks") {
                        return <label htmlFor={"task" + task.id} className={task.type === "pending" ? `${s.Pending} ${s.tasks}` : `${s.Finished} ${s.tasks}`} key={task.id} >
                                <i style={selectTask == false ? {display: "none"} : {display: "block"}} className={`fa fa-check-square ${task.isChecked ? s.checked : s.unchecked}`}></i>
                                <input
                                    style={{display: "none"}}
                                    type="checkbox"
                                    id={"task" + task.id}
                                    onChange={() => {selectTask ? handleCheckboxChange(task.id) : false}}
                                />
                                {task.task}
                            </label>
                    }
                        
                })}
            </div>
        } else {
            return (
                <div className={s.Task_Container}>
                    {taskCheckboxes.map((task, i) => {
                        if(task.type === "pending" && type === "Pending") {
                            return (
                                <label htmlFor={"task" + task.id} className={`${s.Pending} ${s.tasks}`} key={task.id} onDoubleClick={()=>{setEditing(true), setOpenedTask({index: i, isOpened: true})}} >
                                    <i style={selectTask == false ? {display: "none"} : {display: "block"}} className={`fa fa-check-square ${task.isChecked ? s.checked : s.unchecked}`}></i>
                                    <input
                                        style={{display: "none"}}
                                        type="checkbox"
                                        id={"task" + task.id}
                                        onChange={() => {selectTask ? handleCheckboxChange(task.id) : false}}
                                    />
                                    {task.task}
                                </label>
                            )
                        } else if (task.type === "finished" && type === "Finished") {
                            return (
                                <label htmlFor={"task" + task.id} className={`${s.Finished} ${s.tasks}`} key={task.id} onDoubleClick={()=>{setEditing(true), setOpenedTask({index: i, isOpened: true})}} >
                                    <i style={selectTask == false ? {display: "none"} : {display: "block"}} className={`fa fa-check-square ${task.isChecked ? s.checked : s.unchecked}`}></i>
                                    <input
                                        style={{display: "none"}}
                                        type="checkbox"
                                        id={"task" + task.id}
                                        onChange={() => {selectTask ? handleCheckboxChange(task.id) : false}}
                                    />
                                    {task.task}
                                </label>
                            )
                        } else if (type === "All Tasks") {
                            return (
                                <label htmlFor={"task" + task.id} className={task.type === "pending" ? `${s.Pending} ${s.tasks}` : `${s.Finished} ${s.tasks}`} key={task.id} onDoubleClick={()=>{setEditing(true), setOpenedTask({index: i, isOpened: true})}} >
                                    <i style={selectTask == false ? {display: "none"} : {display: "block"}} className={`fa fa-check-square ${task.isChecked ? s.checked : s.unchecked}`}></i>
                                    <input
                                        style={{display: "none"}}
                                        type="checkbox"
                                        id={"task" + task.id}
                                        onChange={() => {selectTask ? handleCheckboxChange(task.id) : false}}
                                    />
                                    {task.task}
                                </label>
                            )
                        }
                    })}
                </div>
            )
        }
    }

    // COMPONENT 2 - full screen task overview


    // let dataTask = data

    if(taskCheckboxes != null) {
        return (
            <EachList />
        )
    }
}

export default TasksContainer
