import React from "react";
import grid from "../images/photo-grid.png";

export default function Hero() {
    return (
        <section className="hero">
            <div className="photo-div">
                <img className="photo-grid" src={grid} alt="" />
            </div>
            <h1 className="hero-title">Online experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}