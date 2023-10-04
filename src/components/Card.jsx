import React from "react";

export default function Card(props) {
    const obj = props.item;
    let badgeText;
    if (obj.openSpots === 0){
        badgeText = "SOLD OUT";
    } else if (obj.location === "Online"){
        badgeText = "ONLINE";
    }

    return (
        <section className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={obj.coverImg} alt="" />
            <div className="card-stats">
                <img className="card-star" src="star.png" alt="" />
                <span>{obj.stats.rating}</span>
                <span className="gray">({obj.stats.reviewCount})</span>
                <span className="gray">•</span>
                <span className="gray">{obj.location}</span>
            </div>
            <p className="card-title">{obj.title}</p>
            <p className="card-price">
                <span className="price">From ${obj.price} </span>/ person
            </p>
        </section>
    )
}