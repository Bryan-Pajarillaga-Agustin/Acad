import { useEffect, useInsertionEffect } from "react"
import Button from "../../../Components/Button"
import s from "./SortPrompt.module.css"

const SortPrompt = ({setShowSortPrompt, showSortPrompt, sortOptions, setSortOptions, setSorting, sorting}) => {

    function handleOptions (i) {
        let data = sortOptions
        data = data.map((ea, ind)=>{
            if(data[ind] === data[i]){
                return { ...ea, state: ea.state ? false : true }
            } else {
                return { ...ea, state: false }
            }
        })

        for(let i in data) {
            if(data[i].state == true) {
                setSorting(true)
                break
            } 

            if( i == data.length - 1 && !data[i].state) {
                setSorting(false)
            }
        }
        setSortOptions([...data])
    }

    return (
        <div className={showSortPrompt ? s.Sort_Wrapper : s.Hide_Sort_Wrapper}>
            <div className={showSortPrompt ? s.Sort_Box : s.Hide_Sort_Box}>
                <h2>Sort Settings</h2>
                <Button icon={(<i className="fa fa-close"></i>)}
                        className={s.Hide_Sort_Box_Button}
                        func={()=>{setShowSortPrompt(false)}}/>
                <div className={s.Sort_Options}>
                    {sortOptions.map((option, i)=>{
                        return <Button 
                                      key={option.description}
                                      icon={(<i className={`fa fa-check-square ${option.state == true ? s.checked : s.unchecked}`}></i>)}
                                      content={option.description}
                                      func={()=>{handleOptions(i)}}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default SortPrompt