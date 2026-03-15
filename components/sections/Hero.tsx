"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#DCD3FF_0%,#F4F0FF_65%)]"
    >
      <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-glow/70 blur-[180px]" />
      <div className="pointer-events-none absolute right-[-15%] top-10 h-[38rem] w-[38rem] rounded-full bg-lilac/55 blur-[200px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,rgba(220,211,255,0.65)_0%,rgba(244,240,255,0.2)_45%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-base/95 via-base/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-base/92 via-base/55 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-base/85 to-transparent" />

      <div className="absolute inset-0">
        <iframe
          title="VELUNE Sculptural Hero"
          src="https://my.spline.design/untitled-c6oSypyci6MDVCaMIqIRlViZ/"
          className="absolute left-1/2 top-1/2 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2 md:h-[150%] md:w-[150%]"
          allowFullScreen
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(244,240,255,0.92)_0%,rgba(244,240,255,0.45)_35%,rgba(244,240,255,0.12)_60%,rgba(236,230,255,0.6)_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[40%] bg-[linear-gradient(90deg,rgba(244,240,255,0.95)_0%,rgba(244,240,255,0.55)_45%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-end px-6 pb-28 pt-28 lg:pb-32 lg:pt-36">
        <div className="max-w-[36rem] space-y-6">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.4em] text-plum/70">
              Sculptural Living
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] text-charcoal md:text-6xl lg:text-7xl">
              Furniture shaped by atmosphere.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted md:text-xl">
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
                className="inline-flex items-center justify-center rounded-full border border-plum/30 bg-white/60 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-plum shadow-soft"
              >
                View Interiors
              </motion.a>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-muted">
              <span className="h-px w-12 bg-plum/30" />
              <span>Atelier Edition 01</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
