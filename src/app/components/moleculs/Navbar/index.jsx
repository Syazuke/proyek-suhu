"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../../../../../public/Logo.png";
import Image from "next/image";

const Navigation = () => {
  const pathname = usePathname();
  if (pathname.endsWith("/")) {
    return null;
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white top-0 z-50 absolute w-full">
      <div className="mx-auto px-4 py-3 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center py-2">
          <a href="/" className="flex gap-2">
            <Image
              src={Logo}
              alt="ini logo"
              className="h-10 w-11 md:h-13 md:w-14 lg:h-15 lg:w-16"
            />
            <div className="flex flex-col items-start justify-center font-bold text-sm md:text-md lg:text-lg text-white hover:text-hover transition duration-500 cursor-pointer">
              <span className="">Simulasi Pendingin</span>
              <span>Perangkat</span>
            </div>
          </a>
          <div className="hidden md:flex flex-1 justify-between max-w-xs md:text-lg">
            <a
              href="/"
              className="py-2 hover:text-hover transition-all duration-500"
            >
              Home
            </a>
            <a
              href="/simulator"
              className="py-2 hover:text-hover transition-all duration-500"
            >
              Simulasi
            </a>
            <a
              href="/info"
              className="py-2 hover:text-hover transition-all duration-500"
            >
              Info
            </a>
            <a
              href="/rumus"
              className="py-2 hover:text-hover transition-all duration-500"
            >
              Rumus
            </a>
            <a
              href="/kami"
              className="py-2 hover:text-hover transition-all duration-500"
            >
              Kami
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
            className={`absolute top-full left-0 w-full text-white bg-transparent md:text-lg flex flex-col py-6 px-4 shadow-lg z-50 ${isOpen ? "border-b border-(--divider)" : ""} `}
          >
            <a
              href="/"
              className="py-4 hover:text-hover transition duration-300"
            >
              Home
            </a>
            <a
              href="/simulator"
              className="py-4 hover:text-hover transition-all duration-500"
            >
              Simulasi
            </a>
            <a
              href="/info"
              className="py-4 hover:text-hover transition-all duration-500"
            >
              Info
            </a>
            <a
              href="/rumus"
              className="py-4 hover:text-hover transition-all duration-500"
            >
              Rumus
            </a>
            <a
              href="/kami"
              className="py-4 hover:text-hover transition-all duration-500"
            >
              Kami
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
