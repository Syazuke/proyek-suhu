"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const getTempColor = (temp) => {
  const ratio = Math.max(0, Math.min(1, (temp - 25) / 75));
  if (ratio > 0.2) {
    const r = 255;
    const g = Math.round(50 * (1 - ratio));
    const b = Math.round(50 * Math.pow(1 - ratio, 2));
    return `rgb(${r}, ${g}, ${b})`;
  }
  return `rgb(50, 50, 255)`;
};

const getAmbientColor = (temp) => {
  const min = 15;
  const max = 35;
  const ratio = Math.max(0, Math.min(1, (temp - min) / (max - min)));
  const red = Math.floor(255 * ratio);
  const green = 200;
  const blue = 50;
  return `rgb(${red}, ${green}, ${blue})`;
};

export default function RumusPage() {
  const [time, setTime] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [initialTemp, setInitialTemp] = useState(80);
  const [ambientTemp, setAmbientTemp] = useState(30);
  const [k, setK] = useState(0.1);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const calculateTemp = (t) => {
    return ambientTemp + (initialTemp - ambientTemp) * Math.exp(-k * t);
  };

  useEffect(() => {
    setCurrentTemp(calculateTemp(time));
  }, [time, initialTemp, ambientTemp, k]);

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

      <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-1 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

      {/* --- KONTEN UTAMA --- */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 max-w-6xl w-full px-4 items-start">
        <motion.aside
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3 flex flex-col gap-6 bg-neutral-950/40 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl"
        >
          <h2 className="text-xl font-bold text-blue-400 mb-2 px-2">
            Kontrol Suhu
          </h2>

          {/* Input Suhu Awal */}
          <div className="bg-black/30 p-4 rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all duration-300">
            <div className="bg-black/30 p-4 rounded-lg border border-white/5">
              <label className="block text-xs mb-2 text-blue-100 font-bold tracking-wider">
                SUHU AWAL (T0):{" "}
                <span
                  className="font-mono text-sm transition-colors duration-300"
                  style={{ color: getTempColor(initialTemp) }}
                >
                  {initialTemp}°C
                </span>
              </label>
              <input
                type="range"
                style={{ accentColor: getTempColor(initialTemp) }}
                min="40"
                max="100"
                value={initialTemp}
                onChange={(e) => {
                  setInitialTemp(Number(e.target.value));
                  setTime(0);
                }}
                className="w-full h-1.5 cursor-pointer bg-white/10 rounded-sm appearance-none"
              />
            </div>
          </div>

          {/* Input Suhu Ruangan */}
          <div className="bg-black/30 p-4 rounded-2xl border border-white/5 hover:border-green-500/40 transition-all duration-300">
            <div className="bg-black/30 p-4 rounded-lg border border-white/5">
              <label className="block text-xs mb-2 text-blue-100 font-bold tracking-wider">
                SUHU RUANGAN:{" "}
                <span
                  className="font-mono text-sm"
                  style={{ color: getAmbientColor(ambientTemp) }}
                >
                  {ambientTemp}°C
                </span>
              </label>
              <input
                type="range"
                style={{ accentColor: getAmbientColor(ambientTemp) }}
                min="15"
                max="35"
                value={ambientTemp}
                onChange={(e) => {
                  setAmbientTemp(Number(e.target.value));
                  setTime(0);
                }}
                className="w-full h-1.5 cursor-pointer bg-white/10 rounded-sm appearance-none"
              />
            </div>
          </div>

          {/* Input Konstanta */}
          <div className="bg-black/30 p-4 rounded-2xl border border-white/5 hover:border-purple-500/40 transition-all duration-300">
            <div className="bg-black/30 p-4 rounded-lg border border-white/5">
              <label className="block text-xs mb-2 text-blue-100 font-bold tracking-wider">
                KONSTANTA (k):{" "}
                <span className="font-mono text-sm">{k.toFixed(2)}</span>
              </label>
              <input
                type="range"
                className="w-full h-1.5 cursor-pointer accent-purple-600 bg-white/10 rounded-sm appearance-none"
                min="0.01"
                max="0.3"
                step="0.01"
                value={k}
                onChange={(e) => {
                  setK(Number(e.target.value));
                  setTime(0);
                }}
              />
            </div>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`w-full py-3 rounded-2xl font-bold transition-all duration-300 border ${
              isPlaying
                ? "bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/40"
                : "bg-green-500/20 border-green-500/50 text-green-400 hover:bg-green-500/40"
            }`}
          >
            {isPlaying ? "PAUSE SIMULASI" : "RESUME SIMULASI"}
          </button>

          <button
            onClick={() => {
              setTime(0);
              setIsPlaying(false);
            }}
            className="w-full py-2 rounded-2xl font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all mt-2"
          >
            RESET WAKTU
          </button>
        </motion.aside>

        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/3 flex flex-col gap-6"
        >
          <div className="bg-neutral-950/40 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/10">
            <h1 className="text-3xl font-bold mb-8 text-center text-blue-400">
              Simulasi Pendinginan Perangkat
            </h1>

            <div className="mb-8 p-6 bg-neutral-900/90 rounded-lg shadow-inner">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-neutral-300">
                  Waktu: {time} menit
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
                <p className="font-semibold mb-2">
                  Keterangan (Nilai Saat Ini):
                </p>
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
                      ({time} menit)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  );
}
