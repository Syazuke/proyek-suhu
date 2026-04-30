"use client";
import { useState, useEffect } from "react";

export default function RumusPage() {
  const [time, setTime] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(0);

  const initialTemp = 80; // suhu awal
  const ambientTemp = 30; // suhu lingkungan
  const k = 0.1; // konstanta pendinginan

  const calculateTemp = (t) => {
    return ambientTemp + (initialTemp - ambientTemp) * Math.exp(-k * t);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCurrentTemp(calculateTemp(time));
  }, [time]);

  return (
    <div className="text-black text-center mt-10">
      <h1 className="text-2xl mb-4">Simulasi Pendinginan</h1>

      <p>Waktu: {time} detik</p>
      <p>Suhu: {currentTemp.toFixed(2)} °C</p>
    </div>
  );
}
