import wishlistReducer from './slice/wishlistSlice'
import allProductList from './slice/productsSlice';
import cartReducer from './slice/cartSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        productList: allProductList,
        cartItem: cartReducer,
        wishList: wishlistReducer
    }
});
