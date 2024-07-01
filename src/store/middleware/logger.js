export const logger = (store) => (next) => (action) => {

    // Logs for testing purposes
    // console.log('store', store);
    // console.log('next', next);
    // console.log('action', action);
    next(action);
    
}