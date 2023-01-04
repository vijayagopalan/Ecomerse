import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Product from './Product';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';


function App() {
  const cartContextValue = useContext(CartContext)
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header >
          <Navbar bg='dark' varient='dark'>
            <Container>
              <LinkContainer to="/" >
                <Navbar.Brand>Amazon</Navbar.Brand>
              </LinkContainer>
              <Nav className='me-auto'>
                <Link to={"/cart"} className="nav-link">
                  Cart
                  {
                    cartContextValue.state.cart.cartItems.length > 0 &&
                    <Badge pill bg='danger'>{cartContextValue.state.cart.cartItems.reduce((a,c)=>a+c.quantity,0)}</Badge>
                  }
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path='/' excat element={<Home />} />
              <Route path='/product/:slug' element={<Product />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>All Right Reserved</div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
