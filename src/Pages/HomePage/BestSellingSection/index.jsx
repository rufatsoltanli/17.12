import React, { useContext } from 'react'
import SectionText from '../../../Components/SectionText'
import RedButton from '../../../Components/RedButton'
import "./style.scss"
import { FetchContext } from '../../../Context/FetchContext'
import { BasketContext } from '../../../Context/BasketContext'
import { WishlistContext } from '../../../Context/WishlistContext'

function BestSelling() {
  const { apiData, setApiData } = useContext(FetchContext)
  const { addToBasket } = useContext(BasketContext)
  const { checkIfWished, toggleItemInWishlist, wishlist } = useContext(WishlistContext)
  return (
    <section id='bestSelling'>
      <SectionText>This month</SectionText>
      <div className="sectionHeader">
        <h1>Best Selling Products</h1>
        <RedButton>View All</RedButton>
      </div>
      <div className="bestSellingCardCont">
        {apiData.slice(0, 4).map((x) =>
          <div className="card">

            <div className="image">
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
        )}
      </div>
    </section>
  )
}

export default BestSelling