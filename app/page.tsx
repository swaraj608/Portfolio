"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-foreground font-mono selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      
      {/* --- HUD DECORATION LAYER --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* CRT Scanline Effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[linear-gradient(rgba(16,185,129,0)_50%,#000_50%)] bg-[length:100%_4px]" />
        {/* Top-Down Ambient Emerald Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.12),transparent_75%)]" />
      </div>

      {/* --- SYSTEM NAVIGATION --- */}
      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        
        {/* --- 01: HERO MODULE --- */}
        <Hero />

        {/* --- 02: SKILLS MODULE (CORE_LOGIC) --- */}
        <section id="skills" className="mb-40 pt-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-grow bg-primary/10" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/50 whitespace-nowrap">
              LOGIC_CORE_ACTIVE
            </h2>
            <div className="h-px flex-grow bg-primary/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-primary/5 border border-primary/10 p-1">
            <SkillCard icon={<Code2 size={22} />} title="Frontend" desc="Next.js 15, React, Tailwind, GSAP Architecture" />
            <SkillCard icon={<Cpu size={22} />} title="Backend" desc="Node.js, PostgreSQL, Real-time WebSockets" />
            <SkillCard icon={<Globe size={22} />} title="Systems" desc="Edge Deployment, CI/CD, Distributed Logic" />
          </div>
        </section>

        {/* --- 03: PROJECTS MODULE (VAULT) --- */}
        <section id="projects" className="relative py-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="space-y-2">
              <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] block animate-pulse">
                // STREAMS: ACTIVE_PROJECT_DATA
              </span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white drop-shadow-sm">
                ENCRYPTED_VAULTS
              </h3>
            </div>
            <div className="text-right font-mono text-[9px] text-zinc-600 uppercase tracking-widest leading-relaxed border-r-2 border-primary/20 pr-4">
              Directory: /root/projects <br />
              Total_Items: 03_Records
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Pro-Trade"
              desc="A high-performance crypto trading interface featuring live WebSocket data integration and sub-ms state updates."
              tags={["WebSockets", "Finance", "Next.js"]}
              github="https://github.com/swaraj608/Pro-Trade"
            />
            <ProjectCard 
              title="Price-Tracker"
              desc="Automated tool designed to monitor price fluctuations across e-commerce platforms with intelligent scraping."
              tags={["Automation", "Node.js", "Scraping"]}
              github="https://github.com/swaraj608/Price-Tracker"
            />
            <ProjectCard 
              title="iChat"
              desc="Ultra-low latency chat application featuring notification systems and responsive WebSocket communication."
              tags={["Socket.io", "Real-time", "JS"]}
              github="https://github.com/swaraj608/iChat"
            />
          </div>
        </section>

        {/* --- 04: SYSTEM FOOTER --- */}
        <footer className="mt-40 pt-10 border-t border-primary/10 text-center">
          <p className="text-[9px] text-zinc-700 font-mono tracking-[0.5em] uppercase">
            Swaraj_Logic // Authorization: Level_0 // 2026_Compiled
          </p>
        </footer>

      </main>
    </div>
  );
}

/* --- SYSTEM HELPERS --- */

function SkillCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-8 bg-[#020617] border border-primary/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
      {/* Hover Background Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="text-primary/40 group-hover:text-primary transition-colors mb-6 group-hover:scale-110 duration-500 transform-gpu">
        {icon}
      </div>
      <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-emerald-50 group-hover:translate-x-1 transition-transform">
        {title}
      </h4>
      <p className="text-[11px] font-mono text-zinc-500 leading-relaxed uppercase tracking-tight group-hover:text-zinc-400 transition-colors">
        {desc}
      </p>
    </div>
  );
}