import { useState, useEffect } from 'react'
import Header from "./components/header";
import Tasks from "./components/tasks";
import AddTask from './components/AddTask';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

useEffect(()=>{
  const getTasks = async() =>{
    const tasksFromApi = await fetchTasks()
    setTasks(tasksFromApi)
  }
  getTasks()
},[])

const fetchTasks = async() => {
  const response = await fetch('http://127.0.0.1:8000/tasks-list/')
  const data = await response.json()
  return data
}

const fetchTask = async(id) => {
  const response = await fetch(`http://127.0.0.1:8000/task-details/${id}`)
  const data = await response.json()
  return data
}


const deleteTask = async(id) => {
await fetch(`http://127.0.0.1:8000/delete-task/${id}`,{
  method: 'DELETE'
})

setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = async(id) =>{

  const toggleTask = await fetchTask(id)
  const updatedTask = {
    ...toggleTask, reminder : !toggleTask.reminder
  }
const response = await fetch(`http://127.0.0.1:8000/update-task/${id}`,{
  method:'PUT',
  headers:{
    'Content-type':'application/json'
  },
  body: JSON.stringify(updatedTask)
})

const data = await response.json()

setTasks(tasks.map((task)=> task.id === id ? {...task,reminder: data.reminder}:task))};

const addTask = async(task) =>{
const response = await fetch('http://127.0.0.1:8000/create-task/',{
  method:'POST',
  headers:{
    'content-type': 'application/json'
  },
  body: JSON.stringify(task)
})

const data = await response.json()
setTasks([...tasks,data])

};

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length >0 ?
      <Tasks tasks= {tasks}  onDelete= {deleteTask} onToggle = {toggleReminder} /> : <h4 style={{textAlign:'center'}}>No Tasks Available.</h4>}
    </div>
  );
}

export default App;
