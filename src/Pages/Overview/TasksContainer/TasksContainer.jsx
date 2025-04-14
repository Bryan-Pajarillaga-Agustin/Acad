import { useEffect, useOptimistic, useRef, useState } from "react";
import Button from "../../../Components/Button";
import { Tasks } from "../Tasks";
import s from "./Tasks_Container.module.css"



const TasksContainer = ({ selectTask, tasks, updateTask }) => {

    // Use a local state to manage checkbox states efficiently
    const [taskCheckboxes, setTaskCheckboxes] = useState(tasks.map(task => ({ ...task, isChecked: false })));
    const [data, setData] = useState(tasks) 
    
    const handleCheckboxChange = (taskId) => {
        setTaskCheckboxes(prevCheckboxes => {
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

    if(taskCheckboxes != null) return (
        <div className={s.Task_Container}>
            {taskCheckboxes.map((task) => (
                <label htmlFor={"task" + task.id} className={s.tasks} key={task.id} >
                    <i style={selectTask == false ? {display: "none"} : {display: "block"}} className={`fa fa-check-square ${task.isChecked ? s.checked : s.unchecked}`}></i>
                    <input
                        style={{display: "none"}}
                        type="checkbox"
                        id={"task" + task.id}
                        checked={task.isChecked}
                        contentEditable={true}
                        onClick={() => handleCheckboxChange(task.id)}
                    />
                    {task.task}
                </label>
            ))}
        </div>
    );
}

export default TasksContainer
