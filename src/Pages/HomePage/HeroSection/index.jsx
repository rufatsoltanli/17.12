import React from 'react'
import "./style.scss"

function Hero() {
    return (
        <section id='hero'>
            <div className="categories">
                <ul>
                    <li>Womens's fasion</li>
                    <li>Men's fasion</li>
                    <li>Derby's</li>
                    <li>Loafer's</li>
                    <li>Boot's</li>
                    <li>Chukka's</li>
                    <li>Monk's</li>
                    <li>Sandal's</li>
                    <li>Sneaker's</li>
                </ul>
            </div>
            <div className="placard"></div>
        </section>
    )
}

export default Hero