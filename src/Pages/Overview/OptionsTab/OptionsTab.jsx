import s from "./OptionsTab.module.css"
import Button from "../../../Components/Button"
import { useEffect, useState } from "react"
export const OptionsTab = ({selectedTask, filteredTasks, updateTasks, searching, optionTabNumber, handleMarking, unselectAll, setShowTaskPrompt, setBgColor, setColor}) => {
    const [optionDataVal, setOptionDataVal] = useState(optionTabNumber)
    // document.getElementById().style.colo
    function handleMark(state, changeColor, changeBGColor, bold, italicize){
        let upData = updateTasks
        let data = filteredTasks
        let changedData = []
        
        for(let i in selectedTask) {
            if (searching) {
                for(let j in data) {

                    if(j == selectedTask[i].index){
                        if(state != false){
                            data[selectedTask[i].index].type = state
                            changedData.push(data[selectedTask[i].index])
                        } else if (changeColor) {
                            data[selectedTask[i].index].style.color = changeColor
                            changedData.push(data[selectedTask[i].index])
                        } else if (changeBGColor) {
                            data[selectedTask[i].index].style.backgroundColor = changeBGColor
                            changedData.push(data[selectedTask[i].index])
                        } else if (bold) {
                            data[selectedTask[i].index].style.fontWeight = "bold"
                            changedData.push(data[selectedTask[i].index])
                        } else if (italicize) {
                            data[selectedTask[i].index].style.fontStyle = "italic"
                            changedData.push(data[selectedTask[i].index])
                        }
                    } else {
                        changedData.push(data[selectedTask[i].index])
                    }

                    
                }
            }
        }



        for(let i in selectedTask){
            upData = upData.map((task)=>{
                if(selectedTask[i].id == task.id){
                    const updatedTask = { ...task }; // Create a copy to avoid mutations

                    if (state !== false) {
                        updatedTask.type = state;
                    }
                    if (changeColor) {
                        updatedTask.style = { ...updatedTask.style, color: changeColor };
                    }
                    if (changeBGColor) {
                        updatedTask.style = { ...updatedTask.style, backgroundColor: changeBGColor };
                    }
                    if (bold) {
                        updatedTask.style = { ...updatedTask.style, fontWeight: "bold" };
                    }
                    if (italicize) {
                        updatedTask.style = { ...updatedTask.style, fontStyle: "italic" };
                    }

                    return updatedTask;
                } else {
                    return {...task}
                }
            })
        }

        if(!searching) {handleMarking(data, [...upData])}
        else {handleMarking([...data], [...upData])}
    }

    useEffect(()=>{
        setOptionDataVal(optionTabNumber)
    },[optionTabNumber])

    useEffect(()=>{console.log(searching, filteredTasks)},[searching, filteredTasks])

    return (
        <div className={s.Options_tab}>
            <div className={s.Wrap_Options_Tab}>
                <Button icon={(<i className="fa fa-plus"></i>)}
                        content={(<span> Create New Task</span>)}
                        className={s.createTask}
                        func={()=>setShowTaskPrompt(true)}/>
                <Button icon={(<i className="fa fa-edit"></i>)}
                        content={(<span> Mark As Finished</span>)}
                        func={()=>{handleMark("finished", false, false, false, false), unselectAll()}}
                        />
                <Button icon={(<i className="fa fa-edit"></i>)}
                        content={(<span> Mark As Pending</span>)}
                        func={()=>{handleMark("pending", false, false, false, false), unselectAll()}}/>
                <Button icon={(<i className="fa fa-sort"></i>)}
                        content={(<span> Sort</span>)}/>

                <label htmlFor="colorPicker" className={s.colorPicker} >
                    <input type="color" id="colorPicker" onChange={(e)=>{handleMark(false, e.target.value, false, false, false)}}/>
                    <span>Font Color</span>
                </label>
                <label htmlFor="bgColorPicker" className={`${s.bgColorPicker} ${s.colorPicker}`} >
                    <input type="color" id="bgColorPicker" onChange={(e)=>{handleMark(false, false, e.target.value, false, false)}}/>
                    <span>BG Color</span>
                </label>
                <Button icon={(<i className="fa fa-bold"></i>)}
                        content={" Bold"} className={`${s.green} ${s.black}`}
                        func={()=>{handleMark(false, false, false, true, false)}}/>
                <Button icon={(<i className="fa fa-italic"></i>)}
                        content={" Italic"}
                        func={()=>{handleMark(false, false, false, false, true)}}/>
            </div>
        </div>
    )
} 