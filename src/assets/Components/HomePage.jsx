import React from "react";
import BackgroundImage from "../images/background.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-1 h-full w-full flex flex-col lg:flex-row relative overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 lg:relative lg:flex-1 h-full w-full">
        <img
          className="w-full h-full object-cover ring-inset ring-orange-500/70"
          src={BackgroundImage}
          alt="School Background"
        />
        {/* Mobile Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20 lg:hidden"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center p-6 lg:p-8 z-10 
                      lg:bg-orange-600 
                      bg-white/30 backdrop-blur-md border border-white/20 
                      m-4 rounded-2xl lg:m-0 lg:rounded-none lg:border-none shadow-2xl lg:shadow-none">
        
        <h1 className="font-bold flex flex-col text-4xl sm:text-5xl lg:text-6xl leading-none text-white">
          DoveLift
          <span>International</span>
          <span>Schools</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl/8 text-gray-100 lg:text-gray-200 max-w-md">
          Empowering Minds, Shaping Futures: Excellence in Education at DoveLift
          International Schools.
        </p>

        <div className="flex flex-col sm:flex-row w-full justify-center gap-4 mt-8">
          <Link to="/about">
            <button className="w-full sm:w-auto bg-white text-orange-600 font-semibold px-8 py-3 rounded-md hover:shadow-md hover:shadow-white hover:ring-2 hover:text-white hover:bg-orange-500 hover:ring-white transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </Link>
          <Link to="/">
            <button
              id="register"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-orange-600 transition-all duration-300 ease-in-out"
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