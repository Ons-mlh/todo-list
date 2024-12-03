import "./container.css"
import Input from "../input/input"
import Task from "../task/task"

export default function Container({tasks, setTasks}) {
    return (
        <div className="container">
            <h1>TO DO List</h1>
            <Input setTasks={setTasks}/>
            {tasks.map((task, index)=><Task task={task} key={index} index={index} setTasks={setTasks}/>)}
        </div>


    )
}