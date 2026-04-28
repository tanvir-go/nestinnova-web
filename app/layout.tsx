import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { QuoteModalProvider } from "@/components/QuoteModalContext";

export const metadata: Metadata = {
  title: "Nestinnova - Scalable Digital Solutions",
  description: "Building the future of IT services and software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <QuoteModalProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
