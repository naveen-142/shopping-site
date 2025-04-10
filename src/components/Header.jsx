// components/Header.jsx
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="flex gap-4 p-4 bg-gray-200">
      <Link to="/home">Home</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
      <button onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;
