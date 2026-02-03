"use client";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Code2, Cpu, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-foreground font-mono selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      
      {/* --- GLOBAL HUD DECORATION --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Horizontal Scanlines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[linear-gradient(rgba(16,185,129,0)_50%,#000_50%)] bg-[length:100%_4px]" />
        {/* Deep Green Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.1),transparent_70%)]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        
        {/* --- HERO COMPONENT --- */}
        <Hero />

        {/* --- SKILLS SECTION (CORE_MODULES) --- */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-grow bg-primary/10" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/50 whitespace-nowrap">Core_Modules</h2>
            <div className="h-px flex-grow bg-primary/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <SkillCard icon={<Code2 size={20} />} title="Frontend" desc="High-Performance Next.js 15, Tailwind, GSAP" />
            <SkillCard icon={<Cpu size={20} />} title="Backend" desc="Node.js, Real-time WebSockets, PostgreSQL" />
            <SkillCard icon={<Globe size={20} />} title="Systems" desc="Distributed Architecture, CI/CD, Edge Computing" />
          </div>
        </section>

        {/* --- PROJECTS SECTION (VAULT) --- */}
        <section id="projects" className="relative">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-primary font-mono text-[10px] uppercase tracking-widest mb-2 block">// Portfolio_Output</span>
              <h3 className="text-4xl font-black tracking-tighter uppercase italic text-white">Featured_Vaults</h3>
            </div>
            <div className="text-right font-mono text-[10px] text-zinc-600 uppercase">
              Page: 01 // Total_Records: 03
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Pro-Trade"
              desc="A real-time crypto trading interface featuring live WebSocket data integration and a dual-layer architecture."
              tags={["WebSockets", "Finance", "Next.js"]}
              github="https://github.com/swaraj608/Pro-Trade"
            />
            <ProjectCard 
              title="Price-Tracker"
              desc="Automated tool designed to monitor price fluctuations across e-commerce platforms with data scraping."
              tags={["Scraping", "Automation", "Node.js"]}
              github="https://github.com/swaraj608/Price-Tracker"
            />
            <ProjectCard 
              title="iChat"
              desc="Real-time chat application featuring notification sounds, responsive design, and WebSocket communication."
              tags={["Socket.io", "Real-time", "JavaScript"]}
              github="https://github.com/swaraj608/iChat"
            />
          </div>
        </section>

      </main>
    </div>
  );
}

/* --- CYBER HELPERS (Localized to Page) --- */

function SkillCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-8 border border-primary/10 bg-primary/[0.02] hover:bg-primary/[0.05] transition-colors group">
      <div className="text-primary/40 group-hover:text-primary transition-colors mb-6 group-hover:scale-110 duration-500">
        {icon}
      </div>
      <h4 className="font-bold text-xs uppercase tracking-widest mb-3 text-emerald-50">{title}</h4>
      <p className="text-[11px] font-mono text-zinc-500 leading-relaxed uppercase tracking-tight">
        {desc}
      </p>
    </div>
  );
}