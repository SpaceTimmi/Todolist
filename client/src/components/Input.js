const Input = ({ type, legend }) => {
    return (
        <div className="input-container">
            <p className="input-legend">{legend}</p>
            <input type={type} name={legend.toLowerCase()} maxLenght="20"/>
        </div>
    )
}

export default Input;
