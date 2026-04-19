import React from "react";

const Rumus = ({ suhuRuangan, suhuAwal, waktu, k }) => {
  return (
    <div>
      <div className="mt-8 text-gray-400 text-sm text-center w-full max-w-4xl">
        <div className="mt-4 p-4 bg-red-800 rounded-lg border border-red-700 inline-block">
          <p className="font-mono text-blue-300">
            T({waktu.toFixed(1)}) = {suhuRuangan} + ({suhuAwal} - {suhuRuangan})
            * e^
            <sup className="text-xs">
              (-{k} * {waktu.toFixed(1)})
            </sup>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rumus;
