import s from './StartingNavbar.module.css'
import Button from "../../Components/Button"
import { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase'
const StartingNavbar = ({setPaging, editing, setPage, indicated, setIndicated, showTaskPrompt, url, setUrl, showSignInPrompt, showSignUpPrompt, setShowSignInPrompt, setShowSignUpPrompt, showSortPrompt, user, setShowPersonalInformation, continueAs, setIsSigningOut, setShowSaveChanges, showSaveChanges}) => {

    const [showSideBar, setShowSideBar] = useState(false)
    const links = [
        {
            content: "Home",
            link: "#Home",
            src: "./icons/house.svg",
            paging: 1
        },
        {
            content: "Tasks",
            link: "#Tasks",
            src: "./icons/book-solid.svg" ,
            paging: 2
        },
        {
            content: "Social",
            link: "#Social",
            src: "./icons/circle-info-solid.svg",
            paging: 3
        }
    ]

    const handleLink = (par) => {
        let link = window.location.href
        link.toLowerCase()
        let index = link.search("/Acad/")
        link = link.slice(0, index + 6)
        console.log(link.concat(par))
        setUrl(link.concat(par))
    }

    const handlePagination = (link, i) => {
        const locStor = JSON.parse(localStorage.getItem("Changes"))
        if(locStor == null) {
            setIndicated(0)
            setPage(link.paging)
            handleLink(link.link)
        } else {
            setShowSaveChanges(true)
            setPaging({link: link.link, page: link.paging})
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
        <nav className={!showSignInPrompt && !showSignUpPrompt && !showTaskPrompt && !editing && !showSortPrompt && !continueAs && !showSaveChanges ? s.nav : s.hideNav}>
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
                                        <a href={!showSaveChanges ? link.link : null}><img src={link.src} /> <span>{link.content}<span className={s.indication}></span></span></a> 
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
                                    <a href={!showSaveChanges ? link.link : null}><img src={link.src} /> <span>{link.content}<span className={s.indication}></span></span></a> 
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