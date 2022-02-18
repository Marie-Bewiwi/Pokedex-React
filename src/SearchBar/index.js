import React from "react";

//afficher les pokemons card avec un filter/fonction includes/startswith ne pas utiliser state hook
function SearchBar({ input, setInput }) {
  return (
    <input
      type="text"
      value={input}
      onChange={(e) => {
        setInput(e.target.value.toLowerCase());
      }}
    ></input>
  );
}
export default SearchBar;
