import s from "../Components/Button.module.css"

const Button = ({className, content, func, submit, icon, change})=>{
    return <button className={`${className}`} onChange={()=>{change()}} onSubmit={(e)=>{submit(e)}} onClick={()=>{func()}}>{icon}{content}</button>
}

export default Button