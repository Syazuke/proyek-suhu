"use client";
import { useState, useEffect } from "react";

export default function RumusPage() {
  const [time, setTime] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(0);

  const initialTemp = 80; // T0: suhu awal
  const ambientTemp = 30; // T_env: suhu lingkungan
  const k = 0.1; // k: konstanta pendinginan

  const calculateTemp = (t) => {
    // Implementasi dari: T(t) = T_env + (T_0 - T_env) * e^(-kt)
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

  // Kalkulasi persentase untuk visualisasi bar suhu (relatif terhadap suhu lingkungan)
  const tempPercentage = Math.max(
    0,
    ((currentTemp - ambientTemp) / (initialTemp - ambientTemp)) * 100
  );

  // Visual bar berubah warna: Merah (Panas) -> Kuning (Hangat) -> Biru (Mendekati suhu ruang)
  const barColor =
    currentTemp > 60 ? "bg-red-500" : currentTemp > 40 ? "bg-yellow-400" : "bg-blue-400";

  return (
    // MODIFIKASI: Latar belakang hitam dengan gambar partikel jaringan, teks putih, dan efek paralaks
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4"
      style={{
        backgroundImage: "url('/network-bg.png')", // Ganti dengan path file yang baru
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Efek paralaks seperti di image_1.png
      }}
    >
      {/* MODIFIKASI: Card menjadi dark theme, shadow lebih gelap */}
      <div className="max-w-2xl w-full bg-neutral-950 shadow-2xl rounded-xl p-8 border border-neutral-800">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Simulasi Pendinginan Perangkat
        </h1>

        {/* --- BAGIAN VISUALISASI --- */}
        {/* MODIFIKASI: Latar belakang visual bar menjadi gelap */}
        <div className="mb-8 p-6 bg-neutral-900 rounded-lg shadow-inner">
          <div className="flex justify-between items-center mb-3">
            {/* MODIFIKASI: Teks keterangan menjadi warna netral terang */}
            <span className="font-semibold text-neutral-300">Waktu: {time} detik</span>
            {/* MODIFIKASI: Teks suhu menjadi putih */}
            <span className="font-bold text-2xl text-white">
              {currentTemp.toFixed(2)} °C
            </span>
          </div>
          
          {/* Progress Bar Indikator Suhu */}
          {/* MODIFIKASI: Latar belakang bar menjadi gelap, border gelap */}
          <div className="w-full bg-neutral-800 rounded-full h-6 overflow-hidden border border-neutral-700">
            <div
              className={`h-full transition-all duration-1000 ease-linear ${barColor}`}
              style={{ width: `${tempPercentage}%` }}
            ></div>
          </div>
          
          {/* MODIFIKASI: Teks keterangan bawah menjadi warna netral buram */}
          <div className="flex justify-between text-sm mt-2 text-neutral-400 font-medium">
            <span>Mendekati Lingkungan ({ambientTemp}°C)</span>
            <span>Awal ({initialTemp}°C)</span>
          </div>
        </div>

        {/* --- BAGIAN RUMUS MATEMATIKA --- */}
        {/* MODIFIKASI: Latar belakang blok rumus menjadi gelap, warna border buram */}
        <div className="bg-neutral-900 border-l-4 border-neutral-700 p-6 rounded-r-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-300">Model Matematika</h2>

          {/* MODIFIKASI: Seluruh blok PDB telah DIHAPUS */}

          <div className="mb-4">
            {/* MODIFIKASI: Hapus penomoran '2.' dan ubah warna teks */}
            <h3 className="font-semibold text-neutral-300">Solusi Persamaan:</h3>
            {/* MODIFIKASI: Latar belakang rumus internal menjadi gelap, teks putih */}
            <div className="bg-neutral-800 p-3 rounded mt-2 text-center shadow-md font-mono text-lg text-white">
              T(t) = T<sub>env</sub> + (T<sub>0</sub> - T<sub>env</sub>) &middot; e<sup>-kt</sup>
            </div>
          </div>

          {/* Keterangan Variabel dinamis sesuai state */}
          {/* MODIFIKASI: Ubah teks keterangan menjadi warna netral terang */}
          <div className="mt-6 text-sm text-neutral-300">
            <p className="font-semibold mb-2">Keterangan (Nilai Saat Ini):</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>T(t)</strong>: Suhu pada waktu t 
                {/* MODIFIKASI: Warna variabel dinamis menjadi biru muda */}
                <span className="text-blue-400 font-semibold"> ({currentTemp.toFixed(2)} °C)</span>
              </li>
              <li>
                <strong>T<sub>env</sub></strong>: Suhu ruangan 
                <span className="text-blue-400 font-semibold"> ({ambientTemp} °C)</span>
              </li>
              <li>
                <strong>T<sub>0</sub></strong>: Suhu awal 
                <span className="text-blue-400 font-semibold"> ({initialTemp} °C)</span>
              </li>
              <li>
                <strong>k</strong>: Konstanta pendinginan 
                <span className="text-blue-400 font-semibold"> ({k})</span>
              </li>
              <li>
                <strong>t</strong>: Waktu berjalan 
                <span className="text-blue-400 font-semibold"> ({time} detik)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}