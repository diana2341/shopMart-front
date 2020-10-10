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



export const fetchCategory=(category)=>{
    history.push(`/${category}`)
    fetchProduct(category)

}



export const fetchProducts=(category)=>{
    
return async (dispatch)=>{
        const response = await api.get('/products')
        dispatch({type:'FETCH_PRODUCTS', payload:response.data.filter((x) => {if(x.categories===category ){
            return category
        }
            if(category==='kids'){
                return x.categories==='girls' | x.categories==='boys'
            }
            if(category==='shoes'){
              return x.kind==='shoes' 
          }
          if(category==='jackets'){
            return x.kind==='jackets' 
        }
        
          if(category==='jeans'){
            return x.kind==='jeans' 
        }
        if(category==='sportswear'){
          return x.kind==='sportswear' 
        }
      if(category==='beauty'){
        return x.kind==='beauty' 
      }
    })

  })
 }


}


export const fetchProductsForNav=(category,kind)=>{
 

  return async (dispatch)=>{
    
          const response = await api.get('/products')
          dispatch({type:'FETCH_PRODUCTS', payload:response.data.filter((x) => {if(x.categories===category&&x.kind===kind ){
              return (
               
                x.categories===category && x.kind===kind
              )

          }
         
      })
  
    })
   }
  
  
  }
export const pruductShow=(id)=>{
  console.log('id')

    history.push(`/product/${id}`)

}
export const fetchProduct=(id)=>{
  console.log(id)
    return async (dispatch)=>{
     const response = await api.get(`/products/${id}`)
        dispatch({type:'FETCH_PRODUCT',payload:response.data })
    }
}






export const addCart = (user,product, quantity) => {
  let currentOrder = user.current_order
  console.log('cart??!!', currentOrder)
  if (currentOrder === null) {

    return async (dispatch)=>{
       const response = await api.post(`/orders/neworder`,{
         user_id:user.id, product_id:product.id, quantity: quantity
       })
        dispatch({type:'UPDATE_CURRENT_USER', payload:response.data})
      }
    }else{

      return async (dispatch)=>{
        const response = await api.post(`/order_items`,{
          order_id: currentOrder, product_id:product.id,quantity: quantity, item_price:product.price
        })
         dispatch({type:'UPDATE_CURRENT_USER', payload:response.data})
       }

    }
}




            

  export const searchSize = (products, size) => (dispatch) => {
    dispatch({
    type: 'SEARCH_SIZE',
      payload: {
        size: size,
        products:
          size === ""
            ? products
            : products.filter(
                (x) => x.size.indexOf(size) >= 0
              ),
      },
    });
  };
  export const sortProducts = (items, sort) => (dispatch) => {
    const products = items.slice();
    if (sort !== "") {
      products.sort((a, b) =>
        sort === "lowestprice"
          ? a.price > b.price
            ? 1
            : -1
          : a.price < b.price
          ? 1
          : -1
      );
    } else {
      products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    dispatch({
        type: 'ORDER_PRODUCTS_BY_PRICE',
        payload: {
          sort: sort,
          items: products,
        },
      });
    };


    export const fetchUserCart=()=>{
   
      return async (dispatch)=>{
        const response = await api.get('/order_items')
        dispatch({type:'GET_CART', payload:response.data})
      }
      // GET_CART
    }