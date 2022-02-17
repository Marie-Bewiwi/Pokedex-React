import React from "react";
import "./PokemonCard.css"


function PokemonCard({pokemonNumber,pokemonName,img,type}){
return (
    <div id='card'>
        <p>{pokemonNumber}</p>
        <h3>{pokemonName}</h3>
        <img src={img}></img>
        <p>{type}</p>

    </div>
)
}
export default PokemonCard