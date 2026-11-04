import React, { useEffect, useState } from 'react';
import { X, ArrowRight, Shield, ChevronDown } from 'lucide-react';
import { MAIN_NAV_ITEMS, SOCIAL_LINKS } from '../../data/navigation';
import { OfficialLogo } from '../shared/OfficialLogo';
import { PrimaryButton } from '../shared/PrimaryButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem?: string;
  onSelectNav: (category?: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeItem = 'HOME',
  onSelectNav,
}) => {
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-[#0B0F0E] text-white animate-in fade-in duration-300 overflow-y-auto"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
        <OfficialLogo />
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-brand-yellow text-[#A7ADA9] hover:text-brand-yellow transition-colors"
          aria-label="Close mobile navigation"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links with streamlined structure & collapsible sectors */}
      <nav className="flex-1 px-6 py-6 space-y-1">
        {/* HOME */}
        <a
          href="#hero"
          onClick={() => {
            onSelectNav('HOME');
            onClose();
          }}
          className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-['Barlow_Condensed'] uppercase tracking-wider text-xl font-bold transition-all duration-200 ${
            activeItem.toUpperCase() === 'HOME'
              ? 'text-brand-yellow bg-white/5 border-l-2 border-brand-yellow'
              : 'text-white hover:text-brand-yellow hover:bg-white/[0.03]'
          }`}
        >
          <span>HOME</span>
          <ArrowRight className="w-4 h-4 text-white/30" />
        </a>

        {/* NEWS */}
        <a
          href="#latest-news"
          onClick={() => {
            onSelectNav('NEWS');
            onClose();
          }}
          className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-['Barlow_Condensed'] uppercase tracking-wider text-xl font-bold transition-all duration-200 ${
            activeItem.toUpperCase() === 'NEWS'
              ? 'text-brand-yellow bg-white/5 border-l-2 border-brand-yellow'
              : 'text-white hover:text-brand-yellow hover:bg-white/[0.03]'
          }`}
        >
          <span>NEWS</span>
          <ArrowRight className="w-4 h-4 text-white/30" />
        </a>

        {/* ARTICLES */}
        <a
          href="#featured-news"
          onClick={() => {
            onSelectNav('ARTICLES');
            onClose();
          }}
          className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-['Barlow_Condensed'] uppercase tracking-wider text-xl font-bold transition-all duration-200 ${
            activeItem.toUpperCase() === 'ARTICLES'
              ? 'text-brand-yellow bg-white/5 border-l-2 border-brand-yellow'
              : 'text-white hover:text-brand-yellow hover:bg-white/[0.03]'
          }`}
        >
          <span>ARTICLES</span>
          <ArrowRight className="w-4 h-4 text-white/30" />
        </a>

        {/* SECTORS ACCORDION */}
        <div className="py-1">
          <button
            onClick={() => setMobileSectorsOpen((prev) => !prev)}
            className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg font-['Barlow_Condensed'] uppercase tracking-wider text-xl font-bold text-white hover:text-brand-yellow transition-colors"
          >
            <div className="flex items-center gap-2">
              <span>DOMAIN</span>
              <span className="text-[10px] font-['Plus_Jakarta_Sans'] px-1.5 py-0.5 rounded bg-white/10 text-brand-yellow font-bold">
                4
              </span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-brand-yellow transition-transform duration-200 ${
                mobileSectorsOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {mobileSectorsOpen && (
            <div className="pl-4 pr-1 py-1 space-y-1 border-l border-white/10 ml-3 mt-1 animate-in fade-in duration-200">
              {[
                { label: 'Acquisitions & Procurement', cat: 'ACQUISITIONS', href: '#latest-news' },
                { label: 'Weapons & Tech Systems', cat: 'WEAPONS', href: '#domains' },
                { label: 'Geopolitics & Strategy', cat: 'GEOPOLITICS', href: '#latest-news' },
                { label: 'Conflict & Operations', cat: 'CONFLICT', href: '#latest-news' },
              ].map((sub) => (
                <a
                  key={sub.label}
                  href={sub.href}
                  onClick={() => {
                    onSelectNav(sub.cat);
                    onClose();
                  }}
                  className="flex items-center justify-between py-2 px-2.5 rounded-md text-sm text-[#A7ADA9] hover:text-brand-yellow hover:bg-white/5 font-['Inter'] transition-colors"
                >
                  <span>{sub.label}</span>
                  <span className="text-brand-yellow text-xs">›</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* EXPOS */}
        <a
          href="#magazines"
          onClick={() => {
            onSelectNav('EXPOS');
            onClose();
          }}
          className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-['Barlow_Condensed'] uppercase tracking-wider text-xl font-bold transition-all duration-200 ${
            activeItem.toUpperCase() === 'EXPOS'
              ? 'text-brand-yellow bg-white/5 border-l-2 border-brand-yellow'
              : 'text-white hover:text-brand-yellow hover:bg-white/[0.03]'
          }`}
        >
          <span>EXPOS</span>
          <ArrowRight className="w-4 h-4 text-white/30" />
        </a>

        {/* MAGAZINES */}
        <a
          href="#magazines"
          onClick={() => {
            onSelectNav('MAGAZINES');
            onClose();
          }}
          className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-['Barlow_Condensed'] uppercase tracking-wider text-xl font-bold transition-all duration-200 ${
            activeItem.toUpperCase() === 'MAGAZINES'
              ? 'text-brand-yellow bg-white/5 border-l-2 border-brand-yellow'
              : 'text-white hover:text-brand-yellow hover:bg-white/[0.03]'
          }`}
        >
          <span>MAGAZINES</span>
          <ArrowRight className="w-4 h-4 text-white/30" />
        </a>

        {/* INTERVIEWS */}
        <a
          href="#interviews"
          onClick={() => {
            onSelectNav('INTERVIEWS');
            onClose();
          }}
          className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-['Barlow_Condensed'] uppercase tracking-wider text-xl font-bold transition-all duration-200 ${
            activeItem.toUpperCase() === 'INTERVIEWS'
              ? 'text-brand-yellow bg-white/5 border-l-2 border-brand-yellow'
              : 'text-white hover:text-brand-yellow hover:bg-white/[0.03]'
          }`}
        >
          <span>INTERVIEWS</span>
          <ArrowRight className="w-4 h-4 text-white/30" />
        </a>
      </nav>

      {/* Bottom CTA & Social Links */}
      <div className="p-6 border-t border-white/10 bg-[#121715] shrink-0 space-y-4">
        <PrimaryButton
          asAnchor
          href="#advertise"
          variant="primary"
          size="md"
          className="w-full justify-center"
          onClick={onClose}
        >
          ADVERTISE WITH US
        </PrimaryButton>

        <div className="flex items-center justify-between text-xs text-[#A7ADA9] pt-2">
          <span>IDA Editorial Bureau</span>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">X (Twitter)</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">YouTube</a>
          </div>
        </div>
      </div>
    </div>
  );
};
