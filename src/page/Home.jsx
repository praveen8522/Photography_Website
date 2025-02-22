import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../Component/Gallery";
import Services from "../Component/Services";
import Blog from "../Component/Blog";
import ContactUs from "../Component/ContactUs";
import Footer from "../Component/Footer";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

export default function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-black text-white fixed w-full z-50">
        <div className="text-2xl font-bold">KaraiVisual Photography</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {["Home", "Gallery", "Services", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-gray-400 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Sign In Button */}
        <button
          onClick={() => navigate("/signin")}
          className="hidden md:block px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          Sign In
        </button>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-6 py-6 md:hidden">
            {["Home", "Gallery", "Services", "Blog", "Contact"].map((item) => (
              <a key={item} href={`#${item}`} className="text-lg hover:text-gray-400" onClick={toggleMenu}>
                {item}
              </a>
            ))}
            <button
              onClick={() => navigate("/signin")}
              className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Sign In
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center text-white px-6"
        style={{ backgroundImage: `url('https://undsgn.com/wp-content/uploads/2018/07/ny6to4itoey.jpg')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">
            KaraiVisual Photography
          </h1>
          <p className="text-lg mb-8">
            I specialize in fashion, advertorial, and black & white photography.
          </p>
          <button className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition">
            GET STARTED
          </button>
        </div>
      </div>

      {/* Sections */}
      <Gallery />
      <Services />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
}
