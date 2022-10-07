const Input = ({ type, labelText }) => {
    return (
        <div className="input-container">
            <label className="input-legend">{labelText}</label>
            <input className="" type={type} name={labelText.toLowerCase()}/>
        </div>
    )
}

export default Input;
