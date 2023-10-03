import React from "react";
import swimmer from "../images/swimmer.png";
import star from "../images/star.png"

export default function Card() {
    return (
        <section className="services">
            <img className="swimmer" src={swimmer} alt="" />
            <div className="rating-div">
                <img className="star" src={star} alt="" />
                <span>5.0</span>
                <span className="rating-det">(6)</span>
                <span className="rating-det">•</span>
                <span className="rating-det">USA</span>
            </div>
            <p className="service-info">Life lessons with Katie Zaferes</p>
            <p className="service-det">
                <span className="price">From $136 </span>/ person
            </p>
        </section>
    )
}