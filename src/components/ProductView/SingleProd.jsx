import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import './SingleProd.css';

export default function SingleProd({ addToCart }) {
  const { id } = useParams();
  const product = getProduct(parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="cards-container">
      <div className="product-card">
        <img className="product-image" src={product.image} alt={product.title} />
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">Precio: ${product.price}</p>
          <p>Descripción: {product.description}</p>
          <div>
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}
