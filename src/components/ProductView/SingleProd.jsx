import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {doc, getDoc} from "firebase/firestore"
import './SingleProd.css';
import { db } from '../../firebase/config';

export default function SingleProd({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProduct({ ...docSnap.data(), id: docSnap.id });
    } else {
      console.log("No such document!");
    }
  };

  fetchProduct();
}, [id]);


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
    return <div>Loading...</div>;
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
