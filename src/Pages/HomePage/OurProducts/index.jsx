import React from 'react'
import SectionText from '../../../Components/SectionText'
import "./style.scss"
import Slider from './slider'

function OurProducts() {
    return (
        <section id='ourProducts'>
            <SectionText>Our Products</SectionText>
            <h1>
                Explore Our Products
            </h1>
            <div className="sliderCont">
                <Slider />
            </div>
        </section>
    )
}

export default OurProducts