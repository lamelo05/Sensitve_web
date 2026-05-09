'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Does Sensitive work on all websites?',
    a: 'Sensitive works on all HTTP/HTTPS websites in Chrome. It uses both AI image scanning and keyword filtering to detect explicit content across virtually any site.',
  },
  {
    q: 'What happens if I forget my PIN?',
    a: 'You can reset your PIN through the extension popup. Since everything is stored locally, there is no account recovery — keep your PIN somewhere safe or use a memorable one.',
  },
  {
    q: 'Does Sensitive send my browsing data anywhere?',
    a: 'No. Absolutely zero data leaves your device. All detection — including the ML model — runs entirely in your browser. There are no servers, no telemetry, and no accounts.',
  },
  {
    q: 'Will it slow down my browser?',
    a: 'The ML model (NSFWJS) runs asynchronously and only activates on pages with images. You may notice a brief delay on very image-heavy pages, but normal browsing is unaffected.',
  },
  {
    q: 'Can I use Sensitive on Microsoft Edge?',
    a: 'Yes. Edge supports Chrome extensions natively. Follow the same install guide but navigate to edge://extensions instead of chrome://extensions.',
  },
  {
    q: 'Is the extension available on the Chrome Web Store?',
    a: 'Not yet. For now you install it as an unpacked developer extension following our 7-step guide. A Chrome Web Store listing is planned for a future release.',
  },
  {
    q: 'Can I whitelist certain websites?',
    a: 'Yes. Open the extension popup and add any domain to your whitelist. Educational sites, medical resources, or any domain you trust will never be blocked.',
  },
  {
    q: 'What if a site is blocked by mistake?',
    a: 'You can enter your PIN to temporarily bypass the block, or permanently add the site to your whitelist through the extension popup.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 lg:py-48 relative">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 block">FAQ</span>
          <h2 className="text-4xl font-bold text-white mb-5" style={{ fontFamily: 'Space Grotesk' }}>
            Common <span className="gradient-text">questions</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-white font-semibold text-sm group-hover:text-emerald-300 transition-colors pr-4">
                  {q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 text-slate-400"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      <p className="pt-4">{a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
