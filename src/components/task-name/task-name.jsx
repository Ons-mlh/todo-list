import { useRef } from "react"

export default function TaskName({ task, editing, setTasks, setEditing, index }) {
    const ref = useRef()
    function editTask(index) {
        let newValue = ref.current.value
        setTasks((oldTasks) => oldTasks.map((task, i) => {
            if (index === i)
                task.name = newValue
            return task
        }))
        setEditing(false)
    }
    return (
        <>
            {editing ?
                <>
                    <input type="text" defaultValue={task.name} ref={ref} />
                    <button onClick={() => {
                        editTask(index)
                    }}>Save</button>
                </>
                : <p style={{ textDecoration: task.isCompleted ? "line-through" : "none" }} className="task">{task.name}</p>
            }</>)
}


