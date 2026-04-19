"use client";

import { useEffect, useMemo, useState } from "react";
import Video from "../atoms/video";
import Visual from "../atoms/visual";
import Grafik from "../atoms/grafik";
import SuhuAwal from "../atoms/SuhuAwal";
import SuhuRuangan from "../atoms/SuhuRuangan";
import Konstanta from "../atoms/Konstanta";
import Rumus from "../atoms/Rumus";

const CoolingSimulator = () => {
  const [suhuAwal, setSuhuAwal] = useState(80);
  const [suhuRuangan, setSuhuRuangan] = useState(25);
  const [k, setK] = useState(0.05);
  const [waktu, setWaktu] = useState(0);
  const [suhu, setSuhu] = useState(80);

  // Rumus PDB
  const kalkulatorSuhu = (t) => {
    return suhuRuangan + (suhuAwal - suhuRuangan) * Math.exp(-k * t);
  };

  // ketika user mengubah nilai dari suhu awal, suhu ruangan dan k, maka waktunya akan kembali ke 0 atau ke awal
  useEffect(() => {
    setWaktu(0);
  }, [suhuAwal, suhuRuangan, k]);

  // Validasi untuk menghentikan waktu dan suhu ketika suhunya sudah mendekati hasil dari perhitungan
  useEffect(() => {
    const timer = setInterval(() => {
      setWaktu((waktu) => {
        const suhuSaatIni =
          suhuRuangan + (suhuAwal - suhuRuangan) * Math.exp(-k * waktu);
        if (suhuSaatIni - suhuRuangan <= 0.1 || waktu >= 100) {
          return waktu;
        }
        return waktu + 0.5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [suhuAwal, suhuRuangan, k]);

  // Update nilai suhu berdasarkan waktu yang berjalan
  useEffect(() => {
    setSuhu(kalkulatorSuhu(waktu));
  }, [waktu, suhuAwal, suhuRuangan, k]);

  // Data untuk grafik
  const chartData = useMemo(() => {
    const data = [];
    for (let t = 0; t <= 100; t += 2) {
      const temp = suhuRuangan + (suhuAwal - suhuRuangan) * Math.exp(-k * t);
      data.push({ waktu: t, suhu: parseFloat(temp.toFixed(1)) });
    }
    return data;
  }, [suhuAwal, suhuRuangan, k]);

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
    const min = suhuRuangan;
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
      <Video />
      <div className="relative z-20 text-white min-h-screen flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 text-white pt-10 pb-2 text-center drop-shadow-xl">
          VISUALISASI PENDINGINAN PERANGKAT
        </h1>

        {/* Penunjuk suhu*/}
        <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8 mb-8 items-center justify-center backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
          <Visual
            suhu={suhu}
            waktu={waktu}
            getTempColor={getTempColor}
            getVisualStyles={getVisualStyles}
          />

          <Grafik
            chartData={chartData}
            waktu={waktu}
            suhu={suhu}
            suhuRuangan={suhuRuangan}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl bg-white/5 backdrop-blur-lg p-3 rounded-xl border border-white/10 shadow-2xl">
          {/* Input suhu Awal */}
          <SuhuAwal
            getTempColor={getTempColor}
            suhuAwal={suhuAwal}
            setSuhuAwal={setSuhuAwal}
          />
          {/* Input suhu Ruangan */}
          <SuhuRuangan
            suhuRuangan={suhuRuangan}
            getAmbientColor={getAmbientColor}
            setSuhuRuangan={setSuhuRuangan}
          />
          {/* Input Konstanta */}
          <Konstanta k={k} setK={setK} />
        </div>
        {/* Penunjuk Rumus */}
        <Rumus
          suhuRuangan={suhuRuangan}
          k={k}
          SuhuAwal={suhuAwal}
          waktu={waktu}
        />
      </div>
    </div>
  );
};

export default CoolingSimulator;
