import wishlistReducer from './slice/wishlistSlice'
import allProductList from './slice/productsSlice';
import cartReducer from './slice/cartSlice';
import { configureStore } from '@reduxjs/toolkit'

const rootReducers = configureStore({
    reducer: {
        productList: allProductList,
        cartItem: cartReducer,
        wishList: wishlistReducer
    }
});

export default rootReducers;