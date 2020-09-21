import axios from 'axios'
export const fetchProducts=()=>{
return async (dispatch)=>{
const response = await axios.create({
baseURL:'http://localhost:3001'
}).get('/products')
dispatch({type:'FETCH_PRODUCTS', payload:response.data})
}
}