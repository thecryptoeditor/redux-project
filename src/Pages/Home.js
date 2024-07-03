import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/product.js';
import { setProductList } from '../store/slice/productsSlice'
import useFetch from '../hooks/useFetch.js';

export default function Home () {

    let dispatch = useDispatch();

    let productList = useSelector((state) => {
        return state.productList;
    })

    let [data, loading, error] = useFetch('https://fakestoreapi.com/products');

    
    // Pushing product listing data to middleware
    if(!loading && data && data.length > 0) {
        console.log('loading', loading)

        dispatch(setProductList(data));
    }

    return (
        <>
            <Header />

            <div className="product-listing">
                <div>
                    {
                        productList.map(({id, title, rating, price, image}) => (
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
                </div>
            </div>
        </>
    )

}