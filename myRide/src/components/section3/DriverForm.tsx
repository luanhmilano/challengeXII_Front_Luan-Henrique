import { WarningCircle } from "@phosphor-icons/react/dist/ssr"
import { useForms } from '../../hooks/useForms'
import { DriverSchema } from '../../schema/driverSchema'
import CarTypeRadio from './CarTypeRadio'
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
    <form onSubmit={handleSubmit(onSubmit)} className='section3-form'>
        <div className='section3-names'>
            <span className='names-field'>
                <fieldset>
                    <input type="text" id='first-name' className='section3-input' {...register("firstName")} placeholder='First Name' />
                </fieldset>
                {errors.firstName && <small className='invalid-message'><WarningCircle weight="fill" />{errors.firstName.message}</small>}
            </span>
            <span  className='names-field'>
                <fieldset>
                    <input type="text" id='last-name' className='section3-input' {...register("lastName")} placeholder='Last Name' />
                </fieldset>
                {errors.lastName && <small className='invalid-message'><WarningCircle weight="fill" />{errors.lastName.message}</small>}
            </span>
        </div>
        <span>
            <fieldset>
                <input type="email" id='email' className='section3-input' {...register("email")} placeholder='Email Address' />
            </fieldset>
            {errors.email && <small className='invalid-message'><WarningCircle weight="fill" />{errors.email.message}</small>}
        </span>
        <Country />
        <span>
            <fieldset>
                <input type="text" id='city' className='section3-input' {...register('city')} placeholder='City' />
            </fieldset>
            {errors.city && <small className='invalid-message'><WarningCircle weight="fill" />{errors.city.message}</small>}
        </span>
        <span>
            <fieldset>
                <input type="text" id='referral-code' className='section3-input' {...register('referralCode')} placeholder='Referral Code' />
            </fieldset>
            {errors.referralCode && <small className='invalid-message'><WarningCircle weight="fill" />{errors.referralCode.message}</small>}
        </span>
        <div className='own-car'>
            <p>I drive my own car</p>
            <CheckboxButton />
        </div>
        <h2 id='cartype-title'>Select your car type</h2>
        <CarTypeRadio />
        <button type='submit'>SUBMIT</button>
    </form>
  )
}

export default DriverForm