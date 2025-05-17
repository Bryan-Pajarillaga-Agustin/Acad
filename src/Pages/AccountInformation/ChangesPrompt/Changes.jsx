import s from "./Changes.module.css"
import Button from "../../../Components/Button"
import { db } from "../../../Firebase/Firebase"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { useEffect } from "react"
const ChangesInAccount = ({showChanges, setShowChanges, setShowPersonalInfo, saveAccountChanges, setEditAccount}) => {

    if (showChanges) return (
        <div className={s.Changes_Wrapper}>
            <div className={s.Changes_Box}>
                <div className={s.Top}>
                    <i className='fa fa-warning'></i>
                    
                    <h3>Would You Save Your Previous Changes?</h3>
                </div>
                <div className={s.Options}>
                    <Button 
                            content={"No"}
                            func={()=>{window.location.reload()}} />
                    <Button 
                            content={"Yes"}
                            func={()=>{setShowChanges(false), saveAccountChanges(), setShowPersonalInfo(false), setEditAccount(false)}}/>
                </div>
            </div>
        </div>
    )
}

export default ChangesInAccount