import React from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import Product from '../components/product.js';

export default function Home () {

    let productList = useSelector((state) => {
        return state.productList;
    })

    return (
        <>
            <Header />

            <div className="product-listing">
            <div>
            {
                productList.map(({id, title, rating, price, image}) => (
                    <Product 
                        key={id}
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