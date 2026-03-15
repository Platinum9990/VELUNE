"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";

const blocks = [
  {
    title: "Designed to be felt",
    copy: "Every curve is tuned for touch, inviting a slower, more present way of living."
  },
  {
    title: "Softness in form",
    copy: "VELUNE pieces are sculpted to diffuse light and soften the architecture around them."
  },
  {
    title: "Presence in every curve",
    copy: "A quiet geometry that anchors rooms without raising its voice."
  }
];

export function CraftSection() {
  return (
    <section id="craft" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-6">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.4em] text-muted">
                Craft & Philosophy
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-3xl font-semibold text-charcoal md:text-5xl">
                Sculptural pieces born from calm, light, and material depth.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted">
                We work with artisans who shape each form by hand, refining the
                silhouettes until they feel inevitable. The result is furniture
                that reads like a quiet interior landscape.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-6">
            {blocks.map((block, index) => (
              <motion.div
                key={block.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-[26px] border border-glow/70 bg-white/70 p-6 shadow-soft"
              >
                <FadeIn delay={0.1 + index * 0.1}>
                  <h3 className="font-display text-2xl text-charcoal">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {block.copy}
                  </p>
                </FadeIn>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
