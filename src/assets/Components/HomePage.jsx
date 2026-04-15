import React from "react";
import BackgroundImage from "../images/background.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-1 h-full w-full flex flex-col lg:flex-row md:flex-col md:overflow-scroll overflow-hidden">
      <div className="flex-1">
        <img
          className="w-full ring-inset ring-orange-500/70 h-full object-cover"
          src={BackgroundImage}
          alt="School Image"
        />
      </div>
      <div className="flex-1 bg-orange-600 flex flex-col items-center justify-center text-center p-4 lg:p-8 lg:p-12 text-white">
        <h1 className="font-bold flex flex-col text-4xl sm:text-5xl lg:text-6xl leading-none">
          DoveLift
          <span>International</span>
          <span>Schools</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl/8 text-gray-200">
          Empowering Minds, Shaping Futures: Excellence in Education at DoveLift
          International Schools.
        </p>
        <div className="flex w-full justify-center">
          <Link to="/about">
            <button className="mt-8 mx-6 bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:shadow-md hover:shadow-white hover:ring-2 hover:text-white hover:bg-orange-500 hover:ring-white  bg-gray-200/7 transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </Link>
          <Link to="/">
            <button
              id="register"
              className="mt-4 mx-6 bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-orange-600 transition-all duration-300 ease-in-out"
            >
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
