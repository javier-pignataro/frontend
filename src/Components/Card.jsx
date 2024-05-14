import { Link } from "react-router-dom";

const Card = ({ car: selectedCar }) => {
    console.log(selectedCar);
    return (
        <Link to={`/cars/${selectedCar.idVehicle}`}>
            <div className='car__card' id={selectedCar.id}>
                {/* <img src={selectedCar.images[0]} alt={selectedCar.name} /> */}
                <div className="card__car__information">
                    <h4>{selectedCar.brand.name} {selectedCar.brand.name}</h4>
                    <p>{selectedCar.description.toUpperCase()}</p>
                    <p>${selectedCar.model.plate} </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
