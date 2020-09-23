import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import productReducer from './productsReducer'

import authReducer from './authReducer'

export default combineReducers({
    auth:authReducer,
    form:formReducer,
    products:productReducer
})


