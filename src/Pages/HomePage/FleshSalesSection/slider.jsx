import React, { useContext, useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BasketContext } from '../../../Context/BasketContext';
import { WishlistContext } from '../../../Context/WishlistContext';
import { FetchContext } from '../../../Context/FetchContext';


function Slider() {


    const { apiData, setApiData } = useContext(FetchContext)
    const { addToBasket } = useContext(BasketContext)
    const { checkIfWished, toggleItemInWishlist, wishlist } = useContext(WishlistContext)

    return (
        <>
            <Splide aria-label="My Favorite Images"
                options={{
                    rewind: true,
                    pagination: false,
                    perPage: 3,
                    width: 1300,
                    gap: '1rem',
                }}>
                {apiData.map((x) =>
                    x.oldPrice ?
                        (

                            <SplideSlide>
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
                            </SplideSlide>
                        ) : null)}
            </Splide>
        </>
    )
}

export default Slider