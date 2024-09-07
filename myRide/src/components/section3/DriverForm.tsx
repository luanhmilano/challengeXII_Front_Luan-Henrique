import axios, { AxiosError } from 'axios'

import { useState, useEffect } from "react"
import { useForms } from '../../hooks/useForms'

import { WarningCircle, CaretDown } from "@phosphor-icons/react/dist/ssr"

import { DriverSchema } from '../../schema/driverSchema'

import CheckboxButton from './CheckboxButton'
import Sucess from "./Sucess"
import Loader from "./Loader"

import './styles/driverform.css'
import './styles/cartype.css'
import './styles/section3.css'

interface Country {
    country: string;
}

const DriverForm: React.FC = () => {

    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [cityValue, setCityValue] = useState<string>('')

    const [error409, setError409] = useState<string>('')

    const [isRegistered, setIsRegistered] = useState<boolean>(false)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
            if (response.data && Array.isArray(response.data.data)) {
              setCountries(response.data.data);
            } else {
              setCountries([]);
            }
          } catch (error) {
            console.error('There was an error fetching the countries!', error);
            setCountries([]);
          }
        };
    
        fetchCountries();
      }, []);
    

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(event.target.value);
        setCityValue('')
    };

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (selectedCountry === '') {
            setCityValue('')
        } else {
            setCityValue(event.target.value)
        }
    }
  
    const {register, handleSubmit, errors} = useForms()
    const newRegister = register('country')

    // Envia para o backend
    const onSubmit = async (data: DriverSchema) => {
        setIsLoading(true)

        const driver = JSON.stringify(data)
        console.log(driver)

        try {
            const response = await axios.post(`${import.meta.env.VITE_HOST}/driver`, driver, {
                headers: {
                  'Content-Type': 'application/json',
                },
            });

            setIsLoading(false)

            if (response.status === 201 ) {
                setIsRegistered(true)
            }
            
        } catch (error) {
            setIsLoading(false)
            if (error instanceof AxiosError && error.response?.status === 409) {
                setError409(error.response.data.message)
            }

            console.log("Erro ao cadastrar motorista: ", error)
        }
    }

    if (isRegistered) {
        return <Sucess />
    } else {
        return (
        <section className="section3-container">

            <div className='section3-form-header'>
                <span><img src="../../../public/popup-image.png" alt="Logo seção 3" /></span>
                <div className='section3-text'>
                    <h1 className='section3-title'>Drive with MyRide</h1>
                    <p className='section3-subtitle'>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</p>
                </div>
            </div>

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
                  {error409 && <small className='invalid-message'><WarningCircle weight="fill" />{error409}</small>}
              </span>
              
              <span>
                    <fieldset>
                      <legend>Country</legend>
                        <select id='country-select' value={selectedCountry} {...newRegister} onChange={handleCountryChange} >
                          <option value="" disabled>Country</option>
                          {countries.map(country => (
                              <option key={country.country} value={country.country}>
                              {country.country}
                            </option>
                          ))}
                        </select>
                        <CaretDown size={32} color='white' />
                    </fieldset>
                    {errors.country && <small className='invalid-message'><WarningCircle weight="fill" />{errors.country.message}</small>}
              </span>
      
              <span>
                  <fieldset>
                      <input type="text" id='city' className='section3-input' {...register("city")} onChange={handleCityChange} placeholder='City' value={cityValue} />
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
      
              <div className="custom-radio">
                  <label>
                      <div className="cartype-card">
                          <input type="radio" id='sedan' value="sedan" {...register('carType')} />
                          <img src="../../../public/sedan.png" alt="Option 1"/>
                          <p>Sedan</p>
                      </div>
                  </label>
      
                  <label>
                      <div className="cartype-card">
                          <input type="radio" id='suv-van' value="suvVan" {...register('carType')} /> 
                          <img src="../../../public/suv.png" alt="Option 2"/>
                          <p>SUV/Van</p>
                      </div>
                  
                  </label>
      
                  <label>
                      <div className="cartype-card">
                          <input type="radio" id='semi-luxury' value="semiLuxury" {...register('carType')} />
                          <img src="../../../public/semi.png" alt="Option 3"/>
                          <p>Semi Luxury</p>
                      </div>
                  </label>
      
                  <label>
                      <div className="cartype-card">
                          <input type="radio" id='luxury-car' value="luxuryCar" {...register('carType')} />
                          <img src="../../../public/luxury.png" alt="Option 4"/>
                          <p>Luxury Car</p>
                      </div>
                  </label>
      
              </div>
              {errors.carType && <small className='invalid-message'><WarningCircle weight="fill" />{errors.carType.message}</small>}
      
              <span className="button-load"><button type='submit'>SUBMIT</button> {isLoading && <Loader />} </span>
          </form>
        </section>
        )
    }

}

export default DriverForm