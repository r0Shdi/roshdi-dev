import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Roshdi Farag | Portfolio",
  description: "Its Time To know me better",

    icons: {
      icon: "/roshdi.png", // path relative to /public
    },
  };


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-6xl mx-auto px-6 py-10">{children}</main>
        <footer className="border-t mt-12 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Roshdi Farag.
        </footer>
      </body>
    </html>
  );
}
