import s from "../Sub_Inputs_1/SubInputs1.module.css"
const Form_1 = ({show, indicated, showConfirm, setShow, setIndicated, setShowConfirm}) => {

    return (
        <div className={indicated == 0 ? s.inputs_1 : s.hide}>
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
    )
}

export default Form_1