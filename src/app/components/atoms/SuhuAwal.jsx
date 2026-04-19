import React from "react";

const SuhuAwal = ({ suhuAwal, getTempColor, setSuhuAwal }) => {
  return (
    <div>
      <div className="bg-black/30 p-4 rounded-lg border border-transparent hover:border-purple-500/40 transition-all duration-300">
        <label className="block text-sm mb-2 text-blue-100 font-bold tracking-wider">
          SUHU AWAL (T0):{" "}
          <span className="font-mono text-sm transition-colors duration-300 ml-2">
            {suhuAwal}°C
          </span>
          <div style={{ backgroundColor: getTempColor(suhuAwal) }}></div>
        </label>
        <input
          type="range"
          style={{ accentColor: getTempColor(suhuAwal) }}
          min="40"
          max="100"
          value={suhuAwal}
          onChange={(e) => setSuhuAwal(Number(e.target.value))}
          className="w-full h-1.5 cursor-pointer accent-blue-500 bg-white/10 rounded-sm appearance-none"
        />
      </div>
    </div>
  );
};

export default SuhuAwal;
