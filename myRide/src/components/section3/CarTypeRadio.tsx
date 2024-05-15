import './cartype.css'

const CarTypeRadio = () => {


  return (
    <div className="custom-radio">
            <label>
                <div className="cartype-card">
                    <input type="radio" id='sedan' value="sedan" />
                    <img src="https://imagens-desafio.s3.amazonaws.com/section-3/car-icon-1.png" alt="Option 1"/>
                    <p>Sedan</p>
                </div>
            </label>

            <label>
                <div className="cartype-card">
                    <input type="radio" id='suv-van' value="suv-van" />
                    <img src="https://imagens-desafio.s3.amazonaws.com/section-3/car-icon-2.png" alt="Option 2"/>
                    <p>SUV/Van</p>
                </div>
            </label>

            <label>
                <div className="cartype-card">
                    <input type="radio" id='semi-luxury' value="semi-luxury" />
                    <img src="https://imagens-desafio.s3.amazonaws.com/section-3/car-icon-3.png" alt="Option 3"/>
                    <p>Semi Luxury</p>
                </div>
            </label>

            <label>
                <div className="cartype-card">
                    <input type="radio" id='luxury-car' value="luxury-car" />
                    <img src="https://imagens-desafio.s3.amazonaws.com/section-3/car-icon-4.png" alt="Option 4"/>
                    <p>Luxury Car</p>
                </div>
            </label>

    </div>
  )
}

export default CarTypeRadio