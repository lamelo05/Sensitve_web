'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight, Shield, Eye, Lock } from 'lucide-react';
import HeroMockupCarousel from './HeroMockupCarousel';

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

const headline = 'Take Back Control of What You See Online.'.split(' ');

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg pt-24 pb-20">
      {/* Animated blobs */}
      <div
        className="blob w-96 h-96 top-0 -left-20"
        style={{ background: 'rgba(52, 211, 153, 0.2)', animationDelay: '0s' }}
      />
      <div
        className="blob w-80 h-80 bottom-10 right-0"
        style={{ background: 'rgba(16, 185, 129, 0.15)', animationDelay: '4s' }}
      />
      <div
        className="blob w-60 h-60 top-1/2 right-1/4"
        style={{ background: 'rgba(252, 211, 77, 0.1)', animationDelay: '8s' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div>
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
            style={{
              background: 'rgba(52, 211, 153, 0.15)',
              border: '1px solid rgba(52, 211, 153, 0.3)',
              color: '#6ee7b7',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="w-3.5 h-3.5" />
            Free Chrome Extension — No Account Required
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {headline.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={
                  ['Control', 'See'].includes(word)
                    ? 'gradient-text mr-3 inline-block'
                    : 'text-white mr-3 inline-block'
                }
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Sub */}
          <motion.p
            className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Sensitive blocks explicit content using AI-powered detection, a PIN-protected bypass, and positive alternatives — all running privately in your browser.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <a
              href="/sensitive-extension.zip"
              download
              id="hero-download-btn"
              className="flex items-center gap-3 px-7 py-4 rounded-2xl text-base font-bold text-white glow-btn"
            >
              <Download className="w-5 h-5" />
              Download Extension — Free
            </a>
            <a
              href="#install-guide"
              className="flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-slate-300 hover:text-white transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              How to Install
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Trust chips */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            {[
              { icon: <Eye className="w-3.5 h-3.5" />, label: 'AI-Powered Detection' },
              { icon: <Lock className="w-3.5 h-3.5" />, label: 'PIN-Protected Bypass' },
              { icon: <Shield className="w-3.5 h-3.5" />, label: 'Zero Data Collected' },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-xs text-slate-400 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <span className="text-emerald-400">{icon}</span>
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Block screen mockup carousel */}
        <motion.div
          className="relative flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        >
          {/* Glow behind mockup */}
          <div
            className="absolute inset-0 rounded-3xl blur-3xl opacity-40 -z-10"
            style={{ background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.4), transparent 70%)' }}
          />

          <HeroMockupCarousel />
        </motion.div>
      </div>
    </section>
  );
}
