import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data.js"

export default function App(){
    const cardList = cardData.map(obj => {
        return (
            <Card 
                img={obj.coverImg}
                rating={obj.stats.rating}
                reviewCount={obj.stats.reviewCount}
                location={obj.location}
                title={obj.title}
                price={obj.price}
            />
        )
    });

    return (
        <div>
            <Navbar />
            <Hero />
            {cardList}
        </div>
    )
}