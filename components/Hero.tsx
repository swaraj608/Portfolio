"use client";
import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      {/* Decorative HUD Elements - Scanlines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] bg-[linear-gradient(transparent_50%,#000_50%)] bg-[length:100%_4px]" />

      <div className="max-w-6xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-3 px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-10"
        >
          <Activity size={14} className="text-primary animate-pulse" />
          <span>System_Status: Online // Protocol: SWARAJ_LOGIC_v1.0</span>
        </motion.div>

        {/* Main Title - Single Line Branding */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-12 italic uppercase whitespace-nowrap"
        >
          <span className="text-zinc-700">SWARAJ</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-primary to-emerald-800 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            _CORE_ENGINE
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mt-16"
        >
          {/* Left Column: Identity Descriptor */}
          <div className="space-y-6 border-l-2 border-primary/20 pl-6">
           <p className="text-zinc-500 font-mono text-sm leading-relaxed uppercase tracking-tight">
  <span className="text-primary/60">//</span> ROLE: FULL_STACK_ENGINEER <br />
  <span className="text-primary/60">//</span> FOCUS: COMPUTATIONAL_EFFICIENCY // SCALABLE_ARCH <br />
  <span className="text-primary/60">//</span> DEPLOYING: MODERN_WEB_STACK // REACT_NODE_FLUX
</p>
            
            {/* Integrated Social Links */}
            <div className="flex gap-4">
              <SocialIcon href="https://github.com/swaraj608" icon={<Github size={18} />} />
              <SocialIcon href="https://linkedin.com" icon={<Linkedin size={18} />} />
              <SocialIcon href="mailto:your@email.com" icon={<Mail size={18} />} />
            </div>
          </div>

          {/* Right Column: Primary Action & Meta */}
          <div className="flex flex-col gap-4">
            <a 
              href="#projects"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
              className="bg-primary text-black px-8 py-5 font-black text-xs tracking-widest uppercase hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 group active:scale-[0.98]"
            >
              INITIALIZE_VAULT_ACCESS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex justify-between font-mono text-[9px] text-zinc-600 px-2 uppercase tracking-widest">
              <span className="flex items-center gap-1"><ShieldCheck size={10} className="text-primary/50" /> Verified_Dev</span>
              <span>Ref: 00-LOGIC-STREAMS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Internal Helper for Hero Socials */
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 border border-primary/10 text-zinc-500 hover:text-primary hover:border-primary/40 transition-all hover:-translate-y-1 bg-primary/5"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
    >
      {icon}
    </a>
  );
}