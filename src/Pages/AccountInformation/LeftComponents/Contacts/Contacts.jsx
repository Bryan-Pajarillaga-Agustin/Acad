import { setIndexConfiguration } from "firebase/firestore"
import Button from "../../../../Components/Button"
import s from "./Contacts.module.css"
import { useEffect, useState } from "react"

const Contacts = ({contacts, setContacts, editAccount}) => {
    const [onEditCon, setOnEditCon] = useState(null)
    const [curEditCon, setCurEditCon] = useState(null)
    const [copyCon, setCopyCon] = useState(contacts)

    function handleEditContact(i, e) {
        if(e.key != "Enter") {
            setOnEditCon(i)
            setCurEditCon(e.target.value)

            setCopyCon(prev => prev.map((ea, ind) => 
                ind == i ?
                    {...ea, content: e.target.value} :
                    {...ea}
            ))
        } else {
            setOnEditCon(null)
            setContacts([...copyCon])
        }
    }

    useEffect(()=>{
        setCopyCon(contacts)
        console.log(contacts)
    },[contacts])

    return (
        <div className={s.Contacts_Wrapper}>
            <h3>Contacts:</h3>
            <div className={s.Contacts_Box}>
                {
                        contacts?.map((each, i) => {
                            return (
                                <li key={each.content}>
                                    <i className="material-icons">{each.icon}</i>
                                    <input
                                    rows={1}
                                    type="text"
                                    key={each.content}
                                    value={i == onEditCon ? curEditCon : each.content}
                                    style={editAccount ? {borderBottom: ".2rem solid #EAAE2C"} : {borderBottom: "none"}}
                                    contentEditable={editAccount ? true : false}
                                    onFocus={(e)=>{setCurEditCon(e.target.value), setOnEditCon(i), setContacts([...copyCon])}}
                                    onChange={(e) => {
                                            if(editAccount) handleEditContact(i, e)
                                    }}
                                    onBlur={(e)=>{setCurEditCon(e.target.value), setOnEditCon(i), setContacts([...copyCon])}}
                                    />
                                </li>
                            );
                        })
                    }
            </div>
        </div>
    )
}

export default Contacts