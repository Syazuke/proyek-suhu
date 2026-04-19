import React from "react";

const SuhuRuangan = ({ suhuRuangan, getAmbientColor, setSuhuRuangan }) => {
  const limit = {
    min: 15,
    max: 35,
  };
  return (
    <div className="bg-black/30 p-2 rounded-lg border border-transparent hover:border-purple-500/40 transition-all duration-300">
      <div className="flex justify-between items-center">
        <label className="text-sm tracking-wider">SUHU RUANGAN:</label>
        <span className="text-md font-semibold">{suhuRuangan}°C</span>
      </div>
      <div style={{ backgroundColor: getAmbientColor(suhuRuangan) }}></div>
      <input
        type="range"
        style={{ accentColor: getAmbientColor(suhuRuangan) }}
        min={limit.min}
        max={limit.max}
        value={suhuRuangan}
        onChange={(e) => setSuhuRuangan(Number(e.target.value))}
        className="w-full h-1.5 cursor-pointer accent-green-500 bg-white/10 rounded-sm appearance-none"
      />
      <div className="flex justify-between items-center text-xs py-1 opacity-70">
        <p>{limit.min}°C</p>
        <p>{limit.max}°C</p>
      </div>
    </div>
  );
};

export default SuhuRuangan;
