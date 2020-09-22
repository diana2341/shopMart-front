
import axios from 'axios'
import api from '../apis/Store'

export const signIn=(userId)=>{
    return{
        type:'SIGN_IN',
        payload:userId
    }
}

export const signOut=()=>{
    return{
        type:'SIGN_OUT'
    }
}

export const fetchProducts=()=>{
return async (dispatch)=>{
const response = await api.get('/products')
dispatch({type:'FETCH_PRODUCTS', payload:response.data})
}

}