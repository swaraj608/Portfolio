"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { User, Target, History, terminal } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-foreground font-mono selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      
      {/* HUD DECORATION */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[linear-gradient(rgba(16,185,129,0)_50%,#000_50%)] bg-[length:100%_4px]" />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        
        {/* PAGE HEADER */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4"
          >
            <User size={14} /> // PROFILE_QUERY: SWARAJ
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic"
          >
            THE_HUMAN <br />
            <span className="text-zinc-600">_BEHIND_THE_LOGIC</span>
          </motion.h1>
        </section>

        {/* CONTENT GRID */}
        <div className="space-y-24">
          
          {/* BIO SECTION */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="text-primary/40 font-bold text-[10px] tracking-widest uppercase pt-2">
              [01] THE_NARRATIVE
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-400 text-sm leading-relaxed uppercase tracking-tight">
              <p>
                Based in India, I operate at the intersection of high-performance frontend architecture and robust backend logic. My journey started with a fascination for how digital systems handle real-time data, leading me to specialize in the Next.js 15 ecosystem and WebSocket protocols.
              </p>
              <p>
                I don’t just build "websites." I architect interfaces for high-stakes environments—whether it's crypto trading desks or automated data scrapers. Every line of code is written with two priorities: <span className="text-primary">Low-Latency</span> and <span className="text-primary">High-Scalability</span>.
              </p>
            </div>
          </motion.section>

          {/* MISSION SECTION */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="text-primary/40 font-bold text-[10px] tracking-widest uppercase pt-2">
              [02] MISSION_STATEMENT
            </div>
            <div className="md:col-span-2 bg-primary/5 border-l-2 border-primary p-8 italic">
               <p className="text-emerald-50 text-lg font-black tracking-tighter uppercase">
                 "To bridge the gap between complex backend infrastructure and seamless user experiences through rigorous engineering and minimal friction."
               </p>
            </div>
          </motion.section>

          {/* QUICK STATS / DOSSIER */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-primary/10 pt-12"
          >
            <Stat label="Location" value="India // Remote" />
            <Stat label="Experience" value="Full-Stack Dev" />
            <Stat label="Availability" value="Open for Work" />
            <Stat label="Timezone" value="IST (UTC+5:30)" />
          </motion.section>

        </div>

        <div className="mt-32">
            <Footer />
        </div>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <div className="text-[9px] text-zinc-600 uppercase tracking-widest">{label}</div>
      <div className="text-[11px] text-primary font-bold uppercase">{value}</div>
    </div>
  );
}