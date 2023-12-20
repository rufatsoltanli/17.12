import React from 'react'
import Slider from './slider'
import SectionText from '../../../Components/SectionText'
import "./style.scss"

function CategoriesSection() {
    return (
        <section id='categoriesSection'>
            <SectionText>Categories</SectionText>
            <h1>Browse by Category</h1>
            <div className="sliderCont"><Slider /></div>
        </section>
    )
}

export default CategoriesSection