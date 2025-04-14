import { useState } from "react"
import Home from "./Pages/Home/Home"
import { Tasks } from "./Pages/Overview/Tasks"
import StartingNavbar from "./Pages/Starting_Navbar/StartingNavbar"
import SignIn from "./SignIn/SignIn"
import Signup from "./SignUp/SignUp"
import s from "./App.module.css"
function App() {

  // Page Indicators
  const [MainPage, setMainPage] = useState(0)
  const [StartingPage, setStartingPage] = useState(1)

  const [LogIN, setLogIN] = useState(false)

  return (
    <>
      <div className={LogIN ? "Starting_Page" : "hide_starting_page"} >
        <StartingNavbar setStartingPage={(i)=>{setStartingPage(i)}} page={StartingPage}></StartingNavbar>
        <div className={s.Pages}>
          <Home page={StartingPage}></Home>
          <Tasks page={StartingPage}></Tasks>
        </div>
        <SignIn page={StartingPage} setPage={(i)=>setStartingPage(i)}></SignIn>
        <Signup page={StartingPage} setPage={(i)=>setStartingPage(i)}></Signup>
      </div>
    </>
  )
}

export default App
