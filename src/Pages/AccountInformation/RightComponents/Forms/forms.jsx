import s from "./forms.module.css"

const Forms = ({editAccount, accInformation, uName, setUName,
                school, setSchool, pBirth, setPBirth,
                age, setAge, bDay, setBDay,
                gender, setGender, hobbies, setHobbies,
                grSec, setGrSec, usingAs, setUsingAs}) => {
    return (
        <div className={s.Forms_Wrapper}>
            <div className={s.accountInfoWrapper}>
                <div className={s.inputWrapper}>
                    <h4>Username:</h4>
                    <input 
                            onChange={(e)=>{if(editAccount)setUName(e.target.value)}}
                            type="text" 
                            placeholder="Ex. Peter M. Dela Cruz"
                            value={uName ? uName : ""} />
                </div>
                <div className={s.inputWrapper}>
                    <h4>School:</h4>
                    <input 
                            onChange={(e)=>{if(editAccount)setSchool(e.target.value)}}
                            type="text" 
                            placeholder="Ex. Lolomboy National High School"
                            value={school ? school : ""} />
                </div>
                <div className={s.inputWrapper}>
                    <h4>Gr/Section:</h4>
                    <input 
                            onChange={(e)=>{if(editAccount)setGrSec(e.target.value)}}
                            type="text" 
                            placeholder="Ex. 10-Rizal"
                            value={grSec ? grSec : ""} />
                </div>
            </div>
            <div className={s.accountInfoWrapper}>
                <div className={s.inputWrapper}>
                    <h4>Place of Birth:</h4>
                    <input 
                            onChange={(e)=>{if(editAccount)setPBirth(e.target.value)}}
                            type="text" 
                            placeholder="Ex. Marilao, Bulacan"
                            value={pBirth ? pBirth : ""} />
                </div>
                <div className={s.inputWrapper}>
                    <h4>Age:</h4>
                    <input 
                            onChange={(e)=>{if(editAccount)setAge(e.target.value)}}
                            type="text" 
                            placeholder="Ex. 26"
                            value={age ? age : ""} />
                </div>
                <div className={s.inputWrapper}>
                    <h4>Birthday:</h4>
                    <input 
                            onChange={(e)=>{if(editAccount)setBDay(e.target.value)}}
                            type="text" 
                            placeholder="Ex. December 31, 2007"
                            value={bDay ? bDay : ""} />
                </div>
            </div>
            <div className={s.accountInfoWrapper}>
                <div className={s.inputWrapper}>
                    <h4>Gender:</h4>
                    <input 
                            onChange={(e)=>{if(editAccount)setGender(e.target.value)}}
                            type="text" 
                            placeholder="Ex. Male"
                            value={gender ? gender : ""} />
                </div>
                <div className={s.inputWrapper}>
                    <h4>Hobbies:</h4>
                    <input 
                            onChange={(e)=>{if(editAccount)setHobbies(e.target.value)}}
                            type="text" 
                            placeholder="Ex. Eating, Coding"
                            value={hobbies ? hobbies : ""} />
                </div>
            </div>
        </div>
    )
}

export default Forms