import React from 'react'
import { useParams, Link } from 'react-router-dom'

import carsJson from '../cars.json'

const ImageLibrary = () => {
    const { id } = useParams()

    const getCarSelected = () => {
        let car = carsJson.find(car => car.id == id);
        return car;
    }

    const car = getCarSelected(); // Get the selected car object

    return (
        <>
            <Link to={`/cars/${car.id}`}><h3 className='link__volver'>Volver</h3></Link>
            <div className='image__library__container'>
                {car.images.map(image => {
                    return (
                        <img src={image} />
                    )
                })}
            </div>
        </>
    )
}


export default ImageLibrary