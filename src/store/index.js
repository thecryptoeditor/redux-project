import { combineReducers, createStore } from 'redux';
import wishlistReducer, {
    ADDWHISHLIST_PROFUCT,
    REMOVEWHISHLIST_PROFUCT
} from './wishlistReducer'
import allProductList from './productsReducer';
import cartReducer, {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    ADD_PRODUCT_QUANTITY,
    REDUCE_PRODUCT_QUANTITY
} from './cartReducer';

let reducer = combineReducers({
    productList: allProductList,
    cartItem: cartReducer,
    wishList: wishlistReducer
})


export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.());

// Add product to cartItem
store.dispatch(ADD_PRODUCT(1, 1));

// Add product to cartItem
store.dispatch(ADD_PRODUCT(2, 1));

// Add product to cartItem
store.dispatch(ADD_PRODUCT(3, 1));

// remove product from cartItem
store.dispatch(REMOVE_PRODUCT(2, 0));

// increase product quantity by
store.dispatch(ADD_PRODUCT_QUANTITY(3, 4));

// decrease product quantity by
store.dispatch(REDUCE_PRODUCT_QUANTITY(3, 1));

// add product to wishList
store.dispatch(ADDWHISHLIST_PROFUCT(1, 1));

// add product to wishList
store.dispatch(ADDWHISHLIST_PROFUCT(2, 1));

// remove product to wishList
store.dispatch(REMOVEWHISHLIST_PROFUCT(2, 1));
