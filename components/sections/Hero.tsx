"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_center,#DCD3FF_0%,#F4F0FF_60%)]"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-glow/70 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-32 h-96 w-96 rounded-full bg-lilac/40 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_1fr] lg:pt-28">
        <div className="space-y-6">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.4em] text-muted">
              Sculptural Living
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl font-semibold text-charcoal md:text-6xl">
              Furniture shaped by atmosphere.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-xl text-lg text-muted md:text-xl">
              Discover sculptural pieces designed to bring softness, depth, and
              presence into contemporary interiors.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#collection"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center rounded-full bg-plum px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white shadow-soft"
              >
                Explore Collection
              </motion.a>
              <motion.a
                href="#interiors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center rounded-full border border-plum/20 bg-white/70 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-plum"
              >
                View Interiors
              </motion.a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-glow/60 blur-3xl" />
          <div className="rounded-[36px] border border-glow/70 bg-white/70 p-4 shadow-card">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-soft/70">
              <iframe
                title="VELUNE Sculptural Hero"
                src="https://my.spline.design/untitled-c6oSypyci6MDVCaMIqIRlViZ/"
                className="h-full w-full"
                allowFullScreen
              />
            </div>
            <div className="mt-4 flex items-center justify-between px-2 text-xs uppercase tracking-[0.3em] text-muted">
              <span>Velune Atelier</span>
              <span>Edition 01</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
