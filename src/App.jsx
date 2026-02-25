import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import Home from "./pages/Home.jsx";
import Packages from "./pages/Packages.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import TravelFX from "./components/TravelFX.jsx";

export default function App() {
  return (
    <>
      <Header />

      <main className="appMain">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}