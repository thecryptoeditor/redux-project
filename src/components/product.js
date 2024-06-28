import { ADD_PRODUCT } from '../store/cartReducer';
import { useDispatch } from 'react-redux';


export default function Product({ pid, title, rating, price, imageUrl }) {

    let dispatch = useDispatch();

    return (
        <div className="product">
            <div className="product-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="title-container">
                <h3>
                    <a href="#">{title}</a>
                </h3>
            </div>
            <div className="price-rating-container">
                <p className="rating">{rating.rate} ★ ★ ★ ★</p>
                <p className="price">{price}</p>
            </div>
            <div className="cta-container">
                <button onClick={ () =>  dispatch(ADD_PRODUCT({ pid, title, rating, price, imageUrl, qty: 1 }))}>Add to Cart</button>
                <button>Add to Wishlist</button>
            </div>
        </div>
    )
}