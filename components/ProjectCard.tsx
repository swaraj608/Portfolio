"use client";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  desc: string;
  tags: string[];
  github: string;
}

export default function ProjectCard({ title, desc, tags, github }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-primary">
          <Github size={24} />
        </div>
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <ArrowUpRight size={20} className="text-muted group-hover:text-primary transition-colors" />
        </a>
      </div>

      <h3 className="text-xl font-bold mb-2 tracking-tight">{title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
        {desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 border border-zinc-200 dark:border-zinc-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}