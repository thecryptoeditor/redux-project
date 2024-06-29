export function ADDWHISHLIST_PROFUCT(pid, qty) {
    return { type: 'addwishlist/product', payload: {productId: pid, quantity: qty }}
}

export function REMOVEWHISHLIST_PROFUCT(pid, qty) {
    return { type: 'removewishlist/product', payload: {productId: pid }}
}

export default function wishlistReducer (state = [], action) {
    switch (action.type) {
        case 'addwishlist/product':
            return [...state, action.payload]
        case 'removewishlist/product':
            return state.filter((item) => {
                return item.productId !== action.payload.productId
            })
        default:
            return state;
    }
}