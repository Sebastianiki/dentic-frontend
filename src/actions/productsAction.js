import { 
    COMENZAR_LISTAR_PRODUCTOS,
    LISTAR_PRODUCTOS_EXITO,
    LISTAR_PRODUCTOS_ERROR,
    SELECCIONAR_PRODUCTO
} from '../types'
import clienteAxios from '../config/axios'

export function getProducts(){
    return async(dispatch) => {
        dispatch(listProducts())
        try{
            const respuesta = await clienteAxios.get('/products')
            dispatch(getProductSucces(respuesta.data.products))
        }catch(error){
            console.log(error)
            dispatch(getProductError(true))
        }
    }
}

const listProducts = () =>({
    type: COMENZAR_LISTAR_PRODUCTOS,
    payload: true
})

const getProductSucces = products =>({
    type: LISTAR_PRODUCTOS_EXITO,
    payload: products
})

const getProductError = estado =>({
    type: LISTAR_PRODUCTOS_ERROR,
    payload: estado
})

export function selectProduct(product){
    return async(dispatch) => {
        dispatch(putProductInState(product))
    }
}

const putProductInState = product =>({
    type: SELECCIONAR_PRODUCTO,
    payload : product
})