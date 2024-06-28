import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/images/cart-icon.svg';
import { useSelector } from 'react-redux';

export default function Header() {

    let productCount = useSelector((state) => {
        return state.cartItem.length
    })

    return (
        <header>
            <div className="header-contents">
                <h1>
                    <Link to="/">Shopee</Link>
                </h1>
                <Link className="cart-icon" to="/cart">
                    <img src={CartIcon} alt="cart-icon" />
                    <div className="cart-items-count">{productCount}</div>
                </Link>
            </div>
        </header>
    )
}