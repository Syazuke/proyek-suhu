import React from "react";

const Visual = ({ suhu, getTempColor, getVisualStyles, waktu }) => {
  return (
    <div>
      <div
        className="w-full md:w-44 h-auto rounded-3xl border transition-all duration-300 flex flex-col items-center justify-start shrink-0 shadow-[0_8px_40px_-5px_rgb(0,0,0,0.6)] relative overflow-hidden p-6 md:p-8"
        style={getVisualStyles(suhu, "20")}
      >
        <div className="absolute inset-0 bg-linear-to-b from-white/10 to-black/30 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-[10px] font-mono uppercase text-white tracking-widest mb-5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            Suhu CPU
          </span>

          <div className="relative mb-6">
            <span
              className="font-sans font-extrabold text-4xl md:text-5xl text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
              style={{ color: getTempColor(suhu) }}
            >
              {suhu.toFixed(1)}°C
            </span>
          </div>

          <span className="text-sm mt-3 font-mono text-white/95 bg-white/5 px-5 py-2 rounded-full border border-white/10 shadow-inner">
            t = {waktu.toFixed(1)}s
          </span>
        </div>
      </div>
    </div>
  );
};

export default Visual;
