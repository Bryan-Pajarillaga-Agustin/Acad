import s from "./OptionsTab.module.css"
import Button from "../../../Components/Button"
import { useEffect, useState } from "react"
import { DropDown } from "../DropDown/DropDown"
export const OptionsTab = ({selectedTask, edit, optionTabNumber, markAsFinished, setShowTaskPrompt}) => {
    const [optionDataVal, setOptionDataVal] = useState(optionTabNumber)

    useEffect(()=>{
        setOptionDataVal(optionTabNumber)
    },[optionTabNumber])

    useEffect(()=>{console.log(selectedTask)},[selectedTask])
    
    return (
        <div className={s.Options_tab}>
            <div className={s.Wrap_Options_Tab}>
                <Button icon={(<i className="fa fa-plus"></i>)}
                        content={(<span> Create New Task</span>)}
                        className={s.createTask}
                        func={()=>setShowTaskPrompt(true)}/>
                <Button icon={(<i className="fa fa-edit"></i>)}
                        content={(<span> Mark As Finished</span>)}
                        func={()=>markAsFinished()}
                        className={s.Edit_Button}/>
                <Button icon={(<i className="fa fa-sort"></i>)}
                        content={(<span> Sort</span>)}/>

                <label htmlFor="colorPicker" className={s.colorPicker}>
                    <input type="color" id="colorPicker" />
                    <span>Font Color</span>
                </label>
                <label htmlFor="colorPicker" className={s.colorPicker}>
                    <input type="color" id="colorPicker" onChange={(e)=>printValue(e)} />
                    <span>BG Color</span>
                </label>
                <Button icon={(<i className="fa fa-bold"></i>)}
                        content={" Bold"} className={`${s.green} ${s.black}`}/>
                <Button icon={(<i className="fa fa-italic"></i>)}
                        content={" Italic"}/>
            </div>
        </div>
    )
} 