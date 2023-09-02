import { exo2, orbitron } from "@/app/fonts";
import Navbar from "@/components/Navbar";

import "./globals.css";

interface IProps {
  children: React.ReactNode;
}

export default function Root({ children }: IProps) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="text-center text-xs border-t py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </footer>
      </body>
    </html>
  );
}
