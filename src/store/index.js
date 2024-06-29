import { combineReducers, createStore } from 'redux';
import wishlistReducer from './slice/wishlistReducer'
import allProductList from './slice/productsReducer';
import cartReducer from './slice/cartReducer';

let reducer = combineReducers({
    productList: allProductList,
    cartItem: cartReducer,
    wishList: wishlistReducer
})


export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.());
