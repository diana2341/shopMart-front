export default (state={},action)=>{
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return{...state,...action.payload}
        case 'FETCH_PRODUCT':
            return {...state, [action.payload.id]:action.payload}
        case 'ADD_CART':
            return {...state,[action.payload.id]:action.payload}
        default:
            return state
    }
}