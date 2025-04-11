import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BTKIT Springs",
  description: "A Social-media application for BTKIT Students , where u can share your photos , videos , follow each other , share notes and more cool features",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-purple-200 to-indigo-100` }
      >
        
        <Navbar></Navbar>
       
        
        {children}
      </body>
    </html>
  );
}
