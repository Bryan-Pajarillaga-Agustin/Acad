import s from "./MakeUserSignIn.module.css"
import Button from "../../Components/Button"

const MakeUserSignIn = ({ showMakeUserSignIn, setShowMakeUserSignIn, setPage, setShowSignInPrompt, setShowSignUpPrompt }) => {
    return (
        <>
            <div className={showMakeUserSignIn ? s.Make_User_Sign_In_Wrapper : s.Hide_Make_User_Sign_In_Wrapper}>
                <div className={s.Make_User_Sign_In_Box}>
                    <Button icon={(<i className="fa fa-close"></i>)}
                            className={s.Hide_Prompt_Button}
                            func={()=>{setShowMakeUserSignIn(false), setPage(1)}}/>
                    <div className={s.Images}>
                        <img src="./Public/cat.png" />
                        <img src="./Public/!.png" />
                    </div>
                    <h1>You're not Signed In !</h1>
                    <p>Create an account, log in and get free access to the advanced To-Do List Web Application</p>
                    <div className={s.Buttons}>
                        <Button 
                                content={"Sign Up"}
                                func={()=>{
                                    setShowSignUpPrompt(true)
                                    setShowMakeUserSignIn(false)
                                }}/>
                        <Button 
                                content={"Sign In"}
                                func={()=>{
                                    setShowSignInPrompt(true)
                                    setShowMakeUserSignIn(false)
                                }}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MakeUserSignIn