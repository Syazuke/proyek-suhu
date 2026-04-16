"use client";

import dynamic from "next/dynamic";

const CoolingSimulators = dynamic(
  () => import("@/app/components/moleculs/CoolingSimulator"),
  {
    ssr: false,
    loading: () => <p>Memuat Simulator...</p>, // Opsional: tampilan saat loading
  },
);

export default function Home() {
  return (
    <main>
      <CoolingSimulators />
    </main>
  );
}
