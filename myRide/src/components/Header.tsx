import logo from "../assets/Logo.png"
import { Bell } from "@phosphor-icons/react"
import icon2 from "../assets/user-avatar.png"
import './styles/header.css'

const Header = () => {
  return (
    <header>
        <div><img src={logo} alt="Logo"/></div>
        <ul className='header_menu'>
            <li><a href="https://compass.uol/pt/home/">Home</a></li>
            <li><a href="https://compass.uol/pt/home/">Getting a Taxi</a></li>
            <li><a href="https://compass.uol/pt/home/">Mobile App</a></li>
            <li><a href="https://compass.uol/pt/home/">Contact Us</a></li>
        </ul>
        <div className='header-icons'>
            <Bell size={32} color="white" />
            <span id="image-span"><img src={icon2} alt="User"/></span>
        </div>
    </header>
  )
}

export default Header