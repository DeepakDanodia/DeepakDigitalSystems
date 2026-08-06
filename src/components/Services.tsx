/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Smartphone, Laptop, MessageSquare, Zap, Target, Sparkles } from 'lucide-react';

export default function Services() {
  const list = [
    {
      title: 'High-Speed Web Systems',
      description: 'Custom React & Tailwind architectures built from scratch. Zero sluggish page builders or unnecessary templates, resulting in sub-second load times that keep visitors engaged.',
      icon: Laptop,
      badge: 'SPEED SCORE: 98+',
    },
    {
      title: 'WhatsApp Auto-Capture',
      description: 'Direct 1-click lead capture systems that seamlessly bypass sluggish contact form queues. Send high-converting direct payloads straight into WhatsApp for instant engagement.',
      icon: MessageSquare,
      badge: 'CONVERSION: 3X',
    },
    {
      title: 'High-Retention Videos',
      description: 'Custom-edited 9:16 vertical reels structured on proven retention frameworks. Includes engaging copy scripts, crisp color matching, and professional typographic captions.',
      icon: Smartphone,
      badge: 'ORGANIC REACH',
    },
    {
      title: 'Premium Brand Systems',
      description: 'Bespoke design systems comprising distinct display fonts, warm/cool sophisticated neutrals, and custom vector icons that project high value and command premium pricing.',
      icon: Sparkles,
      badge: 'BESPOKE DESIGN',
    },
  ];

  return (
    <section id="services" className="bg-white py-16 sm:py-24" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
            Engineered Capabilities
          </span>
          <h2 id="services-heading" className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Digital Infrastructure Designed for Growth
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            We don't sell hourly templates. We engineer specialized digital tools that convert attention into business assets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {list.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] font-black tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
