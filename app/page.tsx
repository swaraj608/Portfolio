"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

/**
 * CORE SYSTEM ORCHESTRATOR
 * Assembly point for the SWARAJ_LOGIC interface.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-foreground font-mono selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      
      {/* --- LAYER 0: HUD & ENVIRONMENT --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* CRT Scanline Overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[linear-gradient(rgba(16,185,129,0)_50%,#000_50%)] bg-[length:100%_4px]" />
        
        {/* Atmospheric Ambient Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.15),transparent_75%)]" />
        
        {/* Grid Floor Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-[linear-gradient(to_top,#020617,transparent)] z-10" />
      </div>

      {/* --- LAYER 1: NAVIGATION --- */}
      <Navbar />

      {/* --- LAYER 2: MAIN INTERFACE --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* MODULE 01: IDENTITY & ARCHITECTURE */}
        <Hero />

        {/* MODULE 02: CORE LOGIC (SKILLS) */}
        <SkillsSection />

        {/* MODULE 03: ENCRYPTED VAULTS (PROJECTS) */}
        <section id="projects" className="relative py-20 border-t border-primary/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] block">
                  Data_Stream: Project_Vaults
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white">
                Featured_Records
              </h3>
            </div>
            
            {/* System Metadata Readout */}
            <div className="hidden md:block text-right font-mono text-[9px] text-zinc-600 uppercase tracking-widest leading-loose border-r-2 border-primary/20 pr-6">
              Path: /root/swaraj/vault <br />
              Status: Compiled_Successful <br />
              Records_Count: 03
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Pro-Trade"
              desc="Real-time crypto engine with WebSocket integration. Optimized for sub-ms latency and high-frequency data streams."
              tags={["TypeScript", "WebSockets", "Next.js"]}
              github="https://github.com/swaraj608/Pro-Trade"
            />
            <ProjectCard 
              title="Price-Tracker"
              desc="Autonomous monitoring protocol designed to scrap and analyze price fluctuations across global e-commerce nodes."
              tags={["Automation", "Scraping", "Node.js"]}
              github="https://github.com/swaraj608/Price-Tracker"
            />
            <ProjectCard 
              title="iChat"
              desc="Encrypted real-time communication portal featuring localized notification logic and responsive socket protocols."
              tags={["Socket.io", "React", "CSS_Grid"]}
              github="https://github.com/swaraj608/iChat"
            />

            <ProjectCard 
             title="Stegano-Logic-Toolkit"
             desc="A Python-based cryptographic tool utilizing LSB (Least Significant Bit) encoding and XOR encryption to embed obfuscated data within lossless image carriers."
             tags={["Python", "Cryptography", "Image_Processing"]}
             github="https://github.com/swaraj608/STEGANOGRAPHY"
            />

          <ProjectCard 
            title="E-Commerce Platform"
            desc="A full-stack MERN architecture featuring a decoupled frontend and backend, persistent state management, and RESTful API endpoints for comprehensive product lifecycle handling."
            tags={["MongoDB", "Express", "React", "Node"]}
            github="https://github.com/swaraj608/final-ecommerce"
          />
          </div>
        </section>

        {/* MODULE 04: CONNECTION TERMINAL (FOOTER) */}
        <Footer />

      </main>
    </div>
  );
}