"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#DCD3FF_0%,#F4F0FF_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-charcoal md:text-5xl">
            Bring atmosphere home.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-lg text-muted">
            Explore a collection designed to shape interiors through form,
            softness, and presence.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <motion.a
            href="#collection"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-plum px-7 py-3 text-sm font-medium uppercase tracking-[0.25em] text-white shadow-soft"
          >
            Explore Collection
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
