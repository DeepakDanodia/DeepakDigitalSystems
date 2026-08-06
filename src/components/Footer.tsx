/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageSquare, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 sm:py-16 border-t border-slate-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2.5 group" aria-label="Deepak Digital Systems — Home">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm tracking-tight shadow-md">
                DD
              </div>
              <span className="text-base font-extrabold text-white tracking-tight leading-none">
                Deepak Digital Systems
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We design, code, and optimize high-speed digital architectures and high-retention video systems engineered exclusively to grow modern brands.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black text-slate-300 uppercase tracking-widest">
              Core Systems
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-semibold">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services List
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolios &amp; Demos
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  System Pricing
                </a>
              </li>
              <li>
                <a href="#audit" className="hover:text-white transition-colors">
                  Free System Audit
                </a>
              </li>
              <li>
                <a href="#guarantees" className="hover:text-white transition-colors">
                  SLA Guarantees
                </a>
              </li>
            </ul>
          </div>

          {/* Connect touchpoints Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-slate-300 uppercase tracking-widest">
              Connect Directly
            </h4>
            
            <div className="flex items-center gap-2.5">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919784935776?text=Hi%20Deepak%20Digital%2C%20I%20have%20a%20project%20in%20mind."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Contact via WhatsApp"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/deepakdigitalsystems"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 hover:bg-[#E1306C] hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@deepakdigitalsystems"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 hover:bg-[#FF0000] hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Subscribe on YouTube"
              >
                <Youtube className="w-5 h-5 fill-current" />
              </a>

              {/* Email */}
              <a
                href="mailto:coresovereign.official@gmail.com"
                className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Send direct Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <p className="text-[11px] text-slate-500 font-medium">
              Response window: &lt; 2 hours via WhatsApp
            </p>
          </div>

        </div>

        {/* Legal Row */}
        <div className="mt-8 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-bold">
          <p>&copy; 2026 Deepak Digital Systems. All rights reserved.</p>
          <p className="tracking-wide">
            Engineered with precision. Delivered with speed. Backed by trust.
          </p>
        </div>

      </div>
    </footer>
  );
}
