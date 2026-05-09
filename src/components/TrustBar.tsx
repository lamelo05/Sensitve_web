'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { Users, Shield, Globe, Star } from 'lucide-react';

const stats = [
  { icon: <Shield className="w-6 h-6" />, value: 10000, suffix: '+', label: 'Sites Blocked', decimals: 0 },
  { icon: <Users className="w-6 h-6" />, value: 500, suffix: '+', label: 'Active Users', decimals: 0 },
  { icon: <Globe className="w-6 h-6" />, value: 99.9, suffix: '%', label: 'Catch Rate', decimals: 1 },
  { icon: <Star className="w-6 h-6" />, value: 0, suffix: ' Data Collected', label: 'Privacy First', decimals: 0 },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon, value, suffix, label, decimals }, i) => (
            <motion.div
              key={label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-center mb-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(52, 211, 153, 0.15)', color: '#6ee7b7', border: '1px solid rgba(52, 211, 153, 0.2)' }}
                >
                  {icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk' }}>
                {inView ? (
                  <CountUp
                    start={0}
                    end={value}
                    duration={2.5}
                    decimals={decimals}
                    suffix={suffix}
                    delay={i * 0.1}
                  />
                ) : `0${suffix}`}
              </div>
              <p className="text-slate-500 text-sm font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
