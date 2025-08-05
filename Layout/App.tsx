import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Layout/Home";
import About from "./components/Layout/About";
import Contact from "./components/Layout/Contact";
import CourseList from "./components/CourseList";
import UserList from "./components/UserApi/UserList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
