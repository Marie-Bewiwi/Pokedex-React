import React from "react"
import "./header.css"
import logo from "../logo.svg"

function Header() {
    return (
        <header>
            <img id="logo" src={logo} />
        </header>
    )
}
export default Header