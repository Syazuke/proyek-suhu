"use client";
import { useState, useEffect } from "react";

export default function RumusPage() {
  const [time, setTime] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(0);

  const initialTemp = 80; // T0: suhu awal
  const ambientTemp = 30; // T_env: suhu lingkungan
  const k = 0.1; // k: konstanta pendinginan

  const calculateTemp = (t) => {
    return ambientTemp + (initialTemp - ambientTemp) * Math.exp(-k * t);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCurrentTemp(calculateTemp(time));
  }, [time]);

  const tempPercentage = Math.max(
    0,
    ((currentTemp - ambientTemp) / (initialTemp - ambientTemp)) * 100,
  );

  const barColor =
    currentTemp > 60
      ? "bg-red-500"
      : currentTemp > 40
        ? "bg-yellow-400"
        : "bg-blue-400";

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center py-10 px-4 pt-20 text-white">
      {/* --- VIDEO BACKGROUND --- */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/background_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gelap (Opsional, agar teks lebih terbaca jika video terlalu terang) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

      {/* --- KONTEN UTAMA --- */}
      <div className="relative z-10 max-w-2xl w-full bg-neutral-950/80 backdrop-blur-sm shadow-2xl rounded-xl p-8 border border-neutral-800">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Simulasi Pendinginan Perangkat
        </h1>

        <div className="mb-8 p-6 bg-neutral-900/90 rounded-lg shadow-inner">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-neutral-300">
              Waktu: {time} detik
            </span>
            <span className="font-bold text-2xl text-white">
              {currentTemp.toFixed(2)} °C
            </span>
          </div>

          <div className="w-full bg-neutral-800 rounded-full h-6 overflow-hidden border border-neutral-700">
            <div
              className={`h-full transition-all duration-1000 ease-linear ${barColor}`}
              style={{ width: `${tempPercentage}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-sm mt-2 text-neutral-400 font-medium">
            <span>Mendekati Lingkungan ({ambientTemp}°C)</span>
            <span>Awal ({initialTemp}°C)</span>
          </div>
        </div>

        <div className="bg-neutral-900/90 border-l-4 border-neutral-700 p-6 rounded-r-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-300">
            Model Matematika
          </h2>

          <div className="mb-4">
            <h3 className="font-semibold text-neutral-300">
              Solusi Persamaan:
            </h3>
            <div className="bg-neutral-800 p-3 rounded mt-2 text-center shadow-md font-mono text-lg text-white">
              T(t) = T<sub>env</sub> + (T<sub>0</sub> - T<sub>env</sub>)
              &middot; e<sup>-kt</sup>
            </div>
          </div>

          <div className="mt-6 text-sm text-neutral-300">
            <p className="font-semibold mb-2">Keterangan (Nilai Saat Ini):</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>T(t)</strong>: Suhu pada waktu t
                <span className="text-blue-400 font-semibold">
                  {" "}
                  ({currentTemp.toFixed(2)} °C)
                </span>
              </li>
              <li>
                <strong>
                  T<sub>env</sub>
                </strong>
                : Suhu ruangan
                <span className="text-blue-400 font-semibold">
                  {" "}
                  ({ambientTemp} °C)
                </span>
              </li>
              <li>
                <strong>
                  T<sub>0</sub>
                </strong>
                : Suhu awal
                <span className="text-blue-400 font-semibold">
                  {" "}
                  ({initialTemp} °C)
                </span>
              </li>
              <li>
                <strong>k</strong>: Konstanta pendinginan
                <span className="text-blue-400 font-semibold"> ({k})</span>
              </li>
              <li>
                <strong>t</strong>: Waktu berjalan
                <span className="text-blue-400 font-semibold">
                  {" "}
                  ({time} detik)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
