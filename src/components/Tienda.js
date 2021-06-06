import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import styled from '@emotion/styled'
import ProductCarrito from './ProductCarrito'

const Titulo = styled.p`
    text-align: center;
    padding: 0.1rem 1.2rem 0.3rem 1.2rem;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5rem;
    border: 1px solid;
    border-radius: 20px;
    margin-top: 3rem;
`
const Total = styled.p`
    text-align: end;
    font-weight: bold;
    font-size: 1.2rem;
`
const Tienda = ({tienda}) => {
    let clase = tienda.store.replace(/\s+/g, '').toUpperCase()
    return (
        <Container>
            <Row className='d-flex justify-content-center'><Titulo className={clase}>{tienda.store}</Titulo></Row>
            { tienda.products.length !== 0 
                ?   tienda.products.map(product =>(
                        <ProductCarrito key={product._id} product={product}/>
                    ))
                :   null
            }
            <Row className='px-2'>
                <Col xl={8}></Col>
                <Col xl={3} >
                    <Total>Total en {tienda.store.toUpperCase()}</Total>
                </Col>
                <Col xl={1} className='d-flex align-items-center justify-content-center'>
                    <Total>${tienda.totalStore.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Total>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Tienda;