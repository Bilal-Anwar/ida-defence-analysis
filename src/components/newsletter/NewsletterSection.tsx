import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, AlertCircle, Shield } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { PrimaryButton } from '../shared/PrimaryButton';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email address is required.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
    }, 700);
  };

  return (
    <section id="newsletter" className="relative py-20 sm:py-24 bg-[#121715] overflow-hidden">
      {/* Background divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle tactical watermark graphic */}
      <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#191E1B] border border-white/10 p-8 sm:p-12 lg:p-16 text-center space-y-6 relative shadow-2xl">
          {/* Subtle top golden line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#FFAF00] to-transparent" />

          {/* Section Heading */}
          <SectionHeading
            eyebrow="STAY INFORMED"
            title="DEFENCE INTELLIGENCE — DELIVERED"
            accentWord="DELIVERED"
            description="Stay connected to the latest defence news, exclusive interviews, and international industry developments dispatched directly to your inbox."
            alignment="center"
          />

          {subscribed ? (
            /* Honest Success State */
            <div className="py-6 px-4 rounded-2xl bg-[#0B0F0E] border border-[#FFAF00]/40 max-w-lg mx-auto space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FFAF00]/20 flex items-center justify-center mx-auto text-[#FFAF00]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-['Barlow_Condensed'] font-bold uppercase text-xl text-white">
                Dispatch Subscription Confirmed
              </h4>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#A7ADA9] leading-relaxed">
                Thank you. <strong>{email}</strong> has been added to our bi-weekly defence intelligence dispatch queue (Demonstration mode active).
              </p>
              <button
                onClick={() => {
                  setSubscribed(false);
                  setEmail('');
                }}
                className="text-xs text-[#FFAF00] hover:underline uppercase font-bold tracking-wider pt-2"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            /* Active Subscription Form */
            <form onSubmit={handleSubscribe} noValidate className="max-w-lg mx-auto space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FFAF00]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter corporate or military email..."
                    className={`w-full pl-11 pr-4 py-3.5 rounded-full bg-[#0B0F0E] border text-white text-sm placeholder-[#A7ADA9]/50 focus:outline-none transition-colors ${
                      error ? 'border-red-500' : 'border-white/15 focus:border-[#FFAF00]'
                    }`}
                  />
                </div>

                <PrimaryButton
                  type="submit"
                  variant="primary"
                  size="md"
                  icon="right"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto shrink-0"
                >
                  {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                </PrimaryButton>
              </div>

              {error && (
                <p className="text-xs text-red-400 flex items-center justify-center gap-1.5 pt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{error}</span>
                </p>
              )}

              <p className="text-[11px] text-[#A7ADA9] pt-1">
                Zero spam. Direct executive briefs only. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
