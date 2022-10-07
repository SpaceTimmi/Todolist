import React, { useState } from 'react';
import Button from './Button';

const Body = ({ Tasks, Form }) => {
    // If show is 0 then <Form /> will be displayed. 
    // If show is 1 then <Tasks /> will be displayed. 
    const [show, setShow] = useState(0)

    const toggleFormAndTasks = () => {
        if (show === 0) {
            setShow(show + 1);
        } else {
            setShow(show - 1);
        }
        console.log(show);
    };

    return (
        <div className="body-container">
            <div className="body-sub-container">
                <Button btnText= {(show === 0) ? "Add Task" : "Close Form"} onClick={toggleFormAndTasks} />
                {(show === 0) ? <Tasks /> : <Form />}
            </div>
        </div>
    )
}

export default Body;