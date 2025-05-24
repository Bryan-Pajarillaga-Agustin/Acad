import s from "./Folders.module.css"
import Button from '../../Components/Button'
import { useState } from "react"

const Folders = ({ page, accountInformation }) => {

    // Boolean 
    const [isFolderSelected, setIsFolderSelected] = useState(false)

    // Strings 
    const [renameFolder, setRenameFolder] = useState()
    const [folName, setFolName] = useState("")

    // Array and object state
    const [folders, setFolders] = useState(accountInformation?.folders)
    const [selectedFolders, setSelectedFolders] = useState([])

// ---------------------- Functions ---------------------------

    function createFolder(){

    }

    function checkFolder(pos){
        setFolders(prev => prev?.map((folder, index)=>{
            if(pos == index)return {...folder, isChecked: folder.isChecked ? false : true}
            return {...folder}
        }))
    }

    function deleteFolder(){

    }

    function selectAllFolders(){

    }

    function unselectAllFolders(){

    }
    
    function openFolder(){

    }


// --------------------------- Functions ---------------------------
    // Folder Component

    const Folder = ({isChecked, pos, name}) => {
        return (
            <li>
                <input type="text" 
                       checked={isChecked ? true : false}
                       onChange={()=>{checkFolder(pos)}} />
                {
                    renameFolder ?
                    <input type="text" value={name} onChange={(e)=>{
                        setFolName(e.target.value)
                    }} /> :
                    <p onDoubleClick={()=>{
                        setFolName(name)
                    }}>{name}</p>
                }
            </li>
        )
    }

    // Options Component

    const Options = () => {
        const Select = () => {
            if (selectedFolders) 
                return <Button icon={(<i className="fa fa-hand-o-up"></i>)} />
            
            return  (
                <>
                    <div className={s.leftOptions}>
                        <Button element={(<span> Select All</span>)}
                                icon={(<i className="fa fa-check"></i>)}
                                className={s.SelectAllButton}
                        func={()=>{selectAllFolders()}}/>
                        <Button element={(<span> Unselect All</span>)}
                                icon={(<i className={`fas fa fa-check ${s.Unchecked}`}></i>)}
                                className={s.UnselectAllButton}
                                func={()=>{unselectAllFolders()}}/>
                    </div>
                    <div className={s.rightOptions}></div>
                </>
            )
        }

        return (
            <div className={s.Options}>
                <Select />
            </div>
        )
    }

    return (
        <>
            <div className={page === 3}>
                <div className={s.Folder_Box}>
                    <nav className={s.Folders_Nav}>
                        <h1>Folders</h1>
                        <Button icon={(<i className="fa fa-plus"></i>)}></Button>
                    </nav>
                    <Options />
                    <div className={s.Folders}>
                        {
                            folders?.map((folder, pos)=>
                                <Folder isChecked={folders?.isChecked}
                                        pos={pos}
                                        content={folder?.name}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </> 
    )
}

export default Folders