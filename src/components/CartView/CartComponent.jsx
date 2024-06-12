import React from 'react';
import './CartComponent.css';

export default function CartComponent({ cartItems, removeFromCart }) {
  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.title} width="50" />
              <div>
                <h4>{item.title}</h4>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => removeFromCart(index)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}