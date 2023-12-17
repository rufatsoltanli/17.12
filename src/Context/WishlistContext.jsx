import React, { createContext } from 'react'
import useLocalStorage from '../hook/useLocalStorage'

export const WishlistContext = createContext()

function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useLocalStorage("wishlist", [])

    function toggleItemInWishlist(item) {
        const index = wishlist.findIndex((x) => x.id === item.id)
        if (index === -1) {
            setWishlist([...wishlist, item])
            return
        }

        setWishlist(wishlist.filter((x) => x !== item))
    }

    function checkIfWished(item) {
        if (wishlist.includes(item)) {
            return true
        }
        return false
    }

    const data = { checkIfWished, toggleItemInWishlist, wishlist }
    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider