import React from 'react'
import Hero from './HeroSection'
import './style.css'
import FlashSales from './FleshSalesSection'
import CategoriesSection from './CategoriesSection'
import BestSelling from './BestSellingSection'
import ChangeExperience from './ChangeExperience'
import OurProducts from './OurProducts'

function HomePage() {
    return (
        <div id='homePage'>
            <Hero />
            <FlashSales />
            <CategoriesSection />
            <hr />
            <BestSelling />
            <hr />
            <ChangeExperience />
            <hr />
            <OurProducts />
        </div>
    )
}

export default HomePage