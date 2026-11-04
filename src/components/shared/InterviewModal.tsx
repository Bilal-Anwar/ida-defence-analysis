import React, { useEffect, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import type { InterviewItem } from '../../data/interviews';
import { TacticalImage } from './TacticalImage';

interface InterviewModalProps {
  interview: InterviewItem | null;
  onClose: () => void;
}

export const InterviewModal: React.FC<InterviewModalProps> = ({ interview, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!interview || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [interview]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="interview-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      className="fixed inset-0 m-auto w-[calc(100%-1.5rem)] max-w-4xl max-h-[92vh] bg-[#121715] text-white border border-white/20 rounded-2xl p-0 shadow-2xl backdrop:bg-black/90 backdrop:backdrop-blur-xl"
    >
      {interview ? (
        <div className="text-left">
          <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-6 py-4 border-b border-white/10 bg-[#0B0F0E]">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-bold uppercase tracking-widest text-[#FFAF00]">IDA Exclusive Interview</span>
              <time dateTime={interview.publishedAt} className="text-[#A7ADA9]">{interview.date}</time>
            </div>
            <button type="button" autoFocus onClick={onClose} aria-label="Close interview" className="p-2 rounded-full hover:bg-white/10 text-[#A7ADA9] hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#191E1B]">
              <TacticalImage src={interview.imageUrl} alt={interview.headline} overlayGradient={false} className="object-contain" />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFAF00]">{interview.category}</span>
              <h2 id="interview-title" className="font-['Barlow_Condensed'] font-extrabold text-2xl sm:text-3xl leading-tight">{interview.headline}</h2>
              <p className="text-sm text-[#A7ADA9]">{interview.name} · {interview.role} · {interview.organization}</p>
            </div>
            <p className="text-lg text-white leading-relaxed">{interview.summary}</p>
            <div className="space-y-4 border-t border-white/10 pt-5">
              <h3 className="font-bold uppercase tracking-wider text-sm text-[#FFAF00]">Interview overview</h3>
              {interview.highlights.map((paragraph) => (
                <p key={paragraph} className="text-sm sm:text-base text-[#D0D6D2] leading-relaxed">{paragraph}</p>
              ))}
            </div>
            <a href={interview.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-[#FFAF00] text-[#0B0F0E] font-bold text-sm hover:bg-[#ffc34d]">
              Read full interview <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-[#A7ADA9]">Source: International Defence Analysis · defenceida.com</p>
          </div>
        </div>
      ) : null}
    </dialog>
  );
};
