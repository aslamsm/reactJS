import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";
import Instructors from "./pages/Instructors";
import FeedBack from "./pages/FeedBack";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg m-1 p-1 bg-dark">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn btn-primary m-1" : "btn btn-outline-secondary m-1"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive ? "btn btn-primary m-1" : "btn btn-outline-secondary m-1"
          }
        >
          Instructors
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? "btn btn-primary m-1" : "btn btn-outline-secondary m-1"
          }
        >
          Courses
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            isActive ? "btn btn-primary m-1" : "btn btn-outline-secondary m-1"
          }
        >
          Feedback
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/feedback" element={<FeedBack />} />
        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
