import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/product.js';
import { getAllProducts, getProductError, getProductLoadingState, setProductList, setProductListError, setProductListStatus } from '../store/slice/productsSlice'
import {useFetch} from '../hooks/useFetch.js';
import { useEffect } from 'react';

export default function Home() {

    let dispatch = useDispatch();

    let [data, loading, error] = useFetch('https://fakestoreapi.com/products');

    // Pushing product listing, error, and loading status to middleware
    useEffect(() => {
        dispatch(setProductList(data));
        dispatch(setProductListError(error));
        dispatch(setProductListStatus(loading));
    }, [data, loading, error, dispatch]);

    let productList = useSelector(getAllProducts);
    let errorState = useSelector(getProductError);
    let loadingState = useSelector(getProductLoadingState);

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