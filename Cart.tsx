// src/components/Cart.tsx
import React from "react";
import { useCart } from "./CartContext";

export const Cart: React.FC = () => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return <p className="text-center text-danger">*** Cart is Empty ***</p>;

  return (
    <div>
      <h5 className="text-primary text-center">My Cart</h5>
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ backgroundColor: "lightyellow" }}
          >
            <div>
              {item.item} x {item.quantity}
            </div>
            <div>
              <span className="me-3">${item.price * item.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
      <h5 className="text-end text-success">Total: ${total.toFixed(0)}</h5>
    </div>
  );
};
