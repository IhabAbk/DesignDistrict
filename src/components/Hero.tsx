"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, easeInOut, useReducedMotion } from "framer-motion";

function GoldLine() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(234,179,8,0.6)] to-transparent" />
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgba(234,179,8,0.35)] bg-[rgba(234,179,8,0.10)] px-3 py-1 text-[10px] tracking-wide text-[rgba(255,233,179,0.95)] backdrop-blur-sm sm:text-xs">
      {children}
    </span>
  );
}

function HeroBackdrop() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, 50, 0],
                y: [0, -30, 0],
              }
        }
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-[-10%] h-[320px] w-[320px] rounded-full bg-[rgba(234,179,8,0.08)] blur-3xl sm:h-[420px] sm:w-[420px] md:h-[520px] md:w-[520px]"
      />
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, -40, 0],
                y: [0, 30, 0],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-48 right-[-12%] h-[360px] w-[360px] rounded-full bg-[rgba(234,179,8,0.06)] blur-3xl sm:h-[460px] sm:w-[460px] md:h-[560px] md:w-[560px]"
      />

      {/* Diagonal lines pattern - hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-[0.08] sm:opacity-[0.12]">
        <div className="absolute left-[-20%] top-[-10%] h-[140%] w-[140%] rotate-[-12deg] bg-[linear-gradient(90deg,transparent,rgba(234,179,8,0.35),transparent)] [mask-image:repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_28px)]" />
      </div>

      {/* Floating particles - fewer on mobile */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute left-[5%] top-[15%] h-1 w-1 rounded-full bg-[rgba(234,179,8,0.9)] shadow-[0_0_20px_rgba(234,179,8,0.75)] sm:left-[10%] sm:top-[22%] sm:h-1.5 sm:w-1.5"
            animate={{ y: [0, -14, 0], opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[30%] top-[8%] h-0.5 w-0.5 rounded-full bg-[rgba(234,179,8,0.85)] shadow-[0_0_18px_rgba(234,179,8,0.65)] sm:left-[38%] sm:top-[12%] sm:h-1 sm:w-1"
            animate={{ y: [0, 18, 0], opacity: [0.35, 0.9, 0.35] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
          <motion.div
            className="absolute right-[10%] top-[30%] h-0.5 w-0.5 rounded-full bg-[rgba(234,179,8,0.9)] shadow-[0_0_20px_rgba(234,179,8,0.75)] sm:right-[18%] sm:top-[34%] sm:h-1.5 sm:w-1.5"
            animate={{ y: [0, -16, 0], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
        </>
      )}
    </div>
  );
}

function HeroArt() {
  return (
    <motion.div
      className="relative mt-8 md:mt-0"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="absolute -inset-3 rounded-[1.8rem] bg-[linear-gradient(135deg,rgba(234,179,8,0.16),transparent_55%)] blur-xl sm:-inset-4 sm:rounded-[2rem] md:-inset-6 md:rounded-[2.6rem] md:blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_90px_rgba(0,0,0,0.65)] backdrop-blur-sm sm:rounded-3xl">
        <div className="relative h-[280px] w-full sm:h-[380px] md:h-[480px] lg:h-[520px]">
          <Image
            src="https://picsum.photos/id/104/800/1000"
            alt="Luxury design studio workspace with modern equipment and creative tools"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
            unoptimized={process.env.NODE_ENV === 'development'}
          />

          {/* Gradient overlays - adjusted for mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent sm:bg-[radial-gradient(1200px_600px_at_20%_30%,rgba(0,0,0,0.35),rgba(0,0,0,0.72))]" />

          {/* Gold accent lines - hidden on mobile */}
          <div className="absolute left-0 top-0 hidden h-px w-full bg-[linear-gradient(90deg,transparent,rgba(234,179,8,0.55),transparent)] sm:block" />
          <div className="absolute bottom-0 left-0 hidden h-px w-full bg-[linear-gradient(90deg,transparent,rgba(234,179,8,0.35),transparent)] sm:block" />

          {/* Decorative geometric shapes - simplified on mobile */}
          <div className="absolute inset-0 opacity-[0.6] sm:opacity-[0.95]">
            <div className="absolute -right-10 top-10 h-[260px] w-[260px] rotate-45 bg-[linear-gradient(90deg,transparent,rgba(234,179,8,0.22),transparent)] blur-[1px] sm:h-[460px] sm:w-[460px] md:h-[560px] md:w-[560px]" />
            <div className="absolute -right-14 top-14 hidden h-[520px] w-[520px] rotate-45 bg-[linear-gradient(90deg,transparent,rgba(234,179,8,0.12),transparent)] blur-[1px] sm:block md:-right-24 md:top-24 md:h-[620px] md:w-[620px]" />

            <div className="absolute bottom-[-40px] left-[-40px] h-[120px] w-[120px] rotate-12 border border-[rgba(234,179,8,0.35)] bg-[rgba(234,179,8,0.06)] sm:bottom-[-70px] sm:left-[-80px] sm:h-[200px] sm:w-[200px] md:h-[260px] md:w-[260px]" />
            <div className="absolute bottom-[-50px] left-[40px] hidden h-[220px] w-[220px] rotate-12 border border-[rgba(234,179,8,0.25)] bg-[rgba(234,179,8,0.04)] sm:block md:bottom-[-90px] md:left-[90px] md:h-[320px] md:w-[320px]" />
            <div className="absolute bottom-[20px] right-[20px] hidden h-[80px] w-[80px] rotate-45 border border-[rgba(234,179,8,0.35)] bg-[rgba(234,179,8,0.05)] sm:block md:bottom-[40px] md:right-[60px] md:h-[140px] md:w-[140px]" />
          </div>

          {/* Scanning light effect - disabled on mobile for performance */}
          <motion.div
            className="absolute -left-1/2 top-0 hidden h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(234,179,8,0.14),transparent)] sm:block"
            animate={{ x: ["-120%", "260%"] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.4 }}
            style={{ mixBlendMode: "screen" }}
          />

          {/* Top dots decoration - smaller on mobile */}
          <div className="absolute left-3 top-3 flex items-center gap-1.5 sm:left-6 sm:top-6 sm:gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20 sm:h-2 sm:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20 sm:h-2 sm:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20 sm:h-2 sm:w-2" />
          </div>

          {/* Bottom badge - smaller on mobile */}
          <div className="absolute bottom-3 left-3 rounded-xl border border-white/10 bg-black/50 px-2 py-1.5 backdrop-blur-md sm:bottom-4 sm:left-4 sm:rounded-2xl sm:px-3 sm:py-2 md:bottom-6 md:left-6 md:px-4 md:py-3">
            <div className="text-[8px] uppercase tracking-[0.2em] text-white/60 sm:text-[9px] sm:tracking-[0.24em] md:text-[10px] md:tracking-[0.28em]">
              Design District
            </div>
            <div className="mt-0.5 text-[10px] font-semibold text-white/90 sm:mt-1 sm:text-xs md:text-sm">
              Premium Branding Studio
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  return (
    <section className="relative bg-black overflow-hidden">
      <HeroBackdrop />

      <div className="mx-auto max-w-6xl px-4 pt-12 pb-12 sm:px-5 sm:pt-14 sm:pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
        <div className="grid items-center gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2">
          {/* LEFT - Content */}
          <motion.div 
            variants={container} 
            initial="hidden" 
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.div variants={item}>
              <Badge>Modern • Minimal • Luxurious</Badge>
            </motion.div>

            <motion.h1 
              variants={item} 
              className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="text-white/90">ELEVATE</span>{" "}
              <span className="inline-block bg-gradient-to-r from-[rgba(255,233,179,0.95)] via-[#eab308] to-[rgba(255,233,179,0.95)] bg-clip-text text-transparent">
                YOUR BUSINESS
              </span>
            </motion.h1>

            <motion.p 
              variants={item} 
              className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base mx-auto lg:mx-0"
            >
              Build a premium identity — branding, print, web, and social visuals designed to stand out in a competitive market.
            </motion.p>

            <motion.div 
              variants={item} 
              className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6 sm:gap-4 lg:justify-start"
            >
              <Link
                href="#services"
                className="rounded-full bg-gradient-to-r from-[#eab308] to-[#f5c518] px-5 py-2.5 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] hover:scale-105 sm:px-6 sm:py-3"
              >
                View Services
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.08] hover:scale-105 sm:px-6 sm:py-3"
              >
                Request a Quote
              </Link>
            </motion.div>

            <motion.div variants={item} className="mt-8 sm:mt-10">
              <GoldLine />
              <div className="mt-4 flex flex-wrap justify-center gap-1.5 text-[10px] text-white/60 sm:gap-2 sm:text-xs lg:justify-start">
                {["Logo", "Business Cards", "Invitations", "Web Design", "Social Media"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 transition-all duration-300 hover:border-[rgba(234,179,8,0.35)] hover:bg-[rgba(234,179,8,0.1)] hover:text-[#eab308] sm:px-3 sm:py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT - Image */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <HeroArt />
          </motion.div>
        </div>
      </div>
    </section>
  );
}