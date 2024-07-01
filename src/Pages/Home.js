import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/product.js';
import { setProductList } from '../store/slice/productsSlice'

export default function Home () {

    let dispatch = useDispatch();

    let productList = useSelector((state) => {
        return state.productList;
    })

    useEffect(() => {

        // Fetching data from API and seting data to middleware
        const getProductList = async () => { 
            
            try {
                
                let response = await fetch('https://fakestoreapi.com/products');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                let data = await response.json();

                // pushing data to middleware
                dispatch(setProductList(data));

            }
            catch(err) {
                console.log(err);
            }
        }

        getProductList();

    }, []);

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