import { useEffect, useInsertionEffect, useRef, useState } from "react"
import Form_1 from "./Sub_Inputs_1/SubInputs1"
import Form_2 from "./Sub_Inputs_2/SubInputs2"
import Form_3 from "./Sub_Inputs_3/SubInputs3"
import Form_4 from "./Sub_Inputs_4/SubInputs4"
import s from "./SignUp.module.css"
import Button from "../../Components/Button"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../../Firebase/Firebase"
const Signup = ({setUsers ,setShowSignInPrompt, showSignUpPrompt, setShowSignUpPrompt, setLoading, setContinueAs}) => {


    // Refs
    const userNameInput = useRef(null)
    const userWarning = useRef(null)
    const passwordInput = useRef(null)
    const passWarning = useRef(null)
    const emailInput = useRef(null)
    const emailWarning = useRef(null)
    const confirmPasswordInput = useRef(null)
    const confirmWarning = useRef(null)
    const nickNameInput = useRef(null)
    const nameWarning = useRef(null)
    const schoolInput = useRef(null)
    const schoolWarning = useRef(null)
    const grSecInput = useRef(null)
    const grSecWarning = useRef(null)
    const usingAsInput = useRef(null)


    // Boolean Variables
    const [show, setShow] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    // Array and object variables
    const [indicated, setIndication] = useState(0)
    const [usage, setUsage] = useState()
    const [selectedSubjects, setSelectedSubjects] = useState([])
    
    const [usageOptions, setUsageOptions] = useState([
        {content: "For Studies", isIndicated: false},
        {content: "For Teaching Purposes", isIndicated: false},
        {content: "For My Job", isIndicated: false},
        {content: "Just for Fun", isIndicated: false}
    ])
    const [subjects, setSubjects] = useState([
        {
            content: "TLE",
            testClass: false
        },
        {
            content: "Mathematics",
            testClass: false
        }, 
        {
            content: "Science",
            testClass: false
        }, 
        {
            content: "English",
            testClass: false
        },
        {
            content: "Colloquium",
            testClass: false
        },{
            content: "Filipino",
            testClass: false
        },
        {
            content: "Mapeh",
            testClass: false
        },
        {
            content: "AP",
            testClass: false
        },
        {
            content: "ESP",
            testClass: false
        }
    ])

    const handleIndication = (par) => {
        if(par == "next" && indicated != 3){
            setIndication(indicated + 1)
        } else if (par == "back" && indicated != 0) {
            setIndication(indicated - 1)
        }
    }

    const handleUsageOptions = (i) => {
        let data = usageOptions
        for(let ind in data) {
            if(ind == i) {
                data = data[i].content 
                break
            }
        }

        setUsage(data)
        setUsageOptions((prev)=>{
            return prev.map((each, index)=>{
                if(i == index) {
                    return { ...each, isIndicated: true }
                } else {
                    return {...each, isIndicated: false}
                }
            })
        })
    }

    const handleSubjects = (i) => {
        let data = subjects
        let selectedData = []
        data = data.map((each, index)=>{
            if(i == index) {
                return { ...each, testClass: each.testClass == true ? false : true }
            } else {
                return {...each}
            }
        })

        for(let ind in data) {
            if(data[ind].testClass == true) {
                selectedData.push(data[ind])
            }
        }

        setSelectedSubjects([...selectedData])
        setSubjects((prev)=>{
            return prev.map((each, index)=>{
                if(i == index) {
                    return { ...each, testClass: each.testClass == true ? false : true }
                } else {
                    return {...each}
                }
            })
        })
    }

    const createNewUser = async () => {
        const newUser = {
            password: passwordInput.current.value,
            email: emailInput.current.value,
            school: schoolInput.current.value,
            grSec: grSecInput.current.value,
            favSubjects: selectedSubjects
        }

        
        try {
            await createUserWithEmailAndPassword(auth, emailInput.current.value, passwordInput.current.value)
            const user = auth.currentUser
            setLoading(true)
            setShowSignUpPrompt(false)
            if(user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: emailInput.current.value,
                    school: schoolInput.current.value,
                    name: nickNameInput.current.value,
                    grSec: grSecInput.current.value,
                    favSubjects: selectedSubjects,
                    usingAs: usingAsInput?.current.value,
                    purpose: usage
                })
            }

            setUsers((prev)=>{
                return [...prev, newUser]
            })
            setLoading(false)
            setContinueAs(true)
        }
        catch (error) {
            console.log(error)
        }
    }

    function handleInputs(){
        passwordInput.current.value = ""
        passWarning.current.value = ""
        emailInput.current.value = ""
        emailWarning.current.value = ""
        confirmPasswordInput.current.value = ""
        confirmWarning.current.value = ""
        nickNameInput.current.value = ""
        nameWarning.current.value = ""
        schoolInput.current.value = ""
        schoolWarning.current.value = ""
        grSecInput.current.value = ""
        grSecWarning.current.value = ""
        usingAsInput.current.value = ""

        setSubjects((prev)=>{
            return prev.map((each)=>{
                return {...each, testClass: false}
            })
        })
        setUsageOptions((prev)=>{
            return prev.map((each)=>{
                return {...each, isIndicated: false}
            })
        })
        setUsage(null)
        setSelectedSubjects([])
    }

    if (showSignUpPrompt == true) return (
        <>
            <div className={s.sign_up_wrapper}>
                
            <Button func={()=>{setShowSignUpPrompt(false), handleInputs()}} content={"X"} className={s.goToStartingPage}></Button>
                <form onSubmit={(e)=>{e.preventDefault()}} className={s.form_1}>
                    <header>SIGN UP</header>
                    <div className={s.to_bottom}>
                        <Form_1 indicated={indicated}
                                show={show}
                                showConfirm={showConfirm}
                                setShowConfirm={(val)=>{setShowConfirm(val)}} 
                                setShow={(val)=>{setShow(val)}}
                                passwordInput={passwordInput}
                                confirmPasswordInput={confirmPasswordInput}
                                emailInput={emailInput}
                                passWarning={passWarning}
                                confirmWarning={confirmWarning}
                                emailWarning={emailWarning} />
                        <Form_2 indicated={indicated} 
                                usageOptions={usageOptions}
                                setUsageOptions={(e)=>{setUsageOptions(e)}}
                                handleUsageOptions={(i)=>{handleUsageOptions(i)}}
                                usingAsInput={usingAsInput} />   
                        <Form_3 indicated={indicated}
                                schoolInput={schoolInput}
                                schoolWarning={schoolWarning}
                                grSecInput={grSecInput}
                                grSecWarning={grSecWarning}
                                nickNameInput={nickNameInput}
                                nameWarning={nameWarning} />
                        <Form_4 indicated={indicated} 
                                subjects={subjects}
                                handleSubjects={(e)=>{handleSubjects(e)}}/>
                        <div className={s.bottom}>
                            <div className={s.buttons}>
                                <Button content={"BACK"} func={()=>{handleIndication("back")}}></Button>
                                <Button content={indicated == 3 ? "SUBMIT" : "NEXT"} func={()=>{indicated == 3 ? createNewUser() : handleIndication("next")}} ></Button>
                            </div>
                            <div className={s.indicator}>
                                <div className={indicated == 0 ? s.indicated : s.not_indicated}></div>
                                <div className={indicated == 1 ? s.indicated : s.not_indicated}></div>
                                <div className={indicated == 2 ? s.indicated : s.not_indicated}></div>
                                <div className={indicated == 3 ? s.indicated : s.not_indicated}></div>
                            </div>
                            <h4 id={s.SignUp} onClick={()=>{setShowSignInPrompt(true), setShowSignUpPrompt(false), handleInputs()}}> <a>Already Have an Account?</a> </h4>
                            
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Signup