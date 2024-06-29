import { produce } from 'immer';

export function ADD_PRODUCT({ pid, title, rating, price, imageUrl, qty }) {
    return { type: 'add/product', payload: { productId: pid, title: title, rating: rating.rate, price: price, image: imageUrl, quantity: qty } };
}

export function REMOVE_PRODUCT(pid) {
    return { type: 'remove/product', payload: { productId: pid } };
}

export function ADD_PRODUCT_QUANTITY(pid, qty) {
    return { type: 'add/productQuantity', payload: { productId: pid, quantity: qty } };
}

export function REDUCE_PRODUCT_QUANTITY(pid, qty) {
    return { type: 'reduce/productQuantity', payload: { productId: pid, quantity: qty } };
}

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
