"use client"; // 1. Wajib ditambahkan untuk Next.js

import Link from "next/link"; // 2. Perbaikan import Link Next.js
import { motion } from "framer-motion"; // 3. Perbaikan import Framer Motion
import { BarChart3, Code2, Gamepad2, Sparkles } from "lucide-react";

// 4. Ubah menjadi export default agar bisa langsung dirender Next.js
export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Berhenti Menghafal Rumus.{" "}
              <span className="text-blue-600">Mulai Visualisasikan.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Platform interaktif untuk mahasiswa informatika belajar Kalkulus
              dan Aljabar Linear melalui kode dan simulasi visual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* 5. Ubah atribut 'to' menjadi 'href' */}
              <Link
                href="/materi"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-center"
              >
                Eksplorasi Materi
              </Link>
              <a
                href="#fitur"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition text-center"
              >
                Cara Kerja
              </a>
            </div>
          </div>

          <motion.div
            className="flex justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="bg-linear-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl">
              <pre className="text-white">
                <code>{`function cooling(T, Ts, k, t) {
  return Ts + (T - Ts) *
         Math.exp(-k * t);
}

// Hukum Pendinginan Newton
const temp = cooling(
  100, 25, 0.05, 10
);
console.log(\`T = \${temp}°C\`);`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="fitur" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-gray-600">
              Belajar matematika dengan cara yang berbeda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Simulasi Real-time
              </h3>
              <p className="text-gray-600">
                Lihat perubahan grafik dan data secara langsung saat Anda
                mengubah parameter. Matematika jadi hidup!
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Math in Code</h3>
              <p className="text-gray-600">
                Terapkan konsep matematika langsung ke dalam kode
                JavaScript/Python. Teori jadi praktik!
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Gamepad2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Pendekatan Gamifikasi
              </h3>
              <p className="text-gray-600">
                Selesaikan tantangan, kumpulkan poin, dan naik level. Belajar
                jadi lebih seru dan engaging!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Materi Terpopuler
            </h2>
            <p className="text-xl text-gray-600">
              Mulai petualanganmu dari sini
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ubah atribut 'to' menjadi 'href' */}
            <Link href="/materi/pendinginan-newton" className="group">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🌡️</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    🟩 Pemula
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                  Persamaan Diferensial Biasa
                </h3>
                <p className="text-gray-600">
                  Pelajari laju pendinginan menggunakan Hukum Newton dengan
                  simulasi interaktif.
                </p>
              </div>
            </Link>

            <div className="bg-white border-2 border-purple-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">📐</span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  🟨 Menengah
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Transformasi Linear
              </h3>
              <p className="text-gray-600">
                Visualisasikan rotasi, scaling, dan shearing vektor dalam ruang
                2D dan 3D.
              </p>
            </div>

            <div className="bg-white border-2 border-red-200 rounded-xl p-6 hover:border-red-400 hover:shadow-lg transition cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">🌊</span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                  🟥 Sulit
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Transformasi Fourier
              </h3>
              <p className="text-gray-600">
                Analisis sinyal dan gelombang menggunakan FFT dengan visualisasi
                spektrum frekuensi.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/materi"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Lihat Semua Materi
              <Sparkles className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Memulai Petualangan Matematika?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan mahasiswa informatika yang sudah belajar
            dengan cara yang lebih interaktif.
          </p>
          <Link
            href="/materi"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Mulai Sekarang Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
