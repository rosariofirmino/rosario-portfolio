import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ThemeProvider from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Rosario Firmino Palazzolo | Software Engineer",
  description:
    "Senior Software Engineer at HubSpot. Building scalable, user-centric products with React, TypeScript, and AI tooling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body className={`${inter.variable} font-sans relative pt-28 sm:pt-36 noise`}>
        <ThemeProvider>
          {/* Morphing gradient orbs */}
          <div className="bg-orb bg-orb-1" />
          <div className="bg-orb bg-orb-2" />
          <div className="bg-orb bg-orb-3" />

          {/* Dot grid pattern */}
          <div className="fixed inset-0 dot-grid pointer-events-none -z-[1] opacity-40" />

          <Header />
          {children}
          <ThemeToggle />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
