import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerarden Fabrication Tables",
  description: "Gerarden Fabrication Tables are the best in the business!",
  icons: [{ rel: "icon", url: "/public/glogo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
