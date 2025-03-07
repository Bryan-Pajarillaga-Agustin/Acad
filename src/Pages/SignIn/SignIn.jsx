import s from "../SignIn/SignIn.module.css"
import Button from "../../Components/Button.jsx"
import { useReducer, useRef, useState } from "react"
import {db, firebase} from "../../Firebase/Firebase.js"
import { ref, get } from "firebase/database"

export default function SignIn({page, setPage}){
    const [showPass, setShowPass] = useState(false)
    const dbRef = ref(db, 'Users')
    const [data, setdata] = useState()
    get(dbRef).then((snapshot) => {
        const dt = snapshot.val()
        setdata(dt)
    })

    const refInvalid1 = useRef(null)
    const refInvalid2 = useRef(null)
    const username_inp = useRef(null)
    const password_inp = useRef(null) // Replace 'your/data/path' with the actual path to your data

    
    
    const userTestValue = (e) => {
        if(e.value == null || e.value != null) {
            refInvalid1.current.textContent = ""
        }
    }
    const passTestValue = (e) => {
        if(e.value == null || e.value != null) {
            refInvalid2.current.textContent = ""
        }
    }
    const signIn = () => {
        if(username_inp.current.value == null){
            username_inp.current.textContent = "Please fill the username first!"
        } 
        // else if(username_inp.current.value != null ){
        //     refInvalid1.current.textContent = "Invalid Username/Email!"
        // }

        console.log(data)
        if(username_inp.current.value == data.user){
            
        }
    }

    return(
        <>
            <div className={s.sign_up_container}>
                <div className={s.top_arc}>SIGN IN</div>
                <div className={s.form}>
                    <div className={s.username_con}>
                        <h3>Username :</h3>
                        <input className="username_inp" ref={username_inp} onInput={(e)=>{userTestValue(e)}}></input>
                        <span ref={refInvalid1}></span>
                    </div>
                    <div className={s.password_con}>
                        <h3>Password :</h3>
                        <input type={showPass ? "text" : "password"} ref={password_inp} onInput={()=>{passTestValue(e)}} className={s.Password}></input>
                        <span ref={refInvalid2}></span>
                        <img src={showPass ? "../../../public/password/visible.png" :
                                             "../../../public/password/unsee.png"}
                             className={s.see_password} onClick={()=>{showPass ? setShowPass(false) : setShowPass(true)}}/>
                    </div>
                    <div className={s.more_actions}>
                        <span className={s.forgot_pass}>Forgot Password</span>
                        <span className={s.create_acc}>Doesn't Have An Account?</span>
                    </div>
                    <Button className={s.sign_in_button} func={()=>{signIn()}} content={"SIGN IN"}></Button>
                </div>

                <div className={s.other_platforms_container}>
                    <div className={s.icon_wrapper}>
                        <div className={s.wrapper}><img src="../public/platforms/GG.png "/></div>
                        <div className={s.wrapper}><img src="../public/platforms/facebook.png"/></div>
                        <div className={s.wrapper}><img src="../public/platforms/Instagram.png"/></div>
                    </div>
                    <h3>SIGN IN WITH DIFFERENT PLATFORMS</h3>
                </div>
            </div>
        </>
    )
}