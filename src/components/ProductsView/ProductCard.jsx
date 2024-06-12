import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ idProd, title, price, image }) {
    return (
        <div className="cards-container">
            <div className="product-card">
                <img className="product-image" src={image} alt={title} />
                <div className="product-details">
                    <h4 className="product-title">{title}</h4>
                    <p className="product-price">Precio ${price}</p>
                    <Link to={`/product/${idProd}`} className="add-to-cart-btn">Ver detalles</Link>
                </div>
            </div>
        </div>
    );     
}