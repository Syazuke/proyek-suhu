import Image from "next/image";
import pahlawan from "../../../public/pahlawan.png";
import Yow from "../../../public/Yow.png";


const anggota = [
  {
    nama: "Rahman",
    nim: "257006111073",
    peran: "Frontend Developer",
    deskripsi:
      "Bertanggung jawab dalam pembuatan tampilan website menggunakan Next.js dan Tailwind CSS .",
    foto: pahlawan
  },
  {
    nama: "Gemmy Dwirismariyan Hagi",
    nim: "257006111074",
    peran: "Backend Developer",
    deskripsi:
      "Mengelola database dan API untuk memastikan data berjalan dengan baik.",
    foto: Yow
  },
  {
    nama: "Agnia Agustin Ramadhani",
    nim: "257006111090",
    peran: "UI/UX Designer",
    deskripsi: "Merancang desain antarmuka agar menarik dan mudah digunakan.",
    foto: "/anggota3.jpg",
  },
  {
    nama: "Rafi Nurraivan",
    nim: "257006111103",
    peran: "UI/UX Designer",
    deskripsi: "Merancang desain antarmuka agar menarik dan mudah digunakan.",
    foto: "/anggota3.jpg",
  },
  {
    nama: "Indah Kasih Lestari",
    nim: "257006111106",
    peran: "UI/UX Designer",
    deskripsi: "Merancang desain antarmuka agar menarik dan mudah digunakan.",
    foto: "/anggota3.jpg",
  },
  {
    nama: "Fariz Alwasi",
    nim: "257006111117",
    peran: "UI/UX Designer",
    deskripsi: "Merancang desain antarmuka agar menarik dan mudah digunakan.",
    foto: "/anggota3.jpg",
  },
];

export default function KamiPage() {
  return (
    <div className="min-h-screen bg-blue-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-black mb-10">Tim Kami</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {anggota.map((item, index) => (
          <div
            key={index}
            className="bg-black rounded-2xl shadow-lg p-5 text-center hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <div className="w-40 h-40 mx-auto mb-4 relative overflow-hidden rounded-2xl group">
              <Image
                src={item.foto}
                alt={item.nama}
                fill
                className="object-cover object-center transition duration-300 group-hover:scale-110"
              />
            </div>

            <h2 className="text-xl font-semibold">{item.nama}</h2>
            <p className="text-gray-500 font-semibold">{item.nim}</p>

            <p className="mt-2 font-semi bold text-green-600">{item.peran}</p>

            <p className="text-sm text-red-600 mt-2">{item.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
