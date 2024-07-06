import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'products',
    initialState: {
        isLoading: true,
        list: [],
        error: null
    },
    reducers: {
        setProductList(state, action) {
            state.list = action.payload;
            state.isLoading = false;
        },
        setProductListError(state, action) {
            state.error = action.payload;
        },
        setProductListStatus(state, action) {
            state.isLoading = action.payload;
        }
    }
})

// these called selector in RT
export const getAllProducts = (state) => state.productList && state.productList.list;
export const getProductError = (state) => state.productList && state.productList.error;
export const getProductLoadingState = (state) => state.productList && state.productList.isLoading;

export const { setProductList, setProductListError, setProductListStatus } = slice.actions;

export default slice.reducer;
