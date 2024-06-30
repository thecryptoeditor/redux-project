import { produce } from 'immer';
// import { createSlice } from '@reduxjs/toolkit'

export function addProduct({ pid, title, rating, price, imageUrl, qty }) {
    return { type: 'add/product', payload: { productId: pid, title: title, rating: rating.rate, price: price, image: imageUrl, quantity: qty } };
}

export function removeProduct(pid) {
    return { type: 'remove/product', payload: { productId: pid } };
}

export function addProductQuantity(pid, qty) {
    return { type: 'add/productQuantity', payload: { productId: pid, quantity: qty } };
}

export function reduceProductQuantity(pid, qty) {
    return { type: 'reduce/productQuantity', payload: { productId: pid, quantity: qty } };
}

// function findIndex(state, action) {
//     return state.findIndex(state => state.productId === action.payload.productId);
// }

export default function cartReducer(originalState = [], action) {

    return produce(originalState, (state) => {

        let existingItem = state.findIndex(state => state.productId === action.payload.productId);

        switch (action.type) {
            case 'add/product':
                if (existingItem !== -1) {
                    state[existingItem].quantity += 1;
                    return state;
                }
                state.push({ ...action.payload });
                break;

            case 'remove/product':
                state.splice(existingItem, 1)
                break;
            case 'add/productQuantity':
                if (existingItem !== -1) {
                    state[existingItem].quantity += 1
                    return state;
                }
                break;
            case 'reduce/productQuantity':
                if (existingItem !== -1) {
                    state[existingItem].quantity -= 1;
                    return state;
                }
                break;
            default:
                return state;
        }
        return state;

    })
}

// const slice = createSlice({  
//     name: 'cart',
//     initialState: [],
//     reducers: { 
//         addProduct(state, action) {
//             let existingItem = findIndex(state, action);
//             if (existingItem !== -1) {
//                 state[existingItem].quantity += 1;
//                 return state;
//             }
//             else {
//                 state.push({ ...action.payload });
//             }
//         },
//         removeProduct(state, action) {
//             let existingItem = findIndex(state, action);
//             state.splice(existingItem, 1);
//         },
//         addProductQuantity(state, action) {
//             let existingItem = findIndex(state, action);
//             if (existingItem !== -1) {
//                 state[existingItem].quantity += 1
//                 return state;
//             }
//         },
//         reduceProductQuantity(state, action) {
//             let existingItem = findIndex(state, action);
//             if (existingItem !== -1) {
//                 state[existingItem].quantity -= 1;
//                 return state;
//             }
//         }
//     }
    
// });

// console.dir('slice', slice);

// export default slice.reducer;
