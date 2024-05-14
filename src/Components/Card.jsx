import { Link } from "react-router-dom";

const Card = ({ car }) => {
    const {idVehicle, id, brand, description, model, image} = car;
    // console.log(car);
    return (
        <Link to={`/cars/${idVehicle}`}>
            <div className='car__card' id={id}>
                <img src={image.imageUrls[0]} alt={image.idImageList} />
                <div className="card__car__information">
                    <h4>{brand.name}</h4>
                    <p>{description.toUpperCase()}</p>
                    <p>${model.plate} </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
