import { use, useEffect, useState } from "react"

// Tabs Components

import Home from "./Pages/Home/Home"
import Tasks from "./Pages/Overview/Tasks"
import StartingNavbar from "./Pages/Starting_Navbar/StartingNavbar"

// Other component

import Loading from "./Components/Loading"

// Import Authentication Components

import ContinueAs from "./Authentication/ContinueAs/ContinueAs"
import SignIn from "./Authentication/SignIn/SignIn"
import Signup from "./Authentication/SignUp/SignUp"
import SigningOut from "./Authentication/VerifySigningOut/VerifySigningOut"
import MakeUserSignIn from "./Authentication/MakeUserSignIn/MakeUserSignIn"


import s from "./App.module.css"

// Import Firebase components variables

import { auth } from "./Firebase/Firebase"
import { getDoc, doc } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"
import { db } from "./Firebase/Firebase"

function App() {

  // Booleans
  const [showNavBar, setShowNavbar] = useState(true)
  const [editing, setEditing] = useState(false)
  const [url, setUrl] = useState(window.location.href)
  const [showSignInPrompt, setShowSignInPrompt] = useState(false)
  const [showSignUpPrompt, setShowSignUpPrompt] = useState(false)
  const [loading, setLoading] = useState(false)
  const [continueAs, setContinueAs] = useState(false)
  const [showPersonalInformation, setShowPersonalInformation] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)
  const [showSaveChanges, setShowSaveChanges] = useState(false)
  const [showMakeUserSignIn, setShowMakeUserSignIn] = useState(false)

  // Page Indicators
  const [page, setPage] = useState(1)
  const [indicated, setIndicated] = useState(0)

  // Array of users
  
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("Users")) != null ? 
    JSON.parse(localStorage.getItem("Users")) : []
  ) // test the users in localStorage
 
  const [user, setUser] = useState(null) // User variable for the authentication of firebase
  const [paging, setPaging] = useState(null)
  const [getTask, setGetTask] = useState([])

  const handleGetTask = async () => {
    if(user) {
      const docRef = doc(db, "Users", user?.uid)

      try{
        const docSnap = await getDoc(docRef)
        if(docSnap.exists) {
            setGetTask(docSnap.data())
        }
      } catch(error){console.log(error)}
    } else {
      setGetTask(null)
    }
  }

  onAuthStateChanged(auth, (current)=>{
    if(current?.uid != null){
      console.log(current.uid)
      setUser(current)
    } else {
      setGetTask(null)
    }

  })

  useEffect(()=>{
    handleGetTask()
  },[user])


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
  },[])

  useEffect(()=>{
    let link = window.location.href
    link.toLowerCase()
    let index = link.search("/Acad/")
    link = link.slice(0, index + 6)
    switch(page) {
      case 1:
        link = link.concat("#Home")
        setUrl(link)
        break;
      case 2:
        link = link.concat("#Tasks")
        setUrl(link)
        break;
      case 3:
        link = link.concat("#About")
        setUrl(link)
        break;
      case 4:
        link = link.concat("#Contacts")
        setUrl(link)
        break;
    }
  },[page])

  return (
    <>
      <div>
        <StartingNavbar 
                    setPage={(i)=>{setPage(i)}} 
                    page={page} 
                    setIndicated={(i)=>{setIndicated(i)}} 
                    indicated={indicated} 
                    editing={editing} 
                    url={url}
                    setUrl={(val)=>{setUrl(val)}}
                    showSignInPrompt={showSignInPrompt} 
                    setShowSignInPrompt={(val)=>{setShowSignInPrompt(val)}}
                    showSignUpPrompt={showSignUpPrompt} 
                    setShowSignUpPrompt={(val)=>{setShowSignUpPrompt(val)}}
                    user={user}
                    continueAs={continueAs}
                    setIsSigningOut={(val)=>{setIsSigningOut(val)}}
                    setPaging={(val)=>{setPaging(val)}}
                    showNavBar={showNavBar}
                    setShowNavbar={(val)=>{setShowNavbar(val)}}
                    setShowSaveChanges={(val)=>{setShowSaveChanges(val)}}
                    setShowMakeUserSignIn={val=>setShowMakeUserSignIn(val)} />
                        
        <div className={!showSignInPrompt && !showSignUpPrompt ? s.Pages : s.Hide_Pages}>
          <Home 
              page={page}
              setPage={(i)=>{setPage(i)}}
              setIndicated={(i)=>{setIndicated(i)}} 
              indicated={indicated}
              user={user} />
          <Tasks 
              setPage={(val)=>setPage(val)}
              page={page}
              getTask={getTask}
              editing={editing}
              setEditing={(val)=>{setEditing(val)}}
              user={user}
              setUser={(val)=>{setUser(val)}}
              loading={loading}
              setLoading={(val)=>setLoading(val)}
              paging={paging}
              setPaging={(val)=>{setPaging(val)}}
              showNavBar={showNavBar}
              setShowNavbar={(val)=>{setShowNavbar(val)}}
              showSaveChanges={showSaveChanges} 
              setShowSaveChanges={val=>setShowSaveChanges(val)} />
        </div>
        <SignIn 
              page={page} 
              setPage={(i)=>setPage(i)} 
              showSignInPrompt={showSignInPrompt} 
              setShowSignUpPrompt={(val)=>{setShowSignUpPrompt(val)}}
              setShowSignInPrompt={(val)=>{setShowSignInPrompt(val)}} 
              user={user}
              setUser={(val)=>{setUser(val)}} 
              setLoading={(val)=>setLoading(val)}
              setContinueAs={(val)=>setContinueAs(val)}
              loading={loading}/>
        <Signup 
              page={page} 
              setPage={(i)=>setPage(i)} 
              showSignUpPrompt={showSignUpPrompt} 
              setShowSignInPrompt={(val)=>{setShowSignInPrompt(val)}}
              setShowSignUpPrompt={(val)=>{setShowSignUpPrompt(val)}}
              users={users}
              setUsers={(val)=>{setUsers(val)}}
              user={user}
              setUser={(val)=>{setUser(val)}} 
              setLoading={(val)=>setLoading(val)}
              setContinueAs={(val)=>setContinueAs(val)}
              loading={loading} >
        </Signup>
        <Loading 
              loading={loading}/>
        <ContinueAs
              continueAs={continueAs}
              setContinueAs={(val)=>{setContinueAs(val)}}
              user={user}
              setLoading={(val)=>setLoading(val)} />
        <SigningOut 
              isSigningOut={isSigningOut}
              setIsSigningOut={(val)=>{setIsSigningOut(val)}}
              setLoading={(val)=>{setLoading(val)}}
              setUser={(val)=>{setUser(val)}} />
        <MakeUserSignIn 
              showMakeUserSignIn={showMakeUserSignIn}
              setShowMakeUserSignIn={val=>setShowMakeUserSignIn(val)}
              setPage={val=>setPage(val)}
              setShowSignUpPrompt={(val)=>{setShowSignUpPrompt(val)}}
              setShowSignInPrompt={(val)=>{setShowSignInPrompt(val)}}  />
      </div>
    </>
  )
}

export default App
