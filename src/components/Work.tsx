"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const WORK_ITEMS = [
  {
    title: "Luxury Brand Identity",
    category: "Branding • Visual Identity",
    image: "https://picsum.photos/id/20/800/600",
    year: "2024",
    client: "Maison Élégance",
    description: "Complete brand identity including logo, stationery, and packaging design.",
  },
  {
    title: "Modern Restaurant UI",
    category: "Web Design • UI/UX",
    image: "https://picsum.photos/id/26/800/600",
    year: "2024",
    client: "The Golden Spoon",
    description: "Responsive website design with online reservation system.",
  },
  {
    title: "Corporate Stationery Set",
    category: "Print • Stationery",
    image: "https://picsum.photos/id/24/800/600",
    year: "2023",
    client: "Nexus Corp",
    description: "Premium business cards, letterheads, and envelopes.",
  },
  {
    title: "Social Media Campaign",
    category: "Social • Marketing",
    image: "https://picsum.photos/id/96/800/600",
    year: "2024",
    client: "Beauty Luxe",
    description: "Instagram templates, stories, and highlight covers.",
  },
  {
    title: "E-commerce Website",
    category: "Web • E-commerce",
    image: "https://picsum.photos/id/0/800/600",
    year: "2024",
    client: "Luxury Finds",
    description: "Full-featured online store with secure checkout.",
  },
  {
    title: "Event Invitation Suite",
    category: "Print • Events",
    image: "https://picsum.photos/id/30/800/600",
    year: "2023",
    client: "Gala Charity",
    description: "Luxury invitation suite with RSVP cards.",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgba(234,179,8,0.35)] bg-[rgba(234,179,8,0.10)] px-3 py-1 text-xs tracking-wide text-[rgba(255,233,179,0.95)] backdrop-blur-sm">
      {children}
    </span>
  );
}

function WorkModal({ item, onClose }: { item: typeof WORK_ITEMS[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-h-[90vh] max-w-4xl w-full rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-[rgba(234,179,8,0.3)] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-gray-900">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-[#eab308]">{item.category}</p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            
            <div className="mt-4 flex gap-4 text-sm">
              <div>
                <span className="text-white/50">Year</span>
                <p className="text-white">{item.year}</p>
              </div>
              <div>
                <span className="text-white/50">Client</span>
                <p className="text-white">{item.client}</p>
              </div>
            </div>
            
            <p className="mt-4 text-white/70 leading-relaxed">
              {item.description}
            </p>
            
            <div className="mt-6">
              <button
                onClick={onClose}
                className="rounded-full bg-gradient-to-r from-[#eab308] to-[#f5c518] px-6 py-2 text-sm font-semibold text-black transition hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Work() {
  const [selectedItem, setSelectedItem] = useState<typeof WORK_ITEMS[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section id="work" className="relative mx-auto max-w-6xl px-5 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Badge>Portfolio • Case Studies</Badge>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Featured Work
          </h2>
          <p className="mt-2 text-sm text-white/70">
            A selection of recent brand identities, UI systems, and visual concepts.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WORK_ITEMS.map((work, idx) => (
            <motion.article
              key={work.title}
              variants={item}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedItem(work)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent transition-all duration-300 hover:border-[rgba(234,179,8,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r from-transparent via-[#eab308] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
                
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-[rgba(234,179,8,0.15)]"
                />
              </div>

              <div className="relative p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-white transition-colors group-hover:text-[#eab308]">
                      {work.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/60">{work.category}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-white/40">
                      <span>{work.year}</span>
                      <span>•</span>
                      <span>{work.client}</span>
                    </div>
                  </div>

                  <motion.span
                    animate={hoveredIndex === idx ? { x: 5, scale: 1.1 } : { x: 0, scale: 1 }}
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(234,179,8,0.35)] bg-white/[0.03] text-[#eab308] opacity-80 transition group-hover:opacity-100"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {selectedItem && (
        <WorkModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}