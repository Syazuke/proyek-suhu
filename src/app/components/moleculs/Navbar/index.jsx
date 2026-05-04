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
    <nav className="bg-transparent text-white top-0 z-50 absolute w-full">
      <div className="mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <h1 className="text-3xl">Suhu</h1>
          <div className="hidden md:flex flex-1 justify-between max-w-xs">
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
              simulasi
            </a>
            <a
              href="/info"
              className="py-2 hover:text-hover transition-all duration-500"
            >
              info
            </a>
            <a
              href="/rumus"
              className="py-2 hover:text-hover transition-all duration-500"
            >
              rumus
            </a>
            <a
              href="/kami"
              className="py-2 hover:text-hover transition-all duration-500"
            >
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
            className={`absolute top-full left-0 w-full text-white bg-transparent flex flex-col py-6 px-4 shadow-lg z-50 ${isOpen ? "border-b border-(--divider)" : ""} `}
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
              simulasi
            </a>
            <a
              href="/info"
              className="py-4 hover:text-hover transition-all duration-500"
            >
              info
            </a>
            <a
              href="/rumus"
              className="py-4 hover:text-hover transition-all duration-500"
            >
              rumus
            </a>
            <a
              href="/kami"
              className="py-4 hover:text-hover transition-all duration-500"
            >
              kami
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
