"use client";

import React from "react";
import dynamic from "next/dynamic";

const CoolingSimulators = dynamic(
  () => import("@/app/components/moleculs/CoolingSimulator"),
  {
    ssr: false,
    loading: () => <p>Memuat Simulator...</p>, // Opsional: tampilan saat loading
  },
);

const page = () => {
  return (
    <div>
      <CoolingSimulators />
    </div>
  );
};

export default page;
