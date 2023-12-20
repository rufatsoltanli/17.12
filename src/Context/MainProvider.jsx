import React, { Children } from 'react'
import BasketProvider from './BasketContext'
import WishlistProvider from './WishlistContext'
import FetchProvider from './FetchContext'

function MainProvider({ children }) {
    return (
        <BasketProvider>
            <WishlistProvider>
                <FetchProvider>
                    {children}
                </FetchProvider>
            </WishlistProvider>
        </BasketProvider>
    )
}

export default MainProvider