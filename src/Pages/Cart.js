import React from 'react'
import CartItem from '../components/CartItem'
import Header from '../components/Header';
import { useSelector } from 'react-redux';

export default function Cart() {

    let cartItems = useSelector((state) => {
        return state.cartItem;
    })

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
                        {cartItems.map(({ productId, title, rating, price, image, quantity }) => (
                            <CartItem
                                key={productId}
                                title={title}
                                price={price}
                                quantity={quantity}
                                imageUrl={image}
                                rating={rating}
                            />
                        ))}
                        <div className="cart-header cart-item-container">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="total">$500</div>
                        </div>
                    </div>
                </div>
                : <h2>Your cart is empty</h2> }
            </div>
        </>

    )
}