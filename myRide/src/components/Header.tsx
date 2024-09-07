import { Link } from "react-scroll";
import { Bell } from "@phosphor-icons/react"
import './styles/header.css'

const Header = () => {
  return (
    <header>
        <div><img src="../../public/Logo.png" alt="Logo"/></div>
          <ul className='header_menu'>
              <li><Link to="section1-container" spy={true} smooth={true} offset={-70} duration={600}>Home</Link></li>
              <li><Link to="cards" spy={true} smooth={true} offset={-70} duration={600}>Getting a Taxi</Link></li>
              <li><Link to="section3-container" spy={true} smooth={true} offset={-70} duration={600}>Mobile App</Link></li>
              <li><Link to="footer" spy={true} smooth={true} offset={-70} duration={600}>Contact Us</Link></li>
          </ul>
          <div className='header-icons'>
              <Bell size={32} color="white" />
              <span id="image-span"><img src="../../public/user-avatar.png" alt="User"/></span>
          </div>
    </header>
  )
}

export default Header