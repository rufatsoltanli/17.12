import React from 'react'
import Slider from './slider'
import "./style.scss"
import SectionText from '../../../Components/SectionText'
import RedButton from '../../../Components/RedButton'

function FlashSales() {
    return (

        <>
            <section id='flashSales'>
                <SectionText>Today's</SectionText>
                <div className="flashSales">
                    <h1>Flash Sales   </h1>
                </div>
                <div className="sliderCont">
                    <Slider />
                </div>
                <RedButton>View All Products</RedButton>
            </section>
            <hr />
            </>
    )
}

export default FlashSales