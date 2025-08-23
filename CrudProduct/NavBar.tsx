import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger px-1 py-0 shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand text-white fw-bold ">
          <img
            src="/src/assets/bar.gif"
            alt="Logo"
            className="me-2 rounded"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          Logo
        </NavLink>

        {/* Navigation Links */}
        <ul className="navbar-nav d-flex flex-row gap-3 mb-0 ms-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link text-white">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/courses" className="nav-link text-white">
              CourseList
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link text-white">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link text-white">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/customers" className="nav-link text-white">
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link text-white">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
