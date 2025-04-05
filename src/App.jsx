import "../src/App.css"
import { useState } from "react"
import Home from "./StartingPage/Pages/Home/Home"
import StartingNavbar from "./StartingPage/Pages/Starting_Navbar/StartingNavbar"
import SignIn from "./StartingPage/SignIn/SignIn"
import Signup from "./StartingPage/SignUp/SignUp"
function App() {

  // Page Indicators
  const [MainPage, setMainPage] = useState(0)
  const [StartingPage, setStartingPage] = useState(1)

  const [LogIN, setLogIN] = useState(false)

  return (
    <>
      <div className={LogIN ? "Starting_Page" : "hide_starting_page"} >
        <StartingNavbar setStartingPage={(i)=>{setStartingPage(i)}} page={StartingPage}></StartingNavbar>
        <Home page={StartingPage}></Home>
        <SignIn page={StartingPage} setPage={(i)=>setStartingPage(i)}></SignIn>
        <Signup page={StartingPage} setPage={(i)=>setStartingPage(i)}></Signup>
      </div>
    </>
  )
}

export default App
