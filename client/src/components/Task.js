import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';




const Task = ({ singleTask }) => {
    const [completed, setComplete] = useState(singleTask.completed)

    const isCompleted = () => {
        // marks a task as completed
        setComplete(!completed);
    }

    return (
        <div className="task-container">
            <div className="singleTask" id={completed ? 's-completed' : 's-pending'}>
                <div className='edit-n-delete'>
                    <FontAwesomeIcon className='edit-btn' icon={faPenToSquare} size="lg" />
                    <FontAwesomeIcon className='del-btn' icon={faTrash} size="lg" />
                </div>
                <div className="taskName">
                    {singleTask.taskName}
                </div>
                <div className="taskTime">
                    Time: {singleTask.time}
                </div>
                <div className="taskStatus">
                    <div className="status-container">
                        {completed ? 'Completed' : 'Pending' }
                        <input type='radio' 
                        onClick={() => isCompleted()}
                        className='status-input' 
                        checked={completed}>
                        </input>
                    </div>
                </div>
                <div className="description">
                    {singleTask.description}
                </div>
            </div>
        </div>
    )
} 

export default Task;