"use client";

import React, { useState, useEffect, useMemo } from "react";
// 1. Tambahkan ReferenceDot di dalam import
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from "recharts";

const CoolingSimulator = () => {
  const [initialTemp, setInitialTemp] = useState(80);
  const [ambientTemp, setAmbientTemp] = useState(25);
  const [k, setK] = useState(0.05);
  const [time, setTime] = useState(0);
  const [suhu, setCurrentTemp] = useState(80);

  const calculateTemp = (t) => {
    return ambientTemp + (initialTemp - ambientTemp) * Math.exp(-k * t);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime < 100 ? prevTime + 0.5 : 0));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCurrentTemp(calculateTemp(time));
  }, [time, initialTemp, ambientTemp, k]);

  const chartData = useMemo(() => {
    const data = [];
    for (let t = 0; t <= 100; t += 2) {
      const temp = ambientTemp + (initialTemp - ambientTemp) * Math.exp(-k * t);
      data.push({ waktu: t, suhu: parseFloat(temp.toFixed(1)) });
    }
    return data;
  }, [initialTemp, ambientTemp, k]);

  // Fungsi backround suhu
  const getVisualStyles = (temp, opacity = "22") => {
    const color = getTempColor(temp);
    return {
      backgroundColor: `${color.replace("rgb", "rgba").replace(")", `, 0.${opacity})`)}`,
      borderColor: color,
      color: color,
      boxShadow: `0 0 20px ${color}44`,
      transition: "all 0.3s ease",
    };
  };

  // Fungsi suhu Awal Merah ke Biru
  const getTempColor = (temp, isSmartphone) => {
    const min = ambientTemp;
    const max = 100;
    let ratio = Math.max(0, Math.min(1, (temp - min) / (max - min)));
    const finalRatio = isSmartphone ? Math.pow(ratio, 0.5) : ratio;
    let r, g, b;

    if (finalRatio > 0.2) {
      r = 255;
      g = Math.round(40 * finalRatio);
      b = Math.round(10 * Math.pow(finalRatio - 0.2, 2));
    } else {
      const coldRatio = ratio / 0.2;
      r = Math.round(10 * finalRatio);
      g = Math.round(10 * finalRatio);
      b = 255;
    }
    const finalR = ratio < 0.02 ? 0 : r;
    return `rgb(${finalR}, ${g}, ${b})`;
  };

  // Fungsi suhu Ruangan Hijau ke Oren
  const getAmbientColor = (temp) => {
    const min = 15;
    const max = 35;
    const ratio = Math.max(0, Math.min(1, (temp - min) / (max - min)));
    const red = Math.floor(255 * ratio);
    const green = 200;
    const blue = 50;
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        key="/background_vid.mp4"
      >
        <source src="/background_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-20 text-white min-h-screen flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 text-white pt-10 pb-2 text-center drop-shadow-xl">
          VISUALISASI PENDINGINAN PERANGKAT
        </h1>

        {/* Penunjuk suhu*/}
        <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8 mb-8 items-center justify-center backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
          <div
            className="w-full md:w-44 h-auto rounded-3xl border transition-all duration-300 flex flex-col items-center justify-start shrink-0 shadow-[0_8px_40px_-5px_rgb(0,0,0,0.6)] relative overflow-hidden p-6 md:p-8"
            style={getVisualStyles(suhu, "20")}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/30 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center">
              <span
                className="text-[10px] font-mono uppercase tracking-widest mb-5 bg-black/40 px-3 py-1 rounded-full border border-white/10"
                style={{ color: getTempColor(suhu) }}
              >
                suhu CPU
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
                t = {time.toFixed(1)}s
              </span>
            </div>
          </div>
          <div className="w-full" style={{ minHeight: "300px" }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" />
                <XAxis
                  dataKey="waktu"
                  type="number"
                  domain={[0, 100]}
                  stroke="#ffffff"
                />
                <YAxis domain={[0, 100]} stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#000000",
                    borderColor: "#000000",
                    color: "#fff",
                  }}
                />
                <ReferenceLine
                  y={ambientTemp}
                  stroke="#ffffff"
                  strokeDasharray="3 3"
                  label={{
                    value: "suhu Ruangan",
                    fill: "#ffffff",
                    position: "insideTopRight",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="suhu"
                  stroke="#ffffff"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={false}
                />
                <ReferenceDot
                  x={time}
                  y={suhu}
                  r={7}
                  fill="#000000"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  isFront={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl bg-white/5 backdrop-blur-lg p-3 rounded-xl border border white/10 shadow-20xl">
          {/* Input suhu Awal */}
          <div className="bg-black/30 p-4 rounded-lg border border-transparent hover:border-purple-500/40 transition-all duration-300">
            <label className="block text-sm mb-2 text-blue-100 font-bold tracking-wider">
              suhu AWAL (T0):{" "}
              <span className="font-mono text-sm transition-colors duration-300">
                {initialTemp}°C
              </span>
              <div style={{ backgroundColor: getTempColor(initialTemp) }}></div>
            </label>
            <input
              type="range"
              style={{ accentColor: getTempColor(initialTemp) }}
              min="40"
              max="100"
              value={initialTemp}
              onChange={(e) => setInitialTemp(Number(e.target.value))}
              className="w-full h-1.5 cursor-pointer accent-blue-500 bg-white/10 rounded-sm appearance-none"
            />
          </div>

          {/* Input suhu Ruangan */}
          <div className="bg-black/30 p-4 rounded-lg border border-transparent hover:border-purple-500/40 transition-all duration-300">
            <label className="block text-sm mb-2 text-white-300 font-bold tracking-wider">
              suhu RUANGAN:{" "}
              <span className="text-whitw-400 font-mono text-sm ml-l">
                {ambientTemp}°C
              </span>
              <div
                style={{ backgroundColor: getAmbientColor(ambientTemp) }}
              ></div>
            </label>
            <input
              type="range"
              style={{ accentColor: getAmbientColor(ambientTemp) }}
              min="15"
              max="35"
              value={ambientTemp}
              onChange={(e) => setAmbientTemp(Number(e.target.value))}
              className="w-full h-1.5 cursor-pointer accent-green-500 bg-white/10 rounded-sm appearance-none"
            />
          </div>

          {/* Input Konstanta */}
          <div className="bg-black/30 p-4 rounded-lg border border-transparent hover:border-purple-500/40 transition-all duration-300">
            <label className="block text-sm mb-2 text-white-300 font-bold tracking-wider">
              KONSTANTA (k):{" "}
              <span className="text-white-400 font-mono text-sm ml-l">
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

        {/* Penunjuk Rumus */}
        <div className="mt-8 text-gray-400 text-sm text-center w-full max-w-4xl">
          <div className="mt-4 p-4 bg-red-800 rounded-lg border border-red-700 inline-block">
            <p className="font-mono text-blue-300">
              T({time.toFixed(1)}) = {ambientTemp} + ({initialTemp} -{" "}
              {ambientTemp}) * e^
              <sup className="text-xs">
                (-{k} * {time.toFixed(1)})
              </sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoolingSimulator;
