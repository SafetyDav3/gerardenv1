import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
      <body className={`${inter.className} bg-transparent`}> {/* add bg-transparent to remove the gap */}
        <div className="min-h-screen flex flex-col">
          {children}
          <div className="flex-grow bg-slate-50" ></div> {/* div with flex-grow to fill the gap */}
          <Footer />
        </div>
      </body>
    </html>
  );
}


