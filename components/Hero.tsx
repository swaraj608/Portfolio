"use client";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
          I build <span className="text-primary">scalable</span> web applications with precision.
        </h1>
        
        <p className="text-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Hi, I&apos;m <span className="text-foreground font-medium">Your Name</span>. 
          A Full-stack Developer specialized in crafting high-performance interfaces 
          using Next.js 15 and the modern web ecosystem.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 items-center">
          <a 
            href="#projects" 
            className="group bg-foreground text-background px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-all"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex gap-3 ml-2">
            <SocialLink href="https://github.com" icon={<Github size={20} />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
            <SocialLink href="mailto:hello@example.com" icon={<Mail size={20} />} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      className="p-3 rounded-full border border-border hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-muted hover:text-foreground"
    >
      {icon}
    </a>
  );
}