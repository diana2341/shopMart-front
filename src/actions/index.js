import api from '../apis/Store'
import history from '../history'


// export const createStream=(formValues)=>{
//     return async (dispatch, getState)=>{
//         const {userId} = getState().auth
//        const response = await streams.post('/streams', {...formValues, userId })
//        dispatch({type:CREATE_STREAM, payload:response.data})
//         history.push('/')
//     }
// }

export const signUp=(formValues)=>{
    return async (dispatch)=>{
        const response = await api.post('/users',{...formValues})
        dispatch({type:'SIGN_IN',payload:response.data},
        localStorage.setItem("token",response.data.jwt)
    )
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

export const addCart=(id)=>{
    // return async (dispatch)=>{
    //  const response = await api.get(`/products/${id}`)
    //     dispatch({type:'ADD_CART',payload:response.data})
        
return console.log(id)
    // }

}