import s from "./OptionsTab.module.css"
import Button from "../../../Components/Button"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase/Firebase"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
export const OptionsTab = ({selectedTask, filteredTasks, updateTasks, searching, optionTabNumber, handleMarking, unselectAll, setShowTaskPrompt, setShowSortPrompt, numberOfChanges, setNumberOfChanges, user, setUpdateTask, setLoading, setShowNavbar}) => {
    const [optionDataVal, setOptionDataVal] = useState(optionTabNumber)
    const [showChangePrompt, setShowChangePrompt] = useState(false)
    const [bgColorPrompt, setbgColorPrompt] = useState(false)
    const [colorPrompt, setColorPrompt] = useState(false)
    const [borderPrompt, setBorderPrompt] = useState(false)
    const [fontWeight, setFontWeight] = useState(false)
    const [italic, setItalic] = useState(false)

    function handleMark(state, changeColor, changeBGColor, bold, italicize, borderColor){
        let prevData = updateTasks
        let upData = updateTasks
        let data = filteredTasks
        let changedData = []

        for(let i in selectedTask) {
            if(searching) {
                for(let j in data) {
                    if(data[j].id == selectedTask[i].id) {
                        if(state != false){
                            data[selectedTask[i].index].type = state
                            changedData.push(data[selectedTask[i].index])
                        } 

                        if(state == false) {
                            if(data[j].style == "default" || data[j].style == null) 
                                data[j].style = {
                                                                        color: "default", 
                                                                        border: "default", 
                                                                        fontStyle: "default", 
                                                                        backgroundColor: "default",
                                                                        fontWeight: "default"
                                                                    }

                            if (changeColor) {
                                data[j].style.color = changeColor
                                changedData.push(data[j])
                            }

                            if (changeBGColor) {
                                data[j].style.backgroundColor = changeBGColor
                                changedData.push(data[j])
                            }

                            if (bold) {
                                data[j].style.fontWeight = bold
                                changedData.push(data[j])
                            }

                            if (italicize) {
                                data[j].style.fontStyle = italicize
                                changedData.push(data[j])
                            }

                            if (borderColor) {
                                data[j].style.borderColor = borderColor 
                                changedData.push(data[j])
                            }
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
                    let updatedTask = { ...task }; // Create a copy to avoid mutations

                    updatedTask.style = updatedTask.style === "default" ? 
                    {
                        color: "default", 
                        border: "default", 
                        fontStyle: "default", 
                        backgroundColor: "default",
                        fontWeight: "default"
                    } : 
                    { ...updatedTask.style }
                    
                    if (state !== false) updatedTask.type = state;
                    if (changeColor) updatedTask.style = { ...updatedTask.style, color: changeColor };
                    if (changeBGColor) updatedTask.style = { ...updatedTask.style, backgroundColor: changeBGColor };
                    if (bold) updatedTask.style = { ...updatedTask.style, fontWeight: bold }
                    if (italicize) updatedTask.style = { ...updatedTask.style, fontStyle: italicize };
                    if (borderColor) updatedTask.style = { ...updatedTask.style, borderColor: borderColor }
                    updatedTask.isChecked = true
                    return updatedTask;
                } else {
                    return {...task}
                }
            })
        }

        if(!searching) {handleMarking(data, [...upData], prevData)}
        else {handleMarking([...data], [...upData], prevData)}
    }

    function handleRedo(){
        let numChanges = numberOfChanges + 1
        let changes = JSON.parse(localStorage.getItem("Changes"))
        changes = changes[numChanges]
        setUpdateTask([...changes])
        setNumberOfChanges(numChanges)
        console.log(JSON.parse(localStorage.getItem("Changes")))
    }
    
    function handleUndo(){
        let numChanges = numberOfChanges - 1
        let changes = JSON.parse(localStorage.getItem("Changes"))
        changes = changes[numChanges]
        setUpdateTask([...changes])
        setNumberOfChanges(numChanges)
        console.log(JSON.parse(localStorage.getItem("Changes")))
    }

    const saveToDataBase = async () => {
        setLoading(true)
        setShowNavbar(false)
        let changes = JSON.parse(localStorage.getItem("Changes"))
        changes = [...changes[numberOfChanges]]
        changes = changes.map((task)=>{
            return {...task, isChecked: false}
        })
        const userUID = user?.uid.toString();
        const docRef = doc(db, `Users/${userUID}`);
        try {
            await updateDoc(docRef, {tasks: changes});  //Update from local state after successful write
            setNumberOfChanges(null)
            setUpdateTask([...changes])
            localStorage.removeItem("Changes")
        } catch (error) {
            alert(error.message)
        }
        setShowNavbar(true)
        setLoading(false)
    }

    useEffect(()=>{
        setOptionDataVal(optionTabNumber)
    },[optionTabNumber])

    return (
        <div className={s.Options_tab}>
            
            <div className={bgColorPrompt ? `${s.BG_Color_Prompt} ${s.Prompt_Box}` : `${s.Hide_BG_Color_Prompt} ${s.Prompt_Box}`}>
                <Button 
                        icon={(<i className="fa fa-close"></i>)}
                        className={`${s.Close_Button}`}
                        func={()=>{setbgColorPrompt(false)}}/>
                <h1>Change BG Color</h1>
                <label htmlFor="colorPicker" className={s.colorPicker} >
                        <input type="color" id="colorPicker" onBlur={(e)=>{handleMark(false, false, e.target.value, false, false)}}/>
                        <span>Choose BG Color</span>
                </label>
                <Button 
                        content={"Default"}
                        func={()=>{handleMark(false, false, "#f09c2e", false, false)}}/>
            </div>
            <div className={colorPrompt ? `${s.Color_Prompt} ${s.Prompt_Box}` : `${s.Hide_Color_Prompt} ${s.Prompt_Box}`}>
            <h1>Change Font Color</h1>
                <Button 
                        icon={(<i className="fa fa-close"></i>)}
                        className={`${s.Close_Button}`}
                        func={()=>{setColorPrompt(false)}}/>
                <label htmlFor="bgColorPicker" className={`${s.bgColorPicker} ${s.colorPicker}`} >
                    <input type="color" id="bgColorPicker" onBlur={(e)=>{handleMark(false, e.target.value, false, false, false)}}/>
                    <span>Choose Font Color</span>
                </label>
                <Button 
                        content={"Default"}
                        func={()=>{handleMark(false, "white", false, false, false)}}/>
            </div>
            <div className={borderPrompt ? `${s.Border_Color_Prompt} ${s.Prompt_Box}` : `${s.Hide_Border_Color_Prompt} ${s.Prompt_Box}`}>
            <h1>Change Border Color</h1>
                <Button 
                        icon={(<i className="fa fa-close"></i>)}
                        className={`${s.Close_Button}`}
                        func={()=>{setBorderPrompt(false)}}/>
                <label htmlFor="borderColorPicker" className={`${s.borderColorPicker} ${s.colorPicker}`} >
                    <input type="color" id="borderColorPicker" onBlur={(e)=>{handleMark(false, false, false, false, false, e.target.value)}}/>
                    <span>Choose Border Color</span>
                </label>
                <Button 
                        content={"Default"}
                        func={()=>{handleMark(false, false, false, false, false, "#d16c06")}}/>
            </div>
            <div className={fontWeight ? `${s.Font_Weight_Prompt} ${s.Prompt_Box}` : `${s.Hide_Font_Weight_Prompt} ${s.Prompt_Box}`}>
            <h1>Change Font Weight</h1>
                <Button 
                        icon={(<i className="fa fa-close"></i>)}
                        className={`${s.Close_Button}`}
                        func={()=>{setFontWeight(false)}}/>
                <Button 
                        content={"Normal"}
                        func={()=>{handleMark(false, false, false, "Normal", false, false)}}/>
                <Button 
                content={"Bold"}
                func={()=>{handleMark(false, false, false, "Bold", false, false)}}/>
                <Button 
                        content={"Bolder"}
                        func={()=>{handleMark(false, false, false, "Bolder", false, false)}}/>
            </div>
            <div className={italic ? `${s.Italic_Prompt} ${s.Prompt_Box}` : `${s.Hide_Italic_Prompt} ${s.Prompt_Box}`}>
            <h1>Change Italization</h1>
                <Button 
                        icon={(<i className="fa fa-close"></i>)}
                        className={`${s.Close_Button}`}
                        func={()=>{setItalic(false)}}/>
                <Button 
                        content={"Normal"}
                        func={()=>{handleMark(false, false, false, false, "Normal", false)}}/>
                <Button 
                content={"Italic"}
                func={()=>{handleMark(false, false, false, false, "Italic", false)}}/>
            </div>


            <div className={s.Wrap_Options_Tab}>
                <Button 
                        icon={(<i className="fa fa-save"></i>)}
                        content={"Save Changes"}
                        className={numberOfChanges == null ?  `${s.notWorking}` : null}
                        func={()=>{numberOfChanges != null ? saveToDataBase() : null}} />
                <Button 
                        icon={(<i className="material-icons">undo</i>)}
                        content={"Undo"}
                        className={numberOfChanges == null || numberOfChanges == 0 ? `${s.notWorking}` : null}
                        func={()=>{numberOfChanges > 0 ? handleUndo() : null}} />
                <Button 
                        icon={(<i className="material-icons">redo</i>)}
                        content={"Redo"}
                        className={numberOfChanges < JSON.parse(localStorage.getItem("Changes"))?.length - 1 && numberOfChanges != null ? null : `${s.notWorking}`}
                        func={()=>{numberOfChanges < JSON.parse(localStorage.getItem("Changes"))?.length - 1 && numberOfChanges != null ? handleRedo() : null}} />
                <Button icon={(<i className="fa fa-plus"></i>)}
                        content={(<span> Create New Task</span>)}
                        className={s.createTask}
                        func={()=>{setShowTaskPrompt(true), setShowNavbar(false)}}/>
                <Button icon={(<i className="fa fa-edit"></i>)}
                        content={(<span> Mark As Finished</span>)}
                        func={()=>{handleMark("finished", "white",  "#51af0f", false, false, "rgb(8, 97, 20)")}} />
                <Button icon={(<i className="fa fa-edit"></i>)}
                        content={(<span> Mark As Pending</span>)}
                        func={()=>{handleMark("pending", "white", "#f09c2e", false, false, "rgb(209, 108, 6)")}}/>
                <Button icon={(<i className="fa fa-sort"></i>)}
                        content={(<span> Sort</span>)}
                        func={()=>{setShowSortPrompt(true), setShowNavbar(false)}}/>
                <Button icon={(<i className="material-icons">format_color_fill</i>)}
                        content={(<span> BG Color </span>)}
                        func={()=>{setbgColorPrompt(true), setColorPrompt(false), setBorderPrompt(false), setFontWeight(false), setItalic(false)}}/>
                <Button icon={(<i className="material-icons">format_color_text</i>)}
                        content={(<span> Font Color</span>)}
                        func={()=>{setColorPrompt(true), setbgColorPrompt(false), setBorderPrompt(false), setFontWeight(false, setItalic(false))}}/>
                <Button icon={(<i className="material-icons">border_color</i>)}
                        content={(<span> Border Color</span>)}
                        func={()=>{setBorderPrompt(true), setbgColorPrompt(false), setColorPrompt(false), setFontWeight(false), setItalic(false)}}/>
                <Button icon={(<i className="fa fa-bold"></i>)}
                        content={" Bold"} className={`${s.green} ${s.black}`}
                        func={()=>{setBorderPrompt(false), setbgColorPrompt(false), setColorPrompt(false), setFontWeight(true), setItalic(false)}}/>
                <Button icon={(<i className="fa fa-italic"></i>)}
                        content={" Italic"}
                        func={()=>{setBorderPrompt(false), setbgColorPrompt(false), setColorPrompt(false), setFontWeight(false), setItalic(true)}}/>
            </div>
        </div>
    )
} 