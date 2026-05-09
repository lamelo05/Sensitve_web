'use client';

import { motion } from 'framer-motion';
import { Download, Shield, Cpu, Lock } from 'lucide-react';

const steps = [
  {
    icon: <Download className="w-7 h-7" />,
    number: '01',
    title: 'Install the Extension',
    desc: 'Download the ZIP file and load it into Chrome in under 60 seconds — no Chrome Web Store required.',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    number: '02',
    title: 'Set Your PIN',
    desc: 'Choose a secret PIN that only you know. This protects the bypass button so you stay accountable.',
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    number: '03',
    title: 'Browse Safely',
    desc: 'Sensitive runs silently in the background, detecting explicit content and blocking it instantly.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 lg:py-48 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 block">How It Works</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Space Grotesk' }}>
            Up and running in{' '}
            <span className="gradient-text">three steps</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No account, no subscription, no tracking. Just install and protect yourself.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {steps.map(({ icon, number, title, desc }, i) => (
            <motion.div
              key={number}
              variants={cardVariants}
              className="glass-card hover-redirect p-8 relative group hover:border-emerald-500/30 transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-12 left-full w-6 h-px z-10"
                  style={{ background: 'linear-gradient(90deg, rgba(52, 211, 153, 0.5), transparent)' }}
                />
              )}

              {/* Step number */}
              <div className="absolute top-6 right-6 text-5xl font-black opacity-5 text-white select-none"
                style={{ fontFamily: 'Space Grotesk' }}>
                {number}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.3), rgba(16, 185, 129, 0.15))', color: '#6ee7b7', border: '1px solid rgba(52, 211, 153, 0.2)' }}
              >
                {icon}
              </div>

              <div
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                style={{ background: 'rgba(52, 211, 153, 0.15)', color: '#6ee7b7' }}
              >
                Step {number}
              </div>

              <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: 'Space Grotesk' }}>
                {title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
