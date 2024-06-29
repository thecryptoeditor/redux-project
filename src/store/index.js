import { combineReducers, createStore } from 'redux';
import wishlistReducer from './wishlistReducer'
import allProductList from './productsReducer';
import cartReducer from './cartReducer';

let reducer = combineReducers({
    productList: allProductList,
    cartItem: cartReducer,
    wishList: wishlistReducer
})


export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.());
