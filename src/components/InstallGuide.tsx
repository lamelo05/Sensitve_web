'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Download, FolderOpen, Settings2, ToggleRight, Package, Pin, CheckCircle2, ArrowDown } from 'lucide-react';

const steps = [
  {
    icon: <Download className="w-6 h-6" />,
    number: 1,
    title: 'Download the Extension ZIP',
    desc: 'Click the button below to download the Sensitive extension as a ZIP file to your computer.',
    action: (
      <a
        href="/sensitive-release.zip"
        download
        id="install-download-btn"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white glow-btn mt-3"
      >
        <Download className="w-4 h-4" />
        Download sensitive-release.zip
      </a>
    ),
  },
  {
    icon: <Package className="w-6 h-6" />,
    number: 2,
    title: 'Unzip the File',
    desc: 'Right-click the downloaded ZIP and select "Extract All" (Windows) or double-click (Mac). Note the folder path — you will need it.',
    code: 'Right-click → Extract All → Choose location → Extract',
  },
  {
    icon: <Settings2 className="w-6 h-6" />,
    number: 3,
    title: 'Open Chrome Extensions',
    desc: 'Open a new tab in Chrome or Edge and type the following in the address bar, then press Enter:',
    code: 'chrome://extensions',
    codeNote: 'For Microsoft Edge, use: edge://extensions',
  },
  {
    icon: <ToggleRight className="w-6 h-6" />,
    number: 4,
    title: 'Enable Developer Mode',
    desc: 'In the top-right corner of the Extensions page, toggle on "Developer mode". A new toolbar will appear.',
    highlight: true,
  },
  {
    icon: <FolderOpen className="w-6 h-6" />,
    number: 5,
    title: 'Load the Unpacked Extension',
    desc: 'Click the "Load unpacked" button that appeared after enabling Developer mode. In the file picker, select the folder you extracted in Step 2.',
    code: 'Load unpacked → Select the extracted folder → Open',
  },
  {
    icon: <Pin className="w-6 h-6" />,
    number: 6,
    title: 'Pin & Configure',
    desc: 'Click the puzzle piece icon (🧩) in Chrome\'s toolbar, find "Sensitive", and click the pin icon to keep it visible. Then click the Sensitive icon to set your PIN.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    number: 7,
    title: 'Test It Out',
    desc: 'Visit any site on your blacklist or a test URL. You should see the Sensitive block screen with a Bible verse and PIN bypass option.',
    success: true,
  },
];

export default function InstallGuide() {
  return (
    <section id="install-guide" className="py-32 lg:py-48 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(52, 211, 153, 0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 block">Install Guide</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Space Grotesk' }}>
            Get started in{' '}
            <span className="gradient-text">under 2 minutes</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
            Follow these 7 steps to load Sensitive into Chrome or Edge without needing the Chrome Web Store.
          </p>

          {/* Primary download CTA at top of guide */}
          <a
            href="/sensitive-release.zip"
            download
            id="guide-top-download-btn"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white glow-btn"
          >
            <Download className="w-5 h-5" />
            Download Extension — It&apos;s Free
          </a>

          <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-sm">
            <ArrowDown className="w-4 h-4" />
            Then follow the steps below
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, rgba(52, 211, 153, 0.6) 0%, rgba(52, 211, 153, 0.1) 100%)' }}
          />

          <div className="space-y-6">
            {steps.map(({ icon, number, title, desc, code, codeNote, action, highlight, success }, i) => (
              <motion.div
                key={number}
                className="flex gap-6 relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {/* Step circle */}
                <div
                  className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: success
                      ? 'linear-gradient(135deg, #22c55e33, #16a34a22)'
                      : highlight
                      ? 'linear-gradient(135deg, rgba(252, 211, 77, 0.25), rgba(52, 211, 153, 0.15))'
                      : 'linear-gradient(135deg, rgba(52, 211, 153, 0.2), rgba(16, 185, 129, 0.1))',
                    border: success
                      ? '1px solid rgba(34,197,94,0.3)'
                      : highlight
                      ? '1px solid rgba(252, 211, 77, 0.3)'
                      : '1px solid rgba(52, 211, 153, 0.25)',
                    color: success ? '#4ade80' : highlight ? '#fcd34d' : '#6ee7b7',
                  }}
                >
                  {icon}
                </div>

                {/* Content */}
                <div
                  className="flex-1 glass-card p-6 hover:border-white/15 transition-all duration-300"
                  style={{
                    borderColor: success
                      ? 'rgba(34,197,94,0.15)'
                      : highlight
                      ? 'rgba(255,107,157,0.15)'
                      : undefined,
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: success ? 'rgba(34,197,94,0.15)' : 'rgba(52, 211, 153, 0.15)',
                        color: success ? '#4ade80' : '#6ee7b7',
                      }}
                    >
                      Step {number}
                    </span>
                    {success && (
                      <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Done!
                      </span>
                    )}
                    {highlight && (
                      <span className="text-xs font-semibold text-amber-400">⚠ Important</span>
                    )}
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Space Grotesk' }}>
                    {title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{desc}</p>

                  {code && (
                    <div className="mt-2">
                      <code
                        className="block px-4 py-3 rounded-xl text-sm font-mono"
                        style={{ background: 'rgba(52, 211, 153, 0.12)', color: '#d1fae5', border: '1px solid rgba(52, 211, 153, 0.2)' }}
                      >
                        {code}
                      </code>
                      {codeNote && (
                        <p className="text-slate-500 text-xs mt-2 italic">{codeNote}</p>
                      )}
                    </div>
                  )}

                  {action && action}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          className="glass-card p-6 mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ border: '1px solid rgba(52, 211, 153, 0.2)', background: 'rgba(52, 211, 153, 0.07)' }}
        >
          <p className="text-slate-400 text-sm leading-relaxed">
            <span className="text-emerald-400 font-semibold">Works on Chrome, Brave, Edge</span>, and any Chromium-based browser.{' '}
            Having issues? The extension must be loaded as an <span className="inline-code">unpacked</span> extension since it is not yet published to the Chrome Web Store.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
