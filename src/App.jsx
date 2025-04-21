import { useEffect, useState } from "react"
import Home from "./Pages/Home/Home"
import { Tasks } from "./Pages/Overview/Tasks"
import StartingNavbar from "./Pages/Starting_Navbar/StartingNavbar"
import SignIn from "./SignIn/SignIn"
import Signup from "./SignUp/SignUp"
import s from "./App.module.css"
function App() {

  // Booleans

  
  const [showTaskPrompt, setShowTaskPrompt] = useState(false)
  const [editing, setEditing] = useState(false)
  const [LogIN, setLogIN] = useState(false)
  const [url, setUrl] = useState(window.location.href)
  const [showSignInPrompt, setShowSignInPrompt] = useState(false)
  const [showSignUpPrompt, setShowSignUpPrompt] = useState(false)

  // Page Indicators
  const [MainPage, setMainPage] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(()=>{
    if(url.includes("#Home")) {
      setPage(1)
    } else if (url.includes("#Tasks")) {
      setPage(2)
    } else if (url.includes("#About")) {
      setPage(3)
    } else if (url.includes("#Contacts")) {
      setPage(4)
    } 
  },[url])
    console.log(editing)
  useEffect(()=>{console.log(showSignInPrompt, showSignUpPrompt)},[showSignInPrompt, showSignUpPrompt])

  return (
    <>
      <div>
        <StartingNavbar 
                        setPage={(i)=>{setPage(i)}} 
                        page={page} showTaskPrompt={showTaskPrompt} 
                        editing={editing} 
                        url={url}
                        setUrl={(val)=>{setUrl(val)}}
                        showSignInPrompt={showSignInPrompt} 
                        setShowSignInPrompt={(val)=>{setShowSignInPrompt(val)}}
                        showSignUpPrompt={showSignUpPrompt} 
                        setShowSignUpPrompt={(val)=>{setShowSignUpPrompt(val)}}/>
                        
        <div className={!showSignInPrompt && !showSignUpPrompt ? s.Pages : s.Hide_Pages}>
          <Home page={page}></Home>
          <Tasks 
                page={page}
                setShowTaskPrompt={(val)=>{setShowTaskPrompt(val)}}
                showTaskPrompt={showTaskPrompt} 
                editing={editing}
                setEditing={(val)=>{setEditing(val)}}/>
        </div>
        <SignIn page={page} setPage={(i)=>setPage(i)} showSignInPrompt={showSignInPrompt} setShowSignInPrompt={(val)=>{setShowSignInPrompt(val)}}></SignIn>
        <Signup page={page} setPage={(i)=>setPage(i)} showSignUpPrompt={showSignUpPrompt} setShowSignUpPrompt={(val)=>{setShowSignUpPrompt(val)}}></Signup>
      </div>
    </>
  )
}

export default App
