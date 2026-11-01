import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{
    default: "ilham fajariawan | Portofolio",
    template: "%s | ilham fajariawan",
   },
  description: "Portofolio ilham fajariawan, sisiwa SMK calon junior web developer di kelas industri UBIG",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
       <body className="min-h-full flex flex-col bg-latar text gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
