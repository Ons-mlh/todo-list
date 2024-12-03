import { CheckCircle, XCircle, Trash2, PenBox} from "lucide-react"
import "./task.css"
import { useState } from "react";
import TaskName from "../task-name/task-name";

export default function Task({ task, index, setTasks }) {
    const { isCompleted } = task;
    const [editing , setEditing] = useState(false)

    function setTaskCompleted (index) {
        setTasks((oldTasks) => oldTasks.map((task, i)=>{
            if(index === i ){
                task.isCompleted = !task.isCompleted;
            }
            return task
        }))
    }
    function setTaskDeleted (index) {
        setTasks((oldTasks) => oldTasks.filter((task,i)=> {
            if ( index === i) return false;
            return true;
        }))
    }
    return (
        <div className="tasks">
            <TaskName task={task} index={index} setTasks={setTasks} setEditing={setEditing} editing={editing}/>
           {!editing ? <><span className="icon" onClick={(e)=>{
                setTaskCompleted(index)
            }}>
                {isCompleted ? <XCircle/> : <CheckCircle/>}
            </span>
            <span className="icon" onClick={()=>{
                setTaskDeleted(index)
            }}>
            <Trash2/>
            </span>
            <span className="icon" onClick={(e)=>{
                setEditing(true)
            }}>
                <PenBox/>
            </span>
            </> : null}
        </div> 
    )
}