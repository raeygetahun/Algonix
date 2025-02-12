'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
        {
        
          <ReactLenis
            root
            options={{ lerp: 0.5, duration: 0.5, smoothTouch: true }}
          >
            {children}
          </ReactLenis>
          
        }
        <Footer/>
      </body>
    </html>
  );
}
