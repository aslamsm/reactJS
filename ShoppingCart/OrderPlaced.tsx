import { useCart } from "./CartContext";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const address = localStorage.getItem("orderAddress");
  const [hasPlacedOrder, setHasPlacedOrder] = useState(false);
  const orderProcRef = useRef(false); // Ref to track if order is being processed

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Prevent duplicate/multiple executions while saving data, using ref
    if (orderProcRef.current || hasPlacedOrder) {
      return;
    }

    // Mark true as processing started
    orderProcRef.current = true;

    // Capture cart and address at start/mount time
    const currentCart = [...cart];
    const currentAddress = address;

    if (!currentCart || currentCart.length === 0) {
      orderProcRef.current = false;
      navigate("/products");
      return;
    }

    if (!currentAddress) {
      orderProcRef.current = false;
      setError("No delivery address found. Please go back and add an address.");
      return;
    }

    const placeOrder = async () => {
      try {
        setLoading(true);
        setError(null);

        // Calculate total quantity from current cart
        const totalQuantity: number = currentCart.reduce(
          (total, item) => total + item.quantity,
          0
        );
        console.log(totalQuantity);

        if (totalQuantity == 0) {
          console.log(`Total Qty : ${totalQuantity}`);
          setError("Your cart has no items with quantity greater than 0.");
          orderProcRef.current = false;
          return;
        }

        const totalAmount = currentCart.reduce(
          (total, item) => total + item.quantity * item.price,
          0
        );

        const orderData = {
          address: currentAddress,
          totalqty: totalQuantity,
          totalamt: totalAmount,
          products: currentCart
            .filter((item) => item.quantity > 0)
            .map((item) => ({
              id: item.id,
              productName: item.item,
              quantity: item.quantity,
              price: item.price,
            })),
          orderDate: new Date().toISOString(),
        };

        // Save the order info. in MockAPI.
        const response = await fetch(
          "https://689c6b8958a27b18087e17dc.mockapi.io/products",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to place order");
        }

        // Mark as Order placed and clear the cart
        setHasPlacedOrder(true);
        clearCart();
      } catch (err: unknown) {
        orderProcRef.current = false; // Reset on error
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    // Place the order
    placeOrder();
  }, []);

  if (!address) {
    return <div className="alert alert-warning mt-4">No address found!</div>;
  }

  if (loading) {
    return (
      <div className="alert alert-info mt-4 d-flex align-items-center">
        <div
          className="spinner-border text-primary me-2"
          role="status"
          aria-hidden="true"
        ></div>
        <span>Placing your order...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  // Only show success message if order was actually placed
  if (hasPlacedOrder) {
    return (
      <div className="alert alert-info mt-4">Processing your request...</div>
    );
  }

  if (hasPlacedOrder) {
    return (
      <div className="container mt-4">
        <h2 className="text-success">Order Placed!</h2>
        <p>Your order will be delivered to:</p>
        <div className="alert alert-info">{address}</div>
        <p>Thank you for shopping with us!</p>
      </div>
    );
  }
};

export default OrderPlaced;
