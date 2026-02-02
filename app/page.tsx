import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUpRight, Code2, Globe, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-primary">
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        
        {/* --- HERO SECTION --- */}
        <section className="flex flex-col items-start gap-6 mb-32 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for New Projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Building digital products that <span className="text-muted">scale.</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            I’m a <span className="text-foreground font-medium">Full-stack Developer</span> focused on creating high-performance, accessible, and beautiful web applications using Next.js 15.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#projects" className="h-12 px-6 flex items-center justify-center rounded-full bg-foreground text-background font-medium transition-transform hover:scale-105">
              View My Work
            </a>
            <div className="flex items-center gap-2">
              <SocialLink href="https://github.com" icon={<Github size={20} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
              <SocialLink href="mailto:your@email.com" icon={<Mail size={20} />} />
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section className="mb-32">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted mb-8">Technical Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard icon={<Code2 />} title="Frontend" desc="React, Next.js, Tailwind, Framer Motion" />
            <SkillCard icon={<Cpu />} title="Backend" desc="Node.js, PostgreSQL, Prisma, Supabase" />
            <SkillCard icon={<Globe />} title="Architecture" desc="Server Components, API Design, SEO" />
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted mb-2">Portfolio</h2>
              <h3 className="text-3xl font-bold">Selected Projects</h3>
            </div>
            <a href="#" className="text-primary font-medium flex items-center gap-1 hover:underline">
              View all <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Modern SaaS Platform"
              desc="A full-stack dashboard with real-time analytics and Stripe integration."
              tags={["Next.js 15", "TypeScript", "Prisma"]}
            />
            <ProjectCard 
              title="AI Content Engine"
              desc="Generating high-quality marketing copy using OpenAI's latest models."
              tags={["OpenAI", "Server Actions", "Tailwind"]}
            />
          </div>
        </section>

      </main>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} className="h-12 w-12 flex items-center justify-center rounded-full border border-border transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 text-muted hover:text-foreground">
      {icon}
    </a>
  );
}

function SkillCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
      <div className="text-primary mb-4">{icon}</div>
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-sm text-muted leading-relaxed">{desc}</p>
    </div>
  );
}

function ProjectCard({ title, desc, tags }: { title: string; desc: string; tags: string[] }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-video relative rounded-2xl mb-4 overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-border group-hover:border-primary/50 transition-all">
        {/* Placeholder for Project Image */}
        <div className="absolute inset-0 flex items-center justify-center text-zinc-400 opacity-20 group-hover:scale-110 transition-transform">
           <Globe size={80} />
        </div>
      </div>
      <h4 className="text-xl font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
        {title} <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all" />
      </h4>
      <p className="text-muted text-sm mb-4 leading-relaxed">{desc}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}