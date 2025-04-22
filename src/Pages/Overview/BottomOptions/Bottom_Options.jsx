import s from "./Bottom_Options.module.css"
import Button from "../../../Components/Button";
import { useEffect, useState } from "react";

const Options = ({selectedTask, selectTask, setSelectTask, selectAll, unselectAll}) => {
    if (selectTask == true) {
        return (
            <>
                <div className={s.toLeft}>
                    
                <Button content={(<span> Select All</span>)}
                        icon={(<i className="fa fa-check"></i>)}
                        className={s.SelectAllButton}
                        func={()=>{selectAll()}}/>
                <Button content={(<span> Unselect All</span>)}
                        icon={(<i className={`fas fa fa-check ${s.Unchecked}`}></i>)}
                        className={s.UnselectAllButton}
                        func={()=>{unselectAll()}}/>
                </div>
            </>
        )
    } else {
        return (
            <>
                <Button content={"Select"}
                        icon={(<i className="fa fa-hand-o-up"></i>)} 
                        className={s.SelectButton}
                        func={()=>setSelectTask(true)}/>
            </>
        )
    }
}
 
export const BottomOptions = ({ handleSelectedTasks, selectedTask, selectTask, setSelectTask, Tasks, setTasks, selectAll, unselectAll, searching, filteredTask, setFilteredTask }) => {
    
    const del = () => {
        let data = Tasks
        let filtTask = filteredTask

        for(let i in filtTask) { //deleting selected filtered task
            for(let j in selectedTask) {
                if(filtTask[i].id === selectedTask[j].id) {
                    filtTask.splice(i, 1)
                }
            }
        }

        for(let i in Tasks){ //deleting selected task from the original array
            for(let j in selectedTask) {
                if(data[i].id === selectedTask[j].id) {
                    data.splice(i, 1)
                }
            }
        }
        
        localStorage.setItem("dataTask", JSON.stringify(data))
        setTasks([...data])
        if(searching) setFilteredTask([...filtTask])
        handleSelectedTasks(null) //eliminates the id of tasks in the array called "selectedTasks"
    }

    
    
    return (
        <>
            <div className={s.Bottom_Options}>
                <Options selectTask={selectTask}
                         setSelectTask={(val)=>setSelectTask(val)}
                         Tasks={Tasks} 
                         setTasks={(val)=>{setTasks(val)}}
                         selectAll={()=>selectAll()}
                         unselectAll={()=>unselectAll()}/>               
                <div className={selectTask == true ? s.toRight : s.hide}>
                    <Button icon={(<i className="fa fa-trash"></i>)}
                            content={" Delete"}
                            func={(i)=>{selectTask ? del() : console.log("No update")}}/>
                    <Button icon={(
                        <i className="fa fa-close"></i>)}
                            content={" Cancel"}
                            func={()=>{setSelectTask(false), unselectAll()}}/>
                </div>
            </div>
        </>
    )
}
