import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Layout/Home";
import About from "./components/Layout/About";
import Contact from "./components/Layout/Contact";
import CourseList from "./components/CourseList";
import UserList from "./components/UserApi/UserList";
import ListProducts from "./components/CrudProducts/ListProducts";
import ProductAdd from "./components/CrudProducts/ProductAdd";
import ProductEdit from "./components/CrudProducts/ProductEdit";
import ListCustomers from "./components/CrudProducts/ListCustomers";
import CustomerAdd from "./components/CrudProducts/CustomerAdd";
import CustomerEdit from "./components/CrudProducts/CustomerEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <NavBar />
        {/* This grows to push footer down */}
        <main className="flex-1 container mx-auto mt-1 px-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/products" element={<ListProducts />} />
            <Route path="/add-Product" element={<ProductAdd />} />
            <Route path="/products/:id/edit" element={<ProductEdit />} />
            <Route path="/customers" element={<ListCustomers />} />
            <Route path="/add-Customer" element={<CustomerAdd />} />
            <Route path="/customers/:id/edit" element={<CustomerEdit />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
