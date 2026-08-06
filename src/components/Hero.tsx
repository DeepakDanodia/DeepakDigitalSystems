/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#F8F9FA] overflow-hidden py-16 sm:py-24 lg:py-32 border-b border-slate-100"
      aria-labelledby="hero-headline"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-100/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-100/15 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      {/* Decorative subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-6 shadow-sm shadow-emerald-100/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            ⚡ 48-Hour Delivery SLA Guarantee
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-headline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] sm:leading-[1.05]"
          >
            We Engineer <span className="text-blue-600 relative inline-block">High-Speed Web Systems</span> &amp; Retention Videos That Convert
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            From high-converting landing funnels with{' '}
            <strong className="text-slate-900 font-bold bg-blue-50 px-1.5 py-0.5 rounded">WhatsApp Auto-Capture</strong>{' '}
            to scroll-stopping vertical edits — we build custom digital infrastructure designed to grow your brand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <a
              id="hero-primary-cta"
              href="#audit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg shadow-blue-600/10 hover:shadow-xl hover:shadow-blue-600/20 active:scale-[0.98] transition-all duration-200 group ring-focus-accent"
            >
              Start Free System Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a
              id="hero-secondary-cta"
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-sm hover:shadow active:scale-[0.98] transition-all duration-200 ring-focus-accent"
            >
              <Play className="w-5 h-5 text-blue-600 fill-current" />
              View Portfolios &amp; Demos
            </a>
          </motion.div>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-sm font-semibold text-slate-500"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              Trusted by 50+ Brands
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              100% Quality Assured
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              Strict 48-Hour SLA
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
