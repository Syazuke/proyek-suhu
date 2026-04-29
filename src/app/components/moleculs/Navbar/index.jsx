"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
  const pathname = usePathname();
  if (pathname.endsWith("/")) {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white text-black shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-4 py-3">
        <div className="flex justify-between items-center py-2">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl">Suhu</h1>
          </div>
          <div className="hidden md:inline space-x-6">
            <a href="/" className="py-4 hover:text-hover">
              Home
            </a>
            <a href="/simulator" className="py-4 hover:text-hover">
              Simulasi
            </a>
            <a href="/rumus" className="py-4 mb-6 hover:text-hover">
              Rumus
            </a>
            <a href="/info" className="py-4 mb-6 hover:text-hover">
              Info
            </a>
            <a href="/about" className="py-4 mb-6 hover:text-hover">
              Kami
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none md:hidden inline cursor-pointer"
          >
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
        {isOpen && (
          <div
            className={`absolute top-full left-0 w-full bg-white flex flex-col py-6 px-4 shadow-lg z-50 ${isOpen ? "border-b border-(--divider)" : ""}`}
          >
            <a href="/" className="py-4 hover:text-hover">
              Home
            </a>
            <a href="/simulator" className="py-4 hover:text-hover">
              Simulasi
            </a>
            <a href="/rumus" className="py-4 hover:text-hover">
              Rumus
            </a>
            <a href="/info" className="py-4 hover:text-hover">
              Info
            </a>
            <a href="/about" className="py-4 hover:text-hover">
              Kami
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
