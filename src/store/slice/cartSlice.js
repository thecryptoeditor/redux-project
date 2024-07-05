import { createSlice } from '@reduxjs/toolkit' 

function findItemIndex(state, action) {
    return state.findIndex(state => state.pid === action.payload.pid);
}


const slice = createSlice({  
    name: 'cart',
    initialState: [],
    reducers: { 
        addProduct(state, action) {

            let existingItem = findItemIndex(state, action);

            if (existingItem !== -1) {
                state[existingItem].quantity += 1;
            }
            else {
                state.push({ ...action.payload });
            }
        },
        removeProduct(state, action) {
            let existingItem = findItemIndex(state, action);
            state.splice(existingItem, 1);
        },
        addProductQuantity(state, action) {
            let existingItem = findItemIndex(state, action);
            state[existingItem].quantity += 1
        },
        reduceProductQuantity(state, action) {
            let existingItem = findItemIndex(state, action);
            state[existingItem].quantity -= 1;

            if (state[existingItem].quantity === 0) {
                state.splice(existingItem, 1)
            }
        }
    }
    
});

export const { addProduct,
    removeProduct,
    addProductQuantity,
    reduceProductQuantity } = slice.actions;


export default slice.reducer;
