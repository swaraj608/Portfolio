"use client";
import { Mail, ArrowRight, MapPin, Terminal, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/20 bg-[#020617] pt-24 pb-12 overflow-hidden">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.3),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-20">
          
          {/* Left Side: System Hook */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-2 py-1 bg-primary/5 border border-primary/20">
              <Zap size={12} className="text-primary animate-pulse" />
              <span className="text-[9px] font-bold tracking-[0.3em] text-primary uppercase">Connection_Protocol</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic leading-[0.9]">
              Ready to initialize <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">
                New_Infrastructure?
              </span>
            </h2>
            
            <p className="text-zinc-500 font-mono text-xs uppercase leading-relaxed max-w-sm tracking-tight">
              // Available for high-stakes engineering roles. <br />
              // Latency: Under 24 hour response time. <br />
              // Objective: Deploying logic that scales.
            </p>
          </div>

          {/* Right Side: Command Execution */}
          <div className="flex flex-col justify-center md:items-end">
            <a 
              href="mailto:swarajmedha@gmail.com" 
              style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }}
              className="group relative flex items-center gap-6 bg-primary px-10 py-6 transition-all hover:bg-emerald-400 active:scale-95"
            >
              <div className="flex flex-col items-start text-black">
                <span className="text-[10px] uppercase font-black tracking-widest opacity-60 font-mono">Execute_Contact</span>
                <span className="text-xl font-black tracking-tighter uppercase italic">your@email.com</span>
              </div>
              <div className="p-3 bg-black/10 rounded-none group-hover:translate-x-2 transition-transform border border-black/5">
                <ArrowRight size={24} className="text-black" />
              </div>
            </a>
            
            <div className="mt-8 flex items-center gap-3 text-zinc-600 font-mono text-[10px] uppercase tracking-widest border-r-2 border-primary/20 pr-4">
              <MapPin size={12} className="text-primary/50" />
              <span>Node: India // Access: Worldwide</span>
            </div>
          </div>
        </div>

        {/* System Bottom Bar */}
        <div className="pt-10 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 group cursor-help">
             <div className="relative h-2 w-2">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                <div className="relative h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
             </div>
             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 group-hover:text-primary transition-colors">
                System_Status: Optimal // Open_for_Deployment
             </span>
          </div>
          
          <div className="flex flex-col md:items-end gap-1">
            <p className="text-[9px] font-bold tracking-[0.3em] text-zinc-700 uppercase">
              © 2026 SWARAJ_LOGIC // Core_V1.5
            </p>
            <div className="flex gap-4 items-center">
              <span className="h-[1px] w-8 bg-primary/20" />
              <p className="text-[8px] font-mono text-zinc-800 uppercase tracking-tighter italic">
                Compiled with Next.js 15 & Tailwind_Engine
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}