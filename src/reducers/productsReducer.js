
const initialState = {
  cart: []
}

export default (state=initialState,action)=>{
    let cart = state.cart;

    switch(action.type){
        case 'FETCH_PRODUCTS':
            return{...state,...action.payload}
        case 'FETCH_PRODUCT':
            return {...state, [action.payload.id]:action.payload}
        case 'ADD_CART':
            cart.push(action.payload);
 
            return {
                ...state,
                cart: cart
            };            
        default:
            return state
    }
}