// src/App.tsx
import { CartProvider } from "./components/CartContext/CartContext";
import { ProductList } from "./components/CartContext/ProductList";
import { Cart } from "./components/CartContext/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OrderPlaced from "./components/CartContext/OrderPlaces";
import AddressForm from "./components/CartContext/AddressForm";

function App() {
  return (
    <CartProvider>
      <Router>
        <nav className="navbar navbar-expand bg-danger px-0">
          <Link className="navbar-brand text-white" to="/">
            Shop
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link text-white" to="/products">
              Products
            </Link>
            <Link className="nav-link text-white" to="/cart">
              Cart
            </Link>
            <Link className="nav-link text-white" to="/order">
              Order
            </Link>
            <Link className="nav-link text-white" to="/address">
              Address
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<AddressForm />} />
          <Route path="/order" element={<OrderPlaced />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
