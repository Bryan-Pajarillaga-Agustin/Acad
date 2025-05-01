import { useEffect, useOptimistic, useRef, useState } from "react";
import Button from "../../../Components/Button";
import { Tasks } from "../Tasks";
import s from "./Tasks_Container.module.css"



const TasksContainer = ({ handleSelectedTasks, selectTask, tasks, setTasks, searching, filteredTask, setFilteredTask, setOpenedTask, setEditing, type, sorting, sortOptions }) => {

    // Use a local state to manage checkbox states efficiently
    const [taskCheckboxes, setTaskCheckboxes] = useState(tasks.map(task => ({ ...task, isChecked: false })));
    
    function handleCheckboxChange (taskId) {
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
                checkedData.push({id: data[i].id, index: i})
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

    //COMPONENT 1 - task-wrapper and each task

    const EachList = () => {
        if(searching && filteredTask != null) {
            return <div className={s.Task_Container} key={"Task_Container"}>
                {filteredTask.map((task, i) => {
                    if(task.type === "pending" && type === "Pending") {
                        return <TaskElement task={task} i={i} key={task.id}/>
                    } else if(task.type === "finished" && type === "Finished") {
                         return <TaskElement task={task} i={i} key={task.id}/>
                    } else if(type === "All Tasks") {
                        return <TaskElement task={task} i={i} key={task.id}/>
                    } 
                })}
            </div>
        } else if (sorting && !searching) {
            let sortedTasks = taskCheckboxes
            return <div className={s.Task_Container}>
                {sortOptions.map((ea, i)=>{
                     if(i == 0 && sortOptions[i].state == true) {
                        sortedTasks = sortedTasks.sort((a, b)=>{ return b.dateCreated.time - a.dateCreated.time })
                        return sortedTasks.map((task, i)=>{
                            return <TaskElement task={task} i={i} key={task.id}/>
                        })
                    } else if(i == 1 && sortOptions[i].state == true) {
                        sortedTasks = sortedTasks.sort((a, b)=>{ return a.dateCreated.time - b.dateCreated.time })
                        return sortedTasks.map((task, i)=>{
                            return <TaskElement task={task} i={i} key={task.id}/>
                        })
                    } else if(i == 2 && sortOptions[i].state == true){
                        sortedTasks = sortedTasks.sort((a, b)=>{ return a.task.localeCompare(b.task)})
                        return sortedTasks.map((task, i)=>{
                            return <TaskElement task={task} i={i} key={task.id}/>
                        })
                    } else if(i == 3 && sortOptions[i].state == true) {
                        sortedTasks = sortedTasks.sort((a, b)=>{ return b.task.localeCompare(a.task)})
                        return sortedTasks.map((task, i)=>{
                            return <TaskElement task={task} i={i} key={task.id}/>
                        })
                    } 
                })}
            </div>
        } else if(!sorting && !searching) {
            return (
                <div className={s.Task_Container}>
                    {taskCheckboxes.map((task, i) => {
                        if(task.type === "pending" && type === "Pending") {
                            return <TaskElement task={task} i={i} key={task.id}/>
                        } else if (task.type === "finished" && type === "Finished") {
                            return <TaskElement task={task} i={i} key={task.id}/>
                        } else if (type === "All Tasks") {
                            return <TaskElement task={task} i={i} key={task.id}/>
                        }
                    })}
                </div>
            )
        } 
    } 

    // COMPONENT 2 - Task Element

    const TaskElement = ({task, i}) => {
        return <label htmlFor={"task" + task.id} style={task.style != "default" ? {...task.style} : null} className={task.type == "pending" ? `${s.Pending} ${task.cName.map((ea)=>{return JSON.parse(ea)}).join(' ')} ${s.tasks}` : `${s.Finished} ${task.cName.map((ea)=>{return JSON.parse(ea)}).join(' ')} ${s.tasks}`}  key={task.id} onDoubleClick={()=>{setEditing(true), setOpenedTask({id: task.id, isOpened: true})}}>
                    <i style={selectTask == false ? {display: "none"} : {display: "block"}} className={`fa fa-check-square ${task.isChecked === true ? s.checked : s.unchecked}`}></i>
                    <input
                        style={{display: "none"}}
                        type="checkbox"
                        id={"task" + task.id}
                        onChange={() => {selectTask ? handleCheckboxChange(task.id) : false}}
                    />
                    {task.task}
                </label>
    }


    // let dataTask = data

    if(taskCheckboxes != null) {
        return (
            <EachList />
        )
    }
}

export default TasksContainer
