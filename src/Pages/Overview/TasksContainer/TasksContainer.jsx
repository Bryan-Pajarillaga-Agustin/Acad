import { useEffect, useOptimistic, useRef, useState } from "react";
import Button from "../../../Components/Button";
import { Tasks } from "../Tasks";
import s from "./Tasks_Container.module.css"



const TasksContainer = ({ handleSelectedTasks, selectTask, tasks, setTasks, searching, searchValue, setOpenedTask, filteredTask }) => {

    // Use a local state to manage checkbox states efficiently
    const [taskCheckboxes, setTaskCheckboxes] = useState(tasks.map(task => ({ ...task, isChecked: false })));
    
    const handleCheckboxChange = (taskId, unselect) => {
        let data = tasks
        let checkedData = []
        data = data.map(task => {
            if (task.id === taskId) {
                return { ...task, isChecked: !task.isChecked ? true : false };
            }
            return task;
        });
        console.log(data)
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
    };

    

    useEffect(()=>{
        setTaskCheckboxes([...tasks])
    }, [tasks])


    useEffect(()=>{
        console.log(filteredTask)
    },[filteredTask])

    //Component

    const EachList = () => {
        
        
        
        if(searching && filteredTask != null) {
            return <div className={s.Task_Container}>
                {filteredTask.map((task) => {
                    return <label htmlFor={"task" + task.id} className={s.tasks} key={task.id} onDoubleClick={()=>{}} >
                                <i style={selectTask == false ? {display: "none"} : {display: "block"}} className={`fa fa-check-square ${task.isChecked ? s.checked : s.unchecked}`}></i>
                                <input
                                    style={{display: "none"}}
                                    type="checkbox"
                                    id={"task" + task.id}
                                    onChange={() => {selectTask ? handleCheckboxChange(task.id) : false}}
                                />
                                {task.task}
                            </label>
                        
                })}
            </div>
        } else {
            return (
                <div className={s.Task_Container}>
                    {taskCheckboxes.map((task) => (
                        <label htmlFor={"task" + task.id} className={s.tasks} key={task.id} onDoubleClick={()=>{}} >
                            <i style={selectTask == false ? {display: "none"} : {display: "block"}} className={`fa fa-check-square ${task.isChecked ? s.checked : s.unchecked}`}></i>
                            <input
                                style={{display: "none"}}
                                type="checkbox"
                                id={"task" + task.id}
                                onChange={() => {selectTask ? handleCheckboxChange(task.id) : false}}
                            />
                            {task.task}
                        </label>
                    ))}
                </div>
            )
        }
    }

    // let dataTask = data

    if(taskCheckboxes != null) {
        return (
        <EachList />
            
        );
    }
}

export default TasksContainer
