import React from 'react'
import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import carsJson from '../cars.json'

const Detail = () => {
    const { id } = useParams()

    console.log("carid", id)

    const getCarSelected = () => {
        let car = carsJson.find(car => car.id == id);
        return car;
    }

    const car = getCarSelected(); // Get the selected car object

    return (
        <div className="detail__container">
            <h2>Car Selected:</h2>
            <div className='selected__car__detail__container'>
                <div className='imagen__y__detalles__container'>
                    <img src={car.images[0]} />
                    <div className='detalles__del__motor'>
                        <h4>Detalles del motor:</h4>
                        <p>Motor: {car.specs.engine}</p>
                        <p>Caballos de fuerza: {car.specs.horsepower}hp</p>
                        <p>Torque: {car.specs.torque}Nm</p>
                        <p>0-100kmh: {car.specs.zerotosixty}s</p>
                        <p>Velocidad máxima: {car.specs.topSpeed}mph</p>
                        <p>Transmisión: {car.specs.transmission}</p>
                        <p>Tren de transmisión: {car.specs.drivetrain}</p>
                    </div>
                </div>
                <div className="informacion__basica">
                    <h3>{car.brand} {car.model}</h3>
                    <p>Click <Link to={`/cars/${car.id}/images`}>aquí</Link> para ver mas imágenes.</p>
                    <br />
                    <p>{car.description}</p>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Detail