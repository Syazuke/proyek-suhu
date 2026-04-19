import React from "react";

const Konstanta = ({ k, setK }) => {
  return (
    <div>
      <div className="bg-black/30 p-4 rounded-lg border border-transparent hover:border-purple-500/40 transition-all duration-300">
        <label className="block text-sm mb-2 text-gray-300 font-bold tracking-wider">
          KONSTANTA (k):{" "}
          <span className="text-gray-400 font-mono text-sm ml-2">
            {k.toFixed(2)}
          </span>
        </label>
        <input
          type="range"
          min="0.01"
          max="0.2"
          step="0.01"
          value={k}
          onChange={(e) => setK(Number(e.target.value))}
          className="w-full h-1.5 cursor-pointer accent-purple-500 bg-white/10 rounded-sm appearance-none"
        />
      </div>
    </div>
  );
};

export default Konstanta;
