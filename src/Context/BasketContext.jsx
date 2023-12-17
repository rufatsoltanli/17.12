import React, { createContext } from 'react'
import useLocalStorage from '../hook/useLocalStorage'

export const BasketContext = createContext()

function BasketProvider({ children }) {
    const [basket, setBasket] = useLocalStorage("basket", [])

    function addToBasket(item) {
        const index = basket.findIndex((x) => x.id === item.id)
        if (index === -1) {
            setBasket([...basket, { ...item, count: 1 }])
            return
        }
        basket[index].count++
    }

    function removeFromBasket(item) {
        basket.filter((x) => x !== item)
    }

    function countInc(item) {
        const index = basket.findIndex((x) => x.id === item.id)
        basket[index].count++
        setBasket([...basket])
    }
    function countDec(item) {
        const index = basket.findIndex((x) => x.id === item.id)
        if (basket[index].count === 1) {
            return
        }
        basket[index].count--
        setBasket([...basket])
    }

    function totalPrice() {
        return basket.reduce((prev, x) => prev + x.price * x.count, 0).toFixed(2)
    }

    const data = { basket, setBasket, addToBasket, removeFromBasket, countDec, countInc, totalPrice }
    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider