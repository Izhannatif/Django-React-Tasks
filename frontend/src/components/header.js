import Button from './Button'
const header = ({onAdd, showAddTask}) => {
  return (
    <header className="header">
        <p className='heading'>Tasks Tracker</p>
        <Button  color={showAddTask ? '#c22b2b' : ''} text={showAddTask ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}

export default header