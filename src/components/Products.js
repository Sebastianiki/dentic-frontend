import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productsAction'
import Product from './Product'
import { Container } from 'react-bootstrap'

const Products = () => {

    const { products, error } = useSelector(state => state.products)
    const dispatch = useDispatch()
    const loadProductos = () => dispatch(getProducts())
    useEffect(()=>{
        loadProductos()
        // eslint-disable-next-line
    },[])
    let cargando = true
    return (
        <>
        <Container className='d-flex mt-5' fluid>
            { error  ? <p className='font-weight-bold alert alert-danger text-center mt-4'>Hubo un error</p> : null }
            { products.length !== 0 
                ?   products.map(product =>(
                    <Product key={product._id} product={product}/>
                    ))
                :   null
            }
        </Container>
        </>
    );
}
 
export default Products;