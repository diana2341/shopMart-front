let INITIAL_STATE = {
        items:null
}

export default (state={}, action)=>{

    switch(action.type){
        case 'GET_CART':
            return {...state, items:action.payload}
        case 'REMOVE_FROM_CART':
            return {...state, items: action.payload.cartItems}
            default:
                return state
    }
}