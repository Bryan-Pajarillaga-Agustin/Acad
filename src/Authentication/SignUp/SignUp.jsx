import { useRef, useState } from "react"
import Form_1 from "./Sub_Inputs_1/SubInputs1"
import Form_2 from "./Sub_Inputs_2/SubInputs2"
import Form_3 from "./Sub_Inputs_3/SubInputs3"
import Form_4 from "./Sub_Inputs_4/SubInputs4"
import s from "./SignUp.module.css"
import Button from "../../Components/Button"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../../Firebase/Firebase"
import { get } from "firebase/database"
const Signup = ({ setShowSignInPrompt, showSignUpPrompt, setShowSignUpPrompt, setLoading, setContinueAs, setUser, setPage}) => {


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
    const [usage, setUsage] = useState([])
    const [selectedSubjects, setSelectedSubjects] = useState([])
    
    const [usageOptions, setUsageOptions] = useState([
        {content: "As a Student", isIndicated: false},
        {content: "As a Teacher", isIndicated: false},
        {content: "As a Employee", isIndicated: false},
        {content: "I Am Just Using It.", isIndicated: false}
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

    const getInputs = () => {
        const email = emailInput.current?.value
        const passWord = passwordInput.current?.value
        const confirm = confirmPasswordInput.current?.value
        const nick = nickNameInput.current?.value
        const school = schoolInput.current?.value
        const grSec = grSecInput.current?.value

        const eWarn = emailWarning.current
        const pWarn = passWarning.current
        const cWarn = confirmWarning.current
        const nWarn = nameWarning.current
        const sWarn = schoolWarning.current
        const grWarn = grSecWarning.current

        const inputs = [[email, passWord, confirm, nick, school, grSec],
        [eWarn, pWarn, cWarn, nWarn, sWarn, grWarn]]

        return inputs
    }

    const handleIndication = async (par) => {
        const arrayOfInputs = getInputs()
        let testWarning

        if(indicated == 0) {
            testWarning = handleWarning(arrayOfInputs[0], arrayOfInputs[1], indicated)
            if(!testWarning) {
                setLoading(true)
                try{
                    await createUserWithEmailAndPassword(auth, arrayOfInputs[0][0], arrayOfInputs[0][1])
                    setUser(auth.currentUser)
                    await setDoc(doc(db, "Users", auth.currentUser?.uid), {
                        email: arrayOfInputs[0][0]
                    })
                    setIndication(indicated + 1)
                } catch (error) {
                    console.log(error)
                    if(error.code == "auth/email-already-in-use") {
                        arrayOfInputs[1][0].innerText = "Email is already taken."
                    }
                }
                
                setLoading(false)
                
            }
        } else if (indicated == 1) {
            testWarning = handleWarning(arrayOfInputs[0], arrayOfInputs[1], indicated)
        } else if (indicated == 2) {
            
            testWarning = handleWarning(arrayOfInputs[0], arrayOfInputs[1], indicated)
        } else if (indicated == 3 && par == "Submit") {
            createUserFromFirebase(arrayOfInputs[0])
        }

        if(par == "next" && indicated != 3 && !testWarning){
            setIndication(indicated + 1)
        } else if (par == "back" && indicated != 1) {
            setIndication(indicated - 1)
        }
    }

    const handleWarning = (arr1, arr2, ind) => {
        let error = false
        for(let i in arr1){
            if(ind == 0 && i < 3) {
                if(arr1[i] == "") {
                    arr2[i].innerText = "The input field is blank."
                    error = true
                }
    
                if(i == 0) {
                    if(arr1[i].includes("@gmail.com") || arr1[i].includes("@email.com")){
                        arr2[i].innerText = ""
                    } else {
                        arr2[i].innerText = "This is not an email!"
                        error = true
                    }
                } else if(i == 1) {
                    if(arr1[i].length <= 7){
                        arr2[i].innerText = "The password is too short(maximum of 8 characters)."
                        error = true
                    } else {
                        arr2[i].innerText = ""
                    }
                } else if(i == 2) {
                    if(arr1[i] != arr1[i-1]){
                        arr2[i].innerText = "The password isn't match."
                        error = true
                    } else {
                        arr2[i].innerText = ""
                    }
                }
            } else if (ind == 2 && i > 2) {
                if(arr1[i] == ""){
                    arr2[i].innerText = "The input field is blank."
                    error = true
                } else {
                    arr2[i].innerText = ""
                    error = false
                }
            }
        }

        return error ? true : false
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

    const createUserFromFirebase = async (arr1) => {
        setLoading(true)
            try {
                const user = auth.currentUser
                await setDoc(doc(db, "Users", user.uid), {
                    
                    favSubjects: selectedSubjects,
                    usingAs: usage,
                    perInfo: {
                        school: arr1[4],
                        name: arr1[3],
                        grSec: arr1[5],
                        age: "",
                        bDay: "",
                        gender: "",
                        hobbies: "",
                        placeOfBirth: "",
                        skills: "",
                        contacts: {
                            gMail: "",
                            number: "",
                            faceBook: "",
                        },
                        purpose: usingAsInput?.current.value,
                    }
                })
                setShowSignUpPrompt(false)
                handleInputs()
                setContinueAs(true)
            } catch (error) {
                console.log(error.message)
            }
        setLoading(false)
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
        setIndication(0)
    }

    if (showSignUpPrompt == true) return (
        <>
            <div className={s.sign_up_wrapper}>
                
            <Button func={()=>{setShowSignUpPrompt(false), handleInputs(), setPage(1)}} content={"X"} className={s.goToStartingPage}></Button>
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
                                <Button content={indicated == 3 || indicated == 0  ? "SUBMIT" : "NEXT"} func={()=>{indicated == 3 || indicated == 0 ? handleIndication("Submit") : handleIndication("next")}} ></Button>
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