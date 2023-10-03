import React from "react";
import logo from "../images/airbnb-logo.svg"

export default function Navbar() {
    return (
        <nav className="nav">
            <img className="logo" src={logo} alt="" />
        </nav>
    )
}