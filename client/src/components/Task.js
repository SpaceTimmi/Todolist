import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';




const Task = ({ singleTask }) => {
    return (
        <div className="task-container">
            <div className="singleTask">
                <div className='edit-n-delete'>
                    <FontAwesomeIcon className='edit-btn' icon={faPenToSquare} size="xl" />
                    <FontAwesomeIcon className='del-btn' icon={faTrash} size="xl" />
                </div>
                <div className="taskName">
                    {singleTask.taskName}
                </div>
                <div className="taskTime">
                    {singleTask.time}
                </div>
                <div className="description">
                    {singleTask.description}
                </div>
                <div className="taskStatus">
                    {singleTask.completed ? 'Pending' : 'Completed'}
                </div>
            </div>
        </div>
    )
} 

export default Task;