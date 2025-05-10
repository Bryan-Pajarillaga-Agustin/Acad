import s from "./SignIn.module.css"
import Button from "../../Components/Button.jsx"
import { useEffect, useRef, useState } from "react"
import { auth, db } from "../../Firebase/Firebase.js"
import { signInWithEmailAndPassword } from "firebase/auth"
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"

export default function SignIn({setPage, setUser, showSignInPrompt, setShowSignInPrompt, setShowSignUpPrompt, setLoading, setContinueAs}){
    const [showPass, setShowPass] = useState(false)
    // const dbRef = ref(db, 'Users')
    // const [data, setdata] = useState()
    // get(dbRef).then((snapshot) => {
    //     const dt = snapshot.val()
    //     setdata(dt)
    // })

    const refInvalid1 = useRef(null)
    const refInvalid2 = useRef(null)
    const emailInput = useRef(null)
    const passWordInput = useRef(null) // Replace 'your/data/path' with the actual path to your data

    const getInputs = () => {
        const email = emailInput?.current.value
        const pass = passWordInput?.current.value
        const warning1 = refInvalid1.current
        const warning2 = refInvalid2.current
        
        return {email: email, pass: pass, warning1: warning1, warning2: warning2}
    }

    const clearInputs = () => {
        const inputs = getInputs()
        if(inputs.email) inputs.email = ""
        if(inputs.pass) inputs.pass = ""
        inputs.warning1.innerText = ""
        inputs.warning2.innerText = ""
    }   
    
    const userTestValue = (e) => {
        const inputs = getInputs()
        let error = false
        if(e?.target.value == "" || inputs.email == "") {
            refInvalid1.current.textContent = "The input field is blank!"
        } else {
            refInvalid1.current.textContent = ""
        }
        
        return error ? true : false
    }
    const passTestValue = (e) => {
        const inputs = getInputs()
        let error = false
        if(e?.target.value == "" || inputs.pass == "") {
            refInvalid2.current.textContent = "The input field is blank!"
        } else {
            refInvalid2.current.textContent = ""
        }

        return error ? true : false
    }

    const signInByEmailAndPassword = async ()  => {
        const err1 = userTestValue()
        const err2 = passTestValue()
        
        if(!err1 && !err2) {
            setLoading(true)
            try {
                await signInWithEmailAndPassword(
                    auth,
                    emailInput.current.value,
                    passWordInput.current.value
                )
                clearInputs()
                setUser(auth.currentUser)
                setShowSignInPrompt(false)
                setContinueAs(true)
            } catch (error) {
                if(error.code == 'auth/invalid-email') {
                    refInvalid1.current.textContent = "Invalid email/Email doesn't exist."
                }

                if(error.code == 'auth/invalid-credential') {
                    refInvalid2.current.textContent = "Password does not match."
                }
            } 
            setLoading(false)
        }
    }

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        setLoading(true)
        try {
            await signInWithPopup(auth, provider)
            clearInputs()
            setUser(auth.currentUser)
            const docRef = doc(db, "Users", auth.currentUser?.uid)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setShowSignInPrompt(false)
            } else {
                setShowSignUpPrompt(true)
            }
            setContinueAs(true)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }


    if (showSignInPrompt == true) return(
        <>
            <div className={s.sign_up_container}>
                <Button func={()=>{setShowSignInPrompt(false), clearInputs(), setPage(1)}} content={"X"} className={s.goToStartingPage}></Button>
                <div className={s.top_arc}>SIGN IN</div>
                <div className={s.form}>
                    <div className={s.username_con}>
                        <h3>Username :</h3>
                        <input className="emailInput" ref={emailInput} onInput={(e)=>{userTestValue(e)}}></input>
                        <span ref={refInvalid1}></span>
                    </div>
                    <div className={s.password_con}>
                        <h3>Password :</h3>
                        <input type={showPass ? "text" : "password"} ref={passWordInput} onInput={(e)=>{passTestValue(e)}} className={s.Password}></input>
                        <span ref={refInvalid2}></span>
                        <img src={showPass ? "./password/visible.png" :
                                             "./password/unsee.png"}
                             className={s.see_password} onClick={()=>{showPass ? setShowPass(false) : setShowPass(true)}}/>
                    </div>
                    <div className={s.more_actions}>
                        <span className={s.forgot_pass}>Forgot Password</span>
                        <span className={s.create_acc} onClick={()=>{setShowSignInPrompt(false), setShowSignUpPrompt(true)}}>Doesn't Have An Account?</span>
                    </div>
                    <Button className={s.sign_in_button} func={()=>{signInByEmailAndPassword()}} content={"SIGN IN"}></Button>
                </div>

                <div className={s.other_platforms_container}>
                    <div className={s.icon_wrapper}>
                        <div className={s.wrapper} onClick={()=>{signInWithGoogle()}}><img src="./platforms/GG.png "/></div>
                        <div className={s.wrapper}><img src="./platforms/facebook.png"/></div>
                        <div className={s.wrapper}><img src="./platforms/Instagram.png"/></div>
                    </div>
                    <h3>SIGN IN WITH DIFFERENT PLATFORMS</h3>
                </div>
            </div>
        </>
    )
}