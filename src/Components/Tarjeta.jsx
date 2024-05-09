import React from 'react'
import { Link } from "react-router-dom";

const Tarjeta = ({ car: selectedCar }) => {
  return (
      <Link to={`/cars/${selectedCar.id}`}>
          <div className="card__container">
              <div className='car__card' id={selectedCar.id}>
                  <img className='card__image' src={selectedCar.images[0]} alt={selectedCar.name} />
                 
                 <div className='card__detail'>

                  <h4>{selectedCar.brand} {selectedCar.model}</h4>
                  {/* <p>{selectedCar.description}</p> */}
                  <p>${selectedCar.price} ARS</p>
                 </div>
              </div>
          </div>

      </Link>
  );
};

export default Tarjeta