import s from './StartingNavbar.module.css'
import Button from "../../Components/Button"
import { useEffect, useState } from 'react'
const StartingNavbar = ({setStartingPage, page, showTaskPrompt}) => {
    const [indicated, setIndicated] = useState(0)
    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <>
            <nav className={page > .2 && !showTaskPrompt ? s.nav : s.hideNav}>
                <div className={s.left}>
                    <img src="./web-icon.png" className={s.icon} />
                    <h1>ACAD</h1>
                </div>
                <div className={s.middle}>

                    <ul className={s.NavLinks}>
                        <li onClick={()=>{setIndicated(0), setStartingPage(1)}} className={indicated === 0 ? s.indicated : s.notIndicated}> <a href="#Home"><img src="./icons/house.svg" /> <span>Home<span className={s.indication}></span></span></a> </li>
                        <li onClick={()=>{setIndicated(1), setStartingPage(2)}} className={indicated === 1 ? s.indicated : s.notIndicated}> <a href="#Tasks"><img src="./icons/book-solid.svg"  /> <span>Tasks<span className={s.indication}></span></span></a> </li>
                        <li onClick={()=>{setIndicated(2), setStartingPage(3)}} className={indicated === 2 ? s.indicated : s.notIndicated}> <a href=""><img src="./icons/circle-info-solid.svg" /><span>Help<span className={s.indication}></span></span></a></li>
                    </ul>
                </div>
                <div className={s.right}>
                    <Button content={"Sign In"} func={()=>{setStartingPage(0.1)}} className={s.SignInButt}></Button>
                    <Button content={"Sign Up"} func={()=>{setStartingPage(0.2)}} className={s.SignUpButt}></Button>
                    <Button className={s.HamburgerButt} func={()=>{setShowSideBar(true)}} content={(<i className="fa fa-list-ul" ></i>)}></Button>
                </div>
            </nav>

            <div className={showSideBar ? s.sidebar : s.hideSideBar}>
                <ul className={showSideBar ? s.NavLinks : s.hideNavLinks}>
                <Button className={s.HamburgerButt} func={()=>{showSideBar ? setShowSideBar(false) : setShowSideBar(true)}} content={(<i className="fa fa-list-ul" ></i>)}></Button>
                    <li onClick={()=>{setIndicated(0), setStartingPage(1)}} className={indicated === 0 ? s.indicated : s.notIndicated}> <a href="#Home"><img src="./icons/house.svg" /> <span>Home<span className={s.indication}></span></span></a> </li>
                    <li onClick={()=>{setIndicated(1), setStartingPage(2)}} className={indicated === 1 ? s.indicated : s.notIndicated}> <a href="#Tasks"><img src="./icons/book-solid.svg"  /> <span>Tasks<span className={s.indication}></span></span></a> </li>
                    <li onClick={()=>{setIndicated(2), setStartingPage(3)}} className={indicated === 2 ? s.indicated : s.notIndicated}> <a href=""><img src="./icons/circle-info-solid.svg" /><span>Help<span className={s.indication}></span></span></a></li>
                </ul>
            </div>
        </>
    )
}

export default StartingNavbar