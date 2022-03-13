import React from "react";
import "./header.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img id="logo" src={logo} />
      </Link>
    </header>
  );
}
export default Header;
