import s from "./AccountInformation.module.css" 
import Button from "../../Components/Button"
import { useEffect, useRef, useState } from "react"
import ActionsTab from "./TopComponents/ActionsTab"
import Profile from "./LeftComponents/Profile/Profile"
import Contacts from "./LeftComponents/Contacts/Contacts"
import Skills from "./LeftComponents/Skills/Skills"
import Forms from "./RightComponents/Forms/forms"
import Selections from "./RightComponents/Selections/Selections"
import Bio from "./RightComponents/Bio/Bio"
import ChangesInAccount from "./ChangesPrompt/Changes"

import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { auth, db } from "../../Firebase/Firebase"
import { icon } from "@fortawesome/fontawesome-svg-core"
const AccountInformation = ({showPersonalInformation, setShowPersonalInformation, accInformation, user, setLoading}) => {
    const skillRef = useRef()

    // for forms

    const [uName, setUName] = useState()
    const [school, setSchool] = useState()
    const [pBirth, setPBirth] = useState()
    const [age, setAge] = useState()
    const [bDay, setBDay] = useState()
    const [gender, setGender] = useState()
    const [hobbies, setHobbies] = useState()
    const [grSec, setGrSec] = useState()

    // for Selections

    const [purpose, setPurpose] = useState()
    const [usingAs, setUsingAs] = useState()
    const [desc, setDesc] = useState()

    const [favSubjects, setFavSubjects] = useState([])

    const [editAccount, setEditAccount] = useState(false)
    const [showChanges, setShowChanges] = useState(false)


    const [skills, setSkills] = useState([])
    const [contacts, setContacts] = useState([])
    // accInformation?.personalInfo?.skills.map((skill)=>{return{...skill}})


    function addSkill(){
        if(skillRef.current?.value != "" ) {
            setSkills(prev => [...prev, skillRef.current?.value])
        } 
    }

    const saveAccountChanges = async () => {
        setLoading(true)
        try {
            await updateDoc(doc(db, "Users", user?.uid), {
                perInfo: {
                    school: school,
                    name: uName,
                    grSec: grSec,
                    age: age,
                    bDay: bDay,
                    gender: gender,
                    hobbies: hobbies,
                    placeOfBirth: pBirth,
                    purpose: purpose
                },
                usingAs: usingAs,
                favSubjects: favSubjects,
                description: desc,
                contacts: contacts,
                skills: skills
            })
        } catch (error) {   
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(()=>{
        if(accInformation) {
            setUName(accInformation.perInfo?.name)
            setSchool(accInformation.perInfo?.school)
            setPBirth(accInformation.perInfo?.placeOfBirth)
            setAge(accInformation.perInfo?.age)
            setBDay(accInformation.perInfo?.bDay)
            setGender(accInformation.perInfo?.gender)
            setHobbies(accInformation.perInfo?.hobbies)
            setGrSec(accInformation.perInfo?.grSec)
            setUsingAs(accInformation?.usingAs)
            setPurpose(accInformation?.perInfo?.purpose)
            setDesc(accInformation?.description)
            setContacts(accInformation?.contacts ? accInformation?.contacts : [])
            setSkills(accInformation?.skills ? accInformation?.skills : []) 
        }
    }, [accInformation])

    return (
        <>
            <div className={showPersonalInformation ? s.Account_Information_Wrapper : s.Hide_Account_Information_Wrapper}>
                <nav className={s.navBar}>
                    <h1>PERSONAL INFORMATIONS</h1>
                    <ActionsTab editAccount={editAccount}
                                setEditAccount={val=>setEditAccount(val)}
                                saveAccountChanges={()=>saveAccountChanges()}
                                setShowPersonalInformation={val=>setShowPersonalInformation(val)}
                                setShowChanges={val => setShowChanges(val) } >
                    </ActionsTab>
                </nav>
                <div className={s.Account_Information_Box}>
                    <div className={s.left}>
                        <Profile editAccount={editAccount}
                                 setEditAccount={(val)=>{setEditAccount(val)}}
                                 user={user}
                                 accInformation={accInformation}
                                 setLoading={(val)=>setLoading(val)}>
                        </Profile>
                        <Skills skills={skills}
                                setSkills={(val)=>{setSkills(val)}}
                                addSkill={()=>{addSkill()}}
                                skillRef={skillRef}
                                editAccount={editAccount}
                                setEditAccount={(val)=>{setEditAccount(val)}}
                                setLoading={(val)=>setLoading(val)}>
                        </Skills>
                        <Contacts contacts={contacts}
                        setContacts={(val) => setContacts(val)}
                                  editAccount={editAccount}
                        ></Contacts>
                    </div>
                    <div className={s.right}>
                        <div className={s.top}>
                            <Forms editAccount={editAccount}
                                   accInformation={accInformation}
                                   uName={uName}
                                   setUName={(val)=>{setUName(val)}}
                                   school={school}
                                   setSchool={(val)=>{setSchool(val)}}
                                   pBirth={pBirth}
                                   setPBirth={(val)=>{setPBirth(val)}}
                                   age={age}
                                   setAge={(val)=>{setAge(val)}}
                                   bDay={bDay}
                                   setBDay={(val)=>{setBDay(val)}}
                                   gender={gender}
                                   setGender={(val)=>{setGender(val)}}
                                   hobbies={hobbies}
                                   setHobbies={(val)=>{setHobbies(val)}}
                                   grSec={grSec}
                                   setGrSec={(val)=>{setGrSec(val)}}
                                   usingAs={usingAs}
                                   setUsingAs={(val)=>{setUsingAs(val)}}>
                            </Forms>
                        </div>
                        <div className={s.mid}>
                            <Selections accInformation={accInformation}
                                        editAccount={editAccount}
                                        setFavSubjects={(val)=>{setFavSubjects(val)}}
                                        usingAs={usingAs}
                                        setUsingAs={(val)=>{setUsingAs(val)}}
                                        purpose={purpose}
                                        setPurpose={(val) => {setPurpose(val)}}>
                            </Selections>
                        </div>
                        <div className={s.bottom}>
                            <Bio 
                                editAccount={editAccount}
                                desc={desc}
                                setDesc={(val)=>{setDesc(val)}} />
                        </div>
                    </div>
                </div>
            </div>
            <ChangesInAccount editAccount={editAccount}
                              setEditAccount={(val)=>setEditAccount(val)}
                              setShowPersonalInfo={(val)=>setShowPersonalInformation(val)}
                              saveAccountChanges={()=>saveAccountChanges()} 
                              showChanges={showChanges}
                              setShowChanges={val=>setShowChanges(val)}/>
        </>
    )
}

export default AccountInformation