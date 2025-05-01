import s from "../Sub_Inputs_1/SubInputs1.module.css"
const Form_1 = ({show, indicated, showConfirm, setShow, setShowConfirm, passwordInput, confirmPasswordInput, emailInput, passWarning, confirmWarning, emailWarning}) => {

    return (
        <div className={indicated == 0 ? s.inputs_1 : s.hide}>
            <div className={s.email}>
                <h4>Email</h4>
                <input type="text" ref={emailInput}/> 
                <span ref={emailWarning}></span>
            </div>
            <div className={s.password}>
                <h4>Password</h4>
                <input type={show ? "text" : "password"} ref={passwordInput} />
                <img src={show ? "./password/visible.png" :
                                "./password/unsee.png"}
                    className={s.see_password} onClick={()=>{show ? setShow(false) : setShow(true)}}/>
                <span ref={passWarning}></span>
            </div>
            <div className={s.confirm}>
                <h4>Confirm Password</h4>
                <input type={showConfirm ? "text" : "password"} ref={confirmPasswordInput}/> 
                <img src={showConfirm ? "./password/visible.png" :
                                        "./password/unsee.png"}
                    className={s.see_confirm} onClick={()=>{showConfirm ? setShowConfirm(false) : setShowConfirm(true)}}/> 
                <span ref={confirmWarning}></span>
            </div> 
            
        </div>
    )
}

export default Form_1