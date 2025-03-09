import SignIn from "./Pages/SignIn/SignIn"
import Signup from "./Pages/SignUp/SignUp"
import "../src/App.css"
import { useState } from "react"
function App() {
  const [page, setPage] = useState(1)
  return (
    <>
      <SignIn></SignIn>
      <Signup page={page} setPage={setPage}></Signup>
    </>
  )
}

export default App
