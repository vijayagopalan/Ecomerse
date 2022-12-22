import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import PageNotFound from './PageNotFound';


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
          <Route path='*' excat element={<PageNotFound/>}/>
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
