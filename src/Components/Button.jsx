import s from "../Components/Button.module.css"

const Button = ({className, content, func})=>{
    return <button className={className} onClick={()=>{func()}}>{content}</button>
}

export default Button