import { useEffect, useOptimistic, useRef, useState } from "react";
import Button from "../../../Components/Button";
import { Tasks } from "../Tasks";
import s from "./Tasks_Container.module.css"



const TasksContainer = ({ handleSelectedTasks, selectTask, tasks, setTasks, searching, searchValue, setOpenedTask }) => {

    // Use a local state to manage checkbox states efficiently
    const [taskCheckboxes, setTaskCheckboxes] = useState(tasks.map(task => ({ ...task, isChecked: false })));
    
    const handleCheckboxChange = (taskId) => {
        let data = tasks
        console.log(taskId)
        data = data.map(task => {
            if (task.id === taskId) {
                return { ...task, isChecked: !task.isChecked ? true : false };
            }
            return task;
        });
        console.log(data)
        for(let i = 0; i < data.length; i++) {
            if(data[i].isChecked) {
                handleSelectedTasks(taskId)
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



    //Component

    const EachList = () => {
        if(searching) {
            return (<>
                {taskCheckboxes.filter((task)=>{
                    return searchValue.current.value.toLowerCase() === task ? 
                    task : task.task.toLowerCase().includes(searchValue.current.value) 

                }).map((task) => {
                    if(task) {
                        return (<>
                            <label htmlFor={"task" + task.id} className={s.tasks} key={task.id} onDoubleClick={()=>{openedTask()}} >
                                <i style={selectTask == false ? {display: "none"} : {display: "block"}} className={`fa fa-check-square ${task.isChecked ? s.checked : s.unchecked}`}></i>
                                <input
                                    defaultChecked={true}
                                    style={{display: "none"}}
                                    type="checkbox"
                                    id={"task" + task.id}
                                    checked={task.isChecked ? true : false}
                                    contentEditable={true}
                                    onClick={() => {selectTask ? handleCheckboxChange(task.id) : false}}
                                />
                                {task.task}
                            </label>
                        </>)
                    }
                })}
            </>)
        } else {
            return (<>
                {taskCheckboxes.map((task) => (
                    <label htmlFor={"task" + task.id} className={s.tasks} key={task.id} onDoubleClick={()=>{setOpenedTask()}} >
                        <i style={selectTask == false ? {display: "none"} : {display: "block"}} className={`fa fa-check-square ${task.isChecked ? s.checked : s.unchecked}`}></i>
                        <input
                            defaultChecked={true}
                            style={{display: "none"}}
                            type="checkbox"
                            id={"task" + task.id}
                            checked={task.isChecked ? true : false}
                            contentEditable={true}
                            onClick={() => {selectTask ? handleCheckboxChange(task.id) : false}}
                        />
                        {task.task}
                    </label>
                ))}
            </>)
        }
    }

    // let dataTask = data

    if(taskCheckboxes != null) {
        return (
            <div className={s.Task_Container}>
                <EachList />
            </div>
        );
    }
}

export default TasksContainer
