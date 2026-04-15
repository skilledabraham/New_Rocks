import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* --- HERO SECTION --- */}
      <section className="bg-orange-600 py-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Get In Touch
        </h1>
        <p className="text-orange-100 max-w-2xl mx-auto text-lg">
          Have questions about admissions, curriculum, or life at DoveLift? Our
          team is here to help you every step of the way.
        </p>
      </section>

      {/* --- INFO CARDS --- */}
      <section className="max-w-7xl mx-auto w-full px-6 -mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
        {[
          {
            icon: <FaPhoneAlt />,
            title: "Call Us",
            detail: "+1 (234) 567-890",
            sub: "Mon-Fri, 8am - 4pm",
          },
          {
            icon: <FaEnvelope />,
            title: "Email Us",
            detail: "admissions@dovelift.edu",
            sub: "24/7 Support",
          },
          {
            icon: <FaMapMarkerAlt />,
            title: "Visit Us",
            detail: "123 Education Way",
            sub: "International City, IC",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <h3 className="font-bold text-gray-800 text-xl">{item.title}</h3>
            <p className="text-orange-600 font-semibold my-1">{item.detail}</p>
            <p className="text-gray-400 text-sm">{item.sub}</p>
          </div>
        ))}
      </section>

      {/* --- FORM & MAP SECTION --- */}
      <section className="max-w-7xl mx-auto w-full px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Send a Message
          </h2>
          <p className="text-gray-500 mb-8">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Subject
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all appearance-none">
                <option>General Inquiry</option>
                <option>Admission Process</option>
                <option>Employment Opportunities</option>
                <option>Student Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-600/30 hover:bg-orange-700 hover:shadow-orange-700/40 transform active:scale-95 transition-all flex items-center justify-center gap-2">
              <FaPaperPlane size={16} />
              Send Message
            </button>
          </form>
        </div>

        {/* FAQ & Map Area */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Frequently Asked
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "When is the next admission cycle?",
                  a: "Admissions for the 2026/2027 session open in September.",
                },
                {
                  q: "Do you offer boarding facilities?",
                  a: "Yes, we have world-class boarding for secondary students.",
                },
                {
                  q: "Is there a school bus service?",
                  a: "We provide safe transportation across the metropolitan area.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-500"
                >
                  <h4 className="font-bold text-gray-800">{faq.q}</h4>
                  <p className="text-gray-600 text-sm mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Map Placeholder */}
          <div className="h-64 bg-gray-200 rounded-3xl relative overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=14&size=600x300&maptype=roadmap')] bg-cover opacity-60"></div>
            <div className="relative z-10 bg-white px-6 py-3 rounded-full shadow-xl font-bold text-orange-600 group-hover:scale-110 transition-transform cursor-pointer">
              Open in Google Maps
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
