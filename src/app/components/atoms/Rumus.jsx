import React from "react";

const Rumus = ({ suhuRuangan, suhuAwal, waktu, k }) => {
  return (
    <div>
      <div className="mt-8 text-sm w-full">
        <div className="flex gap-2 items-center justify-center p-4 bg-red-800 rounded-lg border border-red-700">
          <p>Persamaan Differensial Biasa (PDB) : </p>
          <p className="font-mono text-blue-400">
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
