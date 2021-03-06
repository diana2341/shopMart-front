import api from '../apis/Store';
import history from '../history';
import { formValues } from 'redux-form';



let alladdedToCart=(id,user)=>{
		
	let add = document.getElementById(`button ${id}`)
	let added = document.getElementById(`added ${id}`)
	if(user===null){
		return null
	}
	
	if(add && added){
	add.style.display = 'none'
	added.style.display = 'block'
	setInterval(()=>{
		add.style.display = 'block'
		added.style.display = 'none'
	}, 2000)
}
}

const addedToCart=(id,user)=>{
	if(user===null){
		return null
	}
	let add = document.getElementById(`productButton ${id}`)
	let added = document.getElementById(`productAdded ${id}`)

	if(add && added){
	add.style.display = 'none'
	added.style.display = 'block'
	setInterval(()=>{
		add.style.display = 'block'
		added.style.display = 'none'
	}, 2500)
}


}

export const autoLogin = () => {
	return async (dispatch) => {
		const token = localStorage.getItem('token');
		if (token) {
			const response = await api.get('/auto_login', {
				headers: { Authorization: `Bearer ${token}` },
			});
      dispatch({ type: 'AUTO_SIGNIN', payload: response.data });
		}
	};
};

export const login = (formValues) => {
	return async (dispatch) => {
    const response = await api.post('/login', { ...formValues });
  
		dispatch({ type: 'LOGIN', payload: response.data.user });
    localStorage.setItem('token', response.data.jwt);
    history.go(-1)

  };
  
};

export const signUp = (formValues) => {
	return async (dispatch) => {
		const response = await api.post('/users', { ...formValues });
		dispatch(
			{ type: 'SIGN_UP', payload: response.data.user },
			localStorage.setItem('token', response.data.jwt),
    );
    history.go(-2)
  

	};
};

export const signOut = () => {
	return (dispatch) => {
		dispatch({ type: 'SIGN_OUT' });
    localStorage.clear();
    history.push('/login')

  };
  
};
export const editUser = (id, formValues)=>{
  return async (dispatch)=>{
      const response = await api.patch(`/users/${id}`,formValues)
      dispatch({type:'EDIT_USER', payload:response.data.user})
      history.push('/')
  }
} 
export const fetchCategory = (category) => {
	history.push(`/${category}`);
	fetchProduct(category);
};

export const fetchNavProducts=()=>{
    
  return async (dispatch)=>{
          const response = await api.get('/products')
          dispatch({type:'FETCH_NAV_PRODUCTS', payload:response.data
  
    })
   }
  
  
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
      if(category==='dresses'){
        return x.kind==='dresses' 
      }
      if(category==='tops'){
        return x.kind==='tops' 
      }
            
    })

  })
 }


}
export const onTextChanged = (autoText,navProducts) => (dispatch) => {
  let filtered;
  console.log('consoleeee',autoText)
    // const regex = new RegExp(`^${searchText}`, 'gi');
  dispatch({

  type: 'SUGGESTIONS',
  autoText:autoText,
    payload: {
      suggestions: navProducts.filter((x) =>x.name.toLowerCase().includes(autoText.toLowerCase())),
            


    },
  });
  
};
export const fetchProductsFilter = (category, kind) => {
	return async (dispatch) => {
		const response = await api.get('/products');
		dispatch({
			type: 'FETCH_PRODUCTS',
			payload: response.data.filter((x) => {
				if (x.categories === category && x.kind === kind) {
					return x.categories === category && x.kind === kind;
				}
				if (category === 'kids') {
					return (x.categories === 'girls') | (x.categories === 'boys');
				}
			}),
		});
	};
};

export const fetchProductsForNav = (category, kind) => {
	return async (dispatch) => {
		history.push(`/${category}/${kind}`);
		const response = await api.get('/products');
		dispatch({
			type: 'FETCH_PRODUCTS',
			payload: response.data.filter((x) => {
				if (x.categories === category && x.kind === kind) {
					return x.categories === category && x.kind === kind;
				}
			}),
		});
	};
};
export const pruductShow = (id) => {
	history.push(`/product/${id}`);
};

export const fetchProduct = (id) => {
	return async (dispatch) => {
		const response = await api.get(`/products/${id}`);
		dispatch({ type: 'FETCH_PRODUCT', payload: response.data });
	};
};

export const searchSize = (products, size) => (dispatch) => {
	dispatch({
		type: 'SEARCH_SIZE',
		payload: {
			size: size,
			products:
				size === ''
					? products
					: products.filter((x) => x.size.indexOf(size) >= 0),
		},
	});
};

export const sortByCategory = (products, categories) => (dispatch) => {
	dispatch({
		type: 'SORT_BY_CATEGORY',
		payload: {
			categories: categories,
			products:
				categories === ''
					? products
					: products.filter((x) => x.categories === categories),
		},
	});
};
export const sortProducts = (items, sort) => (dispatch) => {
	const products = items.slice();
	if (sort !== '') {
		products.sort((a, b) =>
			sort === 'lowestprice'
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

export const fetchUserCart = () => {
	return async (dispatch) => {
		const response = await api.get('/order_items');
		dispatch({ type: 'GET_CART', payload: response.data });
	};
	// GET_CART
};

export const fetchProductInCart = (id) => {
	return async (dispatch) => {
		const response = await api.get(`/products/${id}`);
		dispatch({ type: 'GET_PRODUCTS_IN_CART', payload: response.data });
	};
};

export const orders = () => {
	return async (dispatch) => {
		let response = await api.get('/orders');
		dispatch({ type: 'GET_ORDERS', payload: response.data });
	};
};

export const addCart = (user, product, quantity) => {
  let currentOrder = user.current_order;
 
	if (currentOrder === null) {
		return async (dispatch) => {
			const token = localStorage.getItem('token');
			if (token) {
				const response = await api.post(
					`/orders/neworder`,
					{
						user_id: user.id,
						product_id: product.id,
						quantity: quantity,
					},
					{ headers: { Authorization: `Bearer ${token}` } }
				)
				
        dispatch({ type: 'UPDATE_CURRENT_USER', payload: response.data });

					
        const responsetwo = await api.get('/orders');
			dispatch({ type: 'UPDATE_CART', payload: responsetwo.data })
			if (response.status == 200){addedToCart(product.id,user)}
			


			}
		};
	} else {
		return async (dispatch) => {
			const token = localStorage.getItem('token');
			if (token) {
				const response = await api.post(
					`/order_items`,
					{
						order_id: currentOrder,
						product_id: product.id,
						quantity: quantity,
						item_price: product.price,
						user_id: user.id,
					},
					{ headers: { Authorization: `Bearer ${token}` } }
				)
				
        dispatch({ type: 'UPDATE_CURRENT_USER', payload: response.data });
        const responsetwo = await api.get('/orders');

			dispatch({ type: 'UPDATE_CART', payload: responsetwo.data })
			
			if (response.status == 200){addedToCart(product.id,user);alladdedToCart(product.id,user)}


			}
		};
	}
};

export const deleteItem = (id) => {
	return async (dispatch) => {
		const token = localStorage.getItem('token');
		if (token) {
			const response = await api.delete(`/order_items/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});

      dispatch({ type: 'DELETE_ITEM', payload: id });
      let responsetwo = await api.get('/orders');
      dispatch({ type: 'UPDATE_CART', payload: responsetwo.data })
		}
	};
};
