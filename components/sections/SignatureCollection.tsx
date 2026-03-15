"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";

const cards = [
  {
    title: "Lounge Forms",
    description:
      "Low-slung silhouettes and soft geometry shaped for unhurried rituals."
  },
  {
    title: "Statement Pieces",
    description:
      "Objects of presence that anchor a room with sculptural restraint."
  },
  {
    title: "Interior Presence",
    description:
      "Layered accents designed to echo light, texture, and quiet luxury."
  }
];

export function SignatureCollection() {
  return (
    <section id="collection" className="bg-soft py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.4em] text-muted">
            Signature Collection
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-charcoal md:text-5xl">
            A curation of sculptural volumes designed for modern interiors.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Each series is crafted to hold light softly, inviting calm and quiet
            depth into the spaces you live within.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group rounded-[28px] border border-glow/70 bg-white/70 p-6 shadow-soft"
            >
              <FadeIn delay={0.1 + index * 0.1}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,#DCD3FF_0%,#ECE6FF_60%)] text-plum">
                  <span className="h-2 w-2 rounded-full bg-plum" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-charcoal">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
              </FadeIn>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
