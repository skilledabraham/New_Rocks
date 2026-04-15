import React from "react";
import { 
  FaBookOpen, FaGraduationCap, FaCalendarAlt, 
  FaBell, FaCheckCircle, FaClock, FaArrowRight,
  FaFileInvoiceDollar, FaChartLine
} from "react-icons/fa";

const StudentDashboard = () => {
  // Mock Data
  const courses = [
    { name: "Advanced Mathematics", progress: 75, color: "bg-blue-500", teacher: "Dr. Arinze" },
    { name: "Physics & Mechanics", progress: 40, color: "bg-orange-500", teacher: "Mrs. Thompson" },
    { name: "English Literature", progress: 90, color: "bg-green-500", teacher: "Mr. David" },
  ];

  const deadlines = [
    { task: "Lab Report: Kinetics", date: "Today, 4pm", priority: "High" },
    { task: "Literature Essay", date: "Tomorrow", priority: "Medium" },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col lg:flex-row">
      
      {/* --- SIDEBAR NAVIGATION --- */}
      <aside className="w-full lg:w-64 bg-white border-r border-gray-200 p-6 flex flex-col gap-8">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-orange-200">
            D
          </div>
          <span className="font-bold text-xl text-gray-800 tracking-tight">DoveLift</span>
        </div>

        <nav className="flex flex-col gap-2">
          {[
            { icon: <FaChartLine />, label: "Overview", active: true },
            { icon: <FaBookOpen />, label: "My Courses", active: false },
            { icon: <FaCalendarAlt />, label: "Schedule", active: false },
            { icon: <FaFileInvoiceDollar />, label: "Finance & Fees", active: false },
            { icon: <FaGraduationCap />, label: "Examinations", active: false },
          ].map((item, i) => (
            <button key={i} className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-semibold ${item.active ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' : 'text-gray-500 hover:bg-orange-50 hover:text-orange-600'}`}>
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto bg-gray-900 rounded-2xl p-4 text-white">
          <p className="text-xs text-gray-400">Need Help?</p>
          <p className="text-sm font-bold mt-1">Contact Support</p>
          <button className="mt-3 w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs transition-colors">Open Ticket</button>
        </div>
      </aside>

      {/* --- MAIN CONTENT CANVAS --- */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back, Alex! 👋</h1>
            <p className="text-gray-500 mt-1">Here is what's happening with your studies today.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-3 bg-white border border-gray-200 rounded-full text-gray-400 hover:text-orange-600 transition-colors shadow-sm">
              <FaBell size={20} />
              <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 bg-white p-1.5 pr-4 border border-gray-200 rounded-full shadow-sm">
              <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=EA580C&color=fff" className="w-10 h-10 rounded-full" alt="User" />
              <div className="hidden sm:block">
                <p className="text-xs font-bold text-gray-900 leading-tight">Alex Johnson</p>
                <p className="text-[10px] text-gray-500">Grade 12 - Science</p>
              </div>
            </div>
          </div>
        </header>

        {/* --- DASHBOARD GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Progress & Courses */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-xl"><FaCheckCircle /></div>
                <div><p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Attendance</p><p className="text-xl font-bold">98%</p></div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-xl"><FaBookOpen /></div>
                <div><p className="text-gray-400 text-xs font-bold uppercase tracking-wider">GPA</p><p className="text-xl font-bold">3.85</p></div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-xl"><FaClock /></div>
                <div><p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Credits</p><p className="text-xl font-bold">24/30</p></div>
              </div>
            </div>

            {/* Courses Progress */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">My Courses</h3>
                <button className="text-orange-600 text-sm font-bold flex items-center gap-2 hover:underline">View All <FaArrowRight size={12}/></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-gray-800">{course.name}</h4>
                        <p className="text-xs text-gray-400 mt-1">{course.teacher}</p>
                      </div>
                      <span className="text-xs font-bold py-1 px-2 bg-gray-100 rounded-md">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${course.color} transition-all duration-1000`} style={{ width: `${course.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Deadlines & Activity */}
          <div className="space-y-8">
            <section className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaClock className="text-orange-500" /> Upcoming
              </h3>
              <div className="space-y-6">
                {deadlines.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className={`mt-1 w-2 h-2 rounded-full ${item.priority === 'High' ? 'bg-red-500 animate-pulse' : 'bg-orange-400'}`}></div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{item.task}</p>
                      <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-2xl text-sm font-bold transition-colors">
                Open Calendar
              </button>
            </section>

            {/* Announcement Card - Glassmorphism */}
            <section className="bg-orange-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-orange-200 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-2">School Sports Day!</h4>
                <p className="text-orange-100 text-xs leading-relaxed opacity-80">
                  Don't forget to register for the inter-house sports events by Friday.
                </p>
                <button className="mt-4 px-6 py-2 bg-white text-orange-600 rounded-full text-xs font-bold hover:scale-105 transition-transform">
                  Register Now
                </button>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;