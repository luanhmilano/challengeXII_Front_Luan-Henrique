import logo from "../assets/Logo.png"
import icon1 from "../assets/bell-icon.png"
import icon2 from "../assets/user-avatar.png"
import headerStyle from "./header.module.css"

const Header = () => {
  return (
    <header className={headerStyle.header}>
        <img src={logo} alt="Logo" />
        <ul className={headerStyle.header_menu}>
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