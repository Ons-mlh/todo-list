import { useState, useRef } from "react"
import "./input.css"



export default function Input ({setTasks}) {
    const ref = useRef()
    function add (task) {
        if (task.name!="")
        setTasks((oldTasks)=>[...oldTasks, task])
    }
    return (
        <>
            <input type="text" className="Input" placeholder="Enter a task .." ref={ref}/>
            <button onClick={(e)=>{
               add({name: ref.current.value, isCompleted: false})
            }} >ADD</button>    
        </>
    )
}