import React from "react";

export default function Card(props) {
    return (
        <section className="services">
            <img className="swimmer" src={props.img} alt="" />
            <div className="rating-div">
                <img className="star" src="star.png" alt="" />
                <span>{props.rating}</span>
                <span className="rating-det">({props.reviewCount})</span>
                <span className="rating-det">•</span>
                <span className="rating-det">{props.country}</span>
            </div>
            <p className="service-info">{props.title}</p>
            <p className="service-det">
                <span className="price">From ${props.price} </span>/ person
            </p>
        </section>
    )
}