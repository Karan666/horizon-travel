import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/home.jsx";
import Hotels from "./pages/hotels.jsx";
import Favorites from "./pages/favorites.jsx";
import Blogs from "./pages/blogs.jsx";
import AboutUs from "./pages/aboutus.jsx";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}
