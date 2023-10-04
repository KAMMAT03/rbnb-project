import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data.js"

export default function App(){
    const cardList = cardData.map(obj => {
        return (
            <Card
                key={obj.id} 
                item={obj}
            />
        )
    });

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards">
                {cardList}
            </div>
        </div>
    )
}