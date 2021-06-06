import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../actions/carritoAction'
import { Container, Row, Col } from 'react-bootstrap'
import styled from '@emotion/styled'
import Swal from 'sweetalert2'

const ProductoImagen = styled.img`
    height: 400px;
    width: 350px;
`
const ProductoNombre = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
`
const ProductoTienda = styled.p`
    text-align: center;
    padding: 0;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5rem;
    border: 1px solid;
    border-radius: 20px;
    margin: 1.5rem 18rem 1.5rem 1rem;
`
const ProductoCantidad = styled.p`
    font-weight: bold;
    font-size: 1.3rem;
    margin-left: 2rem;
`
const ProductoPrecio = styled.p`
    font-weight: 600;
    font-size: 2.5rem;
    margin-left: 1.8rem;
    margin-top: 5rem;
`
const AgregarCarrito = styled.button`
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    background-color: red;
    color: white;
    padding: 5px 20px 5px 20px;
    border: 1px solid;
    border-radius: 20px;
    margin-top: 1rem;
    margin-left: 2rem;
    &:hover{
        background-color: #fc6f6f;
    }
`
const TituloDescripcion = styled.h1`
    margin-top: 5rem;
    text-align: center;
    font-weight: bold;
`
const Limitador = styled.hr`
    border-top: 1px solid #38C1CA;
`
const Descripcion = styled.p`
    margin-top: 2rem;
    font-size: 1.3rem;
    text-align: center;
`
const ProductDetail = () => {
    const { selectedProduct } = useSelector(state => state.products)
    const dispatch = useDispatch()
    const addProduct = () => dispatch(addProductToCart(selectedProduct)).then(() => {
        Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1000
        })
    })
    let clase = selectedProduct.store.replace(/\s+/g, '').toUpperCase()
    return (
        <Container className='mt-5'>
            <Row>
                <Col xl={6} className='d-flex justify-content-center'>
                    <ProductoImagen src={selectedProduct.image}/>
                </Col>
                <Col xl={6}>
                    <ProductoNombre>{selectedProduct.name}</ProductoNombre>
                    <ProductoTienda className={clase}>{selectedProduct.store}</ProductoTienda>
                    <ProductoCantidad>{selectedProduct['units-in-pack']} {selectedProduct['units-in-pack'] > 1 ? 'unidades' : 'unidad'}</ProductoCantidad>
                    <ProductoPrecio>$ {selectedProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</ProductoPrecio>
                    <AgregarCarrito onClick={addProduct}>Agregar al carrito</AgregarCarrito>
                    
                </Col>
            </Row>
            <TituloDescripcion>Descripción</TituloDescripcion>
            <Limitador/>
            <Descripcion>{selectedProduct.description}</Descripcion>
        </Container>
    );
}
 
export default ProductDetail;