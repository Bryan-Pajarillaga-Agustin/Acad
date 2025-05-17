import s from "./Bio.module.css"

const Bio = ({ editAccount, desc, setDesc }) => {
    return (
        <div className={s.bioWrapper}>
            <h3>
                <span>Bio</span>
            </h3>
            {
                editAccount ? 
                <textarea rows={4}
                        contentEditable={editAccount ? true : false}
                        onChange={(e)=>{
                            setDesc(e.target.value)
                        }}
                        value={desc}
                ></textarea> :
                <p>{desc}</p>
            }
        </div>
    )
}

export default Bio