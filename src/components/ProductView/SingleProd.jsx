import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Precio: ${product.price}</p>
      <p>Descripción: {product.Description}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
}
