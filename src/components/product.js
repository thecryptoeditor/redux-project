import { addProduct } from '../store/slice/cartSlice';
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
                <button onClick={ () =>  dispatch(addProduct({ pid, title, rating, price, imageUrl, quantity: 1 }))}>Add to Cart</button>
                <button>Add to Wishlist</button>
            </div>
        </div>
    )
}