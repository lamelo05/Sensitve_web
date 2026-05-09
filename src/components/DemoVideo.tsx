'use client';

import { motion } from 'framer-motion';

export default function DemoVideo() {
  return (
    <section className="relative w-full px-6 flex justify-center z-20">
      <motion.div
        className="w-full max-w-5xl rounded-3xl overflow-hidden glass-card shadow-2xl relative"
        style={{ 
          border: '1px solid rgba(52, 211, 153, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px rgba(16, 185, 129, 0.15)'
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Browser-like header bar for aesthetics */}
        <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#122822', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <div className="flex-1 text-center text-xs text-emerald-400/50 font-medium tracking-wide">
            Sensitive Demo
          </div>
        </div>

        {/* Video Player */}
        <video 
          src="/demo.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto block bg-black"
        />
      </motion.div>
    </section>
  );
}
