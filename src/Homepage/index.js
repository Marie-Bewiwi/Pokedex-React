import React from "react";
import SearchBar from "./PokemonList/SearchBar";
import PokemonList from "./PokemonList";

function Homepage() {
  const [input, setInput] = React.useState("");

  return (
    <div className="App">
      <SearchBar input={input} setInput={setInput}></SearchBar>
      <PokemonList input={input}></PokemonList>
    </div>
  );
}
export default Homepage;
