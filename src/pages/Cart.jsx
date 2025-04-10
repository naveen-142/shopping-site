import { useState } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    clearCart(); // Optional: clear the cart after checkout
  };

  if (checkoutSuccess) {
    return (
      <div className="max-w-2xl mx-auto mt-20 p-8 bg-green-100 text-green-800 text-center rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4">🎉 Thank you for your purchase!</h2>
        <p>Your order has been placed successfully.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border rounded hover:bg-gray-100 transition"
            >
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>₹{item.price} x {item.qty}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right text-xl font-semibold mt-6">Total: ₹{total.toFixed(2)}</div>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
