import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserGraduate, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import BackgroundImage from "../images/background.jpg"; // Use your existing school bg

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gray-100">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BackgroundImage}
          alt="School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/80 to-gray-900/90 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Login Card */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-4xl min-h-[600px] m-4 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        {/* Left Side: Branding (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-1 bg-orange-500/20 p-12 flex-col justify-between text-white border-r border-white/10">
          <div>
            <h2 className="text-4xl font-bold">DoveLift</h2>
            <p className="text-orange-100 mt-2 tracking-widest uppercase text-xs">
              Student & Staff Portal
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-light">
              Welcome <br />
              <span className="font-bold">Back!</span>
            </h3>
            <p className="text-sm text-orange-50/70 leading-relaxed">
              Access your personalized learning dashboard, check grades, and
              stay connected with the DoveLift community.
            </p>
          </div>

          <div className="text-xs text-orange-200/50">
            &copy; {new Date().getFullYear()} DoveLift International Schools
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white/5">
          <div className="mb-10 text-center lg:text-left text-white">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-300 mt-2">Please enter your credentials</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Username/ID Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 ml-1">
                Student / Staff ID
              </label>
              <div className="relative group">
                <FaUserGraduate className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                <input
                  type="text"
                  placeholder="e.g. DL-2024-001"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-gray-200">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  size="sm"
                  className="text-xs text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative group">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-400 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-12 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all shadow-inner"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <label className="flex items-center space-x-3 cursor-pointer group w-fit">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-white/20 bg-white/10 text-orange-500 focus:ring-orange-500/50"
              />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                Keep me logged in
              </span>
            </label>

            {/* Login Button */}
            <button
              onClick={() => navigate("/studentDashboard")}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transform active:scale-[0.98] transition-all duration-200 mt-4"
            >
              Sign In to Portal
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/contact"
              className="text-orange-400 font-semibold hover:underline"
            >
              Contact Admin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
