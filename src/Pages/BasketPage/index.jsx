import React, { useContext } from 'react'
import { BasketContext } from '../../Context/BasketContext'
import "./style.scss"

function BasketPage() {
    const { basket, setBasket, addToBasket, removeFromBasket, countDec, countInc, totalPrice } = useContext(BasketContext)
    console.log(totalPrice);
    return (
        <div className="basketCont">
            <div className="totalPrice">
                <h1>Total Price : ${totalPrice()}</h1>
            </div>
            <div className="cardCont">
                {basket.map((x) => (
                    <div className="card">
                        <div className="image"><img src={x.images} alt="" /></div>
                        <div className="count">{x.count}
                            <button onClick={() => countInc(x)}>+</button>
                            <button onClick={() => countDec(x)}>-</button>
                        </div>
                        <div className="price">
                            price : ${x.price * x.count}
                        </div>
                        <div className="removeFromBasket" onClick={() => removeFromBasket(x)}>
                            Remove Item From Cart
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BasketPage