import React from 'react'
import {Container, Card} from 'react-bootstrap'
import styled from '@emotion/styled'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addProductToCart } from '../actions/carritoAction'
import { selectProduct } from '../actions/productsAction'
import Swal from 'sweetalert2'

const EnvioRapido = styled.p`
    margin: 0;
    background-color: #38C1CA;
    color: white;
    font-size: 1rem;
    border: 1px solid;
    border-bottom-left-radius: 2rem !important;
    border-bottom-right-radius: 2rem !important;
    text-align: center;
`
const Titulo = styled.div`
    height: 48px;
    margin-bottom: .75rem;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
`
const Espaciador = styled.div`
    height: 19px;
`
const BotonAddCarrito = styled.div`
    color: white;
    font-weight: bolder;
    margin: 0;
    padding: 0;
    background-color: red;
    position: absolute;
    height: 60px;
    width: 60px;
    left: 76%;
    border: 1px;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    text-align: center;
`
const AddIcon = styled.span`
    position: relative;
    top: 10%;
    font-size: 3rem;
    color: white;
    &:hover {
        font-size: 3.3rem;
        top: 8%;
    }
`
const Product = ({product}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const addProduct = () => dispatch(addProductToCart(product)).then(() => {
        Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1200
        })
    })
    const clickProduct = () => {
        dispatch(selectProduct(product))
        history.push(`/producto/${product._id}`)
    }
    return (
        <Container fluid className='p-0 mx-2'>
            <Card className='border-top border-bottom shadow'>
                <Card.Img variant="top" src={product.image} className='border-top' onClick={clickProduct}/>
                <Card.Body className='px-0 pb-0' onClick={clickProduct}>
                    <Titulo>{product.name}</Titulo>
                    <Card.Text className='text-center'>
                        { product['units-in-pack'] === 1 ? `${product['units-in-pack']} unidad` : `${product['units-in-pack']} unidades`}
                    </Card.Text>
                    <Card.Text className='text-center mb-0'>
                        ${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </Card.Text>
                    {
                        product['fast-shipping'] ? 
                        <EnvioRapido>ENVIO RAPIDO</EnvioRapido>
                        : <Espaciador/>
                    }
                </Card.Body>
                <BotonAddCarrito onClick={addProduct}>
                    <AddIcon className="material-icons noselect" >add_circle</AddIcon>
                </BotonAddCarrito>
            </Card>
        </Container>
        
    );
}
 
export default Product;