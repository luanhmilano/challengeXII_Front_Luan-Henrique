import React, { useState, useEffect } from 'react'
import { card } from './cards'
import './styles/card.css'

interface Car {
  title: string
  image: string  
  description: string
}

interface Props {
  idProp: number
}

const Card: React.FC<Props> = ( { idProp } ) => {

  const [carInfo, setCarInfo] = useState<Car | null>(null)

  useEffect(() => {
        const fetchCarInfo = async () => {
            setCarInfo(card[idProp]);
        }
        fetchCarInfo()
}, [idProp])

  return (
    <div className='card-container'>
      <div className='card-img-container'>
        <img src={`${carInfo?.image}`} alt="Car" />
      </div>
      <div className='card-text'>
        <h1 className='card-title'>{carInfo?.title}</h1>
        <p className='card-description'>{carInfo?.description}</p>
      </div>
      <a href="https://pt.wikipedia.org/wiki/Autom%C3%B3vel" target='_blank' className='learn-more'>LEARN MORE</a>
    </div>
  )
}

export default Card