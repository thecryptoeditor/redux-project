import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'products',
    initialState: {
        isLoading: true,
        list: [],
        error: ''
    },
    reducers: {
        setProductList(state, action) {
            console.log('payload', action)
            state.isLoading = false;
            state.list = action.payload;
        },
        setProductListError(state, action) {
            state.error = action.payload;
        },
        setProductListStatus(state, action) {
            state.isLoading = action.payload;
        }
    }
})

export const { setProductList, setProductListError, setProductListStatus } = slice.actions;

export default slice.reducer;
