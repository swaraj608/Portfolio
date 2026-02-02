"use client";
import { Mail, ArrowRight, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-black pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16">
          
          {/* Left Side: Professional Hook */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Have a project in mind? <br />
              <span className="text-zinc-400">Let&apos;s make it happen.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-md">
              I&apos;m currently available for full-time roles and freelance projects. 
              I respond to all inquiries within 24 hours.
            </p>
          </div>

          {/* Right Side: Professional Contact Method */}
          <div className="flex flex-col justify-center md:items-end">
            <a 
              href="mailto:your@email.com" 
              className="group flex items-center gap-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-8 py-4 rounded-2xl transition-all hover:scale-[1.02]"
            >
              <div className="flex flex-col items-start">
                <span className="text-xs uppercase font-bold tracking-widest opacity-70">Send an Email</span>
                <span className="text-lg font-semibold">your@email.com</span>
              </div>
              <div className="p-2 bg-white/10 dark:bg-black/10 rounded-lg group-hover:translate-x-1 transition-transform">
                <ArrowRight size={20} />
              </div>
            </a>
            
            <div className="mt-6 flex items-center gap-2 text-muted text-sm italic">
              <MapPin size={14} />
              <span>Based in India, working worldwide.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-50 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
             <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
               Status: Ready for work
             </span>
          </div>
          
          <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
            © {new Date().getFullYear()} Swaraj — Built with Next.js 15 & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}