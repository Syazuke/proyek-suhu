import React from "react";

const SuhuRuangan = ({ suhuRuangan, getAmbientColor, setSuhuRuangan }) => {
  return (
    <div>
      <div className="bg-black/30 p-4 rounded-lg border border-transparent hover:border-purple-500/40 transition-all duration-300">
        <label className="block text-sm mb-2 text-gray-300 font-bold tracking-wider">
          SUHU RUANGAN:{" "}
          <span className="text-gray-400 font-mono text-sm ml-2">
            {suhuRuangan}°C
          </span>
          <div style={{ backgroundColor: getAmbientColor(suhuRuangan) }}></div>
        </label>
        <input
          type="range"
          style={{ accentColor: getAmbientColor(suhuRuangan) }}
          min="15"
          max="35"
          value={suhuRuangan}
          onChange={(e) => setSuhuRuangan(Number(e.target.value))}
          className="w-full h-1.5 cursor-pointer accent-green-500 bg-white/10 rounded-sm appearance-none"
        />
      </div>
    </div>
  );
};

export default SuhuRuangan;
