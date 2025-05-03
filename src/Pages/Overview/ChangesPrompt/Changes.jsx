import s from "./Changes.module.css"
import Button from "../../../Components/Button"
import { db } from "../../../Firebase/Firebase"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
const Changes = ({showSaveChanges, setShowSaveChanges, setUpdateTask, setNumberOfChanges, numberOfChanges, user, paging, setPage}) => {
    

    const saveToDataBase = async () => {
        let changes = JSON.parse(localStorage.getItem("Changes"))
        changes = [...changes[numberOfChanges]]
        changes = changes.map((task)=>{
            return {...task, isChecked: false}
        })
        const userUID = user?.uid?.toString();
        const docRef = doc(db, `Users/${userUID}`);
        try {
            await updateDoc(docRef, {tasks: changes});  //Update from local state after successful write
            setNumberOfChanges(null)
            setUpdateTask([...changes])
            localStorage.removeItem("Changes")
            if (paging) {
                let link = window.location.href
                link.toLowerCase()
                let index = link.search("/Acad/")
                link = link.slice(0, index + 6)
                link = link.concat(paging?.link)
                window.location.href = link
                setPage(paging.page)
            }
        } catch (error) {
            console.log("Error writing task:", error);
        }
    }

    if (showSaveChanges) return (
        <div className={s.Changes_Wrapper}>
            <div className={s.Changes_Box}>
                <div className={s.Top}>
                    <i className='fa fa-warning'></i>
                    
                    <h3>Would You Save Your Previous Changes?</h3>
                </div>
                <div className={s.Options}>
                    <Button 
                            content={"No"}
                            func={()=>{setShowSaveChanges(false), localStorage.removeItem("Changes"), window.location.reload}} />
                    <Button 
                            content={"Yes"}
                            func={()=>{setShowSaveChanges(false), saveToDataBase()}}/>
                </div>
            </div>
        </div>
    )
}

export default Changes