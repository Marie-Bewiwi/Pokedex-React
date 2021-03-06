import React from "react";
import PokemonCard from "./PokemonCard";
import pokemons from "../../pokemons.json";
import "./PokemonList.css";

function PokemonList({ input }) {
  return (
    <div class="list">
      {pokemons
        .filter((pokemon) => {
          if (pokemon.names.fr.toLowerCase().includes(input)) {
            return true;
          }
        })
        .map((pokemon) => {
          return (
            <PokemonCard
              pokemonNumber={pokemon.id}
              pokemonName={pokemon.names.fr}
              img={pokemon.image}
              type={pokemon.types}
            ></PokemonCard>
          );
        })}
    </div>
  );
}
export default PokemonList;
