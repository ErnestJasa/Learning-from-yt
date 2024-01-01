import FAQ from "./compontents/FAQ";

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-900">
      <div className="p-4">
        <FAQ />
        <h1 className="text-white">This text is below accordion menu</h1>
      </div>
    </div>
  );
}

export default App;
