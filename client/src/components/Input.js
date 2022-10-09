const Input = ({ type, labelText }) => {
    return (
        <div className="input-container">
            <p className="input-legend">{labelText}</p>
            <input className="" type={type} name={labelText.toLowerCase()}/>
        </div>
    )
}

export default Input;
