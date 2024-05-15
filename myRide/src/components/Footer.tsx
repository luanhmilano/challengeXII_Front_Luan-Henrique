import { Link } from 'react-router-dom'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-left">
            <img src="https://imagens-desafio.s3.amazonaws.com/footer/logo-footer.png" alt="Logotipo Footer" />
            <p>MyRide Inc., 2nd Floor, New York, NY 10016</p>
            <div className='footer-socials'>
                <a href="https://www.facebook.com/compass.uol" target='_blank'><img src="https://imagens-desafio.s3.amazonaws.com/footer/facebook.png" alt="Facebook logo" /></a>
                <a href="https://www.instagram.com/compass.uol/" target='_blank'><img src="https://imagens-desafio.s3.amazonaws.com/footer/instagram.png" alt="Instagram logo" /></a>
                <a href="https://www.twitter.com/compassuol" target='_blank'><img src="https://imagens-desafio.s3.amazonaws.com/footer/twitter.png" alt="Twitter logo" /></a>
            </div>
        </div>
        <div className='footer-menu'>
            <h1>Company</h1>
            <div className='footer-links'>
                <Link to={'/404'} target='_blank'>About Us</Link>
                <Link to={'/404'} target='_blank'>News</Link>
                <Link to={'/404'} target='_blank'>Carrers</Link>
                <Link to={'/404'} target='_blank'>How we work</Link>
            </div>
        </div>
        <div className='footer-menu'>
            <h1>Support</h1>
            <div className='footer-links'>
                <Link to={'/404'} target='_blank'>FAQ</Link>
                <Link to={'/404'} target='_blank'>US Office</Link>
                <Link to={'/404'} target='_blank'>Asia Office</Link>
                <Link to={'/404'} target='_blank'>Help Center</Link>
            </div>
        </div>
        <div className='footer-menu'>
            <h1>More</h1>
            <div className='footer-links'>
                <Link to={'/404'} target='_blank'>Become a partner</Link>
                <Link to={'/404'} target='_blank'>Partner Support</Link>
                <Link to={'/404'} target='_blank'>Mobile app links</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer