import { Link } from "react-router-dom";

const Card = ({ car: selectedCar }) => {
    return (
        <Link to={`/cars/${selectedCar.id}`}>
            <div className="selected__car__detail__container">
                <div className='car__card' id={selectedCar.id}>
                    <img src={selectedCar.images[0]} alt={selectedCar.name} />
                    <h4>{selectedCar.brand} {selectedCar.model}</h4>
                    {/* <p>{selectedCar.description}</p> */}
                    <p>${selectedCar.price} ARS</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
