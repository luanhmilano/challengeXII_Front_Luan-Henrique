import { useForms } from '../../hooks/useForms'
import { DriverSchema } from '../../schema/driverSchema'
import CheckboxButton from './CheckboxButton'
import Country from './Country'
import './driverform.css'

const DriverForm = () => {

    const {register, handleSubmit, errors} = useForms()

    // Envia para o backend
    const onSubmit = (data: DriverSchema) => {
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <fieldset>
                <input type="text" id='first-name' {...register("firstName")} placeholder='First Name' />
            </fieldset>
            {errors.firstName && <small>{errors.firstName.message}</small>}
            <fieldset>
                <input type="text" id='last-name' {...register("lastName")} placeholder='Last Name' />
            </fieldset>
            {errors.lastName && <small>{errors.lastName.message}</small>}
        </div>
        <fieldset>
            <input type="email" id='email' {...register("email")} placeholder='Email Address' />
        </fieldset>
        {errors.email && <small>{errors.email.message}</small>}
        <Country />
        <fieldset>
            <input type="text" id='city' {...register('city')} placeholder='City' />
        </fieldset>
        {errors.city && <small>{errors.city.message}</small>}
        <fieldset>
            <input type="text" id='referral-code' {...register('referralCode')} placeholder='Referral Code' />
        </fieldset>
        {errors.referralCode && <small>{errors.referralCode.message}</small>}
        <div className='own-car'>
            <p>I drive my own car</p>
            <CheckboxButton />
        </div>
        <div className="custom-radio">
            <label>
                <input type="radio" {...register('carType')} id='sedan' value="sedan" />
                <img src="https://imagens-desafio.s3.amazonaws.com/section-3/car-icon-1.png" alt="Option 1"/>
            </label>

            <label>
                <input type="radio" {...register('carType')} id='suv-van' value="suv-van" />
                <img src="https://imagens-desafio.s3.amazonaws.com/section-3/car-icon-2.png" alt="Option 2"/>
            </label>

            <label>
                <input type="radio" {...register('carType')} id='semi-luxury' value="semi-luxury" />
                <img src="https://imagens-desafio.s3.amazonaws.com/section-3/car-icon-3.png" alt="Option 3"/>
            </label>

            <label>
                <input type="radio" {...register('carType')} id='luxury-car' value="luxury-car" />
                <img src="https://imagens-desafio.s3.amazonaws.com/section-3/car-icon-4.png" alt="Option 4"/>
            </label>
        </div>
        {errors.carType && <small>{errors.carType.message}</small>}
        <button type='submit'>SUBMIT</button>
    </form>
  )
}

export default DriverForm