import { useEffect, useState } from "react"
import s from "./SubInputs2.module.css"
import Button from "../../../Components/Button"
const Form_2 = ({ indicated, usingAsInput, usageOptions, handleUsageOptions }) => {

    return (
        <div className={indicated == 1 ? s.inputs_2 : s.hide}>
            <h3>Why am I using the To-Do List Web App?</h3>
            <div>
                <div className={s.top}>
                    {
                        usageOptions.map((each, i)=>{
                            return  (
                                <Button 
                                        key={each.content}
                                        content={each.content}
                                        className={each.isIndicated ? s.indicated : s.notIndicated}
                                        func={()=>{handleUsageOptions(i)}}/>
                            )
                        })
                    }
                    <input type="text" placeholder="Other reason..." ref={usingAsInput}/>
                </div>
            </div>
        </div>
    )
}

export default Form_2