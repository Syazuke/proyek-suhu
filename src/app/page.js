"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [init, setInit] = useState(false);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("simulasi_username");

    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      setIsShowPopup(true);
    }
  }, []);

  const handleLogoutUsername = () => {
    localStorage.removeItem("simulasi_username");
    setUsername("");
    setIsShowPopup(true);
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (usernameInput.trim() !== "") {
      const name = usernameInput.trim();
      setUsername(name);
      setIsShowPopup(false);
      localStorage.setItem("simulasi_username", name);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white text-center p-4 overflow-hidden relative">
      {/* POP-UP MODAL USERNAME */}
      <AnimatePresence>
        {isShowPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl max-w-sm w-full relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full -z-10"></div>

              <h2 className="text-2xl font-semibold mb-2">Selamat Datang</h2>
              <p className="text-white/50 text-sm mb-6">
                Silakan masukkan nama Anda untuk memulai simulasi.
              </p>

              <form onSubmit={handleNameSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="Nama Anda..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 text-white placeholder:text-white/30 transition-colors"
                  required
                  autoFocus
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600/80 hover:bg-blue-500 text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                >
                  Mulai
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Partikel Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: false },
                resize: true,
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.7,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
              },
              number: {
                density: { enable: true, area: 800 },
                value: 200,
              },
              opacity: { value: 0.2 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* 2. Konten Utama dengan Animasi Muncul */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Menyapa pengguna jika nama sudah diisi */}

        <h1 className="text-4xl md:text-6xl font-semibold mb-2 tracking-tight drop-shadow-lg">
          Simulasi Pendinginan Perangkat
        </h1>

        <p className="mb-4 text-white/50 text-lg font-light">
          Visualisasi interaktif proses pendinginan perangkat
        </p>
        {!isShowPopup && username && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm backdrop-blur-md"
          >
            Mari mulai simulasi,
            <span className="font-semibold text-white"> {username}</span> 🚀
          </motion.div>
        )}

        {/* Kontainer Tabs */}
        <div className="flex p-1.5 gap-1 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl items-center">
          <Link href="/simulator">
            <button className="relative px-8 py-3 rounded-full transition-all duration-300 group overflow-hidden bg-white/10 border border-white/10 hover:border-white/20">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 font-medium text-white group-hover:text-blue-400 transition-colors">
                Mulai Simulasi
              </span>
            </button>
          </Link>

          <Link href="/rumus">
            <button className="px-6 py-3 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium">
              Rumus
            </button>
          </Link>

          <Link href="/info">
            <button className="px-6 py-3 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium">
              Info
            </button>
          </Link>

          <Link href="/about">
            <button className="px-6 py-3 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium">
              Kami
            </button>
          </Link>
          <button
            onClick={handleLogoutUsername}
            className="px-6 py-3 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium"
          >
            <p>Logout</p>
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-8 z-20 flex items-center gap-3"
      >
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
        <span className="text-xs font-light tracking-[0.2em] text-white/30 border-l border-white/10 pl-3">
          Di buat untuk memenuhi projek UAS mata kuliah kalkulus lanjut
        </span>
      </motion.div>

      {/* Glow Statis */}
      <div className="absolute -z-10 w-150 h-150 bg-blue-600/5 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}
