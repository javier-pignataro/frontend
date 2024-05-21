import { Link } from "react-router-dom";

const Card = ({ car }) => {
    return (
        <Link to={`/cars/${car.idVehicle}`}>
            <div className='car__card' id={car.id}>
                <img src={car.imgUrls?.[0].url} alt={"main-image"} />
                <div className="card__car__information">
                    <h4>{car.brand.name}</h4>
                    <p>{car.model.name}</p>
                    <p>${car.price}</p>
                </div>
            </div>
        </Link>
    );
};
export default Card;
