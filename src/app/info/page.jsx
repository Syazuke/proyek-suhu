"use client";

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import {
  FaTemperatureThreeQuarters,
  FaLightbulb,
  FaFan,
} from "react-icons/fa6";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Konfigurasi Font Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function MoreInfo() {
  const [init, setInit] = useState(false);

  // Inisialisasi engine particles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div
      // Latar belakang halaman hitam gradasi
      className={`${poppins.className} relative min-h-screen bg-black flex flex-col items-center py-16 px-5 overflow-hidden`}
    >
      {/* Background Gradient CSS Tambahan di belakang Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-black to-black z-0 pointer-events-none"></div>

      {/* Background Animasi Graf Partikel (Tidak Interaktif) */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0 pointer-events-none"
          options={{
            background: {
              color: { value: "transparent" },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: false },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.25,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 200,
              },
              opacity: { value: 0.2 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Wrapper Konten Utama */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-white tracking-tight drop-shadow-md">
            More Info About Website
          </h1>
        </header>

        {/* Main Container / Grid */}
        <main className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
          {/* Kotak 1: Tentang Website */}
          <div className="group/card relative overflow-hidden bg-white rounded-[24px] px-8 py-10 shadow-lg border border-slate-100 transition-all duration-500 ease-out group-hover:blur-[4px] group-hover:opacity-50 group-hover:scale-[0.98] hover:!blur-none hover:!opacity-100 hover:!scale-105 hover:-translate-y-2 hover:border-sky-400 hover:shadow-[0_20px_40px_-10px_rgba(56,189,248,0.3)] flex flex-col items-center text-center z-0 hover:z-20 cursor-pointer">
            {/* Animasi Latar Turun 1/4 (Gradasi Biru) */}
            <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-sky-200 via-sky-50 to-transparent transform -translate-y-full group-hover/card:translate-y-0 transition-transform duration-700 ease-out z-0 pointer-events-none"></div>

            {/* Watermark Ikon */}
            <FaTemperatureThreeQuarters className="absolute -bottom-6 -right-6 text-9xl text-sky-500 opacity-[0.04] rotate-12 transition-transform duration-700 group-hover/card:rotate-0 group-hover/card:scale-110 z-0 pointer-events-none" />

            {/* Wadah Ikon (Akan sedikit terdorong ke bawah saat dihover) */}
            <div className="relative z-10 w-20 h-20 rounded-[1.2rem] bg-gradient-to-tr from-sky-100 to-white shadow-sm border border-white flex items-center justify-center mb-6 transition-transform duration-700 group-hover/card:translate-y-2 group-hover/card:shadow-md">
              <FaTemperatureThreeQuarters className="text-4xl text-sky-500 transition-transform duration-500 group-hover/card:scale-110" />
            </div>

            <h2 className="relative z-10 text-xl font-bold mb-4 text-slate-800 transition-transform duration-700 group-hover/card:translate-y-1">
              Tentang Website
            </h2>
            <p className="relative z-10 text-[0.95rem] text-slate-600 leading-relaxed transition-transform duration-700 group-hover/card:translate-y-1">
              Website ini adalah platform yang dibuat untuk mengukur dan
              memantau suhu perangkat, khususnya dalam kondisi suhu ruangan.
              Website ini menampilkan data suhu secara interaktif menggunakan
              fungsi temperatur warna dan real-time untuk membantu pengguna
              memahami kondisi perangkat mereka.
            </p>
          </div>

          {/* Kotak 2: Tujuan Website */}
          <div className="group/card relative overflow-hidden bg-white rounded-[24px] px-8 py-10 shadow-lg border border-slate-100 transition-all duration-500 ease-out group-hover:blur-[4px] group-hover:opacity-50 group-hover:scale-[0.98] hover:!blur-none hover:!opacity-100 hover:!scale-105 hover:-translate-y-2 hover:border-sky-400 hover:shadow-[0_20px_40px_-10px_rgba(56,189,248,0.3)] flex flex-col items-center text-center z-0 hover:z-20 cursor-pointer">
            {/* Animasi Latar Turun 1/4 (Gradasi Biru) */}
            <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-sky-200 via-sky-50 to-transparent transform -translate-y-full group-hover/card:translate-y-0 transition-transform duration-700 ease-out z-0 pointer-events-none"></div>

            {/* Watermark Ikon */}
            <FaLightbulb className="absolute -bottom-6 -right-6 text-9xl text-sky-500 opacity-[0.04] rotate-12 transition-transform duration-700 group-hover/card:rotate-0 group-hover/card:scale-110 z-0 pointer-events-none" />

            {/* Wadah Ikon (Akan sedikit terdorong ke bawah saat dihover) */}
            <div className="relative z-10 w-20 h-20 rounded-[1.2rem] bg-gradient-to-tr from-sky-100 to-white shadow-sm border border-white flex items-center justify-center mb-6 transition-transform duration-700 group-hover/card:translate-y-2 group-hover/card:shadow-md">
              <FaLightbulb className="text-4xl text-sky-500 transition-transform duration-500 group-hover/card:scale-110" />
            </div>

            <h2 className="relative z-10 text-xl font-bold mb-4 text-slate-800 transition-transform duration-700 group-hover/card:translate-y-1">
              Tujuan Website
            </h2>
            <p className="relative z-10 text-[0.95rem] text-slate-600 leading-relaxed transition-transform duration-700 group-hover/card:translate-y-1">
              Website ini dibuat untuk membantu pengguna memahami bagaimana suhu
              perangkat berubah dalam kondisi lingkungan tertentu, serta sebagai
              alat simulasi dan edukasi mengenai proses penurunan suhu perangkat
              di suhu ruangan dan juga untuk memenuhi tugas Projek UAS Kalkulus
              Lanjut.
            </p>
          </div>

          {/* Kotak 3: Kegunaan Website */}
          <div className="group/card relative overflow-hidden bg-white rounded-[24px] px-8 py-10 shadow-lg border border-slate-100 transition-all duration-500 ease-out group-hover:blur-[4px] group-hover:opacity-50 group-hover:scale-[0.98] hover:!blur-none hover:!opacity-100 hover:!scale-105 hover:-translate-y-2 hover:border-sky-400 hover:shadow-[0_20px_40px_-10px_rgba(56,189,248,0.3)] flex flex-col items-center text-center md:col-span-2 lg:col-span-1 md:max-w-[50%] lg:max-w-none md:mx-auto w-full z-0 hover:z-20 cursor-pointer">
            {/* Animasi Latar Turun 1/4 (Gradasi Biru) */}
            <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-sky-200 via-sky-50 to-transparent transform -translate-y-full group-hover/card:translate-y-0 transition-transform duration-700 ease-out z-0 pointer-events-none"></div>

            {/* Watermark Ikon */}
            <FaFan className="absolute -bottom-6 -right-4 text-9xl text-sky-500 opacity-[0.04] rotate-12 transition-transform duration-700 group-hover/card:rotate-0 group-hover/card:scale-110 z-0 pointer-events-none" />

            {/* Wadah Ikon (Akan sedikit terdorong ke bawah saat dihover) */}
            <div className="relative z-10 w-20 h-20 rounded-[1.2rem] bg-gradient-to-tr from-sky-100 to-white shadow-sm border border-white flex items-center justify-center mb-6 transition-transform duration-700 group-hover/card:translate-y-2 group-hover/card:shadow-md">
              <FaFan className="text-4xl text-sky-500 transition-transform duration-500 group-hover/card:scale-110" />
            </div>

            <h2 className="relative z-10 text-xl font-bold mb-4 text-slate-800 transition-transform duration-700 group-hover/card:translate-y-1">
              Kegunaan Website
            </h2>
            <ul className="relative z-10 text-[0.95rem] text-slate-600 leading-relaxed text-left pl-5 w-full list-disc space-y-3 marker:text-sky-500 transition-transform duration-700 group-hover/card:translate-y-1">
              <li>Memantau suhu perangkat secara visual</li>
              <li>Membantu menganalisis performa perangkat</li>
              <li>
                Menjadi alat pembelajaran tentang pengaruh suhu terhadap
                perangkat
              </li>
              <li>Memberikan gambaran tentang proses pendinginan perangkat</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
