import { useEffect, useRef } from "react";
import Button from "../../../Components/Button";
import s from "./ViewTask.module.css"
import { db } from "../../../Firebase/Firebase";
import { doc, updateDoc } from "firebase/firestore";
const ViewTask = ({ openedTask, setOpenedTask, tasks, setEditing, editing, user, setUpdateTask }) => {
    
    const editingParagraph = useRef(null)

    const handleEdit = async () => {
        const docRef = doc(db, "Users", user?.uid)

        try {
            await updateDoc(docRef, {tasks: data})
            setUpdateTask(prev => {
                return prev.map((task)=>{
                    if (task.id === openedTask.id) {
                        return {...task, task: editingParagraph.current.innerText}
                    } else {
                        return {...task}
                    }
                })
            })
        } catch (error) {}

    }

    return (
        <div className={editing ? s.Task_View : s.Hide_Task_View}>
            <div className={s.nav}>
                <h3><i className="fa fa-edit"></i> <span>Edit Task</span></h3>
                <Button icon={(<i className="fa fa-times"></i>)}
                        func={()=>{setOpenedTask({index: null, isOpened: false}), setEditing(false)}}
                        />
            </div>
            <div className={s.content}>
                
                <p ref={editingParagraph} contentEditable={editing}>{tasks.map((task,i)=>{ if(task.id === openedTask.id) { return task.task}})}</p>
                {/* {
                    searching ? :
                    <p ref={taskEditingP} onInput={(e)=>{handleEditing(e)}} contentEditable={true}>{openedTask.isOpened ? tasks[openedTask.index].task : null}</p>
                } */}
                
            </div>
            <Button content={"Save Changes"}
                    className={s.submitButton}
                    func={()=>{setEditing(false), handleEdit()}}/>
        </div>
    )
}

export default ViewTask