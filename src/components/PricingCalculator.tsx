/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, MessageSquare, Zap, Clock, Coins, ShieldCheck, HelpCircle } from 'lucide-react';
import { PricingConfig } from '../types';

export default function PricingCalculator() {
  const [config, setConfig] = useState<PricingConfig>({
    webTier: 'growth',
    reelsPack: 'reels4',
    ytPack: 'none',
    includeSpeedBooster: true,
    includeBrandingPackage: false,
  });

  const [activeTab, setActiveTab] = useState<'calculator' | 'standard'>('calculator');

  // Pricing constants
  const prices = {
    web: {
      none: 0,
      starter: 5999,
      growth: 11999,
    },
    reels: {
      none: 0,
      reels4: 15000,
      reels8: 25000,
    },
    yt: {
      none: 0,
      yt1: 8000,
      yt3: 20000,
    },
    speedBooster: 3000,
    branding: 4000,
  };

  // Compute values
  const webCost = prices.web[config.webTier];
  const reelsCost = prices.reels[config.reelsPack];
  const ytCost = prices.yt[config.ytPack];
  const boosterCost = config.includeSpeedBooster ? prices.speedBooster : 0;
  const brandingCost = config.includeBrandingPackage ? prices.branding : 0;

  const totalCost = webCost + reelsCost + ytCost + boosterCost + brandingCost;
  const upfrontPayment = Math.round(totalCost * 0.5);
  const deliveryPayment = totalCost - upfrontPayment;

  // Calculate estimated SLA days
  let estimatedDays = 2;
  if (config.webTier === 'growth') estimatedDays += 1;
  if (config.reelsPack === 'reels8') estimatedDays += 1;
  if (config.ytPack === 'yt3') estimatedDays += 1;
  if (config.includeBrandingPackage) estimatedDays += 1;

  // Generate WhatsApp text
  const generateWhatsAppUrl = () => {
    let items: string[] = [];
    if (config.webTier === 'starter') items.push('Starter Web (₹5,999)');
    if (config.webTier === 'growth') items.push('Growth Web with Auto-Capture (₹11,999)');
    if (config.reelsPack === 'reels4') items.push('4 Reels Pack (₹15,000)');
    if (config.reelsPack === 'reels8') items.push('8 Reels Pack (₹25,000)');
    if (config.ytPack === 'yt1') items.push('1 YouTube Video (₹8,000)');
    if (config.ytPack === 'yt3') items.push('3 YouTube Videos (₹20,000)');
    if (config.includeSpeedBooster) items.push('Speed & Core Web Vitals booster (₹3,000)');
    if (config.includeBrandingPackage) items.push('Custom Brand Animation Pack (₹4,000)');

    const itemsStr = items.map((it) => `%0A• ${it}`).join('');
    const message = `Hi Deepak Digital, I configured a custom package on your website calculator:${itemsStr}%0A%0AEstimated Delivery: ${estimatedDays} Days%0A*Total Cost: ₹${totalCost.toLocaleString('en-IN')}*%0A*Upfront Deposit (50%): ₹${upfrontPayment.toLocaleString('en-IN')}*%0A%0AI'd like to book a kick-off session to start this project.`;
    return `https://wa.me/919784935776?text=${message}`;
  };

  return (
    <section id="pricing" className="bg-white py-16 sm:py-24" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-blue-600 tracking-widest uppercase">
            Pricing Systems
          </span>
          <h2 id="pricing-heading" className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Choose Your Growth Blueprint
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Milestone-based, risk-free structures. <strong>50% upfront</strong> to kick off, and the remaining <strong>50% upon delivery approval</strong>. No hidden retainers.
          </p>

          {/* Toggle Tab */}
          <div className="mt-8 inline-flex items-center p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                activeTab === 'calculator'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Interactive Builder
            </button>
            <button
              onClick={() => setActiveTab('standard')}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                activeTab === 'standard'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Standard Bundles
            </button>
          </div>
        </div>

        {activeTab === 'calculator' ? (
          /* Interactive Package Configurator */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto items-start">
            
            {/* Left Options Config (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Option 1: Web Tier */}
              <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">1</span>
                  Web Core Architecture
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setConfig({ ...config, webTier: 'none' })}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      config.webTier === 'none'
                        ? 'bg-white border-blue-600 ring-1 ring-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="block font-bold text-slate-900 text-sm">No Web Build</span>
                    <span className="block text-xs text-slate-500 mt-1">Focusing only on video elements</span>
                    <span className="block font-black text-slate-900 text-base mt-2">₹0</span>
                  </button>
                  
                  <button
                    onClick={() => setConfig({ ...config, webTier: 'starter' })}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      config.webTier === 'starter'
                        ? 'bg-white border-blue-600 ring-1 ring-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="block font-bold text-slate-900 text-sm">Starter Web</span>
                    <span className="block text-xs text-slate-500 mt-1">1-Page high-speed lead page</span>
                    <span className="block font-black text-slate-900 text-base mt-2">₹5,999</span>
                  </button>

                  <button
                    onClick={() => setConfig({ ...config, webTier: 'growth' })}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      config.webTier === 'growth'
                        ? 'bg-white border-blue-600 ring-1 ring-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="block font-bold text-slate-900 text-sm">Growth Web</span>
                    <span className="block text-xs text-slate-500 mt-1">5-Pages + WhatsApp Capture</span>
                    <span className="block font-black text-slate-900 text-base mt-2">₹11,999</span>
                  </button>
                </div>
              </div>

              {/* Option 2: Reels Video System */}
              <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">2</span>
                  High-Retention Reels System
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setConfig({ ...config, reelsPack: 'none' })}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      config.reelsPack === 'none'
                        ? 'bg-white border-blue-600 ring-1 ring-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="block font-bold text-slate-900 text-sm">No Reels</span>
                    <span className="block text-xs text-slate-500 mt-1">Excluding short-form reels</span>
                    <span className="block font-black text-slate-900 text-base mt-2">₹0</span>
                  </button>

                  <button
                    onClick={() => setConfig({ ...config, reelsPack: 'reels4' })}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      config.reelsPack === 'reels4'
                        ? 'bg-white border-blue-600 ring-1 ring-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="block font-bold text-slate-900 text-sm">4 Reels Pack</span>
                    <span className="block text-xs text-slate-500 mt-1">Hook, script & high-end edit</span>
                    <span className="block font-black text-slate-900 text-base mt-2">₹15,000</span>
                  </button>

                  <button
                    onClick={() => setConfig({ ...config, reelsPack: 'reels8' })}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      config.reelsPack === 'reels8'
                        ? 'bg-white border-blue-600 ring-1 ring-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="block font-bold text-slate-900 text-sm">8 Reels Pack</span>
                    <span className="block text-xs text-slate-500 mt-1">Compounding monthly batch</span>
                    <span className="block font-black text-slate-900 text-base mt-2">₹25,000</span>
                  </button>
                </div>
              </div>

              {/* Option 3: YouTube Videos */}
              <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">3</span>
                  YouTube Long-Form Edits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setConfig({ ...config, ytPack: 'none' })}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      config.ytPack === 'none'
                        ? 'bg-white border-blue-600 ring-1 ring-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="block font-bold text-slate-900 text-sm">No YT Edits</span>
                    <span className="block text-xs text-slate-500 mt-1">Excluding YouTube assets</span>
                    <span className="block font-black text-slate-900 text-base mt-2">₹0</span>
                  </button>

                  <button
                    onClick={() => setConfig({ ...config, ytPack: 'yt1' })}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      config.ytPack === 'yt1'
                        ? 'bg-white border-blue-600 ring-1 ring-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="block font-bold text-slate-900 text-sm">1 Video (16:9)</span>
                    <span className="block text-xs text-slate-500 mt-1">Professional editing setup</span>
                    <span className="block font-black text-slate-900 text-base mt-2">₹8,000</span>
                  </button>

                  <button
                    onClick={() => setConfig({ ...config, ytPack: 'yt3' })}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      config.ytPack === 'yt3'
                        ? 'bg-white border-blue-600 ring-1 ring-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="block font-bold text-slate-900 text-sm">3 Videos Pack</span>
                    <span className="block text-xs text-slate-500 mt-1">Multi-episode growth bundle</span>
                    <span className="block font-black text-slate-900 text-base mt-2">₹20,000</span>
                  </button>
                </div>
              </div>

              {/* Option 4: Add-ons */}
              <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">4</span>
                  System Acceleration Add-Ons
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={config.includeSpeedBooster}
                        onChange={(e) => setConfig({ ...config, includeSpeedBooster: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                      <div>
                        <span className="block font-bold text-slate-900 text-sm">Lightning Speed &amp; Core Web Vitals Optimization</span>
                        <span className="block text-xs text-slate-500 mt-0.5">Optimizes code to run under 1 second, scoring 95+ on Google Lighthouse.</span>
                      </div>
                    </div>
                    <span className="font-extrabold text-slate-900 text-sm shrink-0 ml-4">+₹3,000</span>
                  </label>

                  <label className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={config.includeBrandingPackage}
                        onChange={(e) => setConfig({ ...config, includeBrandingPackage: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                      <div>
                        <span className="block font-bold text-slate-900 text-sm">Signature Custom Branding &amp; Motion Assets</span>
                        <span className="block text-xs text-slate-500 mt-0.5">Custom vectors, animated transitions, and tailored typography styling.</span>
                      </div>
                    </div>
                    <span className="font-extrabold text-slate-900 text-sm shrink-0 ml-4">+₹4,000</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Invoice & Summary (5 cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <h3 className="text-xl font-bold tracking-tight mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
                <span>Selected System</span>
                <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Receipt Quote
                </span>
              </h3>

              {/* Package Details Breakdown */}
              <div className="space-y-4 mb-6">
                {config.webTier !== 'none' && (
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <span className="font-bold block">Web Architecture</span>
                      <span className="text-xs text-slate-400">
                        {config.webTier === 'starter' ? 'Starter Web (1-Page)' : 'Growth Web System (5-Pages)'}
                      </span>
                    </div>
                    <span className="font-bold">₹{prices.web[config.webTier].toLocaleString('en-IN')}</span>
                  </div>
                )}

                {config.reelsPack !== 'none' && (
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <span className="font-bold block">Reels Video System</span>
                      <span className="text-xs text-slate-400">
                        {config.reelsPack === 'reels4' ? '4 Vertical Reels Pack' : '8 Vertical Reels Pack'}
                      </span>
                    </div>
                    <span className="font-bold">₹{prices.reels[config.reelsPack].toLocaleString('en-IN')}</span>
                  </div>
                )}

                {config.ytPack !== 'none' && (
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <span className="font-bold block">YouTube Edits Pack</span>
                      <span className="text-xs text-slate-400">
                        {config.ytPack === 'yt1' ? '1 Long-form video' : '3 Long-form videos pack'}
                      </span>
                    </div>
                    <span className="font-bold">₹{prices.yt[config.ytPack].toLocaleString('en-IN')}</span>
                  </div>
                )}

                {config.includeSpeedBooster && (
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <span className="font-bold block">Speed Booster Addon</span>
                      <span className="text-xs text-slate-400">Core Web Vitals tuning</span>
                    </div>
                    <span className="font-bold">+₹{prices.speedBooster.toLocaleString('en-IN')}</span>
                  </div>
                )}

                {config.includeBrandingPackage && (
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <span className="font-bold block">Signature Branding</span>
                      <span className="text-xs text-slate-400">Custom layout &amp; transitions</span>
                    </div>
                    <span className="font-bold">+₹{prices.branding.toLocaleString('en-IN')}</span>
                  </div>
                )}

                {config.webTier === 'none' && config.reelsPack === 'none' && config.ytPack === 'none' && !config.includeSpeedBooster && !config.includeBrandingPackage && (
                  <div className="text-center py-6 text-slate-400 text-sm">
                    Configure your customized digital blueprint to see pricing breakdown.
                  </div>
                )}
              </div>

              {/* Metadata Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-800/40 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase text-slate-400 tracking-wider font-bold">EST. DELIVERY</span>
                    <span className="block text-xs font-bold text-slate-200">{estimatedDays} Days SLA</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase text-slate-400 tracking-wider font-bold">GUARANTEE</span>
                    <span className="block text-xs font-bold text-slate-200">QA Approved</span>
                  </div>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="border-t border-slate-800 pt-5 space-y-3 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-slate-300 font-medium">Estimated Total:</span>
                  <span className="text-3xl font-black text-white">
                    ₹{totalCost.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                  <div className="bg-slate-800 p-3 rounded-xl border border-slate-700/50">
                    <span className="block text-slate-400 font-bold mb-0.5">50% Upfront Gate</span>
                    <span className="text-emerald-400 font-extrabold text-base">₹{upfrontPayment.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-xl border border-slate-700/50">
                    <span className="block text-slate-400 font-bold mb-0.5">Due on Delivery</span>
                    <span className="text-slate-300 font-extrabold text-base">₹{deliveryPayment.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Trigger */}
              <a
                id="pricing-whatsapp-checkout"
                href={generateWhatsAppUrl()}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base py-4 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-xl active:scale-[0.98] transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                Book Package via WhatsApp
              </a>
              <span className="block text-center text-[11px] text-slate-400 mt-3">
                No deposit needed right now. Clicking opens a direct discussion with our architect.
              </span>

            </div>

          </div>
        ) : (
          /* Standard Fixed Cards */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
            {/* Card 1: Starter Web */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col relative group">
              <div className="flex-1">
                <span className="inline-block bg-slate-100 text-slate-700 text-xs font-extrabold px-3 py-1 rounded-full mb-4 tracking-wide">
                  STARTER SYSTEM
                </span>
                <h3 className="text-xl font-bold text-slate-900">Starter Web</h3>
                <p className="text-sm text-slate-500 mt-1">1-Page High-Speed Landing System</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">₹5,999</span>
                  <span className="text-slate-400 text-sm">One-Time Setup</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-5">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    1-Page Lightning-Fast Landing Page
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Optimized Mobile-Responsive Layout
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Basic SEO Foundations Included
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    5-Day Standard Delivery SLA
                  </li>
                </ul>
              </div>
              <a
                id="bundle-starter-cta"
                href="https://wa.me/919784935776?text=Hi%20Deepak%20Digital%2C%20I%20want%20the%20Starter%20Web%20plan%20(₹5%2C999)."
                className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-800 font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 border border-slate-200 hover:border-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </div>

            {/* Card 2: Growth Web */}
            <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col relative scale-[1.01] shadow-md shadow-blue-600/5">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap tracking-wide">
                ⭐ MOST POPULAR
              </span>
              <div className="flex-1">
                <span className="inline-block bg-blue-50 text-blue-600 text-xs font-extrabold px-3 py-1 rounded-full mb-4 tracking-wide">
                  RECOMMENDED Funnel
                </span>
                <h3 className="text-xl font-bold text-slate-900">Growth Web</h3>
                <p className="text-sm text-slate-500 mt-1">5-Pages + WhatsApp Auto-Capture</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">₹11,999</span>
                  <span className="text-slate-400 text-sm">One-Time Setup</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-5">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <strong>5-Page</strong> Custom High-Speed Website
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <strong>WhatsApp Auto-Capture</strong> Leads Engine
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <strong>48-Hour SLA</strong> Delivery Guarantee
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Advanced SEO + Speed Performance tuning
                  </li>
                </ul>
              </div>
              <a
                id="bundle-growth-cta"
                href="https://wa.me/919784935776?text=Hi%20Deepak%20Digital%2C%20I%20want%20the%20Growth%20Web%20plan%20(₹11%2C999)."
                className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-md transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Growth Web
              </a>
            </div>

            {/* Card 3: Sovereign Bundle */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col relative">
              <div className="flex-1">
                <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-extrabold px-3 py-1 rounded-full mb-4 tracking-wide">
                  OMNICHANNEL BUNDLE
                </span>
                <h3 className="text-xl font-bold text-slate-900">Sovereign Bundle</h3>
                <p class="text-sm text-slate-500 mt-1">Growth Web + 4 Reels + 1 YT Video</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">₹34,999</span>
                  <span className="text-slate-400 text-sm">One-Time Setup</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-5">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <strong>Everything included in Growth Web</strong>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <strong>4 High-Retention Reels</strong> (9:16 vertical edits)
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <strong>1 Premium YouTube Episode</strong> (16:9 editing)
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Omnichannel Brand Sync &amp; Full Assets Sync
                  </li>
                </ul>
              </div>
              <a
                id="bundle-sovereign-cta"
                href="https://wa.me/919784935776?text=Hi%20Deepak%20Digital%2C%20I%20want%20the%20Sovereign%20Bundle%20plan%20(₹34%2C999)."
                className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 text-slate-800 font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 border border-slate-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Sovereign Bundle
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
