import { useCart } from "./CartContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const address = localStorage.getItem("orderAddress");

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
    clearCart();
  }, []);

  if (!address) {
    return <div className="alert alert-warning mt-4">No address found !</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-success">Order Placed!</h2>
      <p>Your order will be delivered to:</p>
      <div className="alert alert-info">{address}</div>
      <p>Thank you for shopping with us!</p>
    </div>
  );
};

export default OrderPlaced;
