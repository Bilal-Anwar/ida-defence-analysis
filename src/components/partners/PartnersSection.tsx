import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { PARTNERS_LIST } from '../../data/partners';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const PartnersSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <section id="partners" className="relative py-20 sm:py-24 bg-[#0B0F0E] border-y border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading eyebrow="OUR NETWORK" title="OUR VALUABLE PARTNERS" accentWord="PARTNERS" description="Connecting with defence exhibitions, industry forums, and security events around the world." alignment="center" />
        <div role="region" aria-label="Our valuable partners" className="mt-10 sm:mt-12">
          <div className={prefersReduced ? 'overflow-x-auto pb-3' : 'overflow-hidden'}>
            <div className={`flex w-max ${prefersReduced ? '' : 'partner-infinite-track'}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
              {(prefersReduced ? [0] : [0, 1]).map((copy) => (
                <div key={copy} aria-hidden={copy === 1 ? true : undefined} className="flex shrink-0 gap-5 pr-5">
                  {PARTNERS_LIST.map((partner) => (
                    <div key={partner.id} className="w-[160px] sm:w-[180px] lg:w-[200px] shrink-0">
                      <div className="flex items-center justify-center aspect-[4/3] rounded-xl bg-white p-4 border border-white/10 shadow-sm">
                        <img src={partner.logo} alt={copy === 1 ? '' : partner.name} className="w-full h-full object-contain" decoding="async" />
                      </div>
                      <p className="mt-3 text-center text-[11px] leading-relaxed text-[#A7ADA9]">{partner.name}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {!prefersReduced && (
            <div className="flex justify-center mt-8">
              <button type="button" aria-label={isPaused ? 'Play partner carousel' : 'Pause partner carousel'} aria-pressed={isPaused} className="w-10 h-10 rounded-full border border-white/15 text-white flex items-center justify-center hover:border-[#FFAF00] hover:text-[#FFAF00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFAF00] transition-colors" onClick={() => setIsPaused((paused) => !paused)}>
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes partnerInfiniteScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .partner-infinite-track {
          animation: partnerInfiniteScroll 64s linear infinite;
        }
      `}</style>
    </section>
  );
};
