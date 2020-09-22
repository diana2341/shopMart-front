import {combineReducers} from 'redux'
import productReducer from './productsReducer'

import authReducer from './authReducer'

export default combineReducers({
    auth:authReducer,
    products:productReducer
})


