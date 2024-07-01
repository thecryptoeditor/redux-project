import React from 'react'
import CartItem from '../components/CartItem'
import Header from '../components/Header';
import { useSelector } from 'react-redux';

export default function Cart() {

    let cartItems = useSelector((state) => {
        console.log(state)
        return state.cartItem;
    })

    let totalValue = cartItems.length && cartItems.reduce((old, current) => old + current.quantity * current.price, 0)

    return (

        <>
            <Header />

            <div className="cart-container">
            { cartItems && cartItems.length ? 
                <div>
                    <h2>Items in Your Cart</h2> 
                    <div className="cart-items-container">
                        <div className="cart-header cart-item-container">
                            <div className="cart-item">Item</div>
                            <div className="item-price">Price</div>
                            <div className="quantity">Quantity</div>
                            <div className="total">Total</div>
                        </div>
                        { cartItems.map(({ pid, title, rating, price, imageUrl, quantity }) => (
                            quantity > 0 ?
                            <CartItem
                                key={pid}
                                pid={pid}
                                title={title}
                                price={price}
                                quantity={quantity}
                                imageUrl={imageUrl}
                                rating={rating.rate}
                            /> : null 
                        ))}
                        <div className="cart-header cart-item-container">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="total">${totalValue}</div>
                        </div>
                    </div>
                </div>
                : <h2>Your cart is empty</h2> }
            </div>
        </>

    )
}