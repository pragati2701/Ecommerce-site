import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import App from './App';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
       <Routes>
            <Route path="/" element = {<App/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Product" element={<Register/>} />
            <Route path="/Cart" element={<Cart/>} />
            <Route path="/ProductList" element={<ProductList/>} />
       </Routes>
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);