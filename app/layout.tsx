import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio | Developer",
  description: "Building modern web experiences with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50`}>
        <nav className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="font-bold text-xl tracking-tighter">PORTFOLIO.</span>
            <div className="flex gap-6 text-sm font-medium">
              <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
              <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
              <a href="mailto:your@email.com" className="bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white px-4 py-2 rounded-lg">Hire Me</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}