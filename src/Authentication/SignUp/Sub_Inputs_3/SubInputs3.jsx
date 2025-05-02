import s from "./SubInputs3.module.css"
const Form_3 = ({show, indicated, showConfirm, nickNameInput, schoolInput, grSecInput, nameWarning, schoolWarning, grSecWarning}) => {

    return (
        <div className={indicated == 2 ? s.inputs_3 : s.hide}>
            <div className={s.username}>
                <h4>Name</h4>
                <input type="text" ref={nickNameInput}/>
                <span ref={nameWarning}></span>
            </div>
            <div className={s.password}>
                <h4>School</h4>
                <input type="text" ref={schoolInput}/>
                <span ref={schoolWarning}></span>
            </div>
            <div className={s.confirm}>
                <h4>Grade & Section</h4>
                <input type="text" ref={grSecInput}/>   
                <span ref={grSecWarning}></span>
            </div>
        </div>
    )
}

export default Form_3