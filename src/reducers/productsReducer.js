
import history from '../history';

const initialState = {
  navProducts:[],
  suggestions:[],
  products:[],
  cart: [],
  size:'',
  filteredProducts:[],
  sort:'',
  categories:'',
  autoText:'',
  location:history.location.pathname
  
}

export default (state=initialState,action)=>{
    let cart = state.cart;

    switch(action.type){
        case 'FETCH_PRODUCTS':
                        return {...state, products:action.payload,filteredProducts:action.payload}
                    case 'FETCH_NAV_PRODUCTS':
                        return {...state, navProducts:action.payload}
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
            case 'SORT_BY_CATEGORY':
              return {
                ...state,
                filteredProducts: action.payload.products,
                categories: action.payload.categories,
              };
              case 'SUGGESTIONS':
                return {
                  ...state,
                  navProducts: action.payload.navProducts,
                  suggestions: state.navProducts,
                  autoText: action.payload.autoText,

                };

        default:
            return state
    }
}

