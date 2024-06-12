import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ProductCard from "../ProductsView/ProductCard";

export default function ProductsComponent() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
