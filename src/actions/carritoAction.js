import { 
    AGREGAR_PRODUCTO_CARRITO,
    ELIMINAR_PRODUCTO_CARRITO,
    REDUCIR_CANTIDAD_PRODUCTO,
    AGREGAR_CANTIDAD_PRODUCTO
} from '../types'

export function addProductToCart(product){
    return async(dispatch) => {
        dispatch(addProduct(product))
    }
}

const addProduct = product =>({
    type: AGREGAR_PRODUCTO_CARRITO,
    payload: product
})

export function removeProductCart(product){
    return async(dispatch) => {
        dispatch(removeProduct(product.product))
    }
}

const removeProduct = product => ({
    type : ELIMINAR_PRODUCTO_CARRITO,
    payload: product
})

export function increaseQuantityProduct(product){
    return async(dispatch) => {
        dispatch(increaseQuantity(product.product))
    }
}

const increaseQuantity = product => ({
    type: AGREGAR_CANTIDAD_PRODUCTO,
    payload: product
})

export function decreaseQuantityProduct(product){
    return async(dispatch) => {
        dispatch(decreaseQuantity(product.product))
    }
}

const decreaseQuantity = product => ({
    type: REDUCIR_CANTIDAD_PRODUCTO,
    payload: product
})

