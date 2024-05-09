import logo from "../assets/Logo.png"
import icon1 from "../assets/bell-icon.png"
import icon2 from "../assets/user-avatar.png"
import './styles/header.css'

const Header = () => {
  return (
    <header>
        <div><img src={logo} alt="Logo"/></div>
        <ul className='header_menu'>
            <li>Home</li>
            <li>Getting a Taxi</li>
            <li>Mobile App</li>
            <li>Contact Us</li>
        </ul>
        <div className='header-icons'>
            <img src={icon1} alt="Bell" />
            <img src={icon2} alt="User" />
        </div>
    </header>
  )
}

export default Header