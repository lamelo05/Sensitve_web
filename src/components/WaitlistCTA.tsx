'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

type FormData = { email: string };

export default function WaitlistCTA() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    toast.success('You\'re on the list! We\'ll keep you updated.', {
      style: { background: '#1e1840', color: '#e2e8f0', border: '1px solid rgba(52, 211, 153, 0.3)' },
      iconTheme: { primary: '#10b981', secondary: '#fff' },
    });
  };

  return (
    <section className="py-32 lg:py-48 relative overflow-hidden">
      <Toaster position="bottom-center" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(52, 211, 153, 0.12) 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.3), rgba(16, 185, 129, 0.15))', border: '1px solid rgba(52, 211, 153, 0.25)' }}>
            <Mail className="w-7 h-7 text-emerald-400" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Space Grotesk' }}>
            Stay in the <span className="gradient-text">loop</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Get notified when Sensitive hits the Chrome Web Store, adds new features, or releases mobile support.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <div className="flex-1">
                  <input
                    id="waitlist-email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-slate-500 outline-none focus:ring-2"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: errors.email ? '1px solid rgba(255,107,107,0.5)' : '1px solid rgba(255,255,255,0.1)',
                      boxShadow: 'none',
                    }}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 text-left">{errors.email.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white glow-btn disabled:opacity-70 disabled:cursor-not-allowed flex-shrink-0"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Notify Me <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="flex items-center justify-center gap-3 text-emerald-400 font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <CheckCircle className="w-6 h-6" />
                You&apos;re on the list!
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-slate-600 text-xs mt-5">No spam. Unsubscribe any time.</p>
        </motion.div>
      </div>
    </section>
  );
}
