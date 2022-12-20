import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import data from './data';


function App() {
  return (
    <BrowserRouter>
    <div>
      <header >
        <a href='/'>Amazon</a>
      </header>
      <main>
        <Routes>
          <Route path='/' excat element={<Home/>}/>
        </Routes>
        <h1>Featured Products</h1>
        <div className="products">
          {
            data.products.map(product => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p><b>${product.price}</b></p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
