export function ADD_PRODUCT (pid, qty) {
    return { type: 'add/product', payload: {productId: pid, quantity: qty }};
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


export default function cartReducer (state = [], action) {
    switch (action.type) {
        case 'add/product':
            return [...state, action.payload]
        case 'remove/product':
            return state.filter((item) => {
                return item.productId != action.payload.productId
            })
        case 'add/productQuantity':
            return state.map((item) => {

                if(item.productId == action.payload.productId) {
                    return { ...item, quantity: item.quantity + action.payload.quantity}
                }

                return item;
            })
        case 'reduce/productQuantity':
            return state.map((item) => {

                if(item.productId == action.payload.productId) {
                    return { ...item, quantity: item.quantity - action.payload.quantity}
                }

                return item;
            })
        default:
            return state;
    }
}