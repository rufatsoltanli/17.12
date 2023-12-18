import React from 'react'
import "./style.scss"

function SectionText({ children }) {
    return (
        <div className="sectionTextCont">
            <div className="redBox"></div>
            <div className="text">{children}</div>
        </div>
    )
}

export default SectionText