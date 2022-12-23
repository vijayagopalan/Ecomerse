import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Product from './Product';
import { Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header >
          <Navbar bg='dark' varient='dark'>
            <Container>
              <LinkContainer to="/" >
                <Navbar.Brand>Amazon</Navbar.Brand>
              </LinkContainer>
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
