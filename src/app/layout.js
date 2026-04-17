import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/moleculs/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Simulasi Pendinginan",
  description: "Simulasi Pendinginan CPU Smartphone",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      translate="no"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Tambahkan suppressHydrationWarning juga di <body> */}
      <body suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
