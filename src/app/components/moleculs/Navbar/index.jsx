"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  if (pathname.endsWith("/")) {
    return null;
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white text-black shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <h1 className="text-3xl">Suhu</h1>
          <div className="hidden md:inline space-x-10">
            <a href="/" className="py-4 hover:text-hover">
              Home
            </a>
            <a href="/simulator" className="py-4 hover:text-hover">
              simulasi
            </a>
            <a href="/info" className="py-4 hover:text-hover">
              info
            </a>
            <a href="/rumus" className="py-4 hover:text-hover">
              rumus
            </a>
            <a href="/kami" className="py-4 hover:text-hover">
              kami
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none md:hidden inline"
          >
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
        {isOpen && (
          <div
            className={`absolute top-full left-0 w-full text-black bg-white flex flex-col py-6 px-4 shadow-lg z-50 ${isOpen ? "border-b border-(--divider)" : ""}`}
          >
            <a href="/" className="py-4 hover:text-hover">
              Home
            </a>
            <a href="/simulator" className="py-4 hover:text-hover">
              simulasi
            </a>
            <a href="/info" className="py-4 hover:text-hover">
              info
            </a>
            <a href="/rumus" className="py-4 hover:text-hover">
              rumus
            </a>
            <a href="/kami" className="py-4 hover:text-hover">
              kami
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
