import { useState, useEffect } from "react"
import TasksContainer from "./TasksContainer/TasksContainer"
import { BottomOptions } from "./BottomOptions/Bottom_Options"
import { OptionsTab } from "./OptionsTab/OptionsTab"
import TaskPrompt from "./TaskPrompt/TaskPrompt"
import s from "../Overview/Tasks.module.css"
export const Tasks = ({page}) => {


    // Boolean Variables
    const [showTaskPrompt, setShowTaskPrompt] = useState(false)

    // Data Variables


    const [selectedTask, setSelectedTask] = useState(0)
    const [optionTabNumber, setOptionTabNumber] = useState(1)
    const [selectTask, setSelectTask] = useState(false)
    const [tasks, setTasks] = useState([
        {id: 1, task: "Do something good.", date: null, selected: false, checkBox: {className: s.unchecked, testClass: "checked"} },
        {id: 2, task: "Kupal Lamang.", date: null, selected: false, checkBox: {className: s.unchecked, testClass: "checked"} },
        {id: 3, task: "Walang Hiya.", date: null, selected: false, checkBox: {className: s.unchecked, testClass: "checked"} },
        {id: 4, task: "Beri guud.", date: null, selected: false, checkBox: {className: s.unchecked, testClass: "checked"} }
    ])
    const [taskCheckboxes, setTaskCheckboxes] = useState(tasks.map(task => ({ ...task, isChecked: false })));

    function writeTask(data){
        let taskData = tasks
        let newTask = {id: tasks.length + 1, task: data, date: null }
        taskData.unshift(newTask)
        setTasks([...taskData])
    }

    const search = () => {

    }

    const selectAll = () => {
        setTaskCheckboxes(prevCheckboxes => {
            return prevCheckboxes.map(task => {
                return { ...task, isChecked: true };;
            });
        });

    };

    const unselectAll = () => {
        setTaskCheckboxes(prevCheckboxes => {
            return prevCheckboxes.map(task => {
                return { ...task, isChecked: false };;
            });
        });
    };

    useEffect(() => {
        // Update parent component with changes
        setTasks([...taskCheckboxes]);
    }, [taskCheckboxes]);

    return  (
        <>
            <div className={page == 2 ? s.Task_Wrapper : s.Hide_Task_Wrapper} id="Tasks">
                <TaskPrompt showTaskPrompt={showTaskPrompt} setShowTaskPrompt={setShowTaskPrompt} writeTask={(data)=>{writeTask(data)}}/>
                <div className={s.Tasks_Editor}>
                    <h2 className={s.Title_wrapper}>Tasks</h2>
                    <OptionsTab selectedTask={selectedTask} search={search} optionTabNumber={optionTabNumber} setOptionTabNumber={(i)=>setOptionTabNumber(i)} setShowTaskPrompt={setShowTaskPrompt}/>
                    <BottomOptions selectedTask={selectedTask} setSelectedTask={()=>setSelectedTask()} selectTask={selectTask} setSelectTask={setSelectTask} selectAll={()=>{selectAll()}} unselectAll={()=>{unselectAll()}}/>
                    <TasksContainer data={Tasks} selectedTask={selectedTask} selectTask={selectTask} tasks={tasks} updateTask={(val)=>{setTasks(val)}}/>
                </div>
            </div>
        </>
    )
}