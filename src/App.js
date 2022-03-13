import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import Homepage from "./Homepage";
import Detailspage from "./Detailspage";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokemon/:pokemonId" element={<Detailspage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
