import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import ArrancARLogo from "../assets/logo-light-transparente.png";
import carsJson from "../cars.json";
import { Link } from "react-router-dom";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/vehicle/all").then((res) => {
      setCars(res.data);
    });
  }, []);

  const onClickButton = () => {
    const input = document.querySelector("input");
    const text = input.value;
    // take user to /search/"text"
    window.location.href = `/search/${text}`;
  };


  // const getRandomCars = () => {
  //   let result = [];
  //   for (let i = 0; i < 10; i++) {
  //     let car = cars[Math.floor(Math.random() * cars.length)];
  //     while (result.includes(car)) {
  //       car = cars[Math.floor(Math.random() * cars.length)];
  //     }
  //     result.push(car);
  //   }
  //   return result;
  // };

  return (
    <div className="container__home">
      <div className="left__column">
        <div className="info">
          <img src={ArrancARLogo} alt="" />
          <h1>
            Bienvenido a Arranc<span className="span__primary__color">AR</span>!
          </h1>
          <h3>Donde cada viaje empieza.</h3>
          <Link to="/search/">
            <button>Ver todos los autos 🔎</button>
          </Link>
        </div>
      </div>
      <div className="right__column">
        <div className="search">
          <input placeholder="Buscar autos..." type="text"></input>
          <button type="submit" onClick={onClickButton}>
            Buscar 🔎
          </button>
        </div>
        <div className="container__cars__showcase">
          {cars.map((car) => {
            return <Card car={car} key={car.idVehicle} className="car__card" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
