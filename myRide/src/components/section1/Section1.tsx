import './styles/section1.css'
import LocationForm from "./LocationForm"


const Section1 = () => {

  return (
    <section className='section1-container'>
        <div className="image-container">
            <img src="../../public/car-image.png" alt="Carro" />
        </div>
        <div className="booking-form">
            <div className="text">
                <p className="subtitle">NEED A RIDE?</p>
                <h1 className="main-title">Book with <span id="my">my</span><span id="ride">RIDE</span> now!</h1>
            </div>
            <LocationForm />
        </div>
    </section>
  )
}   

export default Section1