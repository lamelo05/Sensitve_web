'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Settings, MessageSquare, Play } from 'lucide-react';

export default function HeroMockupCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const screens = [
    // Screen 0: Settings Locked
    (
      <motion.div
        key="screen-locked"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex flex-col"
        style={{ background: '#111827', minHeight: '440px' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3" style={{ background: '#064e3b' }}>
          <div className="flex items-center gap-2">
            <img src="/favicon-32x32.png" alt="Logo" className="w-6 h-6 object-contain" />
            <span className="text-emerald-400 font-bold text-lg">Sensitive</span>
          </div>
          <MessageSquare className="w-5 h-5 text-emerald-100/70" />
        </div>
        
        {/* Stats */}
        <div className="flex border-b border-slate-700/50" style={{ background: '#1f2937' }}>
          <div className="flex-1 text-center py-3 border-r border-slate-700/50">
            <div className="text-emerald-400 text-2xl font-bold">3</div>
            <div className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mt-1">Pages Blocked Today</div>
          </div>
          <div className="flex-1 text-center py-3">
            <div className="text-emerald-400 text-2xl font-bold">27</div>
            <div className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mt-1">Keywords Caught Today</div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #f59e0b, #fbbf24)' }}>
            <Lock className="w-6 h-6 text-orange-950" />
          </div>
          <h3 className="text-emerald-400 font-bold text-xl mb-2">Settings Locked</h3>
          <p className="text-slate-400 text-sm text-center mb-6">Enter your PIN to manage extension settings.</p>
          
          <div className="flex gap-4 justify-center mb-6 px-6 py-3 rounded-xl border border-slate-700/50" style={{ background: '#1f2937' }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-slate-500" />
            ))}
          </div>
          
          <button className="w-32 py-2.5 rounded-lg text-emerald-400 font-semibold text-sm transition-colors" style={{ background: '#064e3b' }}>
            Unlock
          </button>
        </div>
      </motion.div>
    ),

    // Screen 1: Main Dashboard
    (
      <motion.div
        key="screen-dashboard"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex flex-col text-left"
        style={{ background: '#111827', minHeight: '440px' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3" style={{ background: '#064e3b' }}>
          <div className="flex items-center gap-2">
            <img src="/favicon-32x32.png" alt="Logo" className="w-6 h-6 object-contain" />
            <span className="text-emerald-400 font-bold text-lg">Sensitive</span>
          </div>
          <MessageSquare className="w-5 h-5 text-emerald-100/70" />
        </div>
        
        {/* Stats */}
        <div className="flex border-b border-slate-700/50" style={{ background: '#1f2937' }}>
          <div className="flex-1 text-center py-3 border-r border-slate-700/50">
            <div className="text-emerald-400 text-2xl font-bold">3</div>
            <div className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mt-1">Pages Blocked Today</div>
          </div>
          <div className="flex-1 text-center py-3">
            <div className="text-emerald-400 text-2xl font-bold">27</div>
            <div className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mt-1">Keywords Caught Today</div>
          </div>
        </div>

        <div className="p-5 flex-1 overflow-y-auto">
          {/* Protection Section */}
          <div className="mb-6">
            <h4 className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">Protection</h4>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-white font-semibold text-sm">Master Toggle</div>
                <div className="text-slate-400 text-xs mt-0.5">Enable or disable all blocking entirely.</div>
              </div>
              <div className="w-11 h-6 rounded-full bg-emerald-500 flex items-center px-1">
                <div className="w-4 h-4 rounded-full bg-white ml-auto" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-semibold text-sm">Keyword Filtering</div>
                <div className="text-slate-400 text-xs mt-0.5">Censor and score sensitive words on pages.</div>
              </div>
              <div className="w-11 h-6 rounded-full bg-slate-600 flex items-center px-1">
                <div className="w-4 h-4 rounded-full bg-slate-400" />
              </div>
            </div>
          </div>
          
          <div className="w-full h-px bg-slate-700/50 mb-6" />

          {/* Sensitivity Level Section */}
          <div className="mb-6">
            <h4 className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">Sensitivity Level</h4>
            <div className="flex justify-between text-slate-500 text-xs mb-2">
              <span>Lenient</span>
              <span>Strict</span>
            </div>
            <div className="relative w-full h-1.5 bg-slate-700 rounded-full mb-3">
              <div className="absolute top-0 left-0 h-full bg-emerald-400 rounded-full w-3/4" />
              <div className="absolute top-1/2 left-3/4 w-4 h-4 rounded-full bg-emerald-400 -translate-x-1/2 -translate-y-1/2 border-2 border-slate-900" />
            </div>
            <div className="flex justify-between px-1 text-[10px] text-slate-600 font-medium mb-3">
              <span>1</span><span>2</span><span>3</span><span className="text-emerald-500">4</span><span>5</span>
            </div>
            <div className="text-center text-slate-300 text-xs font-medium">Level 4 — Strict</div>
          </div>
        </div>
      </motion.div>
    ),

    // Screen 2: Block Page
    (
      <motion.div
        key="screen-blocked"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex flex-col p-8 text-center"
        style={{ background: '#020617', minHeight: '440px' }}
      >
        <div className="relative mx-auto w-16 h-16 flex items-center justify-center mb-6">
          <div className="absolute inset-0 bg-emerald-500/30 blur-xl rounded-full" />
          <div className="relative w-14 h-16 bg-blue-500 rounded-t-xl rounded-b-3xl border-2 border-blue-400 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <div className="w-8 h-10 bg-blue-400/50 rounded-t-md rounded-b-2xl border border-blue-300/50" />
          </div>
        </div>
        
        <h3 className="text-emerald-400 font-bold text-3xl mb-3 tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>
          Blocked by Sensitive
        </h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-[280px] mx-auto">
          This page has been blocked to help you stay accountable and protect your mind.
        </p>

        <div className="inline-flex items-center justify-center bg-red-950/40 border border-red-900/50 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full mx-auto mb-8">
          Sensitive keyword detected: &quot;Porn&quot;
        </div>

        <div className="rounded-xl border border-emerald-900/30 bg-emerald-950/10 p-5 mb-8 text-left">
          <h4 className="text-emerald-500 text-[10px] font-bold tracking-widest uppercase mb-3 text-center">A Word For You</h4>
          <p className="text-slate-200 text-sm italic leading-relaxed text-center">
            &quot;Addiction is making the choice between getting what you want right now, and getting what you want the most. (Anonymous)&quot;
          </p>
        </div>

        <h4 className="text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-4">Positive Alternatives</h4>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-sm text-slate-300">
            <span>Sermon: Overcoming Temptation</span>
            <span className="text-slate-500">→</span>
          </div>
          <div className="flex items-center px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-sm text-slate-300 truncate">
            <span className="mr-2">🎬</span> The Science of Addiction (Fight The New Dru...
          </div>
        </div>
      </motion.div>
    )
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Browser Chrome Wrapper */}
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
        style={{ border: '1px solid rgba(255,255,255,0.1)', background: '#1a1730' }}
      >
        {/* Browser Top Bar */}
        <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#13102b', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <div className="flex-1 mx-4 px-3 py-1 rounded-md text-xs text-slate-500 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
            🔒 chrome-extension://sensitive
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative w-full overflow-hidden" style={{ minHeight: '440px' }}>
          <AnimatePresence mode="wait">
            {screens[currentIndex]}
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-3 mt-6">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === i ? 'bg-emerald-400 w-6' : 'bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
