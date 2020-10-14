


const INITIAL_STATE={
    user:null
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SIGN_UP':
            return {...state, user:action.payload}
            case 'LOGIN':
                return {...state, user:action.payload}
            case 'SIGN_OUT':
                return {...state, user:null}
                case 'AUTO_SIGNIN':
                    return {...state, user:action.payload}
                     
                     case 'UPDATE_CURRENT_USER':
                         return {...state, user:action.payload}
                      default:
                         return state
    }
}