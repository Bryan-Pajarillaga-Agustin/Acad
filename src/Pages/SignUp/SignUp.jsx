import { useState } from "react"
import Button from "../../Components/Button"
import s from "../SignUp/SignUp.module.css"
const Signup = ({page, setPage}) => {
    const [show, setShow] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [indicated, setIndication] = useState(0)
    if (page == 1) return (
        <>
            <div className={s.sign_up_wrapper}>
                <form>
                    <header>SIGN UP</header>
                    <div className={s.inputs}>
                        <div className={s.username}>
                            <h4>Username</h4>
                            <input type="text" />
                        </div>
                        <div className={s.password}>
                            <h4>Password</h4>
                            <input type={show ? "text" : "password"} />
                            <img src={show ? "./password/visible.png" :
                                             "./password/unsee.png"}
                                 className={s.see_password} onClick={()=>{show ? setShow(false) : setShow(true)}}/>
                        </div>
                        <div className={s.confirm}>
                            <h4>Confirm Password</h4>
                            <input type={showConfirm ? "text" : "password"} /> 
                            <img src={showConfirm ? "./password/visible.png" :
                                                    "./password/unsee.png"}
                                 className={s.see_confirm} onClick={()=>{showConfirm ? setShowConfirm(false) : setShowConfirm(true)}}/> 
                        </div>
                    </div>
                    <div className={s.bottom}>
                        <div className={s.buttons}>
                            <Button content={"BACK"} ></Button>
                            <Button content={"NEXT"} ></Button>
                        </div>
                        <div className={s.indicator}>
                            <div className={indicated == 0 ? s.indicated : s.not_indicated}></div>
                            <div className={indicated == 1 ? s.indicated : s.not_indicated}></div>
                            <div className={indicated == 2 ? s.indicated : s.not_indicated}></div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup