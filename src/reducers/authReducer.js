


const INITIAL_STATE={
    isSignedIn:null,
    userId:null,
    user:null
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SIGN_UP':
            return {...state, isSignedIn:true, userId:action.payload}
            case 'SIGN_IN':
                return {...state, isSignedIn:true, userId:action.payload.id, user:action.payload}
            case 'SIGN_OUT':
                return {...state, isSignedIn:false, userId:null, user:null}
                case 'AUTO_SIGNIN':
                    return {...state, user:action.payload}
                default:
                    return state
    }
}