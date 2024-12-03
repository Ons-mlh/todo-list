import { useId, useRef, useState } from 'react'
import './App.css'
import Container from './components/container/container'


function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Container tasks={tasks} setTasks={setTasks} />
      <div className='count'>Tasks count: {tasks.length}</div>

    </>
  )
}

export default App
