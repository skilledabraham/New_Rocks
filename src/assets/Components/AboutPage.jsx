import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaGraduationCap,
  FaGlobe,
  FaUsers,
  FaAward,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";
import BackgroundImage from "../images/background.jpg";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 lg:py-32 bg-gray-900 text-white px-6">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050335392-93851179ae22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Nurturing <span className="text-orange-500">Global</span> Leaders
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Since 1998, DoveLift International Schools has been at the forefront
            of academic excellence, blending traditional values with
            21st-century innovation.
          </p>
        </div>
      </section>

      {/* --- OUR MISSION & VISION (Split Layout) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold tracking-widest uppercase">
              The DoveLift Legacy
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              A commitment to excellence that spans decades.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe that every child is a unique star waiting to shine. Our
              curriculum is designed to challenge the mind while nurturing the
              soul, ensuring our students graduate not just with certificates,
              but with character.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-orange-500">
                <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-500">
                  To provide a stimulating learning environment that empowers
                  students to reach their full potential.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-500">
                  To be a global benchmark for quality education and holistic
                  child development.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={BackgroundImage}
                alt="Students studying"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block animate-bounce-slow">
              <p className="text-4xl font-black text-orange-600">25+</p>
              <p className="text-gray-500 font-medium text-sm">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES (Interactive Grid) --- */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Our Core Pillars
            </h2>
            <p className="text-gray-500 mt-4">
              The values that define every DoveLift student.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaAward />,
                title: "Excellence",
                desc: "We strive for the highest standards in everything we do.",
                color: "orange",
              },
              {
                icon: <FaHeart />,
                title: "Integrity",
                desc: "Honesty and strong moral principles are at our core.",
                color: "red",
              },
              {
                icon: <FaGlobe />,
                title: "Diversity",
                desc: "Celebrating different cultures in an interconnected world.",
                color: "blue",
              },
              {
                icon: <FaLightbulb />,
                title: "Innovation",
                desc: "Encouraging creative thinking and new perspectives.",
                color: "amber",
              },
              {
                icon: <FaUsers />,
                title: "Community",
                desc: "Building strong bonds between students, staff, and parents.",
                color: "green",
              },
              {
                icon: <FaGraduationCap />,
                title: "Leadership",
                desc: "Empowering students to take charge of their future.",
                color: "indigo",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-colors duration-300 bg-${value.color}-50 text-${value.color}-600 group-hover:bg-orange-600 group-hover:text-white`}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-orange-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to join our community?
            </h2>
            <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">
              Applications for the 2026/2027 academic session are now open.
              Schedule a campus tour today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                Book a Tour
              </button>
              <button
                onClick={() => navigate("/login")} // Use the arrow function correctly
                className="bg-orange-700 text-white font-bold px-10 py-4 rounded-full hover:bg-orange-800 transition-colors border border-orange-500"
              >
                Apply Online
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
