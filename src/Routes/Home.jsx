import React, { useEffect } from 'react'

import Card from '../Components/Card'

import ArrancARLogo from '../assets/logo-light-transparente.png'

import carsJson from '../cars.json'
import { Link } from 'react-router-dom'

const Home = () => {

  const getRandomCars = () => {
    let result = []

    for (let i = 0; i < 10; i++) {
      let car = carsJson[Math.floor(Math.random() * carsJson.length)]
      while (result.includes(car)) {
        car = carsJson[Math.floor(Math.random() * carsJson.length)]
      }
      result.push(car)
    }

    return result
  }

  return (
    <div className='container__home'>
      <div className='left__column'>
        <div className='info'>
          <h1><img src={ArrancARLogo} alt="" /></h1>
          <h1>Bienvenido a ArrancAR!</h1>
          <h3>Donde cada viaje empieza.</h3>
          <button>Ver todos los autos 🔎</button>
        </div>
      </div>
      <div className='right__column'>
        <div className="container">
          <h3>Estos son algunos de nuestros autos para alquilar:</h3>
          <div className='container__cars__showcase'>
            {
              getRandomCars().map(car => {
                return (
                  <Card car={car} className='car__card' />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home