
import api from '../apis/Store'
import history from '../history'

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
export const pruductShow=(id)=>{
    history.push(`/${id}`)

}
export const fetchProduct=(id)=>{
    return async (dispatch)=>{
     const response = await api.get(`/products/${id}`)
        dispatch({type:'FETCH_PRODUCT',payload:response.data})
        

    }

}