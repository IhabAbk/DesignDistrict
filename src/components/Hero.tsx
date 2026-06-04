"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";

function GoldLine() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(234,179,8,0.6)] to-transparent" />
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgba(234,179,8,0.35)] bg-[rgba(234,179,8,0.10)] px-3 py-1 text-xs tracking-wide text-[rgba(255,233,179,0.95)]">
      {children}
    </span>
  );
}

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-[rgba(234,179,8,0.10)] blur-3xl" />
      <div className="absolute -bottom-48 right-[-12%] h-[560px] w-[560px] rounded-full bg-[rgba(234,179,8,0.08)] blur-3xl" />

      <div className="absolute inset-0 opacity-[0.18]">
        <div className="absolute left-[-20%] top-[-10%] h-[140%] w-[140%] rotate-[-12deg] bg-[linear-gradient(90deg,transparent,rgba(234,179,8,0.35),transparent)] [mask-image:repeating-linear-gradient(90deg,#000_0px,#000_2px,transparent_2px,transparent_28px)]" />
      </div>

      <motion.div
        className="absolute left-[10%] top-[22%] h-1.5 w-1.5 rounded-full bg-[rgba(234,179,8,0.9)] shadow-[0_0_20px_rgba(234,179,8,0.75)]"
        animate={{ y: [0, -14, 0], opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[38%] top-[12%] h-1 w-1 rounded-full bg-[rgba(234,179,8,0.85)] shadow-[0_0_18px_rgba(234,179,8,0.65)]"
        animate={{ y: [0, 18, 0], opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.div
        className="absolute right-[18%] top-[34%] h-1.5 w-1.5 rounded-full bg-[rgba(234,179,8,0.9)] shadow-[0_0_20px_rgba(234,179,8,0.75)]"
        animate={{ y: [0, -16, 0], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
    </div>
  );
}

function HeroArt() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="absolute -inset-6 rounded-[2.6rem] bg-[linear-gradient(135deg,rgba(234,179,8,0.16),transparent_55%)] blur-2xl" />

      <div className="relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-white/[0.04] shadow-[0_20px_90px_rgba(0,0,0,0.65)]">
        <div className="relative h-[420px] w-full md:h-[520px]">
          <Image
            src="/hero.png"
            alt="Luxury design hero"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_30%,rgba(0,0,0,0.35),rgba(0,0,0,0.72))]" />

          <div className="absolute left-0 top-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(234,179,8,0.55),transparent)]" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(234,179,8,0.35),transparent)]" />

          <div className="absolute inset-0 opacity-[0.95]">
            <div className="absolute -right-10 top-10 h-[560px] w-[560px] rotate-45 bg-[linear-gradient(90deg,transparent,rgba(234,179,8,0.22),transparent)] blur-[1px]" />
            <div className="absolute -right-24 top-24 h-[620px] w-[620px] rotate-45 bg-[linear-gradient(90deg,transparent,rgba(234,179,8,0.12),transparent)] blur-[1px]" />

            <div className="absolute bottom-[-70px] left-[-80px] h-[260px] w-[260px] rotate-12 border border-[rgba(234,179,8,0.35)] bg-[rgba(234,179,8,0.06)]" />
            <div className="absolute bottom-[-90px] left-[90px] h-[320px] w-[320px] rotate-12 border border-[rgba(234,179,8,0.25)] bg-[rgba(234,179,8,0.04)]" />
            <div className="absolute bottom-[40px] right-[60px] h-[140px] w-[140px] rotate-45 border border-[rgba(234,179,8,0.35)] bg-[rgba(234,179,8,0.05)]" />
          </div>

          <motion.div
            className="absolute -left-1/2 top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(234,179,8,0.14),transparent)]"
            animate={{ x: ["-120%", "260%"] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.4 }}
            style={{ mixBlendMode: "screen" }}
          />

          <div className="absolute left-6 top-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>

          <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
            <div className="text-[10px] uppercase tracking-[0.28em] text-white/60">
              Design District
            </div>
            <div className="mt-1 text-sm font-semibold text-white/90">
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
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
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
    <section className="relative">
      <HeroBackdrop />

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <Badge>Modern • Minimal • Luxurious</Badge>
            </motion.div>

            <motion.h1 variants={item} className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
              <span className="text-white/90">ELEVATE</span>{" "}
              <span className="bg-gradient-to-r from-[rgba(255,233,179,0.95)] via-[#eab308] to-[rgba(255,233,179,0.95)] bg-clip-text text-transparent">
                YOUR BUSINESS
              </span>
            </motion.h1>

            <motion.p variants={item} className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              Build a premium identity — branding, print, web, and social visuals designed to stand out.
            </motion.p>

            <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#services"
                className="rounded-full bg-[#eab308] px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                View Services
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.06]"
              >
                Request a Quote
              </Link>
            </motion.div>

            <motion.div variants={item} className="mt-10">
              <GoldLine />
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/60">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">Logo</span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">Business Cards</span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">Invitations</span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">Web Design</span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">Social Media</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
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