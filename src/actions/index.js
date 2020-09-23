
import api from '../apis/Store'
import history from '../history.js'

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
export const fetchProduct=(id)=>{
    console.log(id)
    history.push(`/${id}`)

    return async (dispatch)=>{
     const response = await api.get(`/products/${id}`)
        dispatch({type:'FETCH_PRODUCT',payload:response.data})
        

    }

}