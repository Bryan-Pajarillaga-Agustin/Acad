import { useEffect, useState } from "react"
import Home from "./Pages/Home/Home"
import { Tasks } from "./Pages/Overview/Tasks"
import StartingNavbar from "./Pages/Starting_Navbar/StartingNavbar"
import SignIn from "./Authentication/SignIn/SignIn"
import Signup from "./Authentication/SignUp/SignUp"
import Loading from "./Components/Loading"
import ContinueAs from "./Authentication/ContinueAs/ContinueAs"
import SigningOut from "./Authentication/VerifySigningOut/VerifySigningOut"
import s from "./App.module.css"
import { auth } from "./Firebase/Firebase"
import { onAuthStateChanged } from "firebase/auth"
function App() {

  // Booleans
  const [showTaskPrompt, setShowTaskPrompt] = useState(false)
  const [showSortPrompt, setShowSortPrompt] = useState(false)
  const [editing, setEditing] = useState(false)
  const [url, setUrl] = useState(window.location.href)
  const [showSignInPrompt, setShowSignInPrompt] = useState(false)
  const [showSignUpPrompt, setShowSignUpPrompt] = useState(false)
  const [loading, setLoading] = useState(false)
  const [continueAs, setContinueAs] = useState(false)
  const [showPersonalInformation, setShowPersonalInformation] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)

  // Page Indicators
  const [MainPage, setMainPage] = useState(0)
  const [page, setPage] = useState(1)
  const [indicated, setIndicated] = useState(0)

  // Array of users

  // test the users in localStorage
  const [users, setUsers] = useState( JSON.parse(localStorage.getItem("Users")) != null ? JSON.parse(localStorage.getItem("Users")) : [])
  // User variable for the authentication of firebase
  const [user, setUser] = useState({})
   
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

  onAuthStateChanged(auth, (current)=>{
    setUser(current)
  })

  return (
    <>
      <div>
        <StartingNavbar 
                        setPage={(i)=>{setPage(i)}} 
                        page={page} 
                        setIndicated={(i)=>{setIndicated(i)}} 
                        indicated={indicated} 
                        showTaskPrompt={showTaskPrompt} 
                        editing={editing} 
                        url={url}
                        setUrl={(val)=>{setUrl(val)}}
                        showSignInPrompt={showSignInPrompt} 
                        setShowSignInPrompt={(val)=>{setShowSignInPrompt(val)}}
                        showSignUpPrompt={showSignUpPrompt} 
                        setShowSignUpPrompt={(val)=>{setShowSignUpPrompt(val)}}
                        showSortPrompt={showSortPrompt}
                        user={user}
                        continueAs={continueAs}
                        setIsSigningOut={(val)=>{setIsSigningOut(val)}} />
                        
        <div className={!showSignInPrompt && !showSignUpPrompt ? s.Pages : s.Hide_Pages}>
          <Home page={page}
                setPage={(i)=>{setPage(i)}}
                setIndicated={(i)=>{setIndicated(i)}} 
                indicated={indicated}
                user={user} />
          <Tasks 
                page={page}
                setShowTaskPrompt={(val)=>{setShowTaskPrompt(val)}}
                showTaskPrompt={showTaskPrompt} 
                editing={editing}
                setEditing={(val)=>{setEditing(val)}}
                showSortPrompt={showSortPrompt}
                setShowSortPrompt={(val)=>setShowSortPrompt(val)}
                user={user}
                setUser={(val)=>{setUser(val)}} />
        </div>
        <SignIn page={page} 
                setPage={(i)=>setPage(i)} 
                showSignInPrompt={showSignInPrompt} 
                setShowSignUpPrompt={(val)=>{setShowSignUpPrompt(val)}}
                setShowSignInPrompt={(val)=>{setShowSignInPrompt(val)}} 
                user={user}
                setUser={(val)=>{setUser(val)}} 
                setLoading={(val)=>setLoading(val)}/>
        <Signup page={page} 
                setPage={(i)=>setPage(i)} 
                showSignUpPrompt={showSignUpPrompt} 
                setShowSignInPrompt={(val)=>{setShowSignInPrompt(val)}}
                setShowSignUpPrompt={(val)=>{setShowSignUpPrompt(val)}}
                users={users}
                setUsers={(val)=>{setUsers(val)}}
                user={user}
                setUser={(val)=>{setUser(val)}} 
                setLoading={(val)=>setLoading(val)}
                setContinueAs={(val)=>setContinueAs(val)} >
        </Signup>
        <Loading loading={loading}/>
        <ContinueAs
                  continueAs={continueAs}
                  setContinueAs={(val)=>{setContinueAs(val)}}
                  user={user} />
        <SigningOut 
                  isSigningOut={isSigningOut}
                  setIsSigningOut={(val)=>{setIsSigningOut(val)}}
                  setLoading={(val)=>{setLoading(val)}}
                  setUser={(val)=>{setUser(val)}} />
      </div>
    </>
  )
}

export default App
