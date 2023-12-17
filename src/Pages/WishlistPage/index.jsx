import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/WishlistContext'
import "./style.scss"

function WishlistPage() {
    const { checkIfWished, toggleItemInWishlist, wishlist } = useContext(WishlistContext)
    return (
        <div className="wishlistPage">
            <div className="cardCont">
                {wishlist.map((x) => (
                    <div className="card">
                        <div className="image">
                            <img src={x.images} alt="" />
                        </div>
                        <div className="name">
                            {x.name}
                        </div>
                        <div className="toggleWishlist" onClick={() => toggleItemInWishlist(x)}>
                            Remove item from Wishlist
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WishlistPage