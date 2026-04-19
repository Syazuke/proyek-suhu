"use client";

import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-3xl">Suhu</h1>
          </div>
          <div className="hidden md:inline space-x-6">
            <a href="/" className="py-4 hover:text-hover">
              Home
            </a>
            <a href="/about" className="py-4 hover:text-hover">
              Beranda
            </a>
            <a href="/visualisasi" className="py-4 mb-6 hover:text-hover">
              visualisasi
            </a>
            <a href="/materi" className="py-4 mb-6 hover:text-hover">
              materi
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
            <a href="#beranda" className="py-4 hover:text-hover">
              Beranda
            </a>
            <a href="#about" className="py-4 hover:text-hover">
              Tentang
            </a>
            <a href="/ceksuhu" className="py-4 hover:text-hover">
              Cek Suhu
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
