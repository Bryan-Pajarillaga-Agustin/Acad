import { useState } from "react";
import Button from "../../../Components/Button";
import s from "./DropDown.module.css"

export const DropDown = ({setSorting, setSortOptions, setType, showDropDown, handleType, unselectAll}) => {
    const types = ["Pending", "Finished", "All Tasks"]
    const [indicated, setIndicated] = useState(0)

    function handleSorting(){
        setSorting(false)
        setSortOptions(prev => {
            return prev.map((ea)=>{
                if(ea.state) {
                    return {...ea, state: false}
                } else {
                    return {...ea}
                }
            })
        })
    }

    return (
        <>
            <div className={showDropDown ? s.DropDown_Body : s.Hide_DropDown_Body} onClick={()=>{handleType()}}>
                <ul className={s.Dropdown_Wrapper}>
                    {types.map((item, i)=>{
                        return (
                            <li 
                                className={indicated == i ? s.Indicated : s.Not_Indicated} 
                                key={types[i]} 
                                onClick={()=>{
                                                setType(types[i]), 
                                                setIndicated(i), 
                                                unselectAll(),
                                                handleSorting()}}
                            >
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}