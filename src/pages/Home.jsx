// Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div
          key={product.id}
          className="border rounded-lg p-4 hover:shadow-xl transition-transform hover:scale-105"
        >
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
            <h2 className="font-semibold text-lg mt-2">{product.title}</h2>
            <p className="text-gray-700">₹{product.price}</p>
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
