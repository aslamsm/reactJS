// src/App.tsx
import { CartProvider } from "./components/CartContext/CartContext";
import { ProductList } from "./components/CartContext/ProductList";
import { Cart } from "./components/CartContext/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OrderPlaced from "./components/CartContext/OrderPlaces";
import AddressForm from "./components/CartContext/AddressForm";
import { useCart } from "./components/CartContext/CartContext";

const NavbarWithCart = () => {
  const { getTotalQuantity } = useCart();

  return (
    <nav className="navbar navbar-expand bg-danger px-0">
      <Link className="navbar-brand text-white" to="/">
        MyShop
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

      {/* Cart Icon with Badge */}
      <div className="ms-auto me-4">
        <Link to="/cart" className="text-white text-decoration-none">
          <div className="position-relative">
            {/* <span className="fs-4">🛒</span> */}
            <span className="fs-4">
              <img
                src="./src/assets/shopcart.jpg"
                alt="Cart"
                style={{ width: "30px", height: "30px" }}
              />
            </span>

            {getTotalQuantity() > 0 && (
              <span
                // className="position-absolute  badge  text-light bg-dark rounded-circle"
                className="position-absolute translate-middle badge bg-dark text-light rounded-circle"
                style={{ fontSize: "0.7rem" }}
              >
                {getTotalQuantity()}
              </span>
            )}
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
