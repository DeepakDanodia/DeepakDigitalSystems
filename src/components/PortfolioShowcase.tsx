/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Eye, Heart, Volume2, VolumeX, X, Monitor, Flame, Check, Sparkles, MessageSquare } from 'lucide-react';
import { REELS, PROTOTYPES } from '../data';
import { ReelItem, PrototypeItem } from '../types';

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'reels' | 'web'>('all');
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
  const [selectedPrototype, setSelectedPrototype] = useState<PrototypeItem | null>(null);

  // Reel player states
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});

  // Web prototype simulator state
  const [checkoutStep, setCheckoutStep] = useState<'form' | 'loading' | 'receipt'>('form');
  const [custName, setCustName] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [custProduct, setCustProduct] = useState('Premium Membership Setup');
  const [custPrice, setCustPrice] = useState('11,999');

  const filteredReels = activeTab === 'all' || activeTab === 'reels' ? REELS : [];
  const filteredPrototypes = activeTab === 'all' || activeTab === 'web' ? PROTOTYPES : [];

  const toggleLike = (id: string) => {
    setHasLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const startCheckoutSim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!custName.trim() || !custPhone.trim()) return;
    setCheckoutStep('loading');
    setTimeout(() => {
      setCheckoutStep('receipt');
    }, 1500);
  };

  const resetCheckoutSim = () => {
    setCheckoutStep('form');
    setCustName('');
    setCustPhone('');
  };

  return (
    <section id="portfolio" className="bg-[#F8F9FA] py-16 sm:py-24" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
            Engineered Portfolios
          </span>
          <h2 id="portfolio-heading" className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Crafted Demos &amp; Assets
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            We don't use boring static templates. Select any system artifact below to view real-time interactive simulations.
          </p>

          {/* Custom Navigation Tab */}
          <div className="mt-8 inline-flex items-center p-1 bg-slate-200/60 rounded-xl border border-slate-200/20">
            {(['all', 'reels', 'web'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab === 'all' ? 'All Work' : tab === 'reels' ? 'Reels (9:16)' : 'Web Prototypes'}
              </button>
            ))}
          </div>
        </div>

        {/* Video Reels Group */}
        {filteredReels.length > 0 && (
          <div className="mb-14">
            <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              High-Retention Video System <span className="text-slate-400 font-normal text-sm">(9:16 Vertical Format)</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredReels.map((reel) => (
                <div
                  key={reel.id}
                  onClick={() => {
                    setSelectedReel(reel);
                    setIsPlaying(true);
                  }}
                  className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group relative aspect-[9/16] w-full"
                >
                  {/* Thumbnail Image */}
                  <img
                    src={reel.thumbnailUrl}
                    alt={reel.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark transparent gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/15" />

                  {/* Play circle trigger overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-blue-600 shadow-xl flex items-center justify-center group-hover:scale-110 active:scale-95 transition-transform duration-300">
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Views & length details */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between text-[11px] font-black text-white/90 uppercase tracking-widest z-10">
                    <span className="bg-slate-950/40 px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {reel.views}
                    </span>
                    <span className="bg-slate-950/40 px-2 py-1 rounded backdrop-blur-sm">
                      {reel.duration}
                    </span>
                  </div>

                  {/* Title & Desc Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 space-y-1">
                    <span className="inline-block text-[9px] uppercase tracking-widest bg-blue-600 text-white font-extrabold px-1.5 py-0.5 rounded-md">
                      {reel.category}
                    </span>
                    <h4 className="font-extrabold text-sm sm:text-base leading-tight truncate-2-lines">
                      {reel.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Web Prototypes Group */}
        {filteredPrototypes.length > 0 && (
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              High-Speed Web Systems <span className="text-slate-400 font-normal text-sm">(16:9 Desktop Previews)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {filteredPrototypes.map((proto) => (
                <div
                  key={proto.id}
                  onClick={() => {
                    setSelectedPrototype(proto);
                    resetCheckoutSim();
                  }}
                  className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group relative flex flex-col"
                >
                  {/* Preview container */}
                  <div className="relative aspect-video w-full overflow-hidden border-b border-slate-50">
                    <img
                      src={proto.imageUrl}
                      alt={proto.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
                    
                    {/* Floating Launch Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-slate-950/15 transition-all duration-300">
                      <div className="flex items-center gap-2 bg-white/95 text-slate-900 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 duration-300">
                        <Monitor className="w-4 h-4 text-blue-600" />
                        Run System Sandbox
                      </div>
                    </div>

                    {/* Speed indicator */}
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white font-black text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 fill-current animate-pulse" />
                      Lighthouse: {proto.speedScore}
                    </div>
                  </div>

                  {/* Content Meta */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-extrabold text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {proto.title}
                      </h4>
                      <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                        {proto.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-50 flex flex-wrap gap-1.5">
                      {proto.features.map((feat, idx) => (
                        <span key={idx} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODAL 1: Vertical Reel smartphone Simulator Player */}
        <AnimatePresence>
          {selectedReel && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedReel(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              />

              {/* Smartphone Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.93, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="bg-slate-950 border-4 border-slate-800 rounded-[40px] shadow-2xl relative w-full max-w-[340px] aspect-[9/18.5] overflow-hidden flex flex-col justify-between z-10"
              >
                {/* Smartphone Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-full z-20 flex items-center justify-between px-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  <div className="w-8 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* Simulated Screen */}
                <div className="relative flex-1 bg-slate-900 overflow-hidden select-none flex flex-col justify-end p-4">
                  
                  {/* Mock Video Stream looping Image */}
                  <img
                    src={selectedReel.thumbnailUrl}
                    alt={selectedReel.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/45" />

                  {/* Play/Pause state icon click target */}
                  <div
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    {!isPlaying && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-14 h-14 rounded-full bg-slate-950/60 backdrop-blur-sm text-white flex items-center justify-center shadow-lg"
                      >
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      </motion.div>
                    )}
                  </div>

                  {/* Screen Content Details */}
                  <div className="relative z-10 space-y-3">
                    
                    {/* Top Section */}
                    <div className="absolute top-8 left-0 right-0 flex justify-between items-center text-xs font-bold text-white px-2">
                      <span className="bg-slate-900/40 px-2 py-1 rounded backdrop-blur-sm">LIVE FEED</span>
                      <button
                        onClick={() => setSelectedReel(null)}
                        className="w-8 h-8 rounded-full bg-slate-900/50 backdrop-blur-sm flex items-center justify-center text-white/90 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Left Details Info */}
                    <div className="space-y-1.5 text-white pr-10">
                      <span className="inline-block text-[9px] uppercase tracking-wider bg-blue-600 font-extrabold px-1.5 py-0.5 rounded-md">
                        {selectedReel.category}
                      </span>
                      <h4 className="font-extrabold text-sm leading-snug">
                        {selectedReel.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-normal line-clamp-2 font-medium">
                        {selectedReel.description}
                      </p>
                    </div>

                    {/* Play progress scrub track bar */}
                    <div className="space-y-1">
                      <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                        {isPlaying ? (
                          <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
                            className="bg-blue-500 h-full"
                          />
                        ) : (
                          <div className="bg-blue-500 h-full w-[40%]" />
                        )}
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold">
                        <span>{isPlaying ? '0:07' : '0:18'}</span>
                        <span>{selectedReel.duration}</span>
                      </div>
                    </div>

                    {/* Right Toolbar Panel */}
                    <div className="absolute bottom-16 right-0 flex flex-col items-center gap-4 text-white">
                      
                      {/* Like Trigger */}
                      <button
                        onClick={() => toggleLike(selectedReel.id)}
                        className="flex flex-col items-center gap-0.5"
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow backdrop-blur-sm transition-colors ${
                          hasLiked[selectedReel.id] ? 'bg-rose-500' : 'bg-slate-950/45 hover:bg-slate-950/60'
                        }`}>
                          <Heart className={`w-5 h-5 ${hasLiked[selectedReel.id] ? 'fill-current text-white' : 'text-white'}`} />
                        </div>
                        <span className="text-[10px] font-black">{hasLiked[selectedReel.id] ? '14.3K' : selectedReel.likes}</span>
                      </button>

                      {/* Sound Toggle */}
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-10 h-10 rounded-full bg-slate-950/45 hover:bg-slate-950/60 backdrop-blur-sm flex items-center justify-center shadow"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* MODAL 2: Web Prototype sandbox Simulator Modal */}
        <AnimatePresence>
          {selectedPrototype && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPrototype(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              />

              {/* Mock Web Sandbox Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-slate-950 text-white border border-slate-800 rounded-3xl shadow-2xl relative w-full max-w-2xl overflow-hidden flex flex-col justify-between z-10"
              >
                {/* Simulated Browser Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 block" />
                  </div>
                  <div className="bg-slate-950/60 px-4 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-400 font-bold max-w-sm truncate">
                    https://{selectedPrototype.id === 'proto-1' ? 'checkout' : 'hub'}.deepakdigital.systems
                  </div>
                  <button
                    onClick={() => setSelectedPrototype(null)}
                    className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Sandbox Frame */}
                <div className="p-6 bg-slate-900 text-slate-900 font-sans min-h-[380px] flex items-center justify-center">
                  
                  {/* Scenario A: Checkout Flow Simulator */}
                  {selectedPrototype.id === 'proto-1' && (
                    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-5 border border-slate-100 overflow-hidden">
                      
                      <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-blue-600 fill-current" />
                          <span className="font-extrabold text-xs tracking-wider uppercase text-slate-500">
                            Lightning Engine Checkout
                          </span>
                        </div>
                        <span className="text-[10px] font-black bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-full uppercase">
                          ⚡ 0.4s LOAD
                        </span>
                      </div>

                      {checkoutStep === 'form' && (
                        <form onSubmit={startCheckoutSim} className="space-y-4 text-slate-800">
                          <div className="space-y-1.5">
                            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider">
                              Select Demo Product
                            </label>
                            <select
                              value={custProduct}
                              onChange={(e) => {
                                setCustProduct(e.target.value);
                                setCustPrice(e.target.value.includes('Growth') ? '11,999' : '5,999');
                              }}
                              className="w-full text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-lg focus:outline-none"
                            >
                              <option value="Premium Membership Growth Package">Growth Web System Setup (₹11,999)</option>
                              <option value="Starter 1-Page Speed Engine">Starter Web Setup (₹5,999)</option>
                            </select>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider">
                                Customer Name *
                              </label>
                              <input
                                type="text"
                                value={custName}
                                onChange={(e) => setCustName(e.target.value)}
                                placeholder="e.g. Rahul Sharma"
                                className="w-full text-xs font-bold px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50"
                                required
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider">
                                Phone / WhatsApp *
                              </label>
                              <input
                                type="tel"
                                value={custPhone}
                                onChange={(e) => setCustPhone(e.target.value)}
                                placeholder="e.g. 9876543210"
                                className="w-full text-xs font-bold px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50"
                                required
                              />
                            </div>
                          </div>

                          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex justify-between items-baseline">
                            <span className="text-xs font-bold text-slate-500">Order Subtotal:</span>
                            <span className="text-lg font-black text-slate-900">₹{custPrice}</span>
                          </div>

                          <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-md cursor-pointer transition-colors"
                          >
                            Proceed with Instant Process
                          </button>
                        </form>
                      )}

                      {checkoutStep === 'loading' && (
                        <div className="py-12 flex flex-col items-center justify-center text-slate-600 space-y-4">
                          <div className="w-10 h-10 border-4 border-slate-100 border-t-blue-600 rounded-full animate-spin" />
                          <div>
                            <span className="block text-center text-xs font-black uppercase text-slate-400 tracking-wider">
                              COMPRESSING ENGINE DATA
                            </span>
                            <span className="block text-center text-slate-700 text-sm font-bold mt-1">
                              Simulating WhatsApp Auto-Capture hook...
                            </span>
                          </div>
                        </div>
                      )}

                      {checkoutStep === 'receipt' && (
                        <div className="space-y-4 text-slate-800">
                          <div className="text-center">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                              <Check className="w-5 h-5 stroke-[3]" />
                            </div>
                            <h5 className="font-extrabold text-sm text-slate-950">
                              System Simulated Successfully!
                            </h5>
                            <p className="text-[11px] text-slate-400">
                              Data successfully encoded into a deep-link payload.
                            </p>
                          </div>

                          <div className="bg-emerald-50 border border-emerald-100/50 p-4 rounded-xl text-xs space-y-2.5">
                            <span className="block font-black text-emerald-800 uppercase tracking-widest text-[9px]">
                              CUSTOM AUTOMATION RECEIPT PAYLOAD
                            </span>
                            <div className="space-y-1 text-emerald-950 font-semibold font-mono">
                              <p>⚡ ORDER ID: TXN_98311</p>
                              <p>👤 CLIENT: {custName}</p>
                              <p>📞 WHATSAPP: {custPhone}</p>
                              <p>🎁 PRODUCT: {custProduct}</p>
                              <p>💳 TOTAL: ₹{custPrice}</p>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={resetCheckoutSim}
                              className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs"
                            >
                              Restart Simulator
                            </button>
                            <a
                              href={`https://wa.me/919784935776?text=Hi%20Deepak%20Digital%2C%20I%20just%20ran%20your%20instant%20checkout%20simulator%20for%20${custName}!%20It's%20insanely%20fast.%20I'd%20love%20to%20add%20this%20hook%20to%20my%20own%20website.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs text-center flex items-center justify-center gap-1.5"
                            >
                              <MessageSquare className="w-3.5 h-3.5 fill-current" />
                              Send Simulated SMS
                            </a>
                          </div>
                        </div>
                      )}

                    </div>
                  )}

                  {/* Scenario B: Creator Landing Hub Demo */}
                  {selectedPrototype.id === 'proto-2' && (
                    <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-5 border border-slate-100 space-y-4">
                      {/* Top Profile */}
                      <div className="text-center space-y-1">
                        <div className="w-14 h-14 bg-blue-600 rounded-full mx-auto flex items-center justify-center font-black text-white text-lg">
                          DD
                        </div>
                        <h5 className="font-extrabold text-sm text-slate-900">Deepak Digital Bio</h5>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          HIGH-RETENTION CREATOR HUB
                        </p>
                      </div>

                      {/* Mock Links stack */}
                      <div className="space-y-2">
                        <a
                          href="#pricing"
                          onClick={() => setSelectedPrototype(null)}
                          className="w-full block text-center py-2.5 rounded-xl border border-slate-200 hover:border-blue-600 bg-slate-50 font-bold text-xs text-slate-800 transition-colors"
                        >
                          💸 View Transparent Pricing Models
                        </a>
                        <a
                          href="#audit"
                          onClick={() => setSelectedPrototype(null)}
                          className="w-full block text-center py-2.5 rounded-xl border border-slate-200 hover:border-blue-600 bg-slate-50 font-bold text-xs text-slate-800 transition-colors"
                        >
                          ⚡ Claim Free Digital Audit Checklist
                        </a>
                        <a
                          href="https://wa.me/919784935776"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow transition-colors"
                        >
                          💬 Join WhatsApp Tech Channel
                        </a>
                      </div>

                      {/* Embed simulated stats */}
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between text-center">
                        <div>
                          <span className="block font-black text-slate-900 text-sm">240K+</span>
                          <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">REELS REACH</span>
                        </div>
                        <div className="border-l border-slate-200 h-6" />
                        <div>
                          <span className="block font-black text-slate-900 text-sm">99%</span>
                          <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">CORE PERFORMANCE</span>
                        </div>
                        <div className="border-l border-slate-200 h-6" />
                        <div>
                          <span className="block font-black text-slate-900 text-sm">48h</span>
                          <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">SLA DELIVERY</span>
                        </div>
                      </div>

                    </div>
                  )}

                </div>

                {/* Footer specs */}
                <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between items-center">
                  <span>SANDBOX EMULATION</span>
                  <span className="text-emerald-400 font-bold">● ONLINE STATE</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
