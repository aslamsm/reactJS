// src/App.tsx
import { CartProvider } from "./components/CartContext/CartContext";
import { ProductList } from "./components/CartContext/ProductList";
import { Cart } from "./components/CartContext/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OrderPlaced from "./components/CartContext/OrderPlaced";
import AddressForm from "./components/CartContext/AddressForm";
import { useCart } from "./components/CartContext/CartContext";

const NavbarWithCart = () => {
  const { getTotalQuantity } = useCart();

  return (
    <nav
      className="navbar navbar-expand fw-bold"
      style={{
        backgroundColor: "#0e1013ff", // Amazon dark background
        padding: "5px 10px",
      }}
    >
      <Link className="navbar-brand text-white ms-2" to="/products">
        <img
          src="./src/assets/logocart.jpg"
          style={{
            width: "60px",
            height: "40px",
            objectFit: "fill",
          }}
          alt="Logo"
        />
      </Link>

      <div className="navbar-nav">
        <Link className="nav-link text-light px-3 fs-6 " to="/products">
          Products
        </Link>
        <Link className="nav-link text-light px-3 fs-6" to="/cart">
          Cart
        </Link>
        <Link className="nav-link text-light px-3 fs-6" to="/order">
          Order
        </Link>
        <Link className="nav-link text-light px-3 fs-6" to="/address">
          Address
        </Link>
      </div>

      {/* Cart Icon with Badge */}
      <div className="ms-auto me-4">
        <Link to="/cart" className="text-white text-decoration-none">
          <div className="position-relative d-flex align-items-center">
            <img
              src="./src/assets/shopcart.jpg"
              alt="Cart"
              style={{ width: "30px", height: "30px" }}
            />
            {getTotalQuantity() > 0 && (
              <span
                // Bootstrap class to position and style the badge.
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark"
                style={{ fontSize: "0.75rem", fontWeight: "bold" }}
              >
                {getTotalQuantity()}
              </span>
            )}
            <span className="ms-2 text-white fw-semibold">Cart</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <NavbarWithCart />
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
