import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import Tienda from './Tienda'
import styled from '@emotion/styled'

const TextoPlano = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 2.5rem;
`
const BotonPagar = styled.button`
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    background-color: #38C1CA;
    color: white;
    padding: 5px 20px 5px 20px;
    border: 1px solid;
    border-radius: 10px;
    margin-bottom: 5rem;
    &:hover{
        background-color: #36b6bc;
    }
`
const Error = styled.p`
    font-size: 1.2rem;
    margin-top: 2rem;
    text-align: center;
`
const Carrito = () => {
    const { compras, total } = useSelector(state => state.carrito)
    return (
        <Container fluid>
            <h1 className='text-center mt-5'>Tu Carrito</h1>
            {   compras.length !== 0 
                ?   
                    compras.map(compra =>(
                        <Tienda key={compra.store} tienda={compra}/>
                    ))
                :   <Error>No hay productos en el carrito :(</Error>
            }
            {   compras.length !== 0
                ?
                    <>
                        <TextoPlano className='mt-5'>Total a Pagar</TextoPlano>
                        <TextoPlano>${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</TextoPlano>
                        <div className='d-flex justify-content-center'><BotonPagar>Pagar</BotonPagar></div>
                    </>
                : null
            }
        </Container>
    );  
}
 
export default Carrito;