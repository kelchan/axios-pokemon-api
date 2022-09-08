import React, { useState } from "react";
import axios from 'axios';

const AxiosPokemonApi = () => {

    let [pokemon, setPokemon] = useState([])

    //using this function to activite the Axios get data from a button
    const handleSubmit = () => {
        console.log("submit test");

        // axios get the data from the API
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                console.log("This is our API fetch results ", response);
                setPokemon(response.data.results);
            })
            .catch((err) => {
                console.log("We could not fetch the data", err);
            })
    }




    return (
        <div>
            <button onClick={handleSubmit}>Fetch Pokemon</button>
            <div>
            {
                    pokemon.map((onePokemon, index) => {
                        return (
                            <ul key={index}>
                                <li>
                                    {onePokemon.name}
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default AxiosPokemonApi;