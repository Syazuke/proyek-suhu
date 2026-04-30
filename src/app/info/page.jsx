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

  // Inisialisasi engine particles (wajib agar animasi bisa berjalan)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div
      // Latar belakang halaman hitam gradasi dengan penambahan relative dan overflow-hidden
      className={`${poppins.className} relative min-h-screen bg-black from-gray-800 via-black to-black flex flex-col items-center py-16 px-5 overflow-hidden`}
    >
      {/* Background Animasi Graf Partikel (Z-index 0 agar di belakang) */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0 pointer-events-none" // Menambahkan pointer-events-none agar tidak menutupi klik
          options={{
            background: {
              color: {
                value: "transparent", // Dibuat transparan agar gradasi Tailwind terlihat
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                // onHover dimatikan agar background tidak interaktif dengan kursor
                onHover: {
                  enable: false,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
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
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 200, // Jumlah titik dan garis
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 2 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Wrapper Konten Utama (Z-index 10 agar berada di atas partikel) */}
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
          <div className="relative bg-white rounded-[20px] px-8 py-10 shadow-lg border-t-4 border-transparent transition-all duration-500 ease-out group-hover:blur-[4px] group-hover:opacity-50 group-hover:scale-[0.98] hover:!blur-none hover:!opacity-100 hover:!scale-105 hover:-translate-y-2 hover:border-sky-500 hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.4)] flex flex-col items-center text-center z-0 hover:z-20 cursor-pointer">
            <FaTemperatureThreeQuarters className="text-5xl text-sky-500 mb-6" />
            <h2 className="text-xl font-semibold mb-4 text-slate-800">
              Tentang Website
            </h2>
            <p className="text-[0.95rem] text-slate-600 leading-relaxed">
              Website ini adalah platform yang dibuat untuk mengukur dan
              memantau suhu perangkat, khususnya dalam kondisi suhu ruangan.
              Website ini menampilkan data suhu secara interaktif menggunakan
              fungsi temperatur warna dan real-time untuk membantu pengguna
              memahami kondisi perangkat mereka.
            </p>
          </div>

          {/* Kotak 2: Tujuan Website */}
          <div className="relative bg-white rounded-[20px] px-8 py-10 shadow-lg border-t-4 border-transparent transition-all duration-500 ease-out group-hover:blur-[4px] group-hover:opacity-50 group-hover:scale-[0.98] hover:!blur-none hover:!opacity-100 hover:!scale-105 hover:-translate-y-2 hover:border-sky-500 hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.4)] flex flex-col items-center text-center z-0 hover:z-20 cursor-pointer">
            <FaLightbulb className="text-5xl text-sky-500 mb-6" />
            <h2 className="text-xl font-semibold mb-4 text-slate-800">
              Tujuan Website
            </h2>
            <p className="text-[0.95rem] text-slate-600 leading-relaxed">
              Website ini dibuat untuk membantu pengguna memahami bagaimana suhu
              perangkat berubah dalam kondisi lingkungan tertentu, serta sebagai
              alat simulasi dan edukasi mengenai proses penurunan suhu perangkat
              di suhu ruangan dan juga untuk memenuhi tugas Projek UAS Kalkulus
              Lanjut.
            </p>
          </div>

          {/* Kotak 3: Kegunaan Website */}
          <div className="relative bg-white rounded-[20px] px-8 py-10 shadow-lg border-t-4 border-transparent transition-all duration-500 ease-out group-hover:blur-[4px] group-hover:opacity-50 group-hover:scale-[0.98] hover:!blur-none hover:!opacity-100 hover:!scale-105 hover:-translate-y-2 hover:border-sky-500 hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.4)] flex flex-col items-center text-center md:col-span-2 lg:col-span-1 md:max-w-[50%] lg:max-w-none md:mx-auto w-full z-0 hover:z-20 cursor-pointer">
            <FaFan className="text-5xl text-sky-500 mb-6" />
            <h2 className="text-xl font-semibold mb-4 text-slate-800">
              Kegunaan Website
            </h2>
            <ul className="text-[0.95rem] text-slate-600 leading-relaxed text-left pl-5 w-full list-disc space-y-3 marker:text-sky-500">
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
