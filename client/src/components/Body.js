import Button from './Button';

const Body = ({ Tasks, Form }) => {
    return (
        <div className="body-container">
            <div className="body-sub-container">
                <Button btnType="add" />
                <Form />
                <Tasks />
                {<Form /> ? true : <Tasks />}
            </div>
        </div>
    )
}

export default Body;