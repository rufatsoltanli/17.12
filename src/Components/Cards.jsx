import React from 'react'

function Cards() {
    return (
        <div className="slideCard">

            <div className="image">
                <div className="discount">
                    {x.oldPrice ? (((x.price / x.oldPrice) - 1) * 100).toFixed(0) : null}%
                </div>
                <img src={x.images} alt="" />
                <div className={checkIfWished(x) ? "addToWishlist addedToWish" : "addToWishlist"} onClick={() => toggleItemInWishlist(x)}>
                    <i class={checkIfWished(x) ? "fa-regular fa-heart " : "fa-regular fa-heart visible"}></i>
                    <i class={checkIfWished(x) ? "fa-solid fa-heart visible" : "fa-solid fa-heart"}></i>
                </div>


                <div className="dropUp" onClick={() => addToBasket(x)}>
                    Add to Cart
                </div></div>
            <div className="name">{x.name}</div>
            <div className="rating">
                <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                ({x.reviews})
            </div>
            <div className="price">
                <div className="actual">${x.price ? x.price : "unavaible"}</div>
                <div className="old">{x.oldPrice ? "$" + x.oldPrice : null}</div>
            </div>

        </div>
    )
}

export default Cards