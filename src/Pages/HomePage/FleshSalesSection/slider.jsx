import React, { useContext, useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BasketContext } from '../../../Context/BasketContext';
import { WishlistContext } from '../../../Context/WishlistContext';

function Slider() {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
            .then(res => res.json())
            .then(data => setApiData(data))
    }, [])

    const forSlider = apiData.slice(0, 9)
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
                {forSlider.map((x) => (
                    <SplideSlide>
                        <div className="slideCard">

                            <div className="image"><img src={x.images} alt="" />
                                <div className={checkIfWished(x) ? "addToWishlist addedToWish" : "addToWishlist"} onClick={() => toggleItemInWishlist(x)}>
                                    <i class={checkIfWished(x) ? "fa-regular fa-heart " : "fa-regular fa-heart visible"}></i>
                                    <i class={checkIfWished(x) ? "fa-solid fa-heart visible" : "fa-solid fa-heart"}></i>
                                </div>


                                <div className="dropUp" onClick={() => addToBasket(x)}>
                                    Add to Cart
                                </div></div>
                            <div className="name">{x.name}</div>
                            <div className="rating">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                ({x.reviews})
                            </div>
                            <div className="price">
                                <div className="actual">${x.price ? x.price : "unavaible"}</div>
                                <div className="old">{x.oldPrice ? "$" + x.oldPrice : null}</div>
                            </div>

                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </>
    )
}

export default Slider