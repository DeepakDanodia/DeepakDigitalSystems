/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Zap, CheckCircle, ArrowRight, RefreshCw, MessageSquare } from 'lucide-react';
import { AUDIT_QUESTIONS } from '../data';
import { AuditState } from '../types';

export default function AuditTool() {
  const [state, setState] = useState<AuditState>({
    currentStep: 0, // 0 is onboarding/details, 1-4 are questions, 5 is results
    answers: {},
    businessName: '',
    whatsapp: '',
    websiteUrl: '',
    isSubmitted: false,
  });

  const [validationError, setValidationError] = useState('');

  const totalQuestions = AUDIT_QUESTIONS.length;

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.businessName.trim()) {
      setValidationError('Please enter your business or creator name.');
      return;
    }
    if (!state.whatsapp.trim()) {
      setValidationError('Please enter your WhatsApp number.');
      return;
    }
    setValidationError('');
    setState((prev) => ({ ...prev, currentStep: 1 }));
  };

  const handleSelectOption = (questionId: string, score: number, optionIndex: number) => {
    setState((prev) => {
      const nextAnswers = { ...prev.answers, [questionId]: optionIndex };
      const isLastQuestion = prev.currentStep === totalQuestions;
      
      return {
        ...prev,
        answers: nextAnswers,
        currentStep: isLastQuestion ? prev.currentStep + 1 : prev.currentStep + 1,
        isSubmitted: isLastQuestion ? true : false,
      };
    });
  };

  const calculateScoreAndReport = () => {
    let totalScore = 0;
    const feedbacks: string[] = [];

    AUDIT_QUESTIONS.forEach((q) => {
      const answerIndex = state.answers[q.id];
      if (answerIndex !== undefined) {
        const option = q.options[answerIndex];
        totalScore += option.score;
        feedbacks.push(option.feedback);
      }
    });

    // Normalize out of 100
    let maxPossibleScore = 100;
    let finalScore = Math.min(100, Math.max(10, totalScore));

    let rating = 'CRITICAL OVERHAUL REQUIRED';
    let ratingColor = 'text-red-500 bg-red-500/10 border-red-200';
    let summaryText = 'Your digital funnel contains severe bottlenecks causing substantial visitor bounce rates and missed reach.';

    if (finalScore >= 80) {
      rating = 'HIGHLY OPTIMIZED';
      ratingColor = 'text-emerald-500 bg-emerald-500/10 border-emerald-200';
      summaryText = 'You have solid digital foundations in place. Minor optimizations can maximize conversion further.';
    } else if (finalScore >= 45) {
      rating = 'NEEDS ATTENTION';
      ratingColor = 'text-amber-500 bg-amber-500/10 border-amber-200';
      summaryText = 'Your systems are functional but have major gaps in high-speed responsiveness or automatic lead captures.';
    }

    return { score: finalScore, rating, ratingColor, summaryText, feedbacks };
  };

  const handleReset = () => {
    setState({
      currentStep: 0,
      answers: {},
      businessName: '',
      whatsapp: '',
      websiteUrl: '',
      isSubmitted: false,
    });
    setValidationError('');
  };

  const report = state.isSubmitted ? calculateScoreAndReport() : null;

  const handleWhatsAppResults = () => {
    if (!report) return '#';
    const message = `Hi Deepak Digital, I ran the digital system audit for *${state.businessName}*:%0A%0A*Diagnostic Score: ${report.score}/100* (${report.rating})%0AWebsite: ${state.websiteUrl || 'None'}%0A%0A${report.summaryText}%0A%0AI want to book a free 1-on-1 audit call to fix these leaks.`;
    return `https://wa.me/919784935776?text=${message}`;
  };

  return (
    <section id="audit" className="bg-slate-50 py-16 sm:py-24 border-y border-slate-100" aria-labelledby="audit-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
            Free System Audit
          </span>
          <h2 id="audit-heading" className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Uncover Conversion Leaks Instantly
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Answer a few quick questions to diagnose bottlenecks in your digital systems and vertical content distribution.
          </p>
        </div>

        {/* Audit Container Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100/80 p-6 sm:p-10 min-h-[420px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            
            {/* Step 0: Onboarding & Lead details */}
            {state.currentStep === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    Tell us about your brand
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    This customization feeds our diagnostic tool to generate precise reports.
                  </p>
                </div>

                <form onSubmit={handleStart} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="business-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Business / Creator Name *
                      </label>
                      <input
                        type="text"
                        id="business-name"
                        value={state.businessName}
                        onChange={(e) => setState({ ...state, businessName: e.target.value })}
                        placeholder="e.g. Acme Studio"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="whatsapp-num" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        WhatsApp Number (with country code) *
                      </label>
                      <input
                        type="tel"
                        id="whatsapp-num"
                        value={state.whatsapp}
                        onChange={(e) => setState({ ...state, whatsapp: e.target.value })}
                        placeholder="e.g. +91 97849 35776"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website-url" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Current Website URL (optional)
                    </label>
                    <input
                      type="url"
                      id="website-url"
                      value={state.websiteUrl}
                      onChange={(e) => setState({ ...state, websiteUrl: e.target.value })}
                      placeholder="e.g. https://yoursite.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {validationError && (
                    <p className="text-xs font-bold text-red-500 flex items-center gap-1.5 bg-red-50 p-2.5 rounded-lg border border-red-100">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      {validationError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-blue-500/10 cursor-pointer active:scale-[0.98]"
                  >
                    Start Diagnostic Audit
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            )}

            {/* Steps 1 to TotalQuestions: Diagnostic Questions */}
            {state.currentStep > 0 && state.currentStep <= totalQuestions && (
              <motion.div
                key={`question-${state.currentStep}`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Progress bar */}
                <div className="flex items-center justify-between text-xs font-extrabold text-slate-400">
                  <span className="uppercase tracking-widest text-blue-600">Question {state.currentStep} of {totalQuestions}</span>
                  <span>{Math.round((state.currentStep / totalQuestions) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full transition-all duration-300"
                    style={{ width: `${(state.currentStep / totalQuestions) * 100}%` }}
                  />
                </div>

                {/* Question */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                    {AUDIT_QUESTIONS[state.currentStep - 1].question}
                  </h3>
                </div>

                {/* Options List */}
                <div className="grid grid-cols-1 gap-3">
                  {AUDIT_QUESTIONS[state.currentStep - 1].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelectOption(AUDIT_QUESTIONS[state.currentStep - 1].id, option.score, index)}
                      className="w-full text-left p-4 rounded-2xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50/20 active:scale-[0.99] transition-all cursor-pointer font-bold text-slate-800 text-sm sm:text-base flex justify-between items-center group"
                    >
                      <span>{option.label}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step Results: Summary and score card */}
            {state.isSubmitted && report && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Score Header */}
                <div className="text-center space-y-3">
                  <span className={`inline-block px-3 py-1 text-xs font-black tracking-widest uppercase rounded-full border ${report.ratingColor}`}>
                    {report.rating}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Your Digital System Score
                  </h3>
                </div>

                {/* Score Circle / Meter */}
                <div className="flex flex-col items-center justify-center py-4 relative">
                  <div className="w-36 h-36 rounded-full border-8 border-slate-100 flex flex-col items-center justify-center relative">
                    <span className="text-4xl font-black text-slate-900 tracking-tight">
                      {report.score}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                      of 100
                    </span>

                    {/* Simple dynamic SVG border ring */}
                    <svg className="absolute -inset-2.5 w-40 h-40 transform -rotate-90 pointer-events-none">
                      <circle
                        className="text-blue-600"
                        strokeWidth="8"
                        strokeDasharray={2 * Math.PI * 72}
                        strokeDashoffset={2 * Math.PI * 72 * (1 - report.score / 100)}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="72"
                        cx="80"
                        cy="80"
                      />
                    </svg>
                  </div>
                </div>

                {/* Score Critique */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 space-y-4">
                  <p className="font-bold text-slate-800 text-sm sm:text-base leading-relaxed text-center">
                    "{report.summaryText}"
                  </p>

                  <div className="border-t border-slate-200/60 pt-4 space-y-3">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      Identified Leaks &amp; Fixes:
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                      {report.feedbacks.map((feedback, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{feedback}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    id="audit-whatsapp-claim"
                    href={handleWhatsAppResults()}
                    className="flex-1 inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base py-4 rounded-xl shadow-lg shadow-emerald-500/10 cursor-pointer active:scale-[0.98] transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    Claim Free Human Consultation
                  </a>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm px-6 py-4 rounded-xl transition-all cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Restart Audit
                  </button>
                </div>

                <p className="text-center text-[11px] text-slate-400">
                  Includes a complimentary 15-minute diagnostic walkthrough. No high-pressure sales calls, guaranteed.
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
