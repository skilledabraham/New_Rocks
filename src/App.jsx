import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import React from "react";
import HomePage from "./assets/Components/HomePage";
import Error404Page from "./assets/Components/Error404Page";
import { FaSearch } from "react-icons/fa";

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-full  gap-x-6 p-4 bg-white shadow-md">
        <img src="" alt={"Logo"} />
        <div className="justify-start gap-x-4 flex">
          <Link
            className="bg-white border-2 border-orange-500 duration-500 transition-all ease hover:border-white  text-orange-500 hover:bg-orange-500 hover:text-white active:font-bold font-semibold px-3  rounded-md"
            to="/"
          >
            Home
          </Link>
          <Link
            className="bg-white border-2 border-orange-500 transition-all ease duration-500 hover:border-white  text-orange-500 hover:bg-orange-500 hover:text-white active:font-bold font-semibold px-3  rounded-md"
            to="/about"
          >
            About
          </Link>
          <Link
            className="bg-white border-2 border-orange-500 transition-all duration-500 ease hover:border-white   text-orange-500 hover:bg-orange-500 hover:text-white active:font-bold font-semibold px-3  rounded-md"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="bg-white border-2   transition-all ease duration-500 border-orange-500 hover:border-white  text-orange-500 hover:bg-orange-500 hover:text-white active:font-bold font-semibold px-3  rounded-md"
            to="/services"
          >
            Services
          </Link>
        </div>
        <div className="search">
          <input
            className="px-3 bg-white  transition-all ease outline-none border-none1 rounded-md py-1 hover:ring-1 hover:ring-orange-400 focus:ring-1 focus:ring-orange-400"
            type="search"
            name="search"
            placeholder="Search Here"
            id="search"
          />
          <button className="bg-orange-400 border-none1 outline-0 text-white px-3 py-1 rounded-md">
            <FaSearch />
          </button>
        </div>
      </div>
      <Routes className="content" flex-grow>
        <Route path="*" element={<Error404Page />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
      </Routes>
      <footer className="fixed bg-gray-200 py-4 mt-8 bottom-0 w-full ">
        <p className="text-center text-amber-600 text-md">
          &copy; {new Date().getFullYear()} DoveLift International Schools. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
