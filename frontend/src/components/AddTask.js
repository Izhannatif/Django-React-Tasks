import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [dayTime, setDayTime] = useState('');
    const [reminder, setReminder] = useState(false);

const onSubmit =(e) =>{
    e.preventDefault()
    if (!text){
        alert('Add something.')
        return
    }
    onAdd({text,dayTime,reminder}) 
    setText('')
    setDayTime('')
    setReminder(false)   
}

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add Task" 
                value={text}
                onChange={(e)=>{
                    setText(e.target.value)
                }} />
            </div> 
            <div className="form-control">
                <label htmlFor="">Day & Time</label>
                <input type="text" placeholder="Add Day and Time" value={dayTime}
                onChange={(e)=>{
                    setDayTime(e.target.value)
                }} />
            </div> 
            <div className="form-control form-control-check ">
                <label htmlFor="">Reminder</label>
                <input type="checkbox" 
                checked = {reminder }
                placeholder="Add Task" 
                value={reminder}
                onChange={(e)=>{
                    setReminder(e.currentTarget.checked)
                }}/>
            </div> 
            <input type="submit" value='Save' className="btn btn-block" />
            </form>

    )
}

export default AddTask