import React from "react";
import "./App.css";
import "./Header";
import Header from "./Header";
import PokemonList from "./PokemonList";
import SearchBar from "./SearchBar";

function App() {
  const [input, setInput] = React.useState("");

  return (
    <div className="App">
      <Header></Header>
      <SearchBar input={input} setInput={setInput}></SearchBar>
      <PokemonList input={input}></PokemonList>
    </div>
  );
}

export default App;
