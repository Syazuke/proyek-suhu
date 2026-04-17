"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CoolingSimulator = () => {
  const [suhuAwal, setSuhuAwal] = useState(80);
  const [suhuRuangan, setSuhuRuangan] = useState(25);
  const [k, setK] = useState(0.05);
  const [waktu, setWaktu] = useState(0);
  const [suhu, setSuhu] = useState(80);

  const kalkulatorSuhu = (t) => {
    return suhuRuangan + (suhuAwal - suhuRuangan) * Math.exp(-k * t);
  };

  useEffect(() => {
    setWaktu(0);
  }, [suhuAwal, suhuRuangan, k]);

  useEffect(() => {
    const timer = setInterval(() => {
      setWaktu((prevTime) => {
        const currentSuhu =
          suhuRuangan + (suhuAwal - suhuRuangan) * Math.exp(-k * prevTime);
        if (currentSuhu - suhuRuangan <= 0.1 || prevTime >= 100) {
          return prevTime;
        }
        return prevTime + 0.5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [suhuAwal, suhuRuangan, k]);

  useEffect(() => {
    setSuhu(kalkulatorSuhu(waktu));
  }, [waktu, suhuAwal, suhuRuangan, k]);

  const chartData = useMemo(() => {
    const data = [];
    for (let t = 0; t <= 100; t += 2) {
      const temp = suhuRuangan + (suhuAwal - suhuRuangan) * Math.exp(-k * t);
      data.push({ waktu: t, suhu: parseFloat(temp.toFixed(1)) });
    }
    return data;
  }, [suhuAwal, suhuRuangan, k]);

  return (
    <main className="text-white flex flex-col px-4">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-6 py-10 text-center">
        Simulasi Pendinginan CPU Smartphone
      </h1>
      <div className="flex flex-col md:flex-row gap-2 rounded-xl w-full px-6">
        {/* Bagian pengaturan suhu */}
        <div className="flex gap-2 md:w-2/3">
          <div className="flex flex-col w-full bg-gray-800 border-gray-700 p-6 gap-2 md:gap-6 rounded-xl border">
            <h1 className="text-center text-xl md:text-2xl border-b border-gray-600 py-2">
              Pengaturan Suhu
            </h1>
            <div className="py-2 border-b border-gray-600">
              <div className="flex justify-between items-center">
                <label className="text-sm">Suhu Awal (T0): </label>
                <span className="font-semibold">{suhuAwal}°C</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                value={suhuAwal}
                onChange={(e) => setSuhuAwal(Number(e.target.value))}
                className="w-full cursor-pointer accent-secondary"
              />
              <div className="flex justify-between items-center text-sm opacity-70">
                <p>40</p>
                <p>100°C</p>
              </div>
            </div>
            <div className="border-b border-gray-600 py-2">
              <div className="flex justify-between items-center">
                <label className="text-sm">Suhu Ruangan: </label>
                <span className="font-semibold">{suhuRuangan}°C</span>
              </div>

              <input
                type="range"
                min="15"
                max="35"
                value={suhuRuangan}
                onChange={(e) => setSuhuRuangan(Number(e.target.value))}
                className="w-full cursor-pointer accent-secondary"
              />
              <div className="flex justify-between items-center text-sm opacity-70">
                <p>15</p>
                <p>35°C</p>
              </div>
            </div>
            <div className="py-2 border-b border-gray-600">
              <div className="flex justify-between items-center">
                <label className="text-sm">Konstanta (k): </label>
                <span className="font-semibold">{k}</span>
              </div>
              <input
                type="range"
                min="0.01"
                max="0.2"
                step="0.01"
                stroke="#FFFFFF"
                value={k}
                onChange={(e) => setK(Number(e.target.value))}
                className="w-full cursor-pointer accent-secondary"
              />
              <div className="flex justify-between items-center text-sm opacity-70">
                <p>0.01</p>
                <p>0.2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          {/* Bagian Grafik */}
          <div
            className="w-full flex flex-col-reverse gap-2 rounded-xl bg-gray-800 border-gray-700 border"
            style={{ minHeight: "300px" }}
          >
            <h1 className="p-4 text-center">GRAFIK PERUBAHAN SUHU PERANGKAT</h1>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={chartData}
                margin={{ left: 5, bottom: 30, right: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="waktu"
                  type="number"
                  domain={[0, 100]}
                  padding={{ bottom: 30 }}
                  stroke="#9CA3AF"
                  label={{
                    value: "Waktu (t)",
                    position: "insideBottom",
                    offset: -15,
                    style: { textAnchor: "middle", fontSize: "18px" },
                  }}
                />
                <YAxis
                  domain={[0, 100]}
                  stroke="#9CA3AF"
                  label={{
                    value: "Temperatur (T0)",
                    angle: -90,
                    position: "insideLeft",
                    offset: 15,
                    style: { textAnchor: "middle", fontSize: "18px" },
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    borderColor: "#374151",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="suhu"
                  stroke="#f27a3a"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={false}
                />
                <ReferenceDot
                  x={waktu}
                  y={suhu}
                  r={7}
                  fill="#EF4444"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  isFront={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bagian Perhitungan Suhu */}
          <div className="flex flex-col">
            <div className="flex w-full gap-2 py-2">
              <div className="rounded-xl bg-gray-800 border-gray-700 border w-1/2 text-center p-4">
                <p className="text-sm">Suhu saat ini</p>
                <p className="text-2xl">{suhu.toFixed(1)}°C</p>
              </div>
              <div className="w-1/2 text-center rounded-xl bg-gray-800 border-gray-700 border p-4">
                <p className="text-sm">Waktu Berjalan :</p>
                <p className="text-2xl">t = {waktu.toFixed(1)}s</p>
              </div>
            </div>
            <div className="text-sm w-full rounded-xl bg-gray-800 border-gray-700 border p-4 flex max-lg:flex-col gap-2">
              <h1>Persamaan DIfferensial Biasa (PDB) :</h1>
              <p className="">
                T({waktu.toFixed(1)}) = {suhuRuangan} + ({suhuAwal} -{" "}
                {suhuRuangan}) * e^
                <sup className="text-xs">
                  (-{k} * {waktu.toFixed(1)})
                </sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoolingSimulator;
