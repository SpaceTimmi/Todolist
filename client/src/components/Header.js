import Logo from '../assests/home.png'

const Header = () => {
    return (
        <div className="pg-header">
            <p className="logo">Todolist</p>
            <img src={Logo} className="home-icon" alt="logo"/>
        </div>
    )
}

export default Header;