import { useEffect, useRef } from "react";
import Button from "../../../Components/Button";
import s from "./ViewTask.module.css"
import { db } from "../../../Firebase/Firebase";
import { doc, updateDoc } from "firebase/firestore";
const ViewTask = ({ openedTask, setOpenedTask, tasks, filteredTasks, setEditing, editing, user, handleMarking, setShowNavbar, setLoading }) => {
    
    const editingParagraph = useRef(null)

    function handleEdit(){
        let data = [...tasks]
        let filtTasks = filteredTasks
        for(let i in data) {
            if (data[i].id === openedTask.id) {
                data[i].task = editingParagraph.current.innerText
            } 
    
        }

        for(let i in filtTasks) {
            if (filtTasks[i].id === openedTask.id) {
                filtTasks[i].task = editingParagraph.current.innerText
            } 
    
        }

        handleMarking(filtTasks, [...data])
        setShowNavbar(true)
    }


    if(openedTask.id != null) return (
        <div className={editing ? s.Task_View : s.Hide_Task_View}>
            <div className={s.nav}>
                <h3><i className="fa fa-edit"></i> <span>Edit Task</span></h3>
                <Button icon={(<i className="fa fa-times"></i>)}
                        func={()=>{setOpenedTask({index: null, isOpened: false}), setEditing(false), setShowNavbar(true)}}
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
                    func={()=>{handleEdit(), setEditing(false)}}/>
        </div>
    )
}

export default ViewTask