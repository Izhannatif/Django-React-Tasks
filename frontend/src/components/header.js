import Button from './Button'
const header = ({onAdd, showAddTask}) => {
  return (
    <header className="header">
        <h2>Tasks Tracker</h2>
        <Button  color={showAddTask ? '#c22b2b' : ''} text={showAddTask ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}

export default header