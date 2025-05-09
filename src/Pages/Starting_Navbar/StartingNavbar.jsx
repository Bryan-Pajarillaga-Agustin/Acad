import s from './StartingNavbar.module.css'
import Button from "../../Components/Button"
import { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase'
const StartingNavbar = ({setPaging, editing, setPage, indicated, setIndicated, showTaskPrompt, url, setUrl, showSignInPrompt, showSignUpPrompt, setShowSignInPrompt, setShowSignUpPrompt, user, setShowPersonalInformation, continueAs, setIsSigningOut, showNavBar, showSaveChanges, setShowSaveChanges, setShowNavbar, setShowMakeUserSignIn}) => {

    const [showSideBar, setShowSideBar] = useState(false)
    const links = [
        {
            content: "Home",
            link: "#Home",
            icon: ()=>{return (<i className="fa fa-home"></i>)},
            paging: 1
        },
        {
            content: "Tasks",
            link: "#Tasks",
            icon: ()=>{return (<i className="fa fa-book"></i>)},
            paging: 2
        },
        {
            content: "About",
            link: "#About",
            icon: ()=>{return (<i className="fa fa-user"></i>)},
            paging: 3
        },
        {
            content: "Contacts",
            link: "#Contacts",
            icon: ()=>{return (<i className="fa fa-phone"></i>)},
            paging: 4
        }
    ]

    const handleLink = (par) => {
        let link = window.location.href
        link.toLowerCase()
        let index = link.search("/Acad/")
        link = link.slice(0, index + 6)
        setUrl(link.concat(par))
    }

    const handlePagination = (link, i) => {
        const locStor = JSON.parse(localStorage.getItem("Changes"))
        if(user != null){
            if(locStor == null) {
                setIndicated(0)
                setPage(link.paging)
                handleLink(link.link)
            } else {
                setShowSaveChanges(true)
                setShowNavbar(false)
                setShowSideBar(false)
                setPaging({link: link.link, page: link.paging})
            }
        } else {
            if(locStor == null && link.paging != 2) {
                setIndicated(0)
                setPage(link.paging)
                handleLink(link.link)
            }

            if(link.paging == 2) {
                setShowMakeUserSignIn(true)
                setShowSideBar(false)
            }
        }
        console.log(link)
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
        <nav className={!showSignInPrompt && !showSignUpPrompt && !showTaskPrompt && !editing && !continueAs && showNavBar ? s.nav : s.hideNav}>
                <div className={s.left}>
                    <img src="./web-icon.png" className={s.icon} />
                    <h1>ACAD</h1>
                </div>
                <div className={s.middle}>

                    <ul className={s.NavLinks}>
                        {
                            links.map((link, i)=>{
                                return (
                                    <li onClick={()=>{handlePagination(link, i)}} key={link.link} className={indicated === i ? s.indicated : s.notIndicated}>
                                        <a href={!showSaveChanges ? link.link : null}>{link.icon()} <span>{link.content}<span className={s.indication}></span></span></a> 
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {user ?
                        <div className={`${s.right} ${s.LoggedIn}`}>
                            <Button icon={(<i className='fa fa-user'></i>)} className={`${s.User_Button}`} content={"Account"} func={()=>setShowPersonalInformation(true)}/>
                            <Button content={"Sign Out"} func={()=>{setIsSigningOut(true)}} className={s.SignUpButt}></Button>
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

            <div className={showSideBar && !showSaveChanges ? s.sidebar : s.hideSideBar}>
                <ul className={showSideBar ? s.NavLinks : s.hideNavLinks}>
                    <Button className={s.HamburgerButt} func={()=>{showSideBar  ? setShowSideBar(false) : setShowSideBar(true)}} content={(<i className="fa fa-list-ul" ></i>)}></Button>
                    {
                        links.map((link, i)=>{
                            return (
                                <li onClick={()=>{handlePagination(link, i)}} key={link.link} className={indicated === i ? s.indicated : s.notIndicated}>
                                    <a href={!showSaveChanges ? link.link : null}>{link.icon()} <span>{link.content}<span className={s.indication}></span></span></a> 
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default StartingNavbar