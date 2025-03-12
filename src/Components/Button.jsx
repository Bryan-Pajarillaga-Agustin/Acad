import s from "../Components/Button.module.css"

const Button = ({className, content, func, submit})=>{
    return <button className={`${className}`} onSubmit={(e)=>{submit(e)}} onClick={()=>{func()}}>{content}</button>
}

export default Button