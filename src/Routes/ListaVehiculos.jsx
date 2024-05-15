import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'

const ListaVehiculos = () => {
    function deleteVehiculo(id) {
        if (confirm("¿Estás seguro que deseas eliminar este vehículo?") === false) return
        setCars(cars.filter(car => car.idVehicle !== id))
        axios.delete('http://localhost:8080/vehicle/delete/' + id).then(
            response => {
                console.log(response)
            }
        )
    }

    const [cars, setCars] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/vehicle/all").then((res) => {
            setCars(res.data);
        });
    }, []);

    return (
        <div className="administracion__lista__vehiculos__container">
            <h2>Lista de vehículos</h2>
            <div className="lista__de__vehiculos">
                <div className="ids">
                    <h3>ID</h3>
                    {cars.map(car => {
                        return (
                            <p>{car.idVehicle}</p>
                        )
                    })}
                </div>
                <div className="marcas">
                    <h3>Marca</h3>
                    {cars.map(car => {
                        return (
                            <p>{car.brand.name}</p>
                        )
                    })}
                </div>
                <div className="eliminar">
                    <h3>Eliminar</h3>
                    {cars.map(car => {
                        return (
                            <button onClick={() => deleteVehiculo(car.idVehicle)}>Eliminar</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ListaVehiculos