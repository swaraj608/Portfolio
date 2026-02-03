import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SWARAJ | CORE_LOGIC",
  description: "High-stakes digital infrastructure. Next.js 15 // WebSockets // Low-Latency UI.",
  icons: {
    icon: "/favicon.ico", 
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
        className={`${inter.className} antialiased bg-[#020617] text-foreground flex flex-col min-h-screen`}
      >
        <ThemeProvider>
          {/* CLEANUP LOGIC:
              - Removed <nav> because it's now in page.tsx (or called as <Navbar />)
              - Removed <Footer /> because it's called inside page.tsx
              - This prevents double-rendering
          */}
          <main className="flex-grow">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}