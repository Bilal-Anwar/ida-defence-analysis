import React, { useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { InterviewCard } from './InterviewCard';
import { EXCLUSIVE_INTERVIEWS, InterviewItem } from '../../data/interviews';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface InterviewsSectionProps {
  onReadInterview: (interview: InterviewItem) => void;
}

export const InterviewsSection: React.FC<InterviewsSectionProps> = ({ onReadInterview }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const scrollInterviews = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    track.scrollBy({ left: direction * ((card?.offsetWidth ?? 340) + 24), behavior: prefersReduced ? 'instant' : 'smooth' });
  };

  return (
    <section id="interviews" className="relative py-20 sm:py-28 bg-[#121715] overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <SectionHeading
            eyebrow="INDUSTRY LEADERS"
            title="IDA-EXCLUSIVE INTERVIEWS"
            accentWord="EXCLUSIVE"
            description="Conversations with the visionaries, executives, and military leaders shaping the international defence landscape."
          />
          <div className="flex items-center gap-3 shrink-0">
            <a href="https://defenceida.com/category/interviews/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-yellow hover:text-white">
              All interviews <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button type="button" onClick={() => scrollInterviews(-1)} aria-label="Previous interview" aria-controls="interview-track" className="p-2 rounded-full border border-white/15 text-white hover:border-brand-yellow hover:text-brand-yellow">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button type="button" onClick={() => scrollInterviews(1)} aria-label="Next interview" aria-controls="interview-track" className="p-2 rounded-full border border-white/15 text-white hover:border-brand-yellow hover:text-brand-yellow">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div ref={trackRef} id="interview-track" role="region" aria-label="Exclusive interviews" className="flex gap-6 overflow-x-auto snap-x snap-mandatory pt-10 pb-5">
          {EXCLUSIVE_INTERVIEWS.map((interview) => (
            <div key={interview.id} className="w-[85%] sm:w-[400px] md:w-[420px] shrink-0 snap-start">
              <InterviewCard interview={interview} onRead={onReadInterview} className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
