import React from "react";

const Konstanta = ({ k, setK }) => {
  const limit = {
    min: 0.01,
    max: 0.2,
  };
  return (
    <div>
      <div className="bg-black/30 p-2 rounded-lg border border-transparent hover:border-purple-500/40 transition-all duration-300">
        <div className="flex justify-between">
          <label className="text-sm tracking-wider">KONSTANTA (K): </label>
          <p className="font-bold text-md">{k.toFixed(2)}</p>
        </div>
        <input
          type="range"
          min={limit.min}
          max={limit.max}
          step="0.01"
          value={k}
          onChange={(e) => setK(Number(e.target.value))}
          className="w-full h-1.5 cursor-pointer accent-purple-500 bg-white/10 rounded-sm appearance-none"
        />
        <div className="flex justify-between opacity-70 text-xs py-1">
          <p>{limit.min}</p>
          <p>{limit.max}</p>
        </div>
      </div>
    </div>
  );
};

export default Konstanta;
