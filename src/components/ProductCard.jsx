// components/ProductCard.jsx
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`}>
    <div className="border p-2">
      <img src={product.image} className="h-40 mx-auto" />
      <h2 className="text-sm">{product.title}</h2>
      <p>₹{product.price}</p>
    </div>
  </Link>
);

export default ProductCard;
