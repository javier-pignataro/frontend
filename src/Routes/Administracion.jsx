import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Administracion = () => {
    function postVehiculo(postJson) {
        axios.post(
            'http://localhost:8080/vehicle',
            postJson,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(
            response => {
                console.log(response)
                setError("")
            }
        ).catch(
            error => {
                console.log(error)
                setError("Esta patente ya está registrada en el sistema.")
            }
        )
    }

    const [error, setError] = useState("")
    function errorHandling(string) {
        if (!string) {
            setError("")
            return
        }
        let result = "Error al enviar al formulario: " + string
        setError(result)
    }

    const [pressedButton, setPressedButton] = useState(false)
    function pressButton() {
        setPressedButton(!pressedButton)
    }

    function submitForm(e) {
        e.preventDefault()
        const patente = e.target[0].value.toUpperCase()
        const descripcion = e.target[1].value
        const modelo = e.target[2].value
        const tipo = e.target[3].value
        const marca = e.target[4].value
        const price = e.target[5].value
        const year = e.target[6].value
        const imagenes = [e.target[7].value, e.target[8].value, e.target[9].value, e.target[10].value, e.target[11].value]
        // console.log(patente, descripcion, modelo, tipo, marca, imagenes)
        if (!patente || !descripcion || !modelo || !tipo || !marca || !imagenes[0] || !price || !year) {
            errorHandling("Por favor, complete todos los campos.")
            return
        }
        // check if price is double and year is number
        if (isNaN(parseFloat(price)) || isNaN(parseInt(year))) {
            errorHandling("Por favor, ingrese un precio y un año válidos.")
            return
        }
        errorHandling(false)
        const postJson = {
            "plate": patente,
            "description": descripcion,
            "reserved": false,
            "model": {
                "name": modelo
            },
            "type": {
                "name": tipo
            },
            "price": parseFloat(price),
            // "year": year, //! sera definido mas adelante
            "brand": {
                "name": marca,
            },
            "image": {
                "imageUrls": []
            }
        }
        imagenes.forEach(
            imagen => {
                postJson.image.imageUrls.push(imagen)
            }
        )
        postVehiculo(
            postJson
        )
    }

    return (
        <div className="administracion__container">
            <h2 className="title__admin">Administración</h2>
            <div className="administracion__botones">
                <button onClick={pressButton}>Agregar Vehículo</button>
                {
                    error && (
                        <p className='administracion__error'>{error}</p>
                    )
                }
                {
                    pressedButton && (
                        <form onSubmit={submitForm}>
                            <input type="text" placeholder="Patente" />
                            <input type="text" placeholder="Descripción" />
                            <input type="text" placeholder="Modelo" />
                            <input type="text" placeholder="Tipo" />
                            <input type="text" placeholder="Marca" />
                            <input type="text" placeholder="Precio" />
                            <input type="text" placeholder="Año" />
                            <input type="text" placeholder="Imagen #1" />
                            <input type="text" placeholder="Imagen #2" />
                            <input type="text" placeholder="Imagen #3" />
                            <input type="text" placeholder="Imagen #4" />
                            <input type="text" placeholder="Imagen #5" />
                            <button type="submit" className='administracion__submit__button'>Agregar</button>
                        </form>
                    )
                }
                <Link to='/administracion/listavehiculos'>
                    <button>Ver lista de vehículos</button>
                </Link>
            </div>
            <div className="phone__error">
                <h1>No se puede ingresar con un teléfono móvil</h1>
                <h2>Por favor, vuelva a intentar desde una computadora.</h2>
            </div>
        </div>
    )
}

export default Administracion