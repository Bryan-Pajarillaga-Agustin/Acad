import s from "./ContinueAs.module.css"
import Button from "../../Components/Button"
import { useEffect, useState } from "react"
import { db } from "../../Firebase/Firebase"
import { getDoc, doc } from "firebase/firestore"
const ContinueAs = ({continueAs, setContinueAs, user}) => {
    const [name, setName] = useState(null)

    const getName = async () => {
        const uid = user.uid
        console.log(uid)
        const docRef = doc(db, "Users", uid?.toLocaleString())
        

        try{
            const docSnap = await getDoc(docRef)
            if(docSnap.exists) {
                setName(docSnap.data())
            } 
        } catch (error) {
            console.log(error)
        }
    }
 
    useEffect(()=>{
        function isEmpty(user){
            for(let key in user){
                return false
            }
            return true
        }
        let test = isEmpty(user)
        if(!test) getName()

    },[continueAs])

    if(continueAs) return  (
        <div className={continueAs ? s.Continue_As_Wrapper : s.Hide_Continue_As_Wrapper}>
            <div className={s.Continue_As_Box}>
                <div className={s.Top}>
                    <i className='fa fa-user'></i>
                    <h3>Continue As: </h3>
                    <h3>{name?.name} ?</h3>
                </div>
                <div className={s.Options}>
                    <Button 
                            content={"No"}/>
                    <Button 
                            content={"Yes"}/>
                </div>
            </div>
        </div>
    )
}

export default ContinueAs