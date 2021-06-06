import React from 'react'
import Header from './components/Header'
import Carrito from './components/Carrito'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Container } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Header/>
          <Switch>
            <Route exact path='/' component={Products}/>
            <Route exact path='/carrito' component={Carrito}/>
            <Route exact path='/producto/:id' component={ProductDetail}/>
          </Switch>
        </Container>
      </Router>
    </Provider>  
  );
}

export default App;
