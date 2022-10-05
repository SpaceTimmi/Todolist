const Input = ({ type, legend }) => {
    return (
        <div className="input-container">
            <p className="input-legend">{legend}</p>
            <input type={type} maxLenght="20"></input>
        </div>
    )
}

export default Input;