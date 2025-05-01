import s from "./OptionsTab.module.css"
import Button from "../../../Components/Button"
import { useEffect, useState } from "react"
export const OptionsTab = ({selectedTask, filteredTasks, updateTasks, searching, optionTabNumber, handleMarking, unselectAll, setShowTaskPrompt, setShowSortPrompt}) => {
    const [optionDataVal, setOptionDataVal] = useState(optionTabNumber)
    const [showChangePrompt, setShowChangePrompt] = useState(false)
    const [bgColorPrompt, setbgColorPrompt] = useState(false)
    const [colorPrompt, setColorPrompt] = useState(false)
    const [borderPrompt, setBorderPrompt] = useState(false)
    const [fontWeight, setFontWeight] = useState(false)
    const [italic, setItalic] = useState(false)
    // document.getElementById().style.colo
    function handleMark(state, changeColor, changeBGColor, bold, italicize, borderColor){
        let upData = updateTasks
        let data = filteredTasks
        let changedData = []
    
        for(let i in selectedTask) {
            if (searching) {
                for(let j in data) {

                    if(j == selectedTask[i].index){
                        data[j].isChecked = true
                        if(state != false){
                            data[selectedTask[i].index].type = state
                            changedData.push(data[selectedTask[i].index])
                        } 
                        
                        if(state == false) {
                            if(data[selectedTask[i].index].style == "default" || data[selectedTask[i].index].style == null) 
                                data[selectedTask[i].index].style = {
                                                                        color: "default", 
                                                                        border: "default", 
                                                                        fontStyle: "default", 
                                                                        backgroundColor: "default",
                                                                        fontWeight: "default"
                                                                    }

                            if (changeColor) {
                                data[selectedTask[i].index].style.color = changeColor
                                changedData.push(data[selectedTask[i].index])
                            }

                            if (changeBGColor) {
                                data[selectedTask[i].index].style.backgroundColor = changeBGColor
                                changedData.push(data[selectedTask[i].index])
                            }

                            if (bold) {
                                data[selectedTask[i].index].style.fontWeight = bold
                                changedData.push(data[selectedTask[i].index])
                            }

                            if (italicize) {
                                data[selectedTask[i].index].style.fontStyle = italicize
                                changedData.push(data[selectedTask[i].index])
                            }

                            if (borderColor) {
                                data[selectedTask[i].index].style.borderColor = borderColor 
                                changedData.push(data[selectedTask[i].index])
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

        if(!searching) {handleMarking(data, [...upData])}
        else {handleMarking([...data], [...upData])}
    }

    useEffect(()=>{
        setOptionDataVal(optionTabNumber)
    },[optionTabNumber])

    useEffect(()=>{console.log(searching, filteredTasks)},[searching, filteredTasks])

    return (
        <div className={s.Options_tab}>
            
            <div className={bgColorPrompt ? `${s.BG_Color_Prompt} ${s.Color_Wrapper}` : `${s.Hide_BG_Color_Prompt} ${s.Color_Wrapper}`}>
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
            <div className={colorPrompt ? `${s.Color_Prompt} ${s.Color_Wrapper}` : `${s.Hide_Color_Prompt} ${s.Color_Wrapper}`}>
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
            <div className={borderPrompt ? `${s.Border_Color_Prompt} ${s.Color_Wrapper}` : `${s.Hide_Border_Color_Prompt} ${s.Color_Wrapper}`}>
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
            <div className={fontWeight ? `${s.Font_Weight_Prompt} ${s.Color_Wrapper}` : `${s.Hide_Font_Weight_Prompt} ${s.Color_Wrapper}`}>
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
            <div className={italic ? `${s.Italic_Prompt} ${s.Color_Wrapper}` : `${s.Hide_Italic_Prompt} ${s.Color_Wrapper}`}>
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
                        content={(<span> Sort</span>)}
                        func={()=>{setShowSortPrompt(true)}}/>
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