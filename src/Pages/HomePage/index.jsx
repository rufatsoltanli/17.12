import React from 'react'
import Hero from './HeroSection'
import './style.css'
import FlashSales from './FleshSalesSection'

function HomePage() {
    return (
        <div id='homePage'>
            <Hero />
            <FlashSales/>
        </div>
    )
}

export default HomePage