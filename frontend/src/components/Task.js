import {FaTimes} from 'react-icons/fa';


const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' :''}`} onDoubleClick={()=>onToggle(task.id)}>
       <h4> {task.text} <FaTimes style={{color:'red'}} onClick={()=>onDelete(task.id)} onToggle={()=>onToggle(task.id)} /> </h4>
       <p>{task.dayTime}</p>
        </div>
  )
}

export default Task