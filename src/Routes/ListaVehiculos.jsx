import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ListaVehiculos = () => {
  function deleteVehiculo(id) {
    if (confirm("¿Estás seguro que deseas eliminar este vehículo?") === false)
      return;
    setCars(cars.filter((car) => car.idVehicle !== id));
    axios
      .delete("http://localhost:8080/vehicle/delete/" + id)
      .then((response) => {
        console.log(response);
      });
  }

  const [cars, setCars] = useState([]);
  console.log(cars);
  const{imgUrls} = cars;
  useEffect(() => {
    axios.get("http://localhost:8080/vehicle/all").then((res) => {
      setCars(res.data);
    });
  }, []);

  return (
    <>
      <h2 className="title__admin">Administración</h2>
      <div className="content-history">
        <h3>Image</h3>
        <h3>Id</h3>
        <h3>Marca</h3>
        <h3>Modelo</h3>
        <h3>Tipo</h3>
        <h3></h3>
      </div>

      {cars.map((car) => {

        return (
          <div className="administracion__lista__vehiculos__container ">
            <div className="history-list">
   
              <img className="img-history" src={car.imgUrls[0].url} alt="" /> 
                <h4>{car.idVehicle}</h4>
              <p>{car.description}</p>
              <h4>{car.brand.name}</h4>
              <h4>{car.type.name}</h4>
            <div className="container__buttons">
              <button onClick={() => deleteVehiculo(car.idVehicle)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
              <button onClick={() => alert("Sitio en desarrollo")}>
                <FontAwesomeIcon icon={faPen} />
              </button>
            </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListaVehiculos;
