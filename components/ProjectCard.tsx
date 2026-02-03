"use client";
import { motion } from "framer-motion";
import { Terminal, ExternalLink, Github, ShieldAlert } from "lucide-react";

interface ProjectCardProps {
  title: string;
  desc: string;
  tags: string[];
  github: string;
}

export default function ProjectCard({ title, desc, tags, github }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative p-px bg-primary/20 hover:bg-primary/40 transition-all duration-500 overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)" }}
    >
      {/* Background Layer */}
      <div className="relative h-full bg-[#020617] p-6 flex flex-col justify-between">
        
        {/* Module Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 border border-primary/30 text-primary bg-primary/5 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
              <Terminal size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-primary leading-none uppercase tracking-tighter">Status</span>
              <span className="text-[9px] font-mono text-emerald-500/50 leading-none uppercase">Encrypted</span>
            </div>
          </div>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Content */}
        <div className="mb-6">
          <h3 className="text-xl font-black text-white mb-2 font-mono tracking-tighter group-hover:text-primary transition-colors">
            {title.toUpperCase()}
          </h3>
          <p className="text-zinc-500 text-xs font-mono leading-relaxed line-clamp-3">
            // {desc}
          </p>
        </div>

        {/* Footer & Tags */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[9px] font-mono px-2 py-0.5 border border-primary/10 text-primary/60 bg-primary/5 hover:border-primary/40 transition-colors"
              >
                [{tag}]
              </span>
            ))}
          </div>

          <a 
            href={github} 
            target="_blank" 
            className="flex items-center justify-center gap-2 w-full py-2 bg-primary/5 border border-primary/30 font-mono text-[10px] font-bold text-primary hover:bg-primary hover:text-black transition-all duration-300"
          >
            DECRYPT_REPOSITORY <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Subtle Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </motion.div>
  );
}