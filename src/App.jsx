import React, { useState } from 'react';
import HomeComponent from "./components/HomeView/HomeComponent.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsComponent from "./components/ProductsView/ProductsComponent.jsx";
import ContactComponent from "./components/ContactView/ContactComponent.jsx";
import SingleProd from "./components/ProductView/SingleProd.jsx";
import CartComponent from './components/CartView/CartComponent.jsx';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems([...cartItems, { ...product, quantity }]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeComponent/>} />
        <Route exact path="/products" element={<ProductsComponent/>} />
        <Route exact path="/product/:id" element={<SingleProd addToCart={addToCart}/>} />
        <Route exact path="/contact" element={<ContactComponent/>} />
        <Route exact path="/cart" element={<CartComponent cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;