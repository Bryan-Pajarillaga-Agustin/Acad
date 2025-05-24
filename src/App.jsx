import React, { use, useEffect, useState, useContext, useRef } from "react"

// Tabs Components

import Home from "./Pages/Home/Home"
import Tasks from "./Pages/Overview/Tasks"
import AccountInformation from "./Pages/AccountInformation/AccountInformation"
import StartingNavbar from "./Pages/Starting_Navbar/StartingNavbar"
import Folders from "./Pages/Folders/Folders"

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
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore"
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

  const [user, setUser] = useState(null) // User variable for the authentication of firebase
  const [paging, setPaging] = useState(null)
  const [getTask, setGetTask] = useState([])
  const [accInformation, setAccInformation] = useState(null)

  const handleGetTask = async () => {
    if(user) {
      const docRef = doc(db, "Users", user?.uid)

      try{
        const docSnap = await getDoc(docRef)
        if(docSnap.exists) {
            setGetTask(docSnap.data())
        }
      } catch(error){console.log(error)}
    }
  }

  const getAccountInformation = async () => {
    try {
      const data = await getDoc(doc(db, "Users", user?.uid))
      if(data) {
        setAccInformation(data.data())
      }
    } catch (error) {
      console.log(error)
    }
  }

  onAuthStateChanged(auth, (current)=>{
    if(current?.uid != null){
      setUser(current)
    } else {
      setGetTask(null)
    }
  })

  useEffect(()=>{
    if(user?.uid) {
      handleGetTask()
      getAccountInformation()
    }
  },[user])

  useEffect(()=>{
      if(url) {
        if(url.includes("#Home")) {
          setPage(1)
        } else if (url.includes("#Tasks")) {
          console.log(url)
          if(user?.uid != null){
            setPage(2)
            setShowMakeUserSignIn(false)
          } else {
            setShowMakeUserSignIn(true)
          }
        } else if (url.includes("#About")) {
          setPage(3)
        } else if (url.includes("#Contacts")) {
          setPage(4)
        } 
      }

      if(user?.uid) getAccountInformation()
  },[user])

  useEffect(()=>{
    let link = window.location.href
    link.toLowerCase()
    let index = link.search("/Acad/")
    link = link.slice(0, index + 6)
    switch(page) {
      case 1:
        link = link.concat("#Home")
        setUrl(link)
        setIndicated(0)
        break;
      case 2:
        if(user){
          link = link.concat("#Tasks")
          setUrl(link)
          setIndicated(1)
        } else {
          setShowMakeUserSignIn(true)
        }
        break;
      case 3:
        link = link.concat("#Folders")
        setUrl(link)
        setIndicated(2)
        break;
      case 4:
        link = link.concat("#Contacts")
        setUrl(link)
        setIndicated(3)
        break;
    }
  },[page])


  return (
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
                    setShowMakeUserSignIn={val=>setShowMakeUserSignIn(val)}
                    getAccountInformation={()=>getAccountInformation()}
                    showPersonalInformation={showPersonalInformation}
                    setShowPersonalInformation={val=>setShowPersonalInformation(val)} />
                        
        <div className={!showSignInPrompt && !showSignUpPrompt && !showPersonalInformation ? s.Pages : s.Hide_Pages}>
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
          <Folders page={page}
                   accountInformation={accInformation}/>
        </div>
        <AccountInformation 
            showPersonalInformation={showPersonalInformation}
            setShowPersonalInformation={(val)=>setShowPersonalInformation(val)}
            accInformation={accInformation}
            setAccInformation={setAccInformation}
            user={user}
            setLoading={(val)=>setLoading(val)}
        />
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
              loading={loading}
              getAccountInformation={()=>getAccountInformation()} />
        <Signup 
              page={page} 
              setPage={(i)=>setPage(i)} 
              showSignUpPrompt={showSignUpPrompt} 
              setShowSignInPrompt={(val)=>{setShowSignInPrompt(val)}}
              setShowSignUpPrompt={(val)=>{setShowSignUpPrompt(val)}}
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
              setUser={val=>setUser(val)}
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
              setShowSignInPrompt={(val)=>{setShowSignInPrompt(val)}}
              user={user?.uid}  />
    </div>
  )
}

export default App
