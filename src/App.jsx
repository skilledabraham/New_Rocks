import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

// Component Imports
import HomePage from "./assets/Components/HomePage";
import AboutPage from "./assets/Components/AboutPage";
import Error404Page from "./assets/Components/Error404Page";
import ContactPage from "./assets/Components/ContactPage";
// import StudentCarousel from "./assets/Components/StudentCarousel";
import LoginPage from "./assets/Components/LoginPage";
import StudentDashboard from "./assets/Components/StudentDashboard";

// Asset Imports
import Logo from "./assets/images/logo.png";
import "./App.css";

const App = () => {
  const whatsappNumber = "09019145380";
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden bg-gray-50 relative font-sans">
      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <FaWhatsapp size={28} />
        <span className="absolute right-16 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-100">
          Chat with Admissions
        </span>
      </a>

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 flex items-center justify-between w-full px-4 md:px-10 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
              src={Logo}
              alt="DoveLift Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-x-2">
          {["Home", "About", "Contact", "Services"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 rounded-lg hover:bg-orange-500/10 hover:text-orange-600 active:scale-95 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Search & Action Buttons */}
        <div className="flex items-center gap-x-3 md:gap-x-6">
          <div className="relative group hidden sm:flex items-center">
            <input
              className="pl-4 pr-10 py-2 w-40 lg:w-64 bg-gray-100 focus:bg-white border border-transparent focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 outline-none rounded-full transition-all duration-300 text-sm"
              type="search"
              placeholder="Search..."
            />
            <button className="absolute right-3 text-gray-400 group-focus-within:text-orange-500 transition-colors">
              <FaSearch size={14} />
            </button>
          </div>

          <Link
            to="/login"
            className="px-5 py-2 text-xs md:text-sm font-bold text-white bg-orange-500 rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-600/40 transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            Portal Login
          </Link>
        </div>
      </header>

      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex-1 w-full relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/studentcarousel" element={<StudentCarousel />} /> */}
          <Route path="/studentDashboard" element={<StudentDashboard />} />
          <Route path="*" element={<Error404Page />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-gray-300 mt-20 w-full relative">
        {/* Glassmorphic Newsletter Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 -translate-y-12">
          <div className="bg-orange-500/95 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/20">
            <div className="text-white text-center md:text-left">
              <h3 className="text-xl md:text-3xl font-bold">
                Join the DoveLift Family
              </h3>
              <p className="text-orange-100 text-sm mt-1">
                Subscribe for admission alerts and school news.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 md:w-72 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-orange-100 outline-none focus:bg-white/40 transition-all text-sm"
              />
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg active:scale-95 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-4">
          {/* Brand Info */}
          <div className="space-y-6 text-center sm:text-left">
            <img
              src={Logo}
              alt="Logo"
              className="h-12 mx-auto sm:mx-0 brightness-0 invert opacity-90"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              Developing world leaders through high-quality curriculum, sports,
              and character building since 1998.
            </p>
            <div className="flex justify-center sm:justify-start gap-3">
              {[
                {
                  Icon: FaWhatsapp,
                  color: "hover:bg-[#25D366]",
                  link: `https://wa.me/${whatsappNumber}`,
                },
                { Icon: FaFacebookF, color: "hover:bg-[#1877F2]", link: "#" },
                { Icon: FaInstagram, color: "hover:bg-[#E4405F]", link: "#" },
                { Icon: FaLinkedinIn, color: "hover:bg-[#0077B5]", link: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm">
              {["Home", "About Us", "Admissions", "Curriculum", "Careers"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="hover:text-orange-500 transition-colors flex items-center gap-2 group justify-center sm:justify-start"
                    >
                      <span className="w-0 h-[1px] bg-orange-500 transition-all duration-300 group-hover:w-3"></span>
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 tracking-wide">
              Student Life
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">
                E-Learning Portal
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Sports & Athletics
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Counseling Center
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                School Bus Service
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-6 tracking-wide">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-start gap-3 justify-center sm:justify-start leading-relaxed">
                <span className="text-orange-500 font-semibold italic">
                  Address:
                </span>
                123 Education Way, <br /> International City
              </p>
              <p className="flex items-center gap-3 justify-center sm:justify-start">
                <span className="text-orange-500 font-semibold italic">
                  Phone:
                </span>
                +1 (234) 567-890
              </p>
              <p className="flex items-center gap-3 justify-center sm:justify-start">
                <span className="text-orange-500 font-semibold italic">
                  Email:
                </span>
                info@dovelift.edu
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest uppercase text-gray-500">
            <p>
              &copy; {currentYear} DoveLift International Schools. Excellence in
              Education.
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
