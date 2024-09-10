import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home/index";
import About from "./screens/aboutUs/AboutUs";
import Login from "./components/loginPage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
