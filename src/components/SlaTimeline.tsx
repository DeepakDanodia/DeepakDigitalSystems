/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, Zap, Laptop, Send } from 'lucide-react';

export default function SlaTimeline() {
  const steps = [
    {
      hour: 'Hour 0',
      title: 'Strategy & Alignment',
      description: 'The SLA timer kicks off instantly. We review your assets, establish branding style, and finalize layout copy structures.',
      icon: Clock,
      color: 'bg-blue-500 text-white',
      border: 'border-blue-500/25',
    },
    {
      hour: 'Hour 12',
      title: 'Wireframes & Structural Copy',
      description: 'Your polished layout wireframes and high-converting copy are published to you for immediate feedback and sign-off.',
      icon: Laptop,
      color: 'bg-emerald-500 text-white',
      border: 'border-emerald-500/25',
    },
    {
      hour: 'Hour 24',
      title: 'High-Performance Engineering',
      description: 'Our core development team builds the pages using clean, responsive Tailwind code. Visual motion layers are integrated seamlessly.',
      icon: Zap,
      color: 'bg-amber-500 text-white',
      border: 'border-amber-500/25',
    },
    {
      hour: 'Hour 36',
      title: 'Auto-Capture & Speed Tuning',
      description: 'We integrate WhatsApp Lead auto-capture engines and execute intensive speed compressions to score 95+ on Google Lighthouse audits.',
      icon: ShieldCheck,
      color: 'bg-purple-500 text-white',
      border: 'border-purple-500/25',
    },
    {
      hour: 'Hour 48',
      title: 'Live Launch & Handoff',
      description: 'Final quality checklists are cleared. Your high-speed system is deployed live on global cloud CDN architectures.',
      icon: Send,
      color: 'bg-blue-600 text-white',
      border: 'border-blue-600/25',
    },
  ];

  return (
    <section id="guarantees" className="bg-white py-16 sm:py-24 border-b border-slate-100" aria-labelledby="sla-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
            SLA Guarantee
          </span>
          <h2 id="sla-heading" className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How We Deliver in 48 Hours
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A precise timeline of actions. No waiting weeks in development cycles. We operate on hours.
          </p>
        </div>

        {/* Timeline Grid layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central connector line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-100 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-10 h-10 rounded-full bg-white border-2 border-slate-100 items-center justify-center z-10 shadow-sm">
                    <div className="w-4 h-4 rounded-full bg-blue-600" />
                  </div>

                  {/* Empty Side (desktop helper to balance) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Side */}
                  <div className={`w-full md:w-1/2 p-6 bg-[#F8F9FA] rounded-3xl border border-slate-100 shadow-sm relative hover:shadow-md transition-shadow duration-300`}>
                    
                    {/* Hour Eyebrow indicator */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black tracking-widest text-blue-600 uppercase">
                        {step.hour}
                      </span>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${step.color} shadow-sm`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                      {step.title}
                    </h3>
                    
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
