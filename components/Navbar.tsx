"use client";
import { motion } from "framer-motion";
import { Shield, Menu, X, Terminal, Cpu } from "lucide-react";
import { useState } from "react";
import Link from "next/link"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-primary/20 bg-[#020617]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono">
        
        {/* LOGO / SYSTEM ID */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-3 h-3 bg-primary animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]" />
            <div className="absolute inset-0 w-3 h-3 bg-primary/20 animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xs tracking-[0.3em] uppercase group-hover:text-primary transition-colors">
              SWARAJ_LOGIC
            </span>
            <span className="text-[8px] text-zinc-600 uppercase tracking-widest leading-none">
              Terminal_Active: v1.0.4
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 items-center">
          <NavLink href="/about" label="ROOT_DIR" index="01" />
          <NavLink href="/#projects" label="VAULT_FILES" index="02" />
          <NavLink href="/#skills" label="LOGIC_CORE" index="03" />
          
          <a 
            href="mailto:swarajmedha@gmail.com" 
            className="relative group px-5 py-2 overflow-hidden border border-primary/40"
          >
            <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 text-[10px] font-bold text-primary group-hover:text-black transition-colors tracking-widest uppercase flex items-center gap-2">
              EXECUTE_CONTACT <Shield size={12} />
            </span>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-primary p-2 border border-primary/10 bg-primary/5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden absolute top-16 left-0 w-full bg-[#020617] border-b border-primary/20 p-8 flex flex-col gap-8 z-50 shadow-2xl"
        >
          <div className="flex flex-col gap-6">
            <NavLink href="/about" label="ROOT_DIR" index="01" onClick={() => setIsOpen(false)} />
            <NavLink href="/#projects" label="VAULT_FILES" index="02" onClick={() => setIsOpen(false)} />
            <NavLink href="/#skills" label="LOGIC_CORE" index="03" onClick={() => setIsOpen(false)} />
          </div>
          
          <div className="pt-6 border-t border-primary/10">
            <div className="flex items-center gap-2 text-zinc-600 text-[10px] uppercase tracking-widest">
                <Cpu size={12} className="text-primary/40" />
                System_Node: Active_India
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function NavLink({ href, label, index, onClick }: { href: string; label: string; index: string; onClick?: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="group flex items-center gap-2 text-[10px] tracking-[0.2em] font-bold text-zinc-500 hover:text-primary transition-colors"
    >
      <span className="text-primary/30 group-hover:text-primary/60 transition-colors">[{index}]</span>
      {label}
    </Link>
  );
}