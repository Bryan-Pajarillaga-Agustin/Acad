import { useEffect } from "react";
import Button from "../../../Components/Button";
import s from "./ViewTask.module.css"

const ViewTask = ({ openedTask, setOpenedTask, filteredTask ,searching, tasks, taskEditingP, saveChanges, handleEditing, setEditing, editing }) => {
    useEffect(()=>{if(openedTask)console.log(openedTask)},[openedTask])
    if(filteredTask != null) return (
        <div className={editing ? s.Task_View : s.Hide_Task_View}>
            <div className={s.nav}>
                <h3><i className="fa fa-edit"></i> <span>Edit Task</span></h3>
                <Button icon={(<i className="fa fa-times"></i>)}
                        func={()=>{setOpenedTask({index: null, isOpened: false}), setEditing(false)}}
                        />
            </div>
            <div className={s.content}>
                {
                    searching ?
                    <p ref={taskEditingP} onInput={(e)=>{handleEditing(e)}} contentEditable={true}>{openedTask.isOpened ? filteredTask[openedTask.index].task : null}</p> :
                    <p ref={taskEditingP} onInput={(e)=>{handleEditing(e)}} contentEditable={true}>{openedTask.isOpened ? tasks[openedTask.index].task : null}</p>
                }
                
            </div>
            <Button content={"Save Changes"}
                    className={s.submitButton}
                    func={()=>{saveChanges(openedTask.index), setEditing(false)}}/>
        </div>
    )
}

export default ViewTask