import type { Metadata } from "next";
import type { ReactNode } from "react";

/* ========================================
   INTER FONT - LOCAL PACKAGE
   No Google Fonts network request
======================================== */

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

import "./globals.css";

import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import ScrollToTopButton from "../components/Layouts/Scrolltotopbutton";

/* ========================================
   METADATA
======================================== */

export const metadata: Metadata = {
  title: {
    default: "Tax India Firm",
    template: "%s | Tax India Firm",
  },

  description:
    "Professional tax, business, income tax and legal services in India.",
};

/* ========================================
   ROOT LAYOUT
======================================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-body text-[#182536] antialiased">
        <Header />

        <main>{children}</main>

        <ScrollToTopButton />

        <Footer />
      </body>
    </html>
  );
}