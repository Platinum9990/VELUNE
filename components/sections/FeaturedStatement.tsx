"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";

export function FeaturedStatement() {
  return (
    <section id="journal" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-muted">
                Featured Statement
              </p>
              <h2 className="font-display text-3xl font-semibold text-charcoal md:text-5xl">
                The piece that defines the room.
              </h2>
              <p className="text-lg text-muted">
                The Aurielle Lounge anchors the space with a fluid silhouette and
                plush depth, turning everyday living into a sculptural ritual.
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-muted">
                <span className="rounded-full border border-plum/20 bg-white/70 px-4 py-2">
                  Limited Series
                </span>
                <span className="rounded-full border border-plum/20 bg-white/70 px-4 py-2">
                  Atelier Crafted
                </span>
              </div>
            </div>
          </FadeIn>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-[36px] border border-glow/70 bg-white/80 p-8 shadow-card"
          >
            <div className="absolute -right-12 top-8 h-32 w-32 rounded-full bg-lilac/40 blur-3xl" />
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.4em] text-muted">
                Aurielle Lounge
              </p>
              <h3 className="mt-4 font-display text-2xl text-charcoal md:text-3xl">
                Sculptural elegance with a softened edge.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Crafted in velour and matte lacquer, the Aurielle is designed to
                catch the light gently, creating a quiet focal point that evolves
                throughout the day.
              </p>
              <div className="mt-8 h-32 rounded-[28px] bg-[radial-gradient(circle_at_top,#DCD3FF_0%,#ECE6FF_60%)]" />
            </FadeIn>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
