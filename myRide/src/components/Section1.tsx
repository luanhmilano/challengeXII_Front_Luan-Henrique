import heroImg from "../assets/section-1/car-image.png"
import './styles/section1.css'

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
            <form className="form">
                <h2 className="form-title">Find a ride now</h2>
                <div className="fields">
                    <fieldset>
                        <legend>Your Pickup</legend>
                        <input type="text" className="form-input" id="location-input" name="location" value="Current Location" readOnly />
                    </fieldset>
                    <fieldset>
                        <legend>Your Destination</legend>
                        <input type="text" className="form-input" id="destination-input" name="destination" />
                    </fieldset>
                </div>
                <button type="submit">FIND A DRIVER</button>
            </form>
        </div>
    </section>
  )
}

export default Section1