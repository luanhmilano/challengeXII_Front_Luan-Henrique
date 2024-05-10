import heroImg from "../../assets/section-1/car-image.png"
import './section1.css'
import LocationForm from "./LocationForm"


const Section1 = () => {

  return (
    <section>
        <div className="image-container">
            <img src={heroImg} alt="" />
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