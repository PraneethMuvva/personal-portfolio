import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <img
        src="/Logo_Transparent_Full_Crop.svg"
        alt="Logo"
        className="max-w-xs mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Under Progress</h1>
      <p className="text-lg text-gray-600">
        Contact:{" "}
        <a href="mailto:praneeth.muvva@duke.edu" className="text-indigo-500 hover:underline">
          praneeth.muvva@duke.edu
        </a>
      </p>
    </div>
  )
}

export default App
