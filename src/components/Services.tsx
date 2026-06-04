"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Business Branding",
    desc: "Logo, business cards, flyers, brand elements — crafted for a premium first impression that lasts.",
    items: ["Logo Design", "Business Cards", "Flyers", "Brand Guidelines"],
    icon: "🎨",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Luxury Cards",
    desc: "Greeting cards, invitations, event cards — modern layouts with elegant finishing and premium paper options.",
    items: ["Invitations", "Greeting Cards", "Event Cards", "Thank You Cards"],
    icon: "✨",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    title: "Website Design",
    desc: "Enhance your website's appearance with modern UI that feels clean, fast, and luxurious across all devices.",
    items: ["Landing Pages", "Multi-page Sites", "UI/UX", "Responsive Design"],
    icon: "💻",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Social Media Branding",
    desc: "Templates and brand consistency that makes your online presence look premium and professional.",
    items: ["Post Templates", "Stories", "Highlights Covers", "Profile Style"],
    icon: "📱",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgba(234,179,8,0.35)] bg-[rgba(234,179,8,0.10)] px-3 py-1 text-xs tracking-wide text-[rgba(255,233,179,0.95)] backdrop-blur-sm">
      {children}
    </span>
  );
}

function Card({ title, desc, items, icon, gradient }: {
  title: string;
  desc: string;
  items: string[];
  icon: string;
  gradient: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-7 shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-[rgba(234,179,8,0.3)]"
    >
      {/* Animated gradient background on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold tracking-wide text-white group-hover:text-[#eab308] transition-colors duration-300">
            {title}
          </h3>
          <span className="text-2xl opacity-60 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
            {icon}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>

        <div className="mt-6 space-y-2">
          {items.map((it) => (
            <div key={it} className="flex items-center gap-3 text-sm text-white/80">
              <motion.span
                whileHover={{ scale: 1.2 }}
                className="h-1.5 w-1.5 rounded-full bg-[#eab308]"
              />
              <span>{it}</span>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(234,179,8,0.35)] bg-[rgba(234,179,8,0.10)] px-5 py-2.5 text-sm text-[rgba(255,233,179,0.95)] transition-all duration-300 hover:bg-[rgba(234,179,8,0.2)] hover:gap-3 hover:px-6"
          >
            DM / Contact <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-end justify-between gap-4 sm:flex-row sm:items-center"
      >
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Services</h2>
          <p className="mt-2 text-sm text-white/70">
            Everything you need to look premium — from print to digital.
          </p>
        </div>
        <div>
          <Badge>Black • Gold • Clean</Badge>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid gap-6 md:grid-cols-2"
      >
        {services.map((s) => (
          <motion.div key={s.title} variants={item}>
            <Card {...s} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}