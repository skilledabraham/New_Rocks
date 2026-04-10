import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-8">
      <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-md w-full text-center transform hover:scale-105 transition-all duration-300">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Hello World
        </h1>
        <p className="text-xl text-gray-700 font-semibold">
          Tailwind CSS is working perfectly!
        </p>
        <div className="mt-8 space-y-3">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
            Click Me
          </button>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
            Action
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
