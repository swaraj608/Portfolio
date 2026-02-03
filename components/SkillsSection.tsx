"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Database, Layers, Zap } from "lucide-react";

const SKILL_MODULES = [
  {
    id: "01",
    title: "Frontend_Logic",
    icon: <Code2 size={24} />,
    skills: ["Next.js 15", "React", "TypeScript", "Tailwind CSS"],
    status: "OPTIMIZED",
  },
  {
    id: "02",
    title: "Backend_Auth",
    icon: <Cpu size={24} />,
    skills: ["Node.js", "PostgreSQL", "Prisma", "Supabase"],
    status: "STABLE",
  },
  {
    id: "03",
    title: "Network_Flux",
    icon: <Globe size={24} />,
    skills: ["WebSockets", "REST APIs", "gRPC", "Webhooks"],
    status: "ACTIVE",
  },
  {
    id: "04",
    title: "System_Arch",
    icon: <Layers size={24} />,
    skills: ["Docker", "CI/CD Pipelines", "AWS", "Vercel Edge"],
    status: "ENCRYPTED",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-40 pt-20">
      {/* SECTION HEADER */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px w-12 bg-primary" />
        <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary whitespace-nowrap">
          CORE_SKILL_MODULES
        </h2>
        <div className="h-px flex-grow bg-primary/10" />
      </div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_MODULES.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-6 border border-primary/10 bg-primary/[0.02] hover:bg-primary/[0.05] transition-all duration-500 overflow-hidden"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }}
          >
            {/* BACKGROUND DECOR */}
            <div className="absolute top-0 right-0 p-2 opacity-10 text-primary group-hover:opacity-30 transition-opacity">
              <Zap size={40} />
            </div>

            {/* HEADER */}
            <div className="flex justify-between items-start mb-6">
              <div className="text-primary/60 group-hover:text-primary transition-colors duration-500">
                {module.icon}
              </div>
              <span className="text-[9px] font-mono text-zinc-600 font-bold tracking-widest">
                MOD_{module.id}
              </span>
            </div>

            {/* CONTENT */}
            <h3 className="text-xs font-black uppercase tracking-widest text-emerald-50 mb-4">
              {module.title}
            </h3>

            <ul className="space-y-2 mb-6">
              {module.skills.map((skill) => (
                <li key={skill} className="text-[10px] font-mono text-zinc-500 flex items-center gap-2 group-hover:text-zinc-300">
                  <div className="w-1 h-1 bg-primary/40 group-hover:bg-primary transition-colors" />
                  {skill}
                </li>
              ))}
            </ul>

            {/* FOOTER STATUS */}
            <div className="flex justify-between items-center border-t border-primary/10 pt-4 mt-auto">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-primary/20 group-hover:bg-primary transition-colors" />
                ))}
              </div>
              <span className="text-[8px] font-mono font-bold text-primary/40 group-hover:text-primary animate-pulse">
                {module.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}