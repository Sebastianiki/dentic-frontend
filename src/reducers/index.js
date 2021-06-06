import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import carritoReducer from './carritoReducer'

export default combineReducers({
    products : productsReducer,
    carrito : carritoReducer
})