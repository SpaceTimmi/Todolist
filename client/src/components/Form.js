import Input from './Input';

const Form = () => {
    return (
        <div className="form-container">
            <div className="form-sub-container">
                <form className="" action="">
                  <Input type="text" labelText="Name"/>
                  <Input type="date" labelText="Date"/>
                  <Input type="text" labelText="Description"/>
                </form>
            </div>
        </div>
    )
}

export default Form;
