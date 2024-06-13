import {createContext} from 'react';
import "./CartContext.css"
import { Link } from 'react-router-dom';

export default function CartContext({ cartItems, removeFromCart }) {
  const precioTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío ☹️</p>
      ) : (
        <>
        <ul>
          {cartItems.map((item, index) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} width="50" />
              <div>
                <h4>{item.title}</h4>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Número: {index + 1}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="checkout-button">
        <Link to={{
                pathname: "/checkout",
                state: { carrito: cartItems, precioTotal: precioTotal }
              }} 
              className="checkout-button">
                Finalizar compra
                </Link>
      </div>
      </>
      )}
    </div>
  );
}