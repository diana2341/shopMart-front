
const initialState = {
 products:[],
  cart: [],
  size:'',
  filteredProducts:[],
  sort:''
}

export default (state=initialState,action)=>{
    let cart = state.cart;

    switch(action.type){
        case 'FETCH_PRODUCTS':
                        return {...state, products:action.payload,filteredProducts:action.payload}
            case 'FETCH_PRODUCT':
            return {...state, [action.payload.id]:action.payload}
            case 'SEARCH_SIZE':
                return {
                  ...state,
                  filteredProducts: action.payload.products,
                  size:action.payload.size
                };
                case 'ORDER_PRODUCTS_BY_PRICE':
      return {
        ...state,
        filteredProducts: action.payload.items,
        sort: action.payload.sort,
      };


        default:
            return state
    }
}

