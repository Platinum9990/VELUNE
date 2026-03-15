"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";

export function InteriorsSection() {
  return (
    <section id="interiors" className="bg-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.4em] text-muted">
            Interiors Experience
          </p>
        </FadeIn>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-[36px] border border-glow/70 bg-[linear-gradient(135deg,#ECE6FF_0%,#F4F0FF_55%,#E0D6FF_100%)] p-10 shadow-card"
          >
            <div className="absolute -right-16 top-8 h-40 w-40 rounded-full bg-lilac/40 blur-3xl" />
            <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-glow/70 blur-2xl" />
            <FadeIn>
              <h2 className="font-display text-3xl font-semibold text-charcoal md:text-5xl">
                Interiors composed for quiet impact.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-xl text-lg text-muted">
                Layered pieces, subdued light, and soft geometry create a sense
                of permanence. Each interior becomes a gallery of calm.
              </p>
            </FadeIn>
            <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-muted">
              <span className="rounded-full border border-plum/20 bg-white/70 px-4 py-2">
                Curated Spaces
              </span>
              <span className="rounded-full border border-plum/20 bg-white/70 px-4 py-2">
                Ambient Light
              </span>
              <span className="rounded-full border border-plum/20 bg-white/70 px-4 py-2">
                Quiet Luxury
              </span>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {[
              {
                title: "Atmospheric curation",
                copy: "A palette of lilac tones, softened textiles, and sculptural volumes."
              },
              {
                title: "Editorial calm",
                copy: "Spaces that breathe slowly, grounded by deliberate, collectible forms."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-[26px] border border-glow/70 bg-white/70 p-6 shadow-soft"
              >
                <FadeIn delay={0.1 + index * 0.1}>
                  <h3 className="font-display text-2xl text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{item.copy}</p>
                </FadeIn>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
