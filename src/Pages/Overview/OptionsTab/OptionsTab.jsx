import s from "./OptionsTab.module.css"
import Button from "../../../Components/Button"
import { useEffect, useState } from "react"
export const OptionsTab = ({selectedTask, search, edit, optionTabNumber, setOptionTabNumber, writeTask, setShowTaskPrompt}) => {
    const [optionDataVal, setOptionDataVal] = useState(optionTabNumber)
    const [taskPrompt, setTaskPrompt] = useState(false)

    function makeTask() {

    }

    function printValue(e) {
    }

    function handleTabBar(i){
        setOptionTabNumber(i)
    }

    function color(){
        return s.black
    }

    useEffect(()=>{
        setOptionDataVal(optionTabNumber)
    },[optionTabNumber])
    
    if (optionTabNumber == 1) { return (
        <div className={s.Options_tab}>
            <div className={s.Search_wrapper}>
                <label htmlFor="search-bar">
                    <i className={"fa fa-search"}></i>
                </label>
                <input
                    id="search-bar"
                    type="text" 
                    placeholder={"Search Task"} />
                <Button content={"Search"} func={search} className={s.Search_button}/>
            </div>
            <Button icon={(<i className="fa fa-plus"></i>)}
                    content={(<span> Create New Task</span>)}
                    className={s.createTask}
                    func={()=>setShowTaskPrompt(true)}/>
            <Button icon={(<i className='far fa-edit'></i>)}
                    content={(<span> Edit</span>)}
                    func={selectedTask == 1 ? edit : false}
                    className={s.Edit_Button}/>
            <Button icon={(<i className="fa fa-sort"></i>)}
                    content={(<span> Sort</span>)}/>
            <div className={s.ChangeOptionsLevel}>
                <Button icon={(<i className="fa fa-arrow-circle-down"></i>)}
                    func={optionDataVal == 1 ? false : ()=>setOptionTabNumber(1)}/>
                
                <Button icon={(<i className="fa fa-arrow-circle-up"></i>)}
                    func={optionDataVal == 2 ? false : ()=>setOptionTabNumber(2)}/>
            </div>
        </div>
    ) } else { return (
        <div className={s.Options_tab}>
            <label htmlFor="colorPicker">
                <input type="color" id="colorPicker" />
                <span>Font Color</span>
            </label>
            <label htmlFor="colorPicker">
                <input type="color" id="colorPicker" onChange={(e)=>printValue(e)} />
                <span>BG Color</span>
            </label>
            <Button icon={(<i className="fas fa-bold"></i>)}
                    content={" Bold"} className={`${s.green} ${s.black}`}/>
            <Button icon={(<i className="fa fa-italic"></i>)}
                    content={" Italic"}/>
            <div className={s.ChangeOptionsLevel}>
                <Button icon={(<i className="fa fa-arrow-circle-down"></i>)}
                    func={()=>handleTabBar(1)}/>
                
                <Button icon={(<i className="fa fa-arrow-circle-up"></i>)}
                    func={()=>handleTabBar(2)}/>
            </div>
        </div>
    ) }
} 