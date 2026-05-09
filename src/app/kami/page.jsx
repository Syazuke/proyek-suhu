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
    deskripsi: "Bertanggung jawab dalam pembuatan dan mendesain page Info.",
    foto: Rahman,
  },
  {
    nama: "Gemmy Dwirismariyan Hagi",
    nim: "257006111074",
    deskripsi: "Bertanggung jawab dalam merancang dan mendesain page Kami.",
    foto: Gemmy,
  },
  {
    nama: "Agnia Agustin Ramadhani",
    nim: "257006111090",
    deskripsi: "Bertanggung jawab dalam merancang dan mendesain page Rumus.",
    foto: Agnia,
  },
  {
    nama: "Rafi Nurraivan",
    nim: "257006111103",
    deskripsi:
      "Bertanggung jawab dalam visualisasi keseluruhan website dan halaman awal serta fungsi interaktif temperatur warna.",
    foto: Raivan,
  },
  {
    nama: "Indah Kasih Lestari",
    nim: "257006111106",
    deskripsi: "Bertanggung jawab dalam merancang page Rumus.",
    foto: Indah,
  },
  {
    nama: "Fariz Alwasi",
    nim: "257006111117",
    deskripsi:
      "Membuat grafik pada website tersebut lalu membuat popup input username pada awal buka website dan membuat navigation dan juga footer.",
    foto: Fariz,
  },
];

export default function KamiPage() {
  return (

    <div className="relative min-h-screen w-full overflow-hidden bg-transparent">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        key="/background_vid.mp4"
      >
        <source src="/background_vid.mp4" type="video/mp4" />
      </video>
      
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 z-1 pointer-events-none"></div>
      <div className="absolute inset-0 bg-black/50 z-1"></div>

      <div className="relative z-10 min-h-screen py-25 px-5">
        <h1 className="text-4xl font-bold text-center text-white mb-10 drop-shadow-lg">
          Tim Kami
        </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {anggota.map((item, index) => (
          <div
          key={index}
          className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-5 text-center hover:bg-gray-900/60 transition-all duration-300 transform hover:scale-105 group"
        >
      <div className="w-50 h-50 mx-auto mb-4 relative overflow-hidden rounded-2xl">
        <Image
          src={item.foto}
          alt={item.nama}
          fill
          className="object-cover object-top transition duration-300 group-hover:scale-110"
        />
      </div>

      <h2 className="text-xl font-bold text-white mb-1">
        {item.nama}
      </h2>
  
      <p className="text-blue-400 font-mono text-sm mb-3">
        {item.nim}
      </p>

        <p className="text-sm text-gray-200 leading-relaxed">
          {item.deskripsi}
        </p>
      </div>
        ))}
      </div>
    </div>
    </div>
  );
}
