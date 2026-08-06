/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageSquare } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-100/80 shadow-sm py-3'
          : 'bg-white/50 backdrop-blur-sm border-b border-transparent py-4'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0 group" aria-label="Deepak Digital Systems — Home">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-base tracking-tight shadow-md shadow-blue-500/20 group-hover:shadow-lg group-hover:shadow-blue-500/35 transition-all duration-300">
            DD
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold text-slate-900 tracking-tight leading-none">
              Deepak Digital
            </span>
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase mt-1">
              Systems
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1.5 lg:gap-3 text-sm font-semibold text-slate-600">
          <li>
            <a href="#services" className="px-4 py-2 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors duration-150 ring-focus-accent">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="px-4 py-2 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors duration-150 ring-focus-accent">
              Work &amp; Demos
            </a>
          </li>
          <li>
            <a href="#pricing" className="px-4 py-2 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors duration-150 ring-focus-accent">
              System Pricing
            </a>
          </li>
          <li>
            <a href="#audit" className="px-4 py-2 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors duration-150 ring-focus-accent">
              Free System Audit
            </a>
          </li>
          <li>
            <a href="#guarantees" className="px-4 py-2 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors duration-150 ring-focus-accent">
              SLA Guarantees
            </a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            id="header-whatsapp-cta"
            href="https://wa.me/919784935776?text=Hi%20Deepak%20Digital%2C%20I%20want%20to%20book%20a%20System%20Audit."
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] transition-all duration-200 ring-focus-accent whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a System Audit via WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            Book Audit
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-all duration-150 ring-focus-accent"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
          type="button"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[65px] z-40 bg-white border-t border-slate-100 shadow-xl overflow-hidden"
            aria-hidden={!isOpen}
          >
            <div className="flex flex-col p-6 gap-3 bg-white">
              <a
                href="#services"
                onClick={closeMenu}
                className="text-base font-bold text-slate-800 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                onClick={closeMenu}
                className="text-base font-bold text-slate-800 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Work &amp; Demos
              </a>
              <a
                href="#pricing"
                onClick={closeMenu}
                className="text-base font-bold text-slate-800 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                System Pricing
              </a>
              <a
                href="#audit"
                onClick={closeMenu}
                className="text-base font-bold text-slate-800 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Free System Audit
              </a>
              <a
                href="#guarantees"
                onClick={closeMenu}
                className="text-base font-bold text-slate-800 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                SLA Guarantees
              </a>
              <hr className="border-slate-100 my-2" />
              <a
                id="mobile-menu-whatsapp-cta"
                href="https://wa.me/919784935776?text=Hi%20Deepak%20Digital%2C%20I%20want%20to%20book%20a%20System%20Audit."
                className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-md shadow-blue-600/15 active:scale-[0.98] transition-all duration-200 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                Book System Audit (Free)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
