import s from "../Sub_Inputs_3/SubInputs3.module.css"
import Button from "../../../Components/Button"
import { useEffect, useState } from "react"
const Form_3 = ({indicated}) => {

    const [provoke, setProvoke] = useState(null)
    const [ind, setInd] = useState(null)
    const [limRecursion, setLimRecursion] = useState(0)
    const [eachButton, setEachButton] = useState([
        {
            content: "Filipino",
            className: s.notIndicatedButt,
            testClass: "unmarked"
        }, 
        {
            content: "Mathematics",
            className: s.notIndicatedButt,
            testClass: "unmarked"
        }, 
        {
            content: "Science",
            className: s.notIndicatedButt,
            testClass: "unmarked"
        }, 
        {
            content: "English",
            className: s.notIndicatedButt,
            testClass: "unmarked"
        },
        {
            content: "Colloquium",
            className: s.notIndicatedButt,
            testClass: "unmarked"
        }
    ])

    useEffect(() => {
        //This function updates the button state directly, avoiding the asynchronous issue.
        const updateButtonState = (index) => {
            const updatedButtons = [...eachButton];
            if (updatedButtons[index].testClass === "unmarked") {
              updatedButtons[index].testClass = "marked";
              updatedButtons[index].className = s.IndicatedButt;
            } else {
              updatedButtons[index].testClass = "unmarked";
              updatedButtons[index].className = s.notIndicatedButt;
            }
            setEachButton(updatedButtons);
          };
    
        if (provoke !== null && limRecursion < 3) {
            setLimRecursion(ea => (ea + 1))
            updateButtonState(ind);
        }

        if (limRecursion == 2) {
            setTimeout(() => {
                setLimRecursion(ea => (ea - ea))
            }, 100);
        }
    }, [provoke, eachButton, ind]);

    return (
        <div className={indicated == 2 ? s.inputs_3 : s.hide}>
            <div className={s.wrapper}>
                <h4>What is your favorite subject?</h4>
                <div className={s.buttons}>
                    {eachButton.map((par, i) => (
                        <Button key={par + i.toString()} func={()=>{setProvoke(Math.random()*1), setInd(i)}} className={`${eachButton[i].className}`} content={eachButton[i].content}></Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Form_3