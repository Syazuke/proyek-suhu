import Image from "next/image";
import Gemmy from "../../../public/Gemmy.png";
import Fariz from "../../../public/Fariz.png";
import Agnia from "../../../public/Agnia.png";
import Rahman from "../../../public/Rahman.png";
import Raivan from "../../../public/Raivan.png";
import Indah from "../../../public/Indah.png";


const anggota = [
  {
    nama: "Rahman",
    nim: "257006111073",
    deskripsi:
      "Bertanggung jawab dalam pembuatan dan mendesain page Info.",
    foto: Rahman
  },
  {
    nama: "Gemmy Dwirismariyan Hagi",
    nim: "257006111074",
    deskripsi:
      "Bertanggung jawab dalam merancang dan mendesain page Kami.",
    foto: Gemmy
  },
  {
    nama: "Agnia Agustin Ramadhani",
    nim: "257006111090",
    deskripsi: "Bertanggung jawab dalam merancang dan mendesain page Rumus.",
    foto: Agnia
  },
  {
    nama: "Rafi Nurraivan",
    nim: "257006111103",
    deskripsi: "Bertanggung jawab dalam visualisasi keseluruhan website dan halaman awal serta fungsi interaktif temperatur warna.",
    foto: Raivan
  },
  {
    nama: "Indah Kasih Lestari",
    nim: "257006111106",
    deskripsi: "Bertanggung jawab dalam merancang page Rumus.",
    foto: Indah
  },
  {
    nama: "Fariz Alwasi",
    nim: "257006111117",
    deskripsi: "Membuat grafik pada website tersebut lalu membuat popup input username pada awal buka website dan membuat navigation dan juga footer.",
    foto: Fariz
  },
];

export default function KamiPage() {
  return (
    <div className="min-h-screen bg-black py-25 px-5">
      <h1 className="text-4xl font-bold text-center text-white mb-10">Tim Kami</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {anggota.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-lg p-5 text-center hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <div className="w-50 h-50 mx-auto mb-4 relative overflow-hidden rounded-2xl group">
              <Image
                src={item.foto}
                alt={item.nama}
                fill
                className="object-cover object-top transition duration-300 group-hover:scale-110"
              />
            </div>

            <h2 className="text-xl bg-gray-800 rounded-2xl font-semi bold">{item.nama}</h2>
            <p className="text-white-500 bg-gray-800 rounded-2xl font-semi bold mt-2">{item.nim}</p>

            <p className="font-semi bold text-blue-800">{item.peran}</p>

            <p className="text-sm text-gray-400 rounded-2xl bg-gray-800 mt-2">{item.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
