import PriceCard from "./components/PriceCard/PriceCard";

function App() {
  return (
    <div className="flex justify-center w-full py-6 text-white md:h-screen md:items-center bg-slate-800 font-poppins">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

        {/* Item */}
        <PriceCard type='basic' />
        <PriceCard type='standard' />
        <PriceCard type='premium' />
      </div>
    </div>
  );
}

export default App;
