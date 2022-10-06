import Input from './Input';

const Form = () => {
    return (
        <div className="form-container">
            <div className="form-sub-container">
                <form className="" action="">
                  <Input type="text" legend="Name"/>
                  <Input type="date" legend="Date"/>
                  <Input type="text" legend="Description"/>
                </form>
            </div>
        </div>
    )
}

export default Form;
