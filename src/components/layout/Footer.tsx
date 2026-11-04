import React from 'react';
import { Shield, ExternalLink, ArrowUp } from 'lucide-react';
import {
  FOOTER_EXPLORE_LINKS,
  FOOTER_CATEGORY_LINKS,
  FOOTER_ORGANIZATION_LINKS,
} from '../../data/navigation';
import { OfficialLogo } from '../shared/OfficialLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070A09] border-t border-white/10 text-left overflow-hidden">
      {/* Subtle tactical ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FFAF00]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Identity (span 5) */}
          <div className="lg:col-span-5 space-y-5">
            <OfficialLogo size="lg" />

            <p className="font-['Inter'] text-sm text-[#A7ADA9] leading-relaxed max-w-sm">
              International Defence Analysis (IDA) is the premier independent editorial platform delivering authoritative news, strategic intelligence, and technical insights across global defense, aerospace, naval warfare, and emerging security domains.
            </p>

            <div className="flex items-center gap-2 text-xs font-['Plus_Jakarta_Sans'] font-bold text-[#FFAF00] uppercase tracking-wider">
              <span>INDEPENDENT</span>
              <span>·</span>
              <span>DISTINCTIVE</span>
              <span>·</span>
              <span>AUTHORITATIVE</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: 'LinkedIn', href: 'https://linkedin.com' },
                { name: 'X / Twitter', href: 'https://twitter.com' },
                { name: 'YouTube', href: 'https://youtube.com' },
                { name: 'RSS Feed', href: '#news' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-md bg-[#121715] border border-white/10 hover:border-[#FFAF00] text-xs text-[#A7ADA9] hover:text-[#FFAF00] transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explore (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-widest text-[#FFAF00] block">
              EXPLORE
            </span>
            <ul className="space-y-2.5">
              {FOOTER_EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-['Inter'] text-sm text-[#A7ADA9] hover:text-[#FFAF00] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-widest text-[#FFAF00] block">
              COVERAGE DOMAINS
            </span>
            <ul className="space-y-2.5">
              {FOOTER_CATEGORY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-['Inter'] text-sm text-[#A7ADA9] hover:text-[#FFAF00] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Organization & Accreditations (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-widest text-[#FFAF00] block">
              ORGANIZATION
            </span>
            <ul className="space-y-2.5">
              {FOOTER_ORGANIZATION_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-['Inter'] text-sm text-[#A7ADA9] hover:text-[#FFAF00] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#A7ADA9] hover:text-[#FFAF00] transition-colors pt-2"
              >
                <ArrowUp className="w-3.5 h-3.5" /> Back to top
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7ADA9]">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/aistudio/image_cd546ea9.png"
              alt="IDA"
              className="w-4 h-4 object-contain rounded-full"
            />
            <span>
              © {currentYear} International Defence Analysis. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Editorial Integrity Policy</span>
            <span>·</span>
            <span>Accredited Media Standards</span>
            <span>·</span>
            <span>defenceida.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
