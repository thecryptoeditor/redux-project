import wishlistReducer from './slice/wishlistSlice'
import allProductList from './slice/productsSlice';
import cartReducer from './slice/cartSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { logger } from './middleware/logger';

// Importing for persist store data 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    productList: allProductList,
    cartItem: cartReducer,
    wishList: wishlistReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store)