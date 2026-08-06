/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PortfolioShowcase from './components/PortfolioShowcase';
import PricingCalculator from './components/PricingCalculator';
import AuditTool from './components/AuditTool';
import SlaTimeline from './components/SlaTimeline';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#F8F9FA] text-[#111827] font-sans antialiased min-h-screen flex flex-col scroll-smooth">
      {/* Sticky Header */}
      <Header />

      {/* Main Content Layout */}
      <main className="flex-1">
        
        {/* Hero Block */}
        <Hero />

        {/* Services & Capabilities Grid */}
        <Services />

        {/* Interactive Portfolios & Demos with player modals */}
        <PortfolioShowcase />

        {/* Diagnostic Conversion Audit tool */}
        <AuditTool />

        {/* Custom Pricing config generator & preset options */}
        <PricingCalculator />

        {/* SLA Guarantee Timeline structure */}
        <SlaTimeline />

      </main>

      {/* Footer touchpoints */}
      <Footer />
    </div>
  );
}
