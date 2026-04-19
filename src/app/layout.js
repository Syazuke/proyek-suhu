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
      <head>
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/webfonts/fa-solid-900.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
      </head>
      <body suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
