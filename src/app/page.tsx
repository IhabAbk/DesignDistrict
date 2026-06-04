"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      {/* NAV (Server Component but with motion for scroll effect) */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3 group">
            {/* LOGO CIRCLE with pulse effect */}
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[rgba(234,179,8,0.35)] bg-white/[0.03] transition-all duration-300 group-hover:border-[rgba(234,179,8,0.6)] group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <Image
                src="/logo.png"
                alt="Design District logo"
                fill
                className="object-cover scale-110"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wider bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                DESIGN DISTRICT
              </div>
              <div className="text-xs text-white/60">Where Vision Finds Its Place</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            {["Services", "Work", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative transition-colors duration-300 hover:text-[#eab308] group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#eab308] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="rounded-full bg-gradient-to-r from-[#eab308] to-[#f5c518] px-5 py-2.5 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </motion.header>

      {/* SECTIONS */}
      <Hero />
      <Services />
      <Work />
      <Contact />
    </main>
  );
}