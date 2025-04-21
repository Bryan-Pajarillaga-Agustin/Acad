import Button from "../../../Components/Button";
import s from "./ViewTask.module.css"

const ViewTask = ({ openedTask, setOpenedTask, tasks, taskEditingP, saveChanges, handleEditing, setEditing, editing }) => {
    return (
        <div className={editing ? s.Task_View : s.Hide_Task_View} onSubmit={(e)=>{saveChanges(e, taskEditingP.current.value, openedTask.index)}}>
            <div className={s.nav}>
                <h3><i className="fa fa-edit"></i> <span>Edit Task</span></h3>
                <Button icon={(<i className="fa fa-times"></i>)}
                        func={()=>{setOpenedTask({index: null, isOpened: false}), setShowTaskPrompt(false)}}
                        />
            </div>
            <div className={s.content}>
                <p ref={taskEditingP} onInput={(e)=>{handleEditing(e)}} contentEditable={true}>{openedTask.isOpened ? tasks[openedTask.index].task : null}</p>
                
            </div>
            <Button content={"Save Changes"}
                    className={s.submitButton}
                    func={()=>{saveChanges(openedTask.index), setEditing(false)}}/>
        </div>
    )
}

export default ViewTask