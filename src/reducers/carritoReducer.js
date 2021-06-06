import { 
    AGREGAR_PRODUCTO_CARRITO,
    ELIMINAR_PRODUCTO_CARRITO,
    AGREGAR_CANTIDAD_PRODUCTO,
    REDUCIR_CANTIDAD_PRODUCTO
} from '../types'

const initialState = {
    compras: [],
    products: 0,
    total : 0
} 

const carritoReducer = (state = initialState, action) => {
    let comprasCopy = []
    let indexTienda = -1
    let indexProduct = -1
    let newQuantityProducts = state.products
    switch(action.type) {
        case AGREGAR_PRODUCTO_CARRITO:
            comprasCopy = [...state.compras]
            if(comprasCopy.length !== 0 ){
                let indexCompra = comprasCopy.findIndex(compra => compra.store === action.payload.store)
                if(indexCompra !== -1){
                    comprasCopy[indexCompra].totalStore += action.payload.price
                    let indexProducto = comprasCopy[indexCompra].products.findIndex(product => product.product._id === action.payload._id)
                    if(indexProducto !== -1){
                        comprasCopy[indexCompra].products[indexProducto].quantity += 1
                        comprasCopy[indexCompra].products[indexProducto].totalProducts += action.payload.price
                    }else{
                        comprasCopy[indexCompra].products.push({product : action.payload, quantity : 1, totalProducts : action.payload.price})
                    }
                }else{
                    comprasCopy = [...comprasCopy, {store: action.payload.store, products : [{product : action.payload, quantity : 1, totalProducts : action.payload.price}], totalStore : action.payload.price}]
                }
            }else{
                comprasCopy = [...comprasCopy, {store: action.payload.store, products : [{product : action.payload, quantity : 1, totalProducts : action.payload.price}], totalStore : action.payload.price}]
            }
            
            return {
                ...state,
                compras: comprasCopy,
                products: state.products + 1,
                total : state.total + action.payload.price
            }
        case ELIMINAR_PRODUCTO_CARRITO:
            comprasCopy = [...state.compras]
            let newTotal = state.total
            indexTienda = comprasCopy.findIndex(compra => compra.store === action.payload.store)
            indexProduct = comprasCopy[indexTienda].products.findIndex(product => product.product._id === action.payload._id)
            newTotal -= comprasCopy[indexTienda].products[indexProduct].totalProducts
            newQuantityProducts -= comprasCopy[indexTienda].products[indexProduct].quantity
            if(comprasCopy[indexTienda].products.length === 1){
                comprasCopy.splice(indexTienda, 1)
            }else{
                comprasCopy[indexTienda].totalStore -= comprasCopy[indexTienda].products[indexProduct].totalProducts
                comprasCopy[indexTienda].products.splice(indexProduct, 1)
            }
            return{
                ...state,
                compras: comprasCopy,
                total: newTotal,
                products: newQuantityProducts
            }
        case AGREGAR_CANTIDAD_PRODUCTO:
            comprasCopy = [...state.compras]
            indexTienda = comprasCopy.findIndex(compra => compra.store === action.payload.store)
            indexProduct = comprasCopy[indexTienda].products.findIndex(product => product.product._id === action.payload._id)
            comprasCopy[indexTienda].products[indexProduct].quantity += 1
            comprasCopy[indexTienda].products[indexProduct].totalProducts += action.payload.price
            comprasCopy[indexTienda].totalStore += action.payload.price
            return{
                ...state,
                compras : comprasCopy,
                total : state.total + action.payload.price,
                products : state.products + 1
            }
        case REDUCIR_CANTIDAD_PRODUCTO:
            comprasCopy = [...state.compras]
            indexTienda = comprasCopy.findIndex(compra => compra.store === action.payload.store)
            indexProduct = comprasCopy[indexTienda].products.findIndex(product => product.product._id === action.payload._id)
            comprasCopy[indexTienda].products[indexProduct].quantity -= 1
            comprasCopy[indexTienda].products[indexProduct].totalProducts -= action.payload.price
            comprasCopy[indexTienda].totalStore -= action.payload.price
            return{
                ...state,
                compras : comprasCopy,
                total : state.total - action.payload.price,
                products : state.products - 1
            } 
        default:
            return state
    }
}

export default carritoReducer