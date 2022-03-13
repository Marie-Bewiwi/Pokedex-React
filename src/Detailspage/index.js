import React from "react";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";
import pokemons from "../pokemons.json";

function Detailspage() {
  const { pokemonId } = useParams();
  console.log(pokemonId);
  return pokemons.filter((pokemon) => {
    return <div>{pokemon.names.fr}</div>;
  });
}
export default Detailspage;
