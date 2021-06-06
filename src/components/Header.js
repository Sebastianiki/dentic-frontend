import React from 'react'
import { Navbar } from 'react-bootstrap'
import styled from '@emotion/styled'
import logo from '../images/logo.png'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ContenedorNav = styled.div`
    height: 300px;
`
const BagIcon = styled.span`
    font-size: 45px;
    color: black;
    &:hover {
        color: gray;
    }
`
const Ptienda = styled.p`
    font-size: 30px;
    font-weight : bold;
    color: black;
    &:hover {
        color: gray;
    }
`
const Logo = styled.img`
    height: 200px;
    width: 250px;
`
const ContenedorIcon = styled.div`
    height: 60px;
    width: 60px;
    position: relative;
`
const Quantity = styled.p`
    position: absolute;
    background-color: red;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    border: 1px solid red;
    border-radius: 20px;
    padding-left: 3px;
    padding-right: 3px;
    padding-top: -3px;
    padding-bottom: -3px;
    right: 20px;
    bottom: 10px;
`
const Header = () => {
    const history = useHistory()
    const { products } = useSelector(state => state.carrito)
    return (
        <ContenedorNav>
            <Navbar className="d-flex align-items-center justify-content-between h-100 px-5">
                <Ptienda onClick={() => history.push(`/`)} className='p-0 manito'>Tienda</Ptienda>
                <Logo onClick={() => history.push(`/`)} className='p-0 manito noselect' src={logo}/>
                <ContenedorIcon>
                    <Quantity className="manito noselect" onClick={() => history.push(`/carrito`)}>{products}</Quantity>
                    <BagIcon className="material-icons manito noselect" onClick={() => history.push(`/carrito`)}>
                        shopping_bag
                    </BagIcon>
                </ContenedorIcon>
                
            </Navbar>
        </ContenedorNav>
    );
}
 
export default Header;