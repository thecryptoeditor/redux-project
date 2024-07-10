import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_PRODUCT_QUANTITY, REDUCE_PRODUCT_QUANTITY } from '../store/cartReducer'
import PropTypes from 'prop-types';

function CartItem({ pid, title, rating, price, imageUrl, quantity }) {
    
    let dispatch = useDispatch();

    function decreaseItem(pid) {
        dispatch(REDUCE_PRODUCT_QUANTITY(pid, 1));
    }

    function increaseItem(pid) {
        dispatch(ADD_PRODUCT_QUANTITY(pid, 1));
    }

    return (
        <div className="cart-item-container">
            <div className="cart-item">
                <img src={imageUrl} alt={title} />
                <div>
                    <h3>{title}</h3>
                    <p>{rating} ★ ★ ★ ★</p>
                </div>
            </div>
            <div className="item-price">${price}</div>
            <div className="item-quantity">
                <button onClick={() => decreaseItem(pid)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => increaseItem(pid)}>+</button>
            </div>
            <div className="item-total">${quantity * price}</div>
        </div>
    )
}

CartItem.propTypes = {
    pid: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.any.isRequired,
    quantity: PropTypes.number.isRequired
}

export default CartItem;