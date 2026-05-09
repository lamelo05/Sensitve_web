'use client';

import { motion } from 'framer-motion';
import { Brain, Lock, BookOpen, Globe, List, ShieldOff, EyeOff, Zap } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI Image Detection',
    desc: 'NSFWJS ML model scans every image and video frame in real-time directly in your browser.',
    span: 'col-span-2',
    accent: '#34d399',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'PIN-Protected Bypass',
    desc: 'Set a secret PIN so only you — or an accountability partner — can unblock a page.',
    span: 'col-span-2',
    accent: '#10b981',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Bible Verse Block Screen',
    desc: 'Instead of a harsh error page, you see an encouraging scripture to redirect your mindset.',
    span: 'col-span-2',
    accent: '#6ee7b7',
  },
  {
    icon: <List className="w-6 h-6" />,
    title: 'Custom Blacklist',
    desc: 'Block any domain by adding it to your personal blacklist. No sync, no cloud.',
    span: 'col-span-3',
    accent: '#fcd34d',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Domain Whitelist',
    desc: 'Add trusted sites like educational or medical domains to prevent false positives.',
    span: 'col-span-3',
    accent: '#10b981',
  },
  {
    icon: <EyeOff className="w-6 h-6" />,
    title: 'Zero Data Collected',
    desc: 'Everything runs locally. No servers, no telemetry, no account required.',
    span: 'col-span-2',
    accent: '#34d399',
  },
  {
    icon: <ShieldOff className="w-6 h-6" />,
    title: 'Keyword Filtering',
    desc: 'Weighted keyword scoring with context awareness prevents both misses and false alarms.',
    span: 'col-span-2',
    accent: '#6ee7b7',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Instant Block',
    desc: 'Content is stopped before it renders — not after — for true protection.',
    span: 'col-span-2',
    accent: '#fcd34d',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 lg:py-48 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 block">Features</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Space Grotesk' }}>
            Built for{' '}
            <span className="gradient-text">real protection</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every feature is designed to keep you safe while respecting your privacy.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="bento-grid">
          {features.map(({ icon, title, desc, span, accent }, i) => (
            <motion.div
              key={title}
              className={`glass-card hover-redirect flex flex-col items-center text-center p-6 relative overflow-hidden group hover:border-white/15 transition-all duration-300 cursor-default ${span}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              {/* Glow corner */}
              <div
                className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: accent }}
              />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}33` }}
              >
                {icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'Space Grotesk' }}>
                {title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
