import React, { useState } from 'react';
import HomeComponent from "./components/HomeView/HomeComponent.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsComponent from "./components/ProductsView/ProductsComponent.jsx";
import ContactComponent from "./components/ContactView/ContactComponent.jsx";
import SingleProd from "./components/ProductView/SingleProd.jsx";
import CartContext from './components/context/CartContext.jsx';
import Checkout from './components/Checkout/Checkout.jsx';



function App() {
  const [cartItems, setCartItems] = useState([]);
  const [nextId, setNextId] = useState(0);

  const addToCart = (product, quantity) => {
    setCartItems([...cartItems, { ...product, quantity, id: nextId }]);
    setNextId(nextId + 1);
  };

  const removeFromCart = (id) => {
    const newCartItems = cartItems.filter(item => item.id !== id);
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
        <Route exact path="/cart" element={<CartContext cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route exact path="/checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;