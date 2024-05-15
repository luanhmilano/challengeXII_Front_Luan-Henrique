import DriverForm from './DriverForm'
import './section3.css'

const Section3 = () => {
  return (
    <section className='section3-container'>
        <div className='section3-form-header'>
          <span><img src="https://imagens-desafio.s3.amazonaws.com/section-3/popup-image.png" alt="Logo seção 3" /></span>
          <div className='section3-text'>
            <h1 className='section3-title'>Drive with MyRide</h1>
            <p className='section3-subtitle'>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</p>
          </div>
        </div>
        <DriverForm />
    </section>
  )
}

export default Section3