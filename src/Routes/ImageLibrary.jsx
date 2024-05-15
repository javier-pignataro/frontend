import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const ImageLibrary = () => {
    const { id } = useParams()

    const [car, setCar] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8080/vehicle/${id}`).then((res) => {
            setCar(res.data);
        });
    }, []);

    return (
        <>
            <Link to={`/cars/${car.idVehicle}`}><h3>Volver</h3></Link>
            <div className='image__library__container'>
                {
                    car.image?.imageUrls.map((img) => {
                        if (img == '') return
                        return <img src={img} alt="car-image" />
                    })
                }
            </div>
        </>
    )
}


export default ImageLibrary;


