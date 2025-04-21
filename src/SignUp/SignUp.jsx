import { useState } from "react"
import Form_1 from "./Sub_Inputs_1/SubInputs1"
import Form_2 from "./Sub_Inputs_2/SubInputs2"
import Form_3 from "./Sub_Inputs_3/SubInputs3"
import s from "../SignUp/SignUp.module.css"
import Button from "../Components/Button"
const Signup = ({page, setPage, showSignUpPrompt, setShowSignUpPrompt}) => {
    const [show, setShow] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [indicated, setIndication] = useState(0)

    const handleIndication = (par) => {
        console.log("type")
        if(par == "next" && indicated != 2){
            setIndication(indicated + 1)
        } else if (par == "back" && indicated != 0) {
            setIndication(indicated - 1)
        }
    }
    if (showSignUpPrompt == true) return (
        <>
            <div className={s.sign_up_wrapper}>
                
            <Button func={()=>{setShowSignUpPrompt(false)}} content={"X"} className={s.goToStartingPage}></Button>
                <form onSubmit={(e)=>{e.preventDefault()}} className={s.form_1}>
                    <header>SIGN UP</header>
                    <div className={s.to_bottom}>
                        <Form_1 indicated={indicated} show={show} showConfirm={showConfirm}
                            setIndication={(e)=>{setIndication(e)}} setShow={(e)=>{setShow(e)}}
                            setIndicated={(e)=>{setIndication(e)}} setShowConfirm={(e)=>{setShowConfirm(e)}}  />
                        <Form_2 indicated={indicated} show={show} showConfirm={showConfirm}
                            setIndication={(e)=>{setIndication(e)}} setShow={(e)=>{setShow(e)}}
                            setIndicated={(e)=>{setIndication(e)}} setShowConfirm={(e)=>{setShowConfirm(e)}}  />
                        <Form_3 indicated={indicated} show={show} showConfirm={showConfirm}
                            setIndication={(e)=>{setIndication(e)}} setShow={(e)=>{setShow(e)}}
                            setIndicated={(e)=>{setIndication(e)}} setShowConfirm={(e)=>{setShowConfirm(e)}}  />
                        <div className={s.bottom}>
                            <div className={s.buttons}>
                                <Button content={"BACK"} func={()=>{handleIndication("back")}}></Button>
                                <Button content={indicated == 2 ? "SUBMIT" : "NEXT"} func={()=>{handleIndication("next")}} ></Button>
                            </div>
                            <div className={s.indicator}>
                                <div className={indicated == 0 ? s.indicated : s.not_indicated}></div>
                                <div className={indicated == 1 ? s.indicated : s.not_indicated}></div>
                                <div className={indicated == 2 ? s.indicated : s.not_indicated}></div>
                            </div>
                            <h4 id={s.SignUp} onClick={()=>setPage(.1)}> <a>Already Have an Account?</a> </h4>
                            
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup