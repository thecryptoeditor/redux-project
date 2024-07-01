import wishlistReducer from './slice/wishlistSlice'
import allProductList from './slice/productsSlice';
import cartReducer from './slice/cartSlice';
import { configureStore } from '@reduxjs/toolkit'
import { logger } from './middleware/logger';

export const store = configureStore({
    reducer: {
        productList: allProductList,
        cartItem: cartReducer,
        wishList: wishlistReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
