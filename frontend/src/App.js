import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Product from './Product';


function App() {
  return (
    <BrowserRouter>
    <div>
      <header >
        <Link href='/'>Amazon</Link>
      </header>
      <main>
        <Routes>
          <Route path='/' excat element={<Home/>}/>
          <Route path='/product/:slug' element={<Product/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
