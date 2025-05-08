import s from "./Bottom_Options.module.css"
import Button from "../../../Components/Button";
import { useDeferredValue, useEffect, useInsertionEffect, useState } from "react";


 
export const BottomOptions = ({ handleSelectedTasks, selectedTask, selectTask, setSelectTask, unselectAll, tasks, setTasks, searching, updateTasks, setUpdateTasks, filteredTasks, setFilteredTasks, handleMarking }) => {



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
                    if(filtTasks[i].isChecked) checkedFiltTasks.push({id: filtTasks[i].id, index: i})
                }
    
                handleSelectedTasks([...checkedFiltTasks])
            } else {
                data = data.map(task => {
                    return { ...task, isChecked: true };;
                });
    
                for(let i = 0; i < data.length; i ++) {
                    if(data[i].isChecked) checkedData.push({id: data[i].id, index: i})
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

    function del(){
        let prevData = tasks
        let data = tasks
        let filtTask = filteredTasks

        for(let i in filtTask) { //deleting selected filtered task
            for(let j in selectedTask) {
                if(filtTask[i].id === selectedTask[j].id) {
                    filtTask.splice(i, 1)
                }
            }
        }

        for(let i in tasks){ //deleting selected task from the original array
            for(let j in selectedTask) {
                if(data[i].id === selectedTask[j].id) {
                    data.splice(i, 1)
                }
            }
        }

        handleMarking(filtTask, [...data])
        handleSelectedTasks(null) //eliminates the id of tasks in the array called "selectedTasks"
    }

    const Options = () => {
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
    
    return (
        <>
            <div className={s.Bottom_Options}>
                <Options />               
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
