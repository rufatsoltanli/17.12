import React from 'react'
import Hero from './HeroSection'
import './style.css'
import FlashSales from './FleshSalesSection'
import CategoriesSection from './CategoriesSection'

function HomePage() {
    return (
        <div id='homePage'>
            <Hero />
            <FlashSales />
            <CategoriesSection />
        </div>
    )
}

export default HomePage