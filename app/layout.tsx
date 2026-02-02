import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swaraj | Full-stack Developer",
  description: "Showcasing specialized digital tools, real-time trading interfaces, and automated systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.className} antialiased bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 flex flex-col min-h-screen`}
      >
        {/* --- NAVIGATION --- */}
        <nav className="fixed top-0 w-full z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-black/70 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity">
              SWARAJ<span className="text-primary">.</span>
            </a>
            
            <div className="flex gap-8 text-sm font-medium items-center">
              <a href="#projects" className="hidden md:block text-muted hover:text-foreground transition-colors">Projects</a>
              <a href="mailto:your@email.com" className="bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white px-5 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform">
                Hire Me
              </a>
            </div>
          </div>
        </nav>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-grow">
          {children}
        </main>

        {/* --- FOOTER --- */}
        <Footer />
      </body>
    </html>
  );
}