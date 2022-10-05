import Task from './Task';

const Tasks = () => {
    const tasks = [
        {
            "taskId": 1,
            "taskName": "Buy groceries.",
            "time": "11:00AM",
            "description":"Head to the store to buy groceries.",
            "completed": false 
        },
        {
            "taskId": 2,
            "taskName": "Do laundry.",
            "time": "7:00PM",
            "description":"Do laundry this evening.",
            "completed": true 
        },
        {
            "taskId": 3,
            "taskName": "Take dog for stroll.",
            "time": "4:00PM",
            "description":"Take the dog for a stroll by 4 in the evening.",
            "completed": false 
        },
    ];

    return (
        <div className="tasks-container">
            <p className="task-legend">Todolist</p>
            <div className="tasks-sub-container">
                {tasks.map((singleTask, i) => {
                    <Task singleTask={singleTask} key={i} /> 
                })}
            </div>
        </div>
    )
}

export default Tasks;