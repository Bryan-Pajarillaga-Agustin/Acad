import s from "../Home/Home.module.css"
import Button from "../../Components/Button"
import StartingNavbar from "../Starting_Navbar/StartingNavbar"
const Home = ({page, setPage, setIndicated, indicated}) => {
    return (
        <div className={page == 1 ? s.home_wrapper : s.hideHome} id="Home">
            <div className={s.left}>
                <div className={s.wrapTop}>
                    <h1>
                        Welcome User
                    </h1>
                    <p>Write, read and document your work <br /> and studies</p>
                    <a href="#Tasks">
                        <Button content={"Get Started"} func={()=>{setPage(2), setIndicated(1)}}></Button>
                    </a>
                    
                </div>
                <div className={s.wrapBottom}>
                    <Button className={s.orange}></Button>
                    <Button className={s.purple}></Button>
                    <Button className={s.blue}></Button>
                </div>
            </div>
            <div className={s.right}>
                <img src="./StartingPage/Working.png"/>
            </div>
        </div>
    )
}

export default Home