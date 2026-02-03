"use client";
import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-primary/30 bg-primary/5 text-primary text-[10px] font-mono uppercase tracking-[0.3em] mb-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          System Status: Operational
        </motion.div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
          SECURE. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-amber-500 text-glow-emerald">
            SCALABLE.
          </span>
        </h1>
        
        <p className="text-zinc-500 dark:text-emerald-500/60 text-lg md:text-xl max-w-2xl mx-auto font-mono mb-12 uppercase tracking-tight">
          &gt; Swaraj // Full-Stack Architect <br />
          &gt; Specializing in low-latency trading logic and automated defensive systems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-primary text-background font-bold rounded-sm hover:skew-x-[-10deg] transition-all flex items-center gap-2">
            INITIALIZE EXPLORATION <ArrowRight size={18} />
          </button>
          
          {/* Subtle Stats */}
          <div className="flex gap-8 border-l border-primary/20 pl-8">
            <div className="text-left">
              <p className="text-[10px] text-zinc-500 uppercase">Uptime</p>
              <p className="font-mono text-primary">99.9%</p>
            </div>
            <div className="text-left">
              <p className="text-[10px] text-zinc-500 uppercase">Latency</p>
              <p className="font-mono text-secondary">24ms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}