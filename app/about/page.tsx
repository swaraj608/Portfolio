"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { User, Download, GraduationCap, MapPin, Briefcase, FileCode } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-foreground font-mono selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      
      {/* HUD DECORATION */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[linear-gradient(rgba(16,185,129,0)_50%,#000_50%)] bg-[length:100%_4px]" />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        
        {/* --- SECTION 01: IDENTITY DOSSIER --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-6"
            >
              <User size={14} /> // USER_IDENTITY_VERIFIED
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-8"
            >
              MEDHA <br />
              <span className="text-zinc-600">SWARAJ</span>
            </motion.h1>

            <div className="space-y-4 text-zinc-400 text-sm uppercase tracking-tight mb-10">
              <div className="flex items-center gap-3">
                <GraduationCap size={18} className="text-primary" />
                <span>3rd Year, B.Tech Computer Science</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                <span>Katihar Engineering College, Katihar</span>
              </div>
            </div>

            {/* RESUME DOWNLOAD BUTTON */}
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/Medha_Swaraj_Resume.pdf" // Ensure this file is in your /public folder
              download
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%)" }}
              className="inline-flex items-center gap-4 bg-primary text-black px-8 py-5 font-black text-xs tracking-[0.2em] uppercase hover:bg-emerald-400 transition-all group"
            >
              Download_Resume_v2.0 <Download size={18} className="group-hover:bounce" />
            </motion.a>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="p-8 border border-primary/10 bg-primary/5 space-y-4 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 opacity-10"><FileCode size={80}/></div>
               <h3 className="text-primary text-[10px] font-bold tracking-widest uppercase">// SYSTEM_SPECS</h3>
               <p className="text-[11px] text-zinc-500 leading-relaxed uppercase">
                 Focusing on High-Frequency Web Architecture and Automated Logic. 
                 Currently maintaining a 7.9+ protocol (CGPA) while deploying real-world 
                 logic streams in the Next.js ecosystem.
               </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 02: DEEP LOGIC (BIO) --- */}
        <div className="space-y-24">
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-primary/5 pt-16"
          >
            <div className="text-primary/40 font-bold text-[10px] tracking-widest uppercase">
              [01] THE_NARRATIVE
            </div>
            <div className="md:col-span-2 space-y-6 text-zinc-400 text-sm leading-relaxed uppercase tracking-tight font-mono">
              <p>
                As a Computer Science student at Katihar Engineering College, I’ve moved beyond academic theory to build production-ready digital infrastructure. My work focuses on removing friction between complex data and the end-user.
              </p>
              <p>
  I bridge the gap between <span className="text-primary">complex requirements</span> and <span className="text-primary">high-performance solutions</span> by maintaining a "System Architect" discipline—optimizing for speed, hardening security, and ensuring <span className="text-primary">architectural clarity</span> in every line of code.
</p>
            </div>
          </motion.section>

          {/* ACADEMIC MILESTONES */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-primary/5 pt-16"
          >
            <div className="text-primary/40 font-bold text-[10px] tracking-widest uppercase">
              [02] ACADEMIC_TRACK
            </div>
            <div className="md:col-span-2 space-y-8">
              <AcademicRow year="2023 - 2027" title="B.Tech Computer Science" institution="Katihar Engineering College, Katihar" status="IN_PROGRESS" />
              <AcademicRow year="2021 - 2023" title="Higher Secondary" institution="HS B. M. P. -7, Katihar" status="COMPLETED" />
            </div>
          </motion.section>
        </div>

        <Footer />
      </main>
    </div>
  );
}

/* HELPER COMPONENTS */

function AcademicRow({ year, title, institution, status }: any) {
  return (
    <div className="group flex flex-col md:flex-row justify-between gap-2 border-b border-primary/5 pb-4">
      <div className="space-y-1">
        <div className="text-[9px] text-primary/60 font-bold">{year}</div>
        <h4 className="text-emerald-50 text-sm font-black uppercase tracking-widest">{title}</h4>
        <div className="text-[10px] text-zinc-500 uppercase">{institution}</div>
      </div>
      <div className="text-[9px] font-mono text-zinc-600 self-end md:self-center border border-zinc-800 px-2 py-1 group-hover:border-primary/30 group-hover:text-primary transition-colors">
        STATUS: {status}
      </div>
    </div>
  );
}