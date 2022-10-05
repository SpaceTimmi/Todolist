const Task = ({ singleTask }) => {
    return (
        <div className="task-container">
            <div className="task-sub-container">
                {singleTask.taskName}
                {singleTask.time}
                {singleTask.description}
                {'Pending' ? singleTask.completed : 'Completed'}
            </div>
        </div>
    )
} 

export default Task;