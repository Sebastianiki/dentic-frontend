import React from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { removeProductCart, decreaseQuantityProduct, increaseQuantityProduct } from '../actions/carritoAction'
import Swal from 'sweetalert2'

const Name = styled.p`
    font-weight: bolder;
    font-size: 1.5rem;
    margin: 0;
`
const Price = styled.p`
    margin: 0;
    font-weight: bold;
`
const DeleteIcon = styled.span`
    margin: 0;
    font-size: 2rem;
    color: black;
    &:hover {
        color: red;
        cursor: pointer;
    }
`
const MinusIcon = styled.span`
    margin: 0;
    color: gray;
    font-size: 2rem;
    &:hover {
        color: red;
        cursor: pointer;
    }
`
const PlusIcon = styled.span`
    margin: 0;
    color: gray;
    font-size: 2rem;
    &:hover {
        color: green;
        cursor: pointer;
    }
`
const Quantity = styled.p`
    display: inline-block;
    margin: 0;
    font-weight: bold;
    font-size: 2rem;
`
const Espaciador = styled.div`
    height: 32px;
    width: 32px;
`

const ProductCarrito = ({product}) => {
    const dispatch = useDispatch()
    const deleteProductCart = () => dispatch(removeProductCart(product))
    const confirmarEliminar = () =>{
        Swal.fire({
            title: 'Estas seguro?',
            icon: 'error',
            showCancelButton: true,
            cancelButtonColor: '#38c1ca',
            confirmButtonColor: 'red',
            cancelButtonText: 'CANCELAR',
            confirmButtonText: 'BORRAR',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProductCart()
            }
        })
        
    }
    const increaseQuantity = () => dispatch(increaseQuantityProduct(product))
    const decreaseQuantity = () => {
        if(product.quantity > 1){
            dispatch(decreaseQuantityProduct(product))
        }else{
            deleteProductCart()
        }
    }
    return (
        <>
            <Row className='px-2'>
                <Col xl={8} className='d-flex align-items-center'><Name>{product.product.name}</Name></Col>
                <Col xl={3} className='d-flex align-items-center'>
                    <Row>
                        <Col xl={3} className='d-flex align-items-center'>
                            {   product.quantity > 1 
                                ? < MinusIcon onClick={decreaseQuantity} className='material-icons noselect'>
                                        remove_circle
                                    </MinusIcon>
                                : <Espaciador/>

                            }
                        </Col>
                        <Col xl={3} className='d-flex align-items-center justify-content-center'>
                            <Quantity className='noselect'>
                                {product.quantity}
                            </Quantity>
                        </Col>
                        <Col xl={3} className='d-flex align-items-center'>
                            <PlusIcon onClick={() => increaseQuantity()} className='material-icons noselect'>
                                add_circle
                            </PlusIcon>
                        </Col>
                        <Col xl={3} className='d-flex align-items-center'>
                            <DeleteIcon onClick={confirmarEliminar} className='material-icons noselect'>
                                delete
                            </DeleteIcon>
                        </Col>
                    </Row>
                </Col>
                <Col xl={1} className='d-flex align-items-center justify-content-center'><Price>${product.totalProducts.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Price></Col>
            </Row>
            <hr/>
        </>
    );
}
 
export default ProductCarrito;