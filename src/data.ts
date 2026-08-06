/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReelItem, PrototypeItem, AuditQuestion } from './types';

export const REELS: ReelItem[] = [
  {
    id: 'reel-1',
    title: 'The 3-Second Retention Hook',
    description: 'How we engineer hyper-retaining intro sequences to instantly lock in scroll-happy viewers.',
    category: 'Video System',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80',
    views: '184K',
    duration: '0:45',
    likes: '14.2K'
  },
  {
    id: 'reel-2',
    title: 'Conversion-Driven Interface Math',
    description: 'Deep dive into why placing touch targets on a mobile viewport layout changes conversion by 34%.',
    category: 'Web Tech',
    thumbnailUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=80',
    views: '122K',
    duration: '0:58',
    likes: '9.8K'
  },
  {
    id: 'reel-3',
    title: 'WhatsApp Automation Blueprint',
    description: 'How to bypass traditional slow emails by implementing our 1-click WhatsApp auto-capture hook.',
    category: 'Automation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80',
    views: '240K',
    duration: '0:50',
    likes: '21.5K'
  },
  {
    id: 'reel-4',
    title: 'Speed SLA: 48-Hour Pipeline',
    description: 'A behind-the-scenes timelapse of how we build, optimize, and deploy a production web system in 48 hours.',
    category: 'Productivity',
    thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80',
    views: '95K',
    duration: '0:40',
    likes: '7.1K'
  }
];

export const PROTOTYPES: PrototypeItem[] = [
  {
    id: 'proto-1',
    title: 'E-Commerce Ultra-Speed Checkout',
    description: 'A high-converting 1-page checkout funnel with simulated instant checkout, client-side auto-complete, and native WhatsApp receipt capture.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    url: '#',
    speedScore: 99,
    features: ['Instant Load (< 0.8s)', 'WhatsApp Receipt Automation', 'Address Autocomplete', 'Tactile Multi-payment Gateways']
  },
  {
    id: 'proto-2',
    title: 'High-Converting Creator Landing Hub',
    description: 'An elegant personal workspace bio system featuring live video highlights, interactive newsletters, and direct micro-consultancy scheduler.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
    url: '#',
    speedScore: 98,
    features: ['Polished motion transitions', 'Native Newsletter integration', 'Responsive Grid layout', 'One-Click Consult Link']
  }
];

export const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: 'q1',
    question: "What is your website's estimated loading speed?",
    options: [
      { label: '⚡ Instant (Under 1.5 seconds)', score: 30, feedback: 'Excellent! Your load speed is in the top 10% of high-converting web systems.' },
      { label: '🐢 Moderate (2 - 5 seconds)', score: 15, feedback: 'Warning: 53% of mobile visits are abandoned if a site takes longer than 3 seconds to load. You are losing traffic.' },
      { label: '🦖 Slow (Over 5 seconds)', score: 5, feedback: 'Critical: Extremely slow loading times severely hurt your SEO ranking and crash conversion rates.' },
      { label: '🚫 I do not have a live website yet', score: 0, feedback: 'Blank Slate: Building a high-speed landing system from scratch will place you ahead of most competitors instantly.' }
    ]
  },
  {
    id: 'q2',
    question: 'How do you capture and nurture incoming leads?',
    options: [
      { label: '💬 Instant WhatsApp / Direct Auto-Capture', score: 30, feedback: 'Excellent: Direct chat routes convert 3x higher than standard delayed email systems.' },
      { label: '📨 Standard Email/Contact Forms (Takes hours/days)', score: 15, feedback: 'Room for Improvement: Lead response time is critical. Waiting over 30 minutes decreases conversion by 391%.' },
      { label: '🙅 No automated lead-capture in place', score: 5, feedback: 'Critical Loss: Visitors are leaving without a trace. You need an automated trigger mechanism.' }
    ]
  },
  {
    id: 'q3',
    question: 'How frequently do you publish high-quality vertical content?',
    options: [
      { label: '🔥 Regularly (3+ high-retention Reels/Shorts per week)', score: 25, feedback: 'Great momentum! Compelling videos combined with a quick sales funnel lead to compounding growth.' },
      { label: '⏳ Inconsistently (1-2 videos per month or when time permits)', score: 10, feedback: 'Missed Reach: Algorithmic distribution favors volume. Your brand needs a systematic high-retention schedule.' },
      { label: '❌ Rarely or Never (Need video editing system support)', score: 5, feedback: 'Growth Leak: Vertical videos are the primary traffic generator for modern brands. You are leaving massive organic reach on the table.' }
    ]
  },
  {
    id: 'q4',
    question: 'What is your current digital system brand authority status?',
    options: [
      { label: '✨ Premium & Consistent (High-end graphics, tailored fonts)', score: 15, feedback: 'Superb! A cohesive premium style builds immediate user trust and justifies premium pricing.' },
      { label: '🎭 Basic or Standard (Templated look, generic typography)', score: 8, feedback: 'Diluted Trust: A template-heavy style makes you look like an amateur. A custom touch raises conversion.' },
      { label: '📉 Outdated or Needs Polish', score: 3, feedback: 'Immediate Overhaul Needed: First impressions form within 0.05 seconds. A polished layout instantly elevates value.' }
    ]
  }
];
