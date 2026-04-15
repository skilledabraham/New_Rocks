import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaQuestionCircle, FaArrowLeft } from "react-icons/fa";

const Error404Page = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-24 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      {/* Large "404" Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[30rem] font-black text-white">404</h1>
      </div>

      <div className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl">
        
        {/* Animated Icon Container */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-3xl mb-8 animate-bounce">
          <FaQuestionCircle className="text-orange-500 text-4xl" />
        </div>

        <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">
          Error Code: 404
        </p>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Lost in the <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
            Hallway?
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you are looking for has either graduated, moved to a new campus, or never existed in our curriculum.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-orange-600/20 active:scale-95"
          >
            <FaHome />
            Back to Campus
          </Link>
          
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold px-8 py-4 rounded-2xl transition-all duration-300 active:scale-95"
          >
            Report an Issue
          </Link>
        </div>

        {/* Back Link */}
        <button 
          onClick={() => window.history.back()}
          className="mt-12 text-gray-500 hover:text-orange-400 text-sm font-medium flex items-center justify-center gap-2 transition-colors mx-auto"
        >
          <FaArrowLeft size={12} />
          Go back to previous page
        </button>
      </div>
    </div>
  );
};

export default Error404Page;