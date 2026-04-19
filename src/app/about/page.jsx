"use client";

// 1. Kita ganti Github dan Linkedin menjadi GitBranch dan Briefcase
import { GitBranch, Briefcase, Mail, ExternalLink } from "lucide-react";

const techStack = [
  { name: "React", logo: "⚛️", color: "bg-blue-50" },
  { name: "TypeScript", logo: "🔷", color: "bg-blue-100" },
  { name: "Tailwind CSS", logo: "🎨", color: "bg-cyan-50" },
  { name: "Motion", logo: "✨", color: "bg-purple-50" },
  { name: "Recharts", logo: "📊", color: "bg-green-50" },
  { name: "Next.js", logo: "🚀", color: "bg-gray-100" },
];

export default function Tentang() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Di Balik Layar NumeriQuest
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Cerita tentang bagaimana platform ini lahir dari keinginan untuk
            mengubah cara belajar matematika
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            💡 Latar Belakang
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Sebagai mahasiswa informatika, kami sering merasa{" "}
              <span className="font-semibold text-red-600">frustasi</span> saat
              belajar Kalkulus dan Aljabar Linear. Rumus-rumus yang abstrak,
              notasi matematis yang rumit, dan kurangnya visualisasi membuat
              materi terasa{" "}
              <span className="font-semibold">jauh dari dunia pemrograman</span>{" "}
              yang kami cintai.
            </p>
            <p>
              Kami percaya bahwa matematika{" "}
              <span className="font-semibold text-blue-600">
                tidak harus membosankan
              </span>
              . Sebagai programmer, kita berpikir dalam kode, logika, dan
              visualisasi. Mengapa tidak belajar matematika dengan cara yang
              sama?
            </p>
            <p>
              <span className="font-semibold text-green-600">NumeriQuest</span>{" "}
              lahir dari ide sederhana: menggabungkan kekuatan pemrograman
              dengan keindahan matematika. Setiap konsep diterjemahkan ke dalam
              kode yang bisa dijalankan, diubah, dan divisualisasikan secara
              real-time. Tidak ada lagi menghafal rumus tanpa tahu kegunaannya!
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🛠️ Tech Stack
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Dibangun dengan teknologi modern dan tools yang powerful
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`${tech.color} rounded-xl p-6 text-center hover:shadow-lg transition cursor-default`}
              >
                <div className="text-4xl mb-3">{tech.logo}</div>
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-6xl flex-shrink-0">
              👨‍💻
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Profil Kreator</h2>
              <p className="text-xl text-blue-100 mb-1">
                Mahasiswa Informatika
              </p>
              <p className="text-blue-100 mb-4">Universitas XYZ</p>
              <p className="text-blue-50 mb-6">
                Passionate about combining mathematics, programming, and
                education to create interactive learning experiences.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center gap-2 font-semibold"
                >
                  {/* 2. Gunakan GitBranch di sini */}
                  <GitBranch className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center gap-2 font-semibold"
                >
                  {/* 3. Gunakan Briefcase di sini */}
                  <Briefcase className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🎯 Visi & Misi
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Visi</h3>
              <p className="text-gray-700 text-lg">
                Menjadi platform pembelajaran matematika interaktif terdepan
                untuk mahasiswa informatika di Indonesia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Misi</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                <li>
                  Membuat matematika lebih accessible dan menyenangkan melalui
                  visualisasi
                </li>
                <li>
                  Menghubungkan teori matematika dengan aplikasi praktis dalam
                  pemrograman
                </li>
                <li>
                  Membantu mahasiswa informatika menguasai matematika dengan
                  lebih percaya diri
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            💬 Punya Feedback atau Saran?
          </h3>
          <p className="text-gray-700 mb-6 text-lg">
            Kami selalu terbuka untuk kritik dan saran! Mari bersama-sama
            membuat NumeriQuest lebih baik.
          </p>
          <a
            href="mailto:hello@numeriquest.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            <Mail className="w-5 h-5" />
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
