// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Generated by Eduard Sedláček",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        {children}
        <Navbar /> {/* Use the new Navbar component */}
      </body>
    </html>
  );
}