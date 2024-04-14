// Layout for Company
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Gerarden Fabrication Tables",
  description: "Gerarden Fabrication Tables are the best in the business!",
  icons: [{ rel: "icon", url: "glogo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
