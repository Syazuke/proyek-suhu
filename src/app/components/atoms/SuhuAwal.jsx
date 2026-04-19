import React from "react";

const SuhuAwal = ({ suhuAwal, getTempColor, setSuhuAwal }) => {
  const limit = {
    min: 40,
    max: 100,
  };
  return (
    <div className="bg-black/30 p-2 rounded-lg border border-transparent hover:border-purple-500/40 transition-all duration-300">
      <div className="flex justify-between items-center">
        <label className="text-sm tracking-wider">SUHU AWAL (T0):</label>
        <span className="text-md font-semibold transition-colors duration-300">
          {suhuAwal}°C
        </span>
      </div>
      <div style={{ backgroundColor: getTempColor(suhuAwal) }}></div>
      <input
        type="range"
        style={{ accentColor: getTempColor(suhuAwal) }}
        min={limit.min}
        max={limit.max}
        value={suhuAwal}
        onChange={(e) => setSuhuAwal(Number(e.target.value))}
        className="w-full h-1.5 cursor-pointer accent-blue-500 bg-white/10 rounded-sm appearance-none"
      />
      <div className="flex justify-between items-center opacity-70 text-xs py-1">
        <p>{limit.min}°C</p>
        <p>{limit.max}°C</p>
      </div>
    </div>
  );
};

export default SuhuAwal;
