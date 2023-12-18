import React from 'react'
import "./style.scss"

function CategoriesCards({ icon, text }) {
    return (
        <>
            <div className="categoriesCard">
                <div className="categoriesCardContent">
                    <div className="icon">{icon}</div>
                    <div className="text">{text}</div>
                </div>
            </div>
        </>
    )
}

export default CategoriesCards