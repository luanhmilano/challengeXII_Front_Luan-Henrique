import carImg from '../../assets/section-3/popup-image.png'
import './section3.css'

const Section3 = () => {
  return (
    <section className='section3-container'>
        <span><img src={carImg} alt="Logo seção 3" /></span>
        <h1 className='section3-title'>Drive with MyRide</h1>
        <p className='section3-subtitle'>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</p>
    </section>
  )
}

export default Section3