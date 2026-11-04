import React, { useState } from 'react';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { InterviewCard } from './InterviewCard';
import { EXCLUSIVE_INTERVIEWS, InterviewItem } from '../../data/interviews';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface InterviewsSectionProps {
  onReadInterview: (interview: InterviewItem) => void;
}

export const InterviewsSection: React.FC<InterviewsSectionProps> = ({ onReadInterview }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const prefersReduced = useReducedMotion();

  // Create seamless duplicate array for infinite loop
  const marqueeItems = [...EXCLUSIVE_INTERVIEWS, ...EXCLUSIVE_INTERVIEWS];

  return (
    <section id="interviews" className="relative py-20 sm:py-28 bg-[#121715] overflow-hidden">
      {/* Background divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <SectionHeading
            eyebrow="INDUSTRY LEADERS"
            title="IDA-EXCLUSIVE INTERVIEWS"
            accentWord="EXCLUSIVE"
            description="Conversations with the visionaries, executives, and military leaders shaping the international defence landscape."
          />

          <div className="flex items-center gap-3">
            <a href="https://defenceida.com/category/interviews/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFAF00] hover:text-white">
              All interviews <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#191E1B] border border-white/10 text-xs text-[#A7ADA9] hover:text-white transition-colors"
              aria-label={isPaused ? 'Resume marquee' : 'Pause marquee'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-[#FFAF00]" /> : <Pause className="w-3.5 h-3.5 text-[#FFAF00]" />}
              <span>{isPaused ? 'Resume Motion' : 'Pause Loop'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Continuous Marquee Track */}
      <div
        className={`w-full mt-10 relative ${prefersReduced ? 'overflow-x-auto' : 'overflow-hidden'}`}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
        onFocusCapture={() => setIsInteracting(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
        }}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
      >
        {/* Edge Fade Masks for Smooth In/Out */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#121715] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#121715] to-transparent z-10 pointer-events-none" />

        <div
          className={`flex gap-6 w-max py-2 ${
            prefersReduced ? '' : 'animate-marquee'
          }`}
          style={{
            animationPlayState: isPaused || isInteracting || prefersReduced ? 'paused' : 'running',
            animationDuration: '38s',
          }}
        >
          {marqueeItems.map((interview, idx) => (
            <div
              key={`${interview.id}-${idx}`}
              className="w-[340px] sm:w-[400px] md:w-[440px] shrink-0"
            >
              <InterviewCard
                interview={interview}
                onRead={onReadInterview}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
};
