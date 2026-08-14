import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import ScrollToTopButton from "../components/Layouts/Scrolltotopbutton";

/* ========================================
   PRIMARY FONT - HEADINGS
======================================== */

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

/* ========================================
   SECONDARY FONT - BODY / PARAGRAPHS
======================================== */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* ========================================
   METADATA
======================================== */

export const metadata: Metadata = {
  title: "Tax India Firm",
  description:
    "Professional tax, business, income tax and legal services in India.",
};

/* ========================================
   ROOT LAYOUT
======================================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-white font-body text-[#182536] antialiased">
        <Header />

        {children}
        <ScrollToTopButton />

        <Footer />
      </body>
    </html>
  );
}