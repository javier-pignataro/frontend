import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";

import carsJson from '../cars.json'

const Detail = () => {
    const { id } = useParams();

    // console.log("carid", id)

    // const getCarSelected = () => {
    //     let car = carsJson.find(car => car.id == id);
    //     return car;
    // }

    // const car = getCarSelected(); // Get the selected car object

    const navigate = useNavigate();
    const params = useParams(); 
    const [car, setCar] = useState([]);
    console.log(car);
    // console.log(params);


    function getCar() {
        axios.get(`http://localhost:8080/vehicle/${params.id}`).then((res) => {
        setCar(res.data);
        });
    }
    
    useEffect(() => {
        getCar();
    }, []);
    





    
    return (
        <div className="detail__container">
            <h2>Vehículo seleccionado:</h2>
            <div className='selected__car__detail__container'>
                <div className='imagen__y__detalles__container'>
                    {/* <img src={car.image.ImageUrls[0]} /> */}
                    {/* <div className='detalles__del__motor'>
                        <h4>Detalles del motor:</h4>
                        <ul>
                            <li>Motor: {car.specs.engine}</li>
                            <li>Caballos de fuerza: {car.specs.horsepower}hp</li>
                            <li>Torque: {car.specs.torque}Nm</li>
                            <li>0-100kmh: {car.specs.zerotosixty}s</li>
                            <li>Velocidad máxima: {car.specs.topSpeed}mph</li>
                            <li>Transmisión: {car.specs.transmission}</li>
                            <li>Tren de transmisión: {car.specs.drivetrain}</li>
                        </ul>
                    </div> */}
                </div>
                <div className="informacion__basica">
                    <h3>MARCA: {car.description} </h3>
                    {/* <h5>{car.model.name} </h5> */}

                    {/* <p>Click <Link to={`/cars/${car.id}/images`}>aquí</Link> para ver mas imágenes.</p> */}
                    <br />
                    <p>DOMINIO: {car.plate}</p>
                    <p>TIPO: {car.type.name}</p>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Detail