import { combineReducers, createStore } from 'redux';
import wishlistReducer from './slice/wishlistSlice'
import allProductList from './slice/productsSlice';
import cartReducer from './slice/cartSlice';
import { configureStore } from '@reduxjs/toolkit'

let reducer = combineReducers({
    productList: allProductList,
    cartItem: cartReducer,
    wishList: wishlistReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.());
