// eslint-disable-next-line no-unused-vars
import React from 'react'

function Heading({ text }) {
    return (
        <div>
            <h1 className={`${text === "portfolio component" || text === "contact component" ? "text-[#2C3E50]" : "text-white"} uppercase font-bold text-3xl p-2`}>{text}</h1>
            <div className={`${text === "portfolio component" || text === "contact component" ? "text-[#2C3E50]" : "text-white"} flex items-center justify-center mb-3 font-weight-bold`}>
                <div className={`${text === "portfolio component" || text === "contact component" ? "bg-[#2C3E50]" : "bg-white"} h-[4px] w-1/12 mr-3`}></div>
                <i className={`${text === "portfolio component" || text === "contact component" ? "text-[#2C3E50]" : "text-white"} fa-solid fa-star`}></i>
                <div className={`${text === "portfolio component" || text === "contact component" ? "bg-[#2C3E50]" : "bg-white"} h-[4px] w-1/12 ml-3`}></div>
            </div>

        </div>
    )
}

export default Heading