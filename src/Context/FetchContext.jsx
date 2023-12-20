import React, { createContext, useEffect, useState } from 'react'

export const FetchContext = createContext()

function FetchProvider({ children }) {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
            .then(res => res.json())
            .then(data => setApiData(data))
    }, [])

    const data = { apiData, setApiData }
    return (
        <FetchContext.Provider value={data}>
            {children}
        </FetchContext.Provider>
    )
}

export default FetchProvider