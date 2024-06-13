import React from 'react';
import { useForm } from 'react-hook-form';
import "./Checkout.css"
import { collection, addDoc} from "firebase/firestore"
import {db} from "../../firebase/config"

const Checkout = ({ carrito, precioTotal, vaciarCarrito }) => {
  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal()
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");
    addDoc(pedidosRef, pedido)
    .then((doc) => {
        console.log(doc.id);
    })
  };

  return (
    <div className="container">
      <h1 className="main-title">Finalizar Compra</h1>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder="ingresa tu nombre" {...register("nombre")} />
        <input type="email" placeholder="ingresa tu e-mail" {...register("email")} />
        <input type="phone" placeholder="ingresa tu celular" {...register("celular")} />
        <button className="enviar" type="submit">Comprar</button>
      </form>
    </div>
  );
};

export default Checkout;
