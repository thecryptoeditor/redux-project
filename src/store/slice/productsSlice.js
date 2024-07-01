import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProductList(state, action) {
            return action.payload
        }
    }
})

export const { setProductList } = slice.actions;

export default slice.reducer;
