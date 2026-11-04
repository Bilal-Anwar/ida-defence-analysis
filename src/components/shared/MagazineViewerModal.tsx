import React, { useEffect } from 'react';
import { X, BookOpen, ExternalLink } from 'lucide-react';
import { MagazineEdition } from '../../data/magazines';

interface MagazineViewerModalProps {
  magazine: MagazineEdition | null;
  onClose: () => void;
}

export const MagazineViewerModal: React.FC<MagazineViewerModalProps> = ({ magazine, onClose }) => {
  useEffect(() => {
    if (!magazine) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    const dialog = document.getElementById('magazine-reader');
    const closeButton = dialog?.querySelector<HTMLButtonElement>('button');
    closeButton?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab' && dialog) {
        const controls = dialog.querySelectorAll<HTMLElement>('button, a[href]');
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [magazine, onClose]);

  if (!magazine) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl" onClick={onClose}>
      <div id="magazine-reader" role="dialog" aria-modal="true" aria-labelledby="magazine-title" className="w-full max-w-5xl max-h-[92vh] bg-[#121715] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-white/10 bg-[#0B0F0E]">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#FFAF00] shrink-0" />
            <div>
              <p className="text-xs text-[#FFAF00] uppercase tracking-widest">{magazine.edition}</p>
              <h2 id="magazine-title" className="font-['Barlow_Condensed'] font-bold text-xl text-white uppercase">{magazine.title}</h2>
            </div>
          </div>
          <button type="button" onClick={onClose} aria-label="Close modal" className="p-2 rounded-full text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#FFAF00]"><X className="w-5 h-5" /></button>
        </div>
        <div className="overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <img src={magazine.coverImage} alt={`${magazine.title} — ${magazine.edition} cover`} width={1518} height={1958} className="w-full h-auto rounded-lg border border-white/10" />
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold text-[#FFAF00] tracking-wider uppercase mb-2">{magazine.category}</p>
              <h3 className="font-['Barlow_Condensed'] text-3xl font-bold text-white mb-4">{magazine.subtitle}</h3>
              <p className="text-sm text-[#D0D6D2] leading-relaxed">{magazine.summary}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#191E1B] border border-white/10">
              <h4 className="text-sm font-bold text-white uppercase mb-3">On the Cover</h4>
              <ul className="list-disc pl-4 space-y-2 text-sm text-[#A7ADA9]">{magazine.featuredThemes.map((theme) => <li key={theme}>{theme}</li>)}</ul>
            </div>
            {magazine.keyInterviews.length > 0 && (
              <div className="p-4 rounded-xl bg-[#191E1B] border border-white/10">
                <h4 className="text-sm font-bold text-white uppercase mb-3">Exclusive Interviews</h4>
                <ul className="list-disc pl-4 space-y-2 text-sm text-[#A7ADA9]">{magazine.keyInterviews.map((interview) => <li key={interview}>{interview}</li>)}</ul>
              </div>
            )}
            <a href={magazine.coverImage} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#FFAF00] px-5 py-3 text-black font-bold text-xs uppercase focus-visible:outline-2 focus-visible:outline-white">View Full Cover <ExternalLink className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};
