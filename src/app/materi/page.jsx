"use client"; // 1. Wajib untuk state management di Next.js

import { useState } from "react";
import Link from "next/link"; // 2. Ubah import dari react-router menjadi next/link
import { Search, Filter } from "lucide-react";

const categories = [
  "Semua",
  "Kalkulus Lanjut",
  "Aljabar Linear",
  "Fisika Komputasi",
];

const materiData = [
  {
    id: "pendinginan-newton",
    title: "Persamaan Diferensial Biasa",
    description:
      "Pelajari laju pendinginan menggunakan Hukum Newton dengan simulasi interaktif.",
    category: "Kalkulus Lanjut",
    difficulty: "Pemula",
    icon: "🌡️",
    color: "blue",
    difficultyColor: "green",
  },
  {
    id: "transformasi-linear",
    title: "Transformasi Linear",
    description:
      "Visualisasikan rotasi, scaling, dan shearing vektor dalam ruang 2D dan 3D.",
    category: "Aljabar Linear",
    difficulty: "Menengah",
    icon: "📐",
    color: "purple",
    difficultyColor: "yellow",
  },
  {
    id: "fourier-transform",
    title: "Transformasi Fourier",
    description:
      "Analisis sinyal dan gelombang menggunakan FFT dengan visualisasi spektrum frekuensi.",
    category: "Kalkulus Lanjut",
    difficulty: "Sulit",
    icon: "🌊",
    color: "red",
    difficultyColor: "red",
  },
  {
    id: "eigenvalue",
    title: "Eigenvalue & Eigenvector",
    description:
      "Pahami konsep nilai eigen dan vektor eigen melalui transformasi matriks visual.",
    category: "Aljabar Linear",
    difficulty: "Menengah",
    icon: "🎯",
    color: "indigo",
    difficultyColor: "yellow",
  },
  {
    id: "integral-numerik",
    title: "Integral Numerik",
    description:
      "Hitung luas di bawah kurva dengan metode Riemann, Trapezoid, dan Simpson.",
    category: "Kalkulus Lanjut",
    difficulty: "Pemula",
    icon: "📊",
    color: "green",
    difficultyColor: "green",
  },
  {
    id: "gerak-proyektil",
    title: "Gerak Proyektil",
    description:
      "Simulasikan lintasan peluru dengan mempertimbangkan hambatan udara.",
    category: "Fisika Komputasi",
    difficulty: "Menengah",
    icon: "🚀",
    color: "orange",
    difficultyColor: "yellow",
  },
  {
    id: "svd",
    title: "Singular Value Decomposition",
    description: "Kompresi gambar dan reduksi dimensi menggunakan SVD.",
    category: "Aljabar Linear",
    difficulty: "Sulit",
    icon: "🖼️",
    color: "pink",
    difficultyColor: "red",
  },
  {
    id: "monte-carlo",
    title: "Metode Monte Carlo",
    description:
      "Estimasi nilai Pi dan integral kompleks menggunakan sampling acak.",
    category: "Fisika Komputasi",
    difficulty: "Menengah",
    icon: "🎲",
    color: "teal",
    difficultyColor: "yellow",
  },
  {
    id: "gradient-descent",
    title: "Gradient Descent",
    description:
      "Optimisasi fungsi multivariabel untuk machine learning dasar.",
    category: "Kalkulus Lanjut",
    difficulty: "Sulit",
    icon: "⛰️",
    color: "cyan",
    difficultyColor: "red",
  },
];

const colorMap = {
  blue: "border-blue-200 hover:border-blue-400",
  purple: "border-purple-200 hover:border-purple-400",
  red: "border-red-200 hover:border-red-400",
  indigo: "border-indigo-200 hover:border-indigo-400",
  green: "border-green-200 hover:border-green-400",
  orange: "border-orange-200 hover:border-orange-400",
  pink: "border-pink-200 hover:border-pink-400",
  teal: "border-teal-200 hover:border-teal-400",
  cyan: "border-cyan-200 hover:border-cyan-400",
};

const difficultyColorMap = {
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  red: "bg-red-100 text-red-700",
};

const difficultyEmoji = {
  green: "🟩",
  yellow: "🟨",
  red: "🟥",
};

export default function Materi() {
  // 3. Pastikan menggunakan export default
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMateri = materiData.filter((materi) => {
    const matchesCategory =
      selectedCategory === "Semua" || materi.category === selectedCategory;
    const matchesSearch =
      materi.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      materi.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white text-center mb-6">
            Pilih Petualanganmu
          </h1>
          <p className="text-xl text-blue-100 text-center mb-8">
            Jelajahi berbagai materi matematika yang interaktif dan menyenangkan
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Cari materi (contoh: diferensial, vektor, fourier...)"
              className="w-full pl-14 pr-4 py-4 rounded-lg shadow-lg text-lg outline-none focus:ring-2 focus:ring-blue-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
          <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredMateri.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">
              Tidak ada materi yang ditemukan
            </p>
            <p className="text-gray-400 mt-2">
              Coba kata kunci atau kategori lain
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMateri.map((materi) => (
              <Link
                key={materi.id}
                // 4. Ubah atribut 'to' menjadi 'href'
                href={
                  materi.id === "pendinginan-newton"
                    ? "/materi/pendinginan-newton"
                    : "#"
                }
                className="group"
              >
                <div
                  className={`bg-white border-2 rounded-xl p-6 hover:shadow-xl transition h-full flex flex-col ${
                    colorMap[materi.color]
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{materi.icon}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${
                        difficultyColorMap[materi.difficultyColor]
                      }`}
                    >
                      <span>{difficultyEmoji[materi.difficultyColor]}</span>{" "}
                      {materi.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                    {materi.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{materi.description}</p>
                  <div className="mt-auto">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {materi.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
