"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  if (pathname.endsWith("/")) {
    return null;
  }

  return (
    <footer className="fixed bottom-0 w-full text-white p-4 bg-transparent z-50 text-center">
      <p>© {new Date().getFullYear()} Simulasi Perubahan Suhu</p>
    </footer>
  );
};

export default Footer;
