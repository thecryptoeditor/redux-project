import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/product.js';
import { setProductList, setProductListError, setProductListStatus } from '../store/slice/productsSlice'
import {useFetch} from '../hooks/useFetch.js';

export default function Home() {

    let dispatch = useDispatch();

    let [data, loading, error] = useFetch('https://fakestoreapi.com/products');

    // Pushing product listing, error, and loading status to middleware
    if(data && data.length > 0) {
        dispatch(setProductList(data));
    }
    dispatch(setProductListError(error));
    dispatch(setProductListStatus(loading));

    let productList = useSelector((state) => state.productList && state.productList.list)
    let errorState = useSelector((state) => state.productList.error)
    let loadingState = useSelector((state) => state.productList.isLoading)

    return (
        <>
            <Header />

            <div className="product-listing">
                <div>
                    { loadingState ? <h1>Loading...</h1> :
                        productList.map(({ id, title, rating, price, image }) => (
                            <Product
                                key={id}
                                pid={id}
                                title={title}
                                rating={rating}
                                price={price}
                                imageUrl={image}
                            />
                        ))
                    }

                    { errorState ? <p>{errorState}</p> : `` }
                </div>
            </div>
        </>
    )

}