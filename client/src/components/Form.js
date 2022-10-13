import Button from "./Button";

const Form = () => {

    const addTask = () => {

    }

    return (
        <div className="form-container">
            <div className="form-sub-container">
                <form className="add-form" action="">
                    <div className='input-container'>
                        <legend>
                            Task Name
                        </legend>
                        <input className="input-tg name-tag" 
                        type="text" 
                        name="taskName"
                        />
                    </div>

                    <div className='input-container'>
                        <legend>
                            Due Date
                        </legend>
                        <input className="input-tg date-tg" 
                        type="date" name="taskDate"
                        />
                    </div>

                    <div className='input-container'>
                        <legend>
                            Description
                        </legend>
                        <input className="input-tg description-tg" 
                        type="text" 
                        name="taskDescription"
                        />
                    </div>
                </form>
                <Button btnText="Add Task" onClick={addTask} />
            </div>
        </div>
    )
}

export default Form;
