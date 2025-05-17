import s from "./Selections.module.css"
import Button from "../../../../Components/Button"
import { useState, useEffect, useRef, useActionState } from "react"

const Selections = ({accInformation, editAccount, setFavSubjects, purpose, setPurpose, usingAs, setUsingAs}) => {
    const subjectRef = useRef()
    const [subjects, setSubjects] = useState(null)
    const [showInputSubject, setShowInputSubject] = useState(false)
    const [limKey, setLimKey] = useState(0)

    function makeSubject(element){
        const input = element?.target
        if(input?.value != "" && element?.key == "Enter" && limKey == 0) {
            setLimKey(prev => prev+1)
            setShowInputSubject(false)
            setSubjects(prev => [{content: subjectRef.current?.value, testClass: true}, ...prev])
        } else if(input?.value == "" && element?.key == "Enter"){
            input.value = ""
            setShowInputSubject(false)
        } 
    }

    function handleSubjects(i) {
        setSubjects(prev => prev.map((sub, ind)=>{
            if(ind == i) return {...sub, testClass: sub.testClass == true ? false : true}
            return {...sub}
        }))
    }

    function handleDelete(){
        let sub = subjects
        let notSelected = []
        for(let i in subjects) {
            if(sub[i].testClass == true) notSelected.push(sub[i])
        }

        setSubjects([...notSelected])
    }

    useEffect(()=>{
        if(subjects){
            setFavSubjects([...subjects])
        }
    },[subjects])

    useEffect(()=>{
        if(accInformation?.favSubjects) {
            setSubjects([...accInformation.favSubjects])
        }
    },[accInformation])
    return (
        <div className={s.Selections_Wrapper}>
            <div className={s.top}>
                <h3>
                    <span>Favourite Subjects</span>
                    <label htmlFor={showInputSubject ? "makesubject" : ""}
                           style={editAccount ? {display: "flex"} : {display: "none"}}>
                        <i className="fa fa-plus" 
                           onClick={()=>{
                                setShowInputSubject(true) 
                                setLimKey(0)
                                subjectRef.current.value = ""}}>
                        </i>
                        <i className="fa fa-trash" 
                           onClick={()=>{
                                handleDelete()
                           }}>
                        </i>
                    </label>
                </h3>
                <div className={s.Subjects_Wrapper}>
                    <Button 
                            element={(
                                <input type="text" id="makesubject" 
                                        ref={subjectRef} 
                                        onKeyDown={(e)=>{makeSubject(e)}} 
                                        onBlur={(e)=>{
                                            if(subjectRef.current.value != "") {
                                                console.log(subjectRef.current.value)
                                                setSubjects(arr => arr.filter(ea => ea.content.toLowerCase() !== subjectRef.current.value.toLowerCase()))
                                                setSubjects(prev => [{content: subjectRef.current?.value, testClass: true}, ...prev])
                                                setLimKey(prev => prev+1)
                                                setShowInputSubject(false)
                                            } else {
                                                setShowInputSubject(false)
                                            }
                                        }}/>
                            )}
                            className={showInputSubject ? s.makeSubjectButt : s.hideMakeSubjectButt} >
                    </Button>
                    {subjects?.map((par, i) => (
                        <Button 
                                key={par + i.toString()} 
                                func={()=>{
                                    if(editAccount) handleSubjects(i)
                                }} 
                                className={par.testClass == true ? 
                                    s.IndicatedButt : 
                                    s.notIndicatedButt} 
                                content={subjects[i].content}>
                        </Button>
                    ))}
                </div>
            </div>
            <div className={s.bottom}>
                <div className={s.Purpose_Wrapper}>
                    <h3>
                        <span>Using As:</span>
                    </h3>
                    {
                        editAccount ? 
                        <textarea 
                                    type="text"
                                    contentEditable={editAccount ? true : false} 
                                    onChange={(e)=>{setUsingAs(e.target.value)}} 
                                    rows="1" 
                                    value={usingAs}/> :
                        <p>{usingAs}</p>
                    }
                </div>
                <div className={s.Using_As_Wrapper}>
                    <h3>
                        <span>Purpose</span>
                    </h3>
                    {
                        editAccount ? 
                        <textarea 
                                    type="text" 
                                    contentEditable={editAccount ? true : false}
                                    onChange={(e)=>{setPurpose(e.target.value)}} 
                                    value={purpose}/> :
                        <p>{purpose}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Selections