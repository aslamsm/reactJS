// src/App.tsx
import React from "react";
import { CartProvider } from "./components/CartContext/CartContext";
import { ProductList } from "./components/CartContext/ProductList";
import { Cart } from "./components/CartContext/Cart";

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="container my-1">
        <h3 style={{ marginLeft: "300px" }}>Buy Laptops Online</h3>

        <div className="row">
          <div className="col-md-8">
            <ProductList />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
