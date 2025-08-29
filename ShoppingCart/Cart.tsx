// src/components/Cart.tsx
import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

export const Cart: React.FC = () => {
  const { cart, plusQuantity, minusQuantity } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return (
      <div className="container">
        <p className="text-center text-danger">*** Cart is Empty ***</p>
      </div>
    );

  return (
    <div className="container">
      <h5 className="text-primary text-center my-3">My Cart</h5>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-sm">
          <thead className="table-success">
            <tr>
              <th className="text-center">Image</th>
              <th className="text-center">Item</th>
              <th className="text-center">Quantity</th>
              <th className="text-end">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr
                key={item.id}
                style={{ verticalAlign: "middle", height: "25%" }}
              >
                <td className="text-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <div
                      className="d-flex align-items-center justify-content-center bg-light border rounded"
                      style={{
                        width: "50px",
                        height: "50px",
                        fontSize: "10px",
                      }}
                    >
                      No Image
                    </div>
                  )}
                </td>

                <td className="text-center">{item.item}</td>

                <td className="text-center">
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => minusQuantity(item.id)}
                      disabled={item.quantity === 1}
                    >
                      −
                    </button>
                    <span className="px-3 align-self-center">
                      {item.quantity}
                    </span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => plusQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="text-end" style={{ width: "150px" }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h5 className="text-end text-success">Total: ${total.toFixed(2)}</h5>
      <div className="d-flex  gap-2">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => navigate("/address")}
        >
          Proceed to Address
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => navigate("/order")}
        >
          Place the Order
        </button>

        <button
          className="btn btn-success btn-sm ms-auto"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
