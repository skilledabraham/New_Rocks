import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import React from "react";
import HomePage from "./assets/Components/HomePage";
import AboutPage from "./assets/Components/AboutPage";
import Error404Page from "./assets/Components/Error404Page";
import { FaSearch } from "react-icons/fa";
import Logo from "./assets/images/logo.png";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <header className="flex transition-all duration-300 ease-in-out bg-white ring-inset ring-1 hover:bg-gray-300/50 justify-between w-full gap-x-6 p-1 shadow-md flex-shrink-0">
        <img className="h-10" src={Logo} alt="Logo" />
        <div className="justify-start gap-x-4 flex">
          <Link
            className="bg-white border-2 border-orange-500 duration-500 transition-all ease hover:border-white text-orange-500 hover:bg-orange-500 hover:text-white active:font-bold font-semibold px-3 rounded-md"
            to="/"
          >
            Home
          </Link>
          <Link
            className="bg-white border-2 border-orange-500 transition-all ease duration-500 hover:border-white text-orange-500 hover:bg-orange-500 hover:text-white active:font-bold font-semibold px-3 rounded-md"
            to="/about"
          >
            About
          </Link>
          <Link
            className="bg-white border-2 border-orange-500 transition-all duration-500 ease hover:border-white text-orange-500 hover:bg-orange-500 hover:text-white active:font-bold font-semibold px-3 rounded-md"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="bg-white border-2 transition-all ease duration-500 border-orange-500 hover:border-white text-orange-500 hover:bg-orange-500 hover:text-white active:font-bold font-semibold px-3 rounded-md"
            to="/services"
          >
            Services
          </Link>
        </div>
        <div className="search flex items-center">
          <input
            className="px-3 bg-white transition-all ease outline-none border-none rounded-md py-1 hover:ring-1 hover:ring-orange-400 focus:ring-1 focus:ring-orange-400"
            type="search"
            name="search"
            placeholder="Search Here"
            id="search"
          />
          <button className="bg-orange-400 border-none outline-0 text-white px-3 py-1 rounded-md ml-1">
            <FaSearch />
          </button>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        <Routes>
          <Route path="*" element={<Error404Page />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/services" element={<h1>Services Page</h1>} />
        </Routes>
      </main>
      <footer className="bg-gray-200 py-4 w-full flex-shrink-0 text-center text-amber-600 text-sm">
        &copy; {new Date().getFullYear()} DoveLift International Schools. All
        rights reserved.
      </footer>
    </div>
  );
};

export default App;
