"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  if (pathname.endsWith("/")) {
    return null;
  }
  return (
    <div className="text-black">
      <p>© {new Date().getFullYear()} Simulasi Perubahan Suhu</p>
    </div>
  );
};

export default Footer;
