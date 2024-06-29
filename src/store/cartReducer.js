import { produce } from 'immer';

// Action creator
export function ADD_PRODUCT ({ pid, title, rating, price, imageUrl, qty }) {
    return { type: 'add/product', payload: { productId: pid, title: title, rating: rating.rate, price: price, image: imageUrl, quantity: qty }};
}

export function REMOVE_PRODUCT (pid, qty) {
    return { type: 'remove/product', payload: {productId: pid, quantity: qty }};
}

export function ADD_PRODUCT_QUANTITY (pid, qty) {
    return { type: 'add/productQuantity', payload: {productId: pid, quantity: qty }};
}

export function REDUCE_PRODUCT_QUANTITY (pid, qty) {
    return { type: 'reduce/productQuantity', payload: {productId: pid, quantity: qty }};
}

const InitialState = [];


// Reducer
export default function cartReducer (originalState = InitialState, action) {

    produce((originalState, state) => {

        let isExtingItem = state.findIndex(state => state.productId === action.payload.productId);

        switch (action.type) {
            case 'add/product':
                if(isExtingItem !== -1) {
                    return state.map((i, idx) => {
                        if(i.productId === action.payload.productId) {
                            return {...i, quantity : i.quantity + 1};
                        }
                        return i;
                    })
                }
                return [...state, action.payload]
                
            case 'remove/product':
                return state.filter((item) => {
                    return item.productId !== action.payload.productId
                })
            case 'add/productQuantity':
                return state.map((item) => {

                    if(item.productId === action.payload.productId) {
                        return { ...item, quantity: item.quantity + action.payload.quantity}
                    }

                    return item;
                })
            case 'reduce/productQuantity':
                return state.map((item) => {

                    if(item.productId === action.payload.productId) {
                        return { ...item, quantity: item.quantity - action.payload.quantity}
                    }

                    return item;
                })
            default:
                return state;
        }

    })

}
