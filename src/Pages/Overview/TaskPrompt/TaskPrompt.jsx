import s from "./TaskPrompt.module.css"
import Button from "../../../Components/Button"
import { useEffect, useRef, useState } from "react"

const TaskPrompt = ({showTaskPrompt, setShowTaskPrompt, writeTask}) => {
    const displayPlaceHolder = useRef(null)
    const editingP = useRef(null)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditing(){
        setIsEditing(Math.random()*1)
    }

    function submitTask(){
        writeTask(editingP.current.innerText)
    }

    function clearInputField() {
        editingP.current.innerHTML = "<br>"
        write()
    }

    function write() {
        if(editingP.current.innerText == "\n" || editingP.current.innerHTML == "<br>") {
            displayPlaceHolder.current.style.display = "block" 
        } else {
            displayPlaceHolder.current.style.display = "none"
        }
    }

    useEffect(()=>{
        
    },[isEditing])

    return (
        <>
            <div className={showTaskPrompt ? s.Task_prompt_wrapper : s.Hide_task_prompt_wrapper}>
                
                <div className={s.nav}>
                    <h3><i className="fa fa-edit"></i> <span>Task Prompt</span></h3>
                    <Button icon={(<i className="fa fa-times"></i>)}
                            func={()=>{setShowTaskPrompt(false), clearInputField()}}
                            />
                </div>
                <div className={s.content}>
                    <span ref={displayPlaceHolder}>Type Any Task...</span>
                    <p ref={editingP} contentEditable="true" onInput={()=>{handleEditing(), write()}}></p>
                    
                </div>
                <Button content={"Submit"}
                            className={s.submitButton}
                            func={()=>{submitTask(), setShowTaskPrompt(false), clearInputField()}}/>
            </div>
        </>
    )
}

export default TaskPrompt