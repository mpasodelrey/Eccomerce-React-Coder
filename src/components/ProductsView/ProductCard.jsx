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
                    <button className="add-to-cart-btn"><Link to={"/"}>Comprar</Link></button>
                </div>
            </div>
        </div>
    );     
}
