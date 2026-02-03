import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swaraj | Full-stack Developer",
  description: "Specialized in real-time trading interfaces, automated tools, and scalable web applications.",
  icons: {
    icon: "/favicon.ico", // Make sure to add a favicon in your public folder!
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body 
        className={`${inter.className} antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col min-h-screen transition-colors duration-300`}
      >
        <ThemeProvider>
          {/* --- NAVIGATION --- */}
          <nav className="fixed top-0 w-full z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
              <a href="/" className="font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity flex items-center">
               SWARAJ<span className="text-blue-500 text-2xl leading-none ml-px">.</span>
              </a>
              
              <div className="flex gap-4 md:gap-8 text-sm font-medium items-center">
                <a href="#about" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">About</a>
                <a href="#projects" className="hidden sm:block text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</a>
                
                {/* Vertical Divider */}
                <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
                
                <ThemeToggle />
                
                <a 
                  href="mailto:your@email.com" 
                  className="hidden md:flex bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white px-5 py-2 rounded-full text-xs font-bold hover:scale-105 active:scale-95 transition-all"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </nav>

          {/* --- MAIN CONTENT --- */}
          <main className="flex-grow pt-16">
            {children}
          </main>

          {/* --- FOOTER --- */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}