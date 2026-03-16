"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { FadeIn } from "../ui/FadeIn";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen overflow-hidden bg-[radial-gradient(120%_140%_at_10%_0%,#F6F2FF_0%,#E8DEFF_35%,#CBBEFF_55%,#7A669B_75%,#342A4B_100%)]"
    >
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.12.69/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(244,240,255,0.6)_0%,rgba(184,166,255,0.25)_45%,rgba(52,42,75,0.65)_100%)]" />
      <div className="pointer-events-none absolute -left-40 top-[-15%] h-[28rem] w-[28rem] rounded-full bg-glow/70 blur-[170px]" />
      <div className="pointer-events-none absolute left-[18%] top-[-6%] h-24 w-24 rounded-full bg-lilac/70 blur-[45px]" />
      <div className="pointer-events-none absolute right-[-18%] top-[12%] h-[42rem] w-[42rem] rounded-[45%_55%_60%_40%] bg-[radial-gradient(circle_at_35%_35%,rgba(244,240,255,0.8)_0%,rgba(184,166,255,0.35)_45%,rgba(74,62,107,0.5)_70%)] blur-[85px] opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#2A223D]/85 via-[#2A223D]/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F6F2FF]/85 via-[#F6F2FF]/45 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F6F2FF]/90 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(244,240,255,0.75)_0%,rgba(244,240,255,0.35)_35%,rgba(244,240,255,0.1)_60%,rgba(236,230,255,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[55%] bg-[linear-gradient(90deg,rgba(244,240,255,0.98)_0%,rgba(244,240,255,0.7)_35%,rgba(244,240,255,0.2)_70%,transparent_100%)]" />

      <div className="absolute inset-0 z-10">
        <spline-viewer
          url="https://prod.spline.design/MDScGdVJYie0xuYY/scene.splinecode"
          className="absolute left-0 top-0 h-full w-full translate-x-[6%] translate-y-[3%] scale-[1.12] md:translate-x-[8%] md:translate-y-[4%] md:scale-[1.18] lg:translate-x-[10%] lg:scale-[1.24]"
        ></spline-viewer>
      </div>

      <div className="relative z-20 mx-auto flex h-screen max-w-[1200px] items-end px-10 pb-[90px] pt-[140px]">
        <div className="max-w-[38rem] space-y-7 md:space-y-8">
          <FadeIn>
            <p className="text-[0.65rem] uppercase tracking-[0.5em] text-plum/60">
              Sculptural Living
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="max-w-[14ch] font-display text-5xl font-semibold leading-[1.02] text-charcoal md:text-6xl lg:text-7xl">
              Furniture shaped by atmosphere.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-[32rem] text-base font-light leading-relaxed text-muted/75 md:text-lg">
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
            <div className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.5em] text-muted/70">
              <span className="h-px w-12 bg-plum/30" />
              <span>Atelier Edition 01</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
