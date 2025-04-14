import s from "./Bottom_Options.module.css"
import Button from "../../../Components/Button";
import { useEffect, useState } from "react";

const Options = ({selectedTask, selectTask, setSelectTask, selectAll, unselectAll}) => {
    if (selectTask == true) {
        return (
            <>
                <div className={s.toLeft}>
                    
                <Button content={(<span> Select All</span>)}
                        icon={(<i className="fas fa-check-square"></i>)}
                        className={s.SelectAllButton}
                        func={()=>{selectAll()}}/>
                <Button content={(<span> Unselect All</span>)}
                        icon={(<i className="fas fa-square"></i>)}
                        className={s.UnselectAllButton}
                        func={()=>{unselectAll()}}/>
                </div>
            </>
        )
    } else {
        return (
            <>
                <Button content={"Select"}
                        icon={(<i className='far fa-hand-point-up'></i>)} 
                        className={s.SelectButton}
                        func={()=>setSelectTask(true)}/>
            </>
        )
    }
}
 
export const BottomOptions = ({ selectTask, setSelectTask, Tasks, setTasks, selectAll, unselectAll }) => {
    
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
                    <Button icon={(<i className="fa fa-trash-alt"></i>)}
                                    content={" Delete"}/>
                    <Button icon={(
                        <i className="fa fa-close"></i>)}
                            content={" Cancel"}
                            func={()=>{setSelectTask(false), unselectAll()}}/>
                </div>
            </div>
        </>
    )
}
