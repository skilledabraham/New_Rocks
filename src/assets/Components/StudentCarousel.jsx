import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const students = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Head Prefect",
    note: "DoveLift hasn't just taught me academics; it has taught me leadership and resilience. I feel ready for the world.",
    image: "https://i.pravatar.cc/150?u=alex",
  },
  {
    id: 2,
    name: "Sarah Amadi",
    role: "Science Club President",
    note: "The laboratories here are world-class. I've been able to explore my passion for chemistry in ways I never imagined.",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Sports Captain",
    note: "Balance is key at DoveLift. I can pursue my athletic dreams while maintaining a top-tier GPA.",
    image: "https://i.pravatar.cc/150?u=david",
  },
  {
    id: 4,
    name: "Amina Yusuf",
    role: "Arts Secretary",
    note: "The creative freedom we are given here is incredible. My portfolio has grown immensely over the last two years.",
    image: "https://i.pravatar.cc/150?u=amina",
  },
];

const StudentCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500); // Changes every 3.5 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === students.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? students.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm">
            Voices of DoveLift
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">
            Our Shining Stars
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center h-[500px]">
          {/* Navigation Controls */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-20 z-30 pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-orange-600 hover:text-white transition-all pointer-events-auto active:scale-90"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-orange-600 hover:text-white transition-all pointer-events-auto active:scale-90"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Cards Wrapper */}
          <div className="relative w-full flex items-center justify-center">
            {students.map((student, index) => {
              const isActive = index === activeIndex;
              const isPrev =
                index ===
                (activeIndex === 0 ? students.length - 1 : activeIndex - 1);
              const isNext =
                index ===
                (activeIndex === students.length - 1 ? 0 : activeIndex + 1);

              return (
                <div
                  key={student.id}
                  className={`absolute transition-all duration-700 ease-in-out transform flex flex-col items-center 
                    ${isActive ? "z-20 scale-110 opacity-100 blur-0" : "z-10 scale-75 opacity-40 blur-sm pointer-events-none"}
                    ${isPrev ? "-translate-x-[70%] md:-translate-x-[120%]" : ""}
                    ${isNext ? "translate-x-[70%] md:translate-x-[120%]" : ""}
                    ${!isActive && !isPrev && !isNext ? "opacity-0 scale-50" : ""}
                  `}
                >
                  {/* Card Content */}
                  <div
                    className={`w-[300px] md:w-[450px] bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 text-center relative`}
                  >
                    <FaQuoteLeft className="absolute top-8 left-8 text-orange-100 text-6xl -z-0" />

                    <div className="relative z-10">
                      <div className="w-24 h-24 mx-auto mb-6 p-1 bg-gradient-to-tr from-orange-500 to-amber-300 rounded-full">
                        <img
                          src={student.image}
                          alt={student.name}
                          className="w-full h-full object-cover rounded-full border-4 border-white"
                        />
                      </div>

                      <p className="text-gray-600 italic text-lg leading-relaxed mb-8">
                        "{student.note}"
                      </p>

                      <h4 className="text-xl font-bold text-gray-900">
                        {student.name}
                      </h4>
                      <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
                        {student.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {students.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i ? "w-12 bg-orange-600" : "w-2 bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentCarousel;
