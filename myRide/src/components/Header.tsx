import { Bell } from "@phosphor-icons/react"
import './styles/header.css'

const Header = () => {
  return (
    <header>
        <div><img src="https://imagens-desafio.s3.amazonaws.com/header/Logo.png" alt="Logo"/></div>
        <ul className='header_menu'>
            <li><a href="https://compass.uol/pt/home/" target="_blank">Home</a></li>
            <li><a href="https://compass.uol/pt/home/" target="_blank">Getting a Taxi</a></li>
            <li><a href="https://compass.uol/pt/home/" target="_blank">Mobile App</a></li>
            <li><a href="https://compass.uol/pt/home/" target="_blank">Contact Us</a></li>
        </ul>
        <div className='header-icons'>
            <Bell size={32} color="white" />
            <span id="image-span"><img src="https://imagens-desafio.s3.amazonaws.com/header/user-avatar.png" alt="User"/></span>
        </div>
    </header>
  )
}

export default Header