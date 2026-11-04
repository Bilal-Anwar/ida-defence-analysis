import React, { useEffect } from 'react';
import { X, Quote, MapPin, Calendar, Building2, User } from 'lucide-react';
import { InterviewItem } from '../../data/interviews';
import { TacticalImage } from './TacticalImage';

interface InterviewModalProps {
  interview: InterviewItem | null;
  onClose: () => void;
}

export const InterviewModal: React.FC<InterviewModalProps> = ({ interview, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (interview) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [interview, onClose]);

  if (!interview) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#121715] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0F0E]">
          <div className="flex items-center gap-3">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-widest text-[#FFAF00]">
              EXCLUSIVE DEFENCE INTERVIEW
            </span>
            <span className="text-white/30">/</span>
            <span className="font-['Inter'] text-xs text-[#A7ADA9]">
              {interview.date}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#A7ADA9] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Executive Header Lockup */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 rounded-xl bg-[#191E1B] border border-white/10">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-[#FFAF00] shadow-lg">
              <TacticalImage
                src={interview.imageUrl}
                alt={interview.name}
                containerClassName="w-full h-full"
                overlayGradient={false}
              />
            </div>

            <div className="space-y-1">
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#FFAF00]">
                {interview.category}
              </span>
              <h2 className="font-['Barlow_Condensed'] font-extrabold uppercase text-2xl sm:text-3xl text-white">
                {interview.name}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#A7ADA9]">
                <span className="text-white font-medium">{interview.role}</span>
                <span>·</span>
                <span className="text-[#FFAF00] font-semibold">{interview.organization}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FFAF00]" />
                  {interview.location}
                </span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-['Barlow_Condensed'] font-extrabold uppercase text-2xl sm:text-3xl text-white leading-tight">
            "{interview.headline}"
          </h1>

          {/* Prominent Quote Callout */}
          <div className="p-6 rounded-xl bg-[#222824]/50 border-l-4 border-[#FFAF00] relative">
            <Quote className="w-8 h-8 text-[#FFAF00]/25 absolute top-3 right-3" />
            <p className="font-['Instrument_Serif'] italic text-xl sm:text-2xl text-white leading-snug">
              "{interview.quote}"
            </p>
          </div>

          {/* Q&A Section */}
          <div className="space-y-6 pt-4">
            <h3 className="font-['Barlow_Condensed'] font-bold uppercase text-lg text-white tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFAF00]" />
              Official Editorial Dialogue
            </h3>

            {interview.interviewBody.map((qa, index) => (
              <div key={index} className="space-y-2 border-b border-white/5 pb-5 last:border-0">
                <h4 className="font-['Inter'] font-semibold text-sm sm:text-base text-[#FFAF00]">
                  IDA: {qa.question}
                </h4>
                <p className="font-['Inter'] text-sm sm:text-base text-[#D0D6D2] leading-relaxed pl-3 border-l border-white/20">
                  <strong className="text-white">{interview.name}:</strong> {qa.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#0B0F0E] flex items-center justify-between text-xs text-[#A7ADA9]">
          <span>Conducted exclusively by International Defence Analysis Editorial Board</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            Close Interview
          </button>
        </div>
      </div>
    </div>
  );
};
