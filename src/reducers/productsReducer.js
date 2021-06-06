import { 
    COMENZAR_LISTAR_PRODUCTOS,
    LISTAR_PRODUCTOS_EXITO,
    LISTAR_PRODUCTOS_ERROR,
    SELECCIONAR_PRODUCTO
} from '../types'

const initialState = {
    products: [],
    selectedProduct : null,
    error: false,
} 

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case COMENZAR_LISTAR_PRODUCTOS:
            return {
                ...state,
            }
        case LISTAR_PRODUCTOS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case LISTAR_PRODUCTOS_EXITO:
            return {
                ...state,
                error: false,
                products: action.payload
            }
        case SELECCIONAR_PRODUCTO:
            return {
                ...state,
                selectedProduct: action.payload
            }
        default:
            return state
    }
}

export default productsReducer