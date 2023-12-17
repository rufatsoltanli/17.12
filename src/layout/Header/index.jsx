import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

function Header() {
    return (
        <header>
            <div className="headerContainter">
                <div className="headerContent">
                    <div className="sale">
                        <div className="text">
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </div>
                        <div className="shopNow">
                            Shop Now
                        </div>
                    </div>
                    <div className="leanguage">
                        <div className="english">
                            English<i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div className="navContainer">
                    <div className="logo">Exclusive</div>
                    <div className="links">
                        <Link to={"/"}>Home</Link>
                        <Link>Contact</Link>
                        <Link>About</Link>
                        <Link>Sign Up</Link>
                    </div>
                    <div className="searchWishlistCart">
                        <div className="searchPanel">
                            <div className="seacrhConent">
                                <input type="text" placeholder='What are you looking for?' />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                        <div className="wishlist"><Link to={"/wishlist"}><i class="fa-regular fa-heart"></i></Link></div>
                        <div className="cart"><Link to={"/basket"}><i class="fa-solid fa-cart-shopping"></i></Link></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header