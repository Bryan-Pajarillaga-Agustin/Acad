import s from './StartingNavbar.module.css'
import Button from "../../Components/Button"
import { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase'
const StartingNavbar = ({editing, setPage, indicated, setIndicated, showTaskPrompt, url, setUrl, showSignInPrompt, showSignUpPrompt, setShowSignInPrompt, setShowSignUpPrompt, showSortPrompt, user, setUser, setShowPersonalInformation, setLoading}) => {

    const [showSideBar, setShowSideBar] = useState(false)

    const handleLink = (par) => {
        let link = window.location.href
        link.toLowerCase()
        let index = link.search("/Acad/")
        link = link.slice(0, index + 6)
        console.log(link.concat(par))
        setUrl(link.concat(par))
    }

    const handleSignOut = async () => { 
        setLoading(true)
        try {
            await signOut(auth)
            setUser({})
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        if(url.includes("#Home")) {
            setIndicated(0)
        } else if (url.includes("#Tasks")) {
            setIndicated(1)
        } else if (url.includes("#About")) {
            setIndicated(2)
        } else if (url.includes("#Contacts")) {
            setIndicated(3)
        } 

    },[url])


    return (
        <>
        <nav className={!showSignInPrompt && !showSignUpPrompt && !showTaskPrompt && !editing && !showSortPrompt ? s.nav : s.hideNav}>
                <div className={s.left}>
                    <img src="./web-icon.png" className={s.icon} />
                    <h1>ACAD</h1>
                </div>
                <div className={s.middle}>

                    <ul className={s.NavLinks}>
                        <li onClick={()=>{setIndicated(0), setPage(1), handleLink("#Home")}} className={indicated === 0 ? s.indicated : s.notIndicated}>
                            <a href="#Home"><img src="./icons/house.svg" /> <span>Home<span className={s.indication}></span></span></a> 
                        </li>
                        <li onClick={()=>{setIndicated(1), setPage(2), handleLink("#Tasks")}} className={indicated === 1 ? s.indicated : s.notIndicated}>
                            <a href="#Tasks"><img src="./icons/book-solid.svg"  /> <span>Tasks<span className={s.indication}></span></span></a> </li>
                        <li onClick={()=>{setIndicated(2), setPage(3), handleLink()}} className={indicated === 2 ? s.indicated : s.notIndicated}>
                            <a href=""><img src="./icons/circle-info-solid.svg" /><span>Help<span className={s.indication}></span></span></a>
                        </li>
                    </ul>
                </div>
                {user ?
                        <div className={`${s.right} ${s.LoggedIn}`}>
                            <Button icon={(<i className='fa fa-user'></i>)} className={`${s.User_Button}`} content={"Account"} func={()=>setShowPersonalInformation(true)}/>
                            <Button content={"Sign Out"} func={()=>{handleSignOut()}} className={s.SignUpButt}></Button>
                            <Button className={s.HamburgerButt} func={()=>{setShowSideBar(true)}} content={(<i className="fa fa-list-ul" ></i>)}></Button>
                        </div>
                     :
                        <div className={`${s.right} ${s.notLoggedIn}`}>
                            <Button content={"Sign In"} func={()=>{setShowSignInPrompt(true)}} className={s.SignInButt}></Button>
                            <Button content={"Sign Up"} func={()=>{setShowSignUpPrompt(true)}} className={s.SignUpButt}></Button>
                            <Button className={s.HamburgerButt} func={()=>{setShowSideBar(true)}} content={(<i className="fa fa-list-ul" ></i>)}></Button>
                        </div>
                }
            </nav>

            <div className={showSideBar ? s.sidebar : s.hideSideBar}>
                <ul className={showSideBar ? s.NavLinks : s.hideNavLinks}>
                <Button className={s.HamburgerButt} func={()=>{showSideBar ? setShowSideBar(false) : setShowSideBar(true)}} content={(<i className="fa fa-list-ul" ></i>)}></Button>
                    <li onClick={()=>{setIndicated(0), setPage(1)}} className={indicated === 0 ? s.indicated : s.notIndicated}> <a href="#Home"><img src="./icons/house.svg" /> <span>Home<span className={s.indication}></span></span></a> </li>
                    <li onClick={()=>{setIndicated(1), setPage(2)}} className={indicated === 1 ? s.indicated : s.notIndicated}> <a href="#Tasks"><img src="./icons/book-solid.svg"  /> <span>Tasks<span className={s.indication}></span></span></a> </li>
                    <li onClick={()=>{setIndicated(2), setPage(3)}} className={indicated === 2 ? s.indicated : s.notIndicated}> <a href=""><img src="./icons/circle-info-solid.svg" /><span>Help<span className={s.indication}></span></span></a></li>
                </ul>
            </div>
        </>
    )
}

export default StartingNavbar