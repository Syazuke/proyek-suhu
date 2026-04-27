"use client";

import React, { useState, useEffect, useMemo } from "react";
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
import { motion } from "framer-motion";

const CoolingSimulator = () => {
  const [initialTemp, setInitialTemp] = useState(80);
  const [ambientTemp, setAmbientTemp] = useState(25);
  const [k, setK] = useState(0.05);
  const [time, setTime] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(80);
  const [isPlaying, setIsPlaying] = useState(true);

  const calculateTemp = (t) => {
    return ambientTemp + (initialTemp - ambientTemp) * Math.exp(-k * t);
  };

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime < 100 ? prevTime + 0.5 : 0));
      }, 50);
    }

    return () => clearInterval(timer);
  }, [isPlaying]);

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

  const getTempColor = (temp, isSmartphone) => {
    const minColorRange = 25;
    const maxColorRange = 100;
    let ratio = Math.max(
      0,
      Math.min(1, (temp - minColorRange) / (maxColorRange - minColorRange)),
    );
    const finalRatio = isSmartphone ? Math.pow(ratio, 0.5) : ratio;
    let r, g, b;
    if (finalRatio > 0.2) {
      r = 255;
      g = Math.round(50 * (1 - finalRatio));
      b = Math.round(50 * Math.pow(1 - finalRatio, 2));
    } else {
      r = Math.round(50 * finalRatio);
      g = Math.round(50 * finalRatio);
      b = 255;
    }
    return `rgb(${r}, ${g}, ${b})`;
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

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        key="/background_vid.mp4"
      >
        <source src="/background_vid.mp4" type="video/mp4" />
      </video>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 text-white min-h-screen flex flex-col items-center pb-16"
      >
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 text-white pt-10 pb-2 text-center drop-shadow-xl">
          VISUALISASI PENDINGINAN PERANGKAT
        </h1>

        <div className="flex flex-col md:flex-row w-full max-w-4xl gap-5 mb-1 items-center justify-center backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-xl bg-black/20">
          {/* Penunjuk Suhu */}
          <div
            className="w-full md:w-44 h-auto rounded-3xl border transition-all duration-300 flex flex-col items-center justify-start shrink-0 shadow-[0_8px_40px_-5px_rgb(0,0,0,0.6)] relative overflow-hidden p-6 md:p-8"
            style={getVisualStyles(currentTemp, "20")}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/30 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center">
              <span
                className="text-[10px] font-mono uppercase tracking-widest mb-5 bg-black/40 px-3 py-1 rounded-full border border-white/10"
                style={{ color: getTempColor(currentTemp) }}
              >
                SUHU CPU
              </span>

              <div className="relative mb-6">
                <span
                  className="font-sans font-extrabold text-4xl md:text-5xl text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
                  style={{ color: getTempColor(currentTemp) }}
                >
                  {currentTemp.toFixed(1)}°C
                </span>
              </div>

              <span className="text-sm mt-2 font-mono text-white/95 bg-white/5 px-5 py-2 rounded-full border border-white/10 shadow-inner">
                t = {time.toFixed(1)}s
              </span>
            </div>
          </div>

          {/* Kurva Eskponensial */}
          <div className="w-full" style={{ minHeight: "300px" }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.2)"
                />
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
                    borderColor: "rgba(255,255,255,0.2)",
                    color: "#fff",
                  }}
                />
                <ReferenceLine
                  y={ambientTemp}
                  stroke="#ffffff"
                  strokeDasharray="3 3"
                  label={{
                    value: "Suhu Ruangan",
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
                  y={currentTemp}
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

        {/* Play/Pause & Penunjuk Rumus */}
        <div className="flex justify-center items-center mt-3 mb-3 px-4 gap-3">
          {/* Tombol Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-lg hover:bg-white/10 transition-colors active:scale-95"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <span className="text-blue text-xl">⏸</span>
            ) : (
              <span className="text-blue text-xl">▶</span>
            )}
          </button>

          <div className="text-white text-sm text-center bg-black/40 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 shadow-lg">
            <p className="font-mono text-blue-300">
              T({time.toFixed(1)}) = {ambientTemp} + ({initialTemp} -{" "}
              {ambientTemp}) * e^
              <sup className="text-xs">
                (-{k} * {time.toFixed(1)})
              </sup>
            </p>
          </div>
        </div>

        {/* Input Suhu Awal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl bg-white/5 backdrop-blur-lg p-3 rounded-xl border border-white/10 shadow-2xl">
          <div className="bg-black/30 p-4 rounded-lg border border-transparent hover:border-purple-500/40 transition-all duration-300">
            <label className="block text-sm mb-2 text-blue-100 font-bold tracking-wider">
              SUHU AWAL (T0):{" "}
              <span className="font-mono text-sm">{initialTemp}°C</span>
            </label>
            <input
              type="range"
              style={{ accentColor: getTempColor(initialTemp) }}
              min="40"
              max="100"
              value={initialTemp}
              onChange={(e) => setInitialTemp(Number(e.target.value))}
              className="w-full h-1.5 cursor-pointer bg-white/10 rounded-sm appearance-none"
            />
          </div>

          {/* Input Suhu Ruang */}
          <div className="bg-black/30 p-4 rounded-lg border border-transparent hover:border-purple-500/40 transition-all duration-300">
            <label className="block text-sm mb-2 text-blue-100 font-bold tracking-wider">
              SUHU RUANGAN:{" "}
              <span className="font-mono text-sm">{ambientTemp}°C</span>
            </label>
            <input
              type="range"
              style={{ accentColor: getAmbientColor(ambientTemp) }}
              min="15"
              max="35"
              value={ambientTemp}
              onChange={(e) => setAmbientTemp(Number(e.target.value))}
              className="w-full h-1.5 cursor-pointer bg-white/10 rounded-sm appearance-none"
            />
          </div>

          {/* Input Konstanta */}
          <div className="bg-black/30 p-4 rounded-lg border border-transparent hover:border-purple-500/40 transition-all duration-300">
            <label className="block text-sm mb-2 text-blue-100 font-bold tracking-wider">
              KONSTANTA (k):{" "}
              <span className="font-mono text-sm">{k.toFixed(2)}</span>
            </label>
            <input
              type="range"
              min="0.01"
              max="0.2"
              step="0.01"
              value={k}
              onChange={(e) => setK(Number(e.target.value))}
              className="w-full h-1.5 cursor-pointer accent-purple-700 bg-white/10 rounded-sm appearance-none"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CoolingSimulator;

CoolingSimulator.jsx;
