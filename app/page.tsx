import { Github, Linkedin, Mail, Code2, Globe, Cpu } from "lucide-react";
import ProjectCard from "@/components/ProjectCard"; // Make sure the path is correct

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
            Building digital products that <span className="text-muted text-zinc-400">scale.</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            I’m a <span className="text-foreground font-medium">Full-stack Developer</span> focused on creating high-performance, accessible, and beautiful web applications using Next.js 15.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#projects" className="h-12 px-6 flex items-center justify-center rounded-full bg-foreground text-background font-medium transition-transform hover:scale-105">
              View My Work
            </a>
            <div className="flex items-center gap-2">
              <SocialLink href="https://github.com/swaraj608" icon={<Github size={20} />} />
              <SocialLink href="https://linkedin.com/in/your-profile" icon={<Linkedin size={20} />} />
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
        <section id="projects" className="py-20 border-t border-border">
          <h3 className="text-3xl font-bold mb-12 tracking-tight">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProjectCard 
              title="Pro-Trade"
              desc="Crypto trading interface with WebSocket integration for real-time data updates."
              tags={["TypeScript", "WebSockets", "Next.js"]}
              github="https://github.com/swaraj608/Pro-Trade"
            />
            <ProjectCard 
              title="Price-Tracker"
              desc="Automated tool for monitoring e-commerce price changes via web scraping."
              tags={["Next.js", "Scraping", "Node.js"]}
              github="https://github.com/swaraj608/Price-Tracker"
            />
          </div>
        </section>

      </main>
    </div>
  );
}

/* --- REUSABLE HELPERS --- */

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" className="h-12 w-12 flex items-center justify-center rounded-full border border-border transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 text-muted hover:text-foreground">
      {icon}
    </a>
  );
}

function SkillCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-sm">
      <div className="text-primary mb-4">{icon}</div>
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-sm text-muted leading-relaxed">{desc}</p>
    </div>
  );
}