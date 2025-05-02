import s from "./SignIn.module.css"
import Button from "../../Components/Button.jsx"
import { useEffect, useRef, useState } from "react"
import { auth } from "../../Firebase/Firebase.js"
import { signInWithEmailAndPassword } from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth"

export default function SignIn({user, setUser, showSignInPrompt, setShowSignInPrompt, setShowSignUpPrompt, setLoading}){
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

    
    
    const userTestValue = (e) => {
        if(e.target.value == null || e.target.value != null) {
            refInvalid1.current.textContent = ""
        }
    }
    const passTestValue = (e) => {
        if(e.target.value == null || e.target.value != null) {
            refInvalid2.current.textContent = ""
        }
    }
    const signIn = async ()  => {
        setLoading(true)

        try {
            await signInWithEmailAndPassword(
                auth,
                emailInput.current.value,
                passWordInput.current.value
            )

            setUser(auth.currentUser)
            setLoading(false)
            setShowSignInPrompt(false)
        } catch (error) {
            console.log(error)
        }   
    }

    if (showSignInPrompt == true) return(
        <>
            <div className={s.sign_up_container}>
                <Button func={()=>{setShowSignInPrompt(false)}} content={"X"} className={s.goToStartingPage}></Button>
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
                    <Button className={s.sign_in_button} func={()=>{signIn()}} content={"SIGN IN"}></Button>
                </div>

                <div className={s.other_platforms_container}>
                    <div className={s.icon_wrapper}>
                        <div className={s.wrapper}><img src="./platforms/GG.png "/></div>
                        <div className={s.wrapper}><img src="./platforms/facebook.png"/></div>
                        <div className={s.wrapper}><img src="./platforms/Instagram.png"/></div>
                    </div>
                    <h3>SIGN IN WITH DIFFERENT PLATFORMS</h3>
                </div>
            </div>
        </>
    )
}