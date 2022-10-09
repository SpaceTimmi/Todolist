import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';




const Task = ({ singleTask }) => {

    const isCompleted = () => {
        // marks a task as completed
    }



    return (
        <div className="task-container">
            <div className="singleTask">
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
                    {singleTask.completed ?
                     <div>
                        Pending
                        <input onClick={() => isCompleted()} type="radio"></input>
                     </div> :
                     <div>  
                        Completed
                        <input onClick={() => isCompleted()} type="radio" checked></input>
                     </div>}
                </div>
                <div className="description">
                    {singleTask.description}
                </div>
            </div>
        </div>
    )
} 

export default Task;