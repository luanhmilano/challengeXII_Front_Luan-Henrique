import './driverform.css'

const DriverForm = () => {
  return (
    <form>
        <div>
            <fieldset><input type="text" id='first-name' name='first-name' required placeholder='First Name' /></fieldset>
            <fieldset><input type="text" id='last-name' name='last-name' required placeholder='Last Name' /></fieldset>
        </div>
        <input type="email" id='email' name='email' required placeholder='Email Address' />
        <fieldset>
            <legend>Country</legend>
            <input type="text" id='country' name='country' required />
        </fieldset>
        <input type="text" id='city' name='city' required placeholder='City' />
        <input type="number" id='referral-code' name='referral-code' placeholder='Referral Code' />
        <p>I drive my own car</p>
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
        <div className="custom-radio">
            <label>
                <input type="radio" name="car" id='sedan' />
                <img src="https://imagens-desafio.s3.amazonaws.com/section-3/car-icon-1.png" alt="Option 1"/>
            </label>

            <label>
                <input type="radio" name="car" id='suv-van' />
                <img src="https://imagens-desafio.s3.amazonaws.com/section-3/car-icon-2.png" alt="Option 2"/>
            </label>

            <label>
                <input type="radio" name="car" id='semi-luxury' />
                <img src="https://imagens-desafio.s3.amazonaws.com/section-3/car-icon-3.png" alt="Option 3"/>
            </label>

            <label>
                <input type="radio" name="car" id='luxury-car' />
                <img src="https://imagens-desafio.s3.amazonaws.com/section-3/car-icon-4.png" alt="Option 4"/>
            </label>
        </div>
        <button type='submit'>SUBMIT</button>
    </form>
  )
}

export default DriverForm