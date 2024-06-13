import { useEffect, useState } from "react";
import ProductCard from "../ProductsView/ProductCard";
import { useParams } from "react-router";
import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../../firebase/config"

export default function ProductsComponent() {
    const [products, setProducts] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() => {
        const productosRef = collection(db, "productos");

        const q = categoria ? query(productosRef, where("category", "==", categoria)) : productosRef; 


        getDocs(q)
            .then((resp)=> {

                setProducts(
                    resp.docs.map((doc) => {
                        return {...doc.data(), id: doc.id}
                    })
                );
            })

    }, [categoria]);

    return (
        <>
            <h1>Productos</h1>
            <article>
                {products.map(product => (
                    <ProductCard 
                        key={product.id}
                        idProd={product.id}
                        title={product.title} 
                        price={product.price} 
                        image={product.image} 
                    />
                ))}
            </article>
        </>
    );
}
