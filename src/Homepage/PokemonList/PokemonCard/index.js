import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

function PokemonCard({ pokemonNumber, pokemonName, img, type }) {
  return (
    <Link to={`pokemon/${pokemonNumber}`}>
      <div id="card">
        <p>{pokemonNumber}</p>
        <h3>{pokemonName}</h3>
        <img src={img}></img>
        <p>{type}</p>
      </div>
    </Link>
  );
}
export default PokemonCard;
