import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ title, price, image }) {
    return (
        <div className="cards-container">
            <div className="product-card">
                <img className="product-image" src={image} alt={title} />
                <div className="product-details">
                    <h4 className="product-title">{title}</h4>
                    <p className="product-price">Precio ${price}</p>
                    <Link to={`/product/${id}`} className="add-to-cart-btn">Comprar</Link>
                </div>
            </div>
        </div>
    );     
}