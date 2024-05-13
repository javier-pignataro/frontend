import React, { useEffect, useState } from 'react'

import axios from 'axios'

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

  const [cars, setCars] = useState([]);

  function fetchCars() {
    axios.get('http://localhost:8080/vehicle/all').then(res => {
      console.log(res.json());
    })
  }

  useEffect(() => {
    fetchCars()
    console.log(cars)
  }, [])

  const onClickButton = () => {
    const input = document.querySelector('input')
    const text = input.value
    console.log(text)
    // take user to /search/"text"
    window.location.href = `/search/${text}`
  }

  return (
    <div className='container__home'>
      <div className='left__column'>
        <div className='info'>
          <img src={ArrancARLogo} alt="" />
          <h1>Bienvenido a Arranc<span className='span__primary__color'>AR</span>!</h1>
          <h3>Donde cada viaje empieza.</h3>
          <Link to="/search/">
            <button>Ver todos los autos 🔎</button>
          </Link>
        </div>
      </div>
      <div className='right__column'>
        <div className="search">
          <input placeholder="Buscar autos..." type="text"></input>
          <button type="submit" onClick={onClickButton}>Buscar 🔎</button>
        </div>
        <div className='container__cars__showcase'>
          {
            getRandomCars().map(car => {
              return (
                <Card car={car} key={car.id} className='car__card' />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home