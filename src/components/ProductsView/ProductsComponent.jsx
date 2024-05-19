import { useEffect, useState } from "react";
import {getProducts} from "../../asyncMock";
import ProductCard from "../ProductsView/ProductCard";

export default function ProductsComponent(){
    const[products, setProducts]=useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        getProducts
        .then(data => setProducts(data))
        .catch(error => setError(error.message));
    },[])
    if (error) {
        return <div>Error: {error}</div>;
    } 
    return (
    <>
        <h1>Productos</h1>
        <article>
            {products.map(product => (
                <ProductCard 
                    title={product.title} 
                    price={product.price} 
                    image={product.image} 
                    idProd={product.id}
                />
            ))}
        </article>
    </>
    );
}