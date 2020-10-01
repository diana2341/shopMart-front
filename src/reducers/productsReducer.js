
const initialState = {
 products:[],
  cart: [],
  size:'',
  filteredProducts:[]
}

export default (state=initialState,action)=>{
    let cart = state.cart;

    switch(action.type){
        case 'FETCH_PRODUCTS':
                        return {...state, products:action.payload,filteredProducts:action.payload}
            case 'FETCH_PRODUCT':
            return {...state, [action.payload.id]:action.payload}
        // case 'ADD_CART':
        //     cart.push(action.payload);
 
        //     return {
        //         ...state,
        //         cart: cart
        //     }; 
            case 'SEARCH':
                return {
                  ...state,
                  filteredProducts: action.payload.products,
                  size:action.payload.size
                };

        default:
            return state
    }
}

