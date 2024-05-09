import React, { useEffect } from 'react'

import Card from '../Components/Card'

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
      <h1>Hogar</h1>
      <h2>Bienvenido a ArrancAR!</h2>
      <h3>Estos son algunos de nuestros autos listos para alquilar:</h3>
      <div className='container__cars__showcase'>
        {
          getRandomCars().map(car => {
            return (
              <Card car={car} className='car__card'></Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home