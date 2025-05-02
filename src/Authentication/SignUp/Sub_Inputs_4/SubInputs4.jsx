import s from "./SubInputs4.module.css"
import Button from "../../../Components/Button"
import { useEffect, useState } from "react"
const Form_4 = ({indicated, subjects, handleSubjects}) => {
    

    

   if(subjects != null) return (
        <div className={indicated == 3 ? s.inputs_4 : s.hide}>
            <div className={s.wrapper}>
                <h4>What is your favorite subject?</h4>
                <div className={s.buttons}>
                    {subjects.map((par, i) => (
                        <Button key={par + i.toString()} func={()=>{handleSubjects(i)}} className={par.testClass == true ? s.IndicatedButt : s.notIndicatedButt} content={subjects[i].content}></Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Form_4