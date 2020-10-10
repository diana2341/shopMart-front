

export default (state={}, action)=>{

    switch(action.type){
        case 'GET_CART':
            return {...state, items:action.payload}
            case 'GET_PRODUCTS_IN_CART':
                      return {...state, [action.payload.id]:action.payload}
                case 'GET_ORDERS':
                    return {...state, order:action.payload}
        case 'REMOVE_FROM_CART':
            return {...state, items: action.payload.cartItems}
            default:
                return state
    }
}