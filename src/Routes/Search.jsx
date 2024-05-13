import React from 'react'
import { useParams } from 'react-router-dom'

import Card from '../Components/Card'

import CarsJson from '../cars.json'

const Search = () => {
    const { search } = useParams();
    //? if search is empty, it will be undefined

    const searchCars = () => {
        let result = [];

        if (!search) {
            return CarsJson;
        }

        CarsJson.forEach(car => {
            if (car.brand.toLowerCase().includes(search.toLowerCase()) || car.model.toLowerCase().includes(search.toLowerCase())) {
                result.push(car);
            }
        });

        return result;
    }

    const searchResults = searchCars();

    return (
        <div className="search__container">
            <h2>Resultados de la búsqueda:</h2>
            <div className="search__results">
                {
                    searchResults.map(car => {
                        return (
                            <Card car={car} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Search