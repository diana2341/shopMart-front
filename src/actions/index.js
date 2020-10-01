import api from '../apis/Store'
import history from '../history'
import { formValues } from 'redux-form'


export const autoLogin=()=>{
    return async (dispatch)=>{
    const token = localStorage.getItem('token')
    if(token){
      const response = await api.get('/auto_login',{headers:{Authorization:`Bearer ${token}`}})
      dispatch({type:'AUTO_SIGNIN', payload:response.data})
    }
  }
}

export const login=(formValues)=>{
    return async (dispatch)=>{
        const response = await api.post('/login',{...formValues})
        dispatch({type:'LOGIN', payload:response.data})
        localStorage.setItem("token", response.data.jwt)
    }
}

export const signUp=(formValues)=>{
    return async (dispatch)=>{
        const response = await api.post('/users',{...formValues})
        dispatch({type:'SIGN_UP',payload:response.data},
        localStorage.setItem("token",response.data.jwt)
    )
  }
}

export const signOut=()=>{
    return(dispatch)=>{
        dispatch({type:'SIGN_OUT'})
        localStorage.clear();
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
export const addCart = (userId,itemId) => {
    return async (dispatch)=>{
        await api.patch(`/carts/${userId}`)
        dispatch({type:'ADD_CART', payload:itemId})

    }
}
            
export const searchProduct = value => dispatch => {
    console.log(value)
    dispatch({
      type: 'SEARCH',
      payload: value
    });
  };
  