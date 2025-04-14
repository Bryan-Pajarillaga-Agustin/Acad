import s from "../Sub_Inputs_2/SubInputs2.module.css"
const Form_2 = ({show, indicated, showConfirm, setShow, setIndicated, setShowConfirm}) => {

    return (
        <div className={indicated == 1 ? s.inputs_2 : s.hide}>
            <div className={s.username}>
                <h4>Name</h4>
                <input type="text" />
            </div>
            <div className={s.password}>
                <h4>School</h4>
                <input type={show ? "text" : "password"} />
            </div>
            <div className={s.confirm}>
                <h4>Grade & Section</h4>
                <input type={showConfirm ? "text" : "password"} />   
            </div>
        </div>
    )
}

export default Form_2