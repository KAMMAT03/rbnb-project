import React from "react";

export default function Card(props) {
    return (
        <section className="card">
            {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
            <img className="card-image" src={props.img} alt="" />
            <div className="card-stats">
                <img className="card-star" src="star.png" alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})</span>
                <span className="gray">•</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price">
                <span className="price">From ${props.price} </span>/ person
            </p>
        </section>
    )
}