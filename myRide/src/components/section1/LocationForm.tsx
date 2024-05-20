import axios from 'axios'

import React, { useState, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';

import { MagnifyingGlass, X } from '@phosphor-icons/react'

import './styles/location-form.css'

interface IPInfo {
    ip: string
    location: {
        region: string
        country: string
        city: string
    }   
}

const LocationForm: React.FC = () => {

    // Consumo da API de localização, salvando os dados em localstorage

    const [ipInfo, setIpInfo] = useState<IPInfo | null>(null)


    useEffect(() => {
        const savedIPInfo = localStorage.getItem('ipInfo')

        if (savedIPInfo) {
            setIpInfo(JSON.parse(savedIPInfo))
        } else {
            const fetchIPInfo = async () => {
                try {
                    // APIKEY = at_LZoAcsn5XT4jigA1Jo2qile871aqk
                    const response = await axios.get(`${import.meta.env.VITE_IP_API}=${import.meta.env.VITE_APIKEY}`);
                    setIpInfo(response.data);
                    localStorage.setItem('ipInfo', JSON.stringify(response.data));
                } catch (error) {
                    console.error('Erro ao buscar informações do IP: ', error)
                }
            }

            fetchIPInfo()
        }
    }, [])

    const pickup = `${ipInfo?.location.city}, ${ipInfo?.location.region}, ${ipInfo?.location.country}`

    // Mudança de cor no campo "Your Destination" usando useState

    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    // Submit e redirecionamento para a página 404

    const navigate = useNavigate()

    const handleSubmit = () => {
        return navigate("/404")
    }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Find a ride now</h2>
        <div className="fields">
            <fieldset>
                <legend>Your Pickup</legend>
                <input type="text" className="form-input" id="location-input" name="location" value={pickup} readOnly/>
                <X size={20} color="white" />
            </fieldset>
            <fieldset style={{ border: `2px solid ${isFocused ? '#FBA403' : 'rgba(255, 255, 255, 70%)'}` }}>
                <legend style={{ color: `${isFocused ? '#FBA403' : 'rgba(255, 255, 255, 70%)'}` }} >Your Destination</legend>
                <input type="text" className="form-input" id="destination-input" name="destination" onFocus={handleFocus} onBlur={handleBlur} required />
                <X size={20} style={{ color: `${isFocused ? '#FBA403' : 'rgba(255, 255, 255, 70%)'}` }} />
            </fieldset>
        </div>
        <button type="submit">
            <MagnifyingGlass size={20} weight="bold" />
            FIND A DRIVER
        </button>
    </form>
  )
}

export default LocationForm