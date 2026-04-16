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
  const [currentTemp, setCurrentTemp] = useState(80);

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

  return (
    <div className="bg-red-200 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-6 text-blue-400 py-10 text-center">
        Simulasi Pendinginan CPU Smartphone
      </h1>
      <div className="bg-zinc-600">
        <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8 mb-8 items-center justify-center p-6 rounded-2xl border border-gray-700 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div>
              <label className="block text-sm mb-2 text-gray-300 font-semibold">
                Suhu Awal (T0):{" "}
                <span className="text-blue-400">{initialTemp}°C</span>
              </label>
              <input
                type="range"
                min="30"
                max="100"
                value={initialTemp}
                onChange={(e) => setInitialTemp(Number(e.target.value))}
                className="w-full cursor-pointer accent-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-300 font-semibold">
                Suhu Ruangan:{" "}
                <span className="text-green-400">{ambientTemp}°C</span>
              </label>
              <input
                type="range"
                min="15"
                max="35"
                value={ambientTemp}
                onChange={(e) => setAmbientTemp(Number(e.target.value))}
                className="w-full cursor-pointer accent-green-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-300 font-semibold">
                Konstanta (k): <span className="text-purple-400">{k}</span>
              </label>
              <input
                type="range"
                min="0.01"
                max="0.2"
                step="0.01"
                value={k}
                onChange={(e) => setK(Number(e.target.value))}
                className="w-full cursor-pointer accent-purple-500"
              />
            </div>
          </div>
          {/* bagian grafik  */}
          <div className="w-full" style={{ minHeight: "300px" }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="waktu"
                  type="number"
                  domain={[0, 100]}
                  stroke="#9CA3AF"
                />
                <YAxis domain={[0, 100]} stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    borderColor: "#374151",
                    color: "#fff",
                  }}
                />
                <ReferenceLine
                  y={ambientTemp}
                  stroke="#10B981"
                  strokeDasharray="3 3"
                  label={{
                    value: "Suhu Ruangan",
                    fill: "#10B981",
                    position: "insideTopRight",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="suhu"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={false}
                />
                <ReferenceDot
                  x={time}
                  y={currentTemp}
                  r={7}
                  fill="#EF4444"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  isFront={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="font-mono font-bold text-2xl bg-amber-200">
            {currentTemp.toFixed(1)}°C
          </div>
          <div className="text-xs mt-2 opacity-80 font-mono">
            t = {time.toFixed(1)}s
          </div>
        </div>

        <div className="mt-8 text-gray-400 text-sm text-center w-full max-w-4xl">
          <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700 inline-block">
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
