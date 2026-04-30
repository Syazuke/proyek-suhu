import Image from "next/image";
import pahlawan from "../../../public/pahlawan.png";

const anggota = [
  {
    nama: "Fariz",
    nim: "257006111",
    peran: "Frontend Developer",
    deskripsi:
      "Bertanggung jawab dalam pembuatan tampilan website menggunakan Next.js dan Tailwind CSS.",
    foto: {pahlawan}
  },
  {
    nama: "Raivan",
    nim: "987654321",
    peran: "Backend Developer",
    deskripsi:
      "Mengelola database dan API untuk memastikan data berjalan dengan baik.",
    foto: "/anggota2.jpg",
  },
  {
    nama: "Rahman",
    nim: "112233445",
    peran: "UI/UX Designer",
    deskripsi: "Merancang desain antarmuka agar menarik dan mudah digunakan.",
    foto: "/anggota3.jpg",
  },
  {
    nama: "Gemmy",
    nim: "112233445",
    peran: "UI/UX Designer",
    deskripsi: "Merancang desain antarmuka agar menarik dan mudah digunakan.",
    foto: "/anggota3.jpg",
  },
  {
    nama: "Agnia",
    nim: "112233445",
    peran: "UI/UX Designer",
    deskripsi: "Merancang desain antarmuka agar menarik dan mudah digunakan.",
    foto: "/anggota3.jpg",
  },
  {
    nama: "Indah",
    nim: "112233445",
    peran: "UI/UX Designer",
    deskripsi: "Merancang desain antarmuka agar menarik dan mudah digunakan.",
    foto: "/anggota3.jpg",
  },
];

export default function KamiPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10">Tim Kami</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {anggota.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-5 text-center hover:shadow-xl transition"
          >
            <div className="w-32 h-32 mx-auto mb-4 relative">
              <Image
                src={item.foto}
                alt={item.nama}
                fill
                className="rounded-full object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold">{item.nama}</h2>
            <p className="text-gray-500">{item.nim}</p>

            <p className="mt-2 font-medium text-blue-600">{item.peran}</p>

            <p className="text-sm text-gray-600 mt-2">{item.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
