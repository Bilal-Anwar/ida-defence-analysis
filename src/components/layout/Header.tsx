import React, { useState, useEffect } from 'react';
import { Search, Menu, ChevronDown } from 'lucide-react';
import { MAIN_NAV_ITEMS } from '../../data/navigation';
import { OfficialLogo } from '../shared/OfficialLogo';
import { PrimaryButton } from '../shared/PrimaryButton';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  onOpenSearch: () => void;
  onSelectCategory?: (category: string) => void;
  activeCategory?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onSelectCategory,
  activeCategory = 'HOME',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0F0E]/92 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-gradient-to-b from-[#0B0F0E]/90 via-[#0B0F0E]/60 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Left: Official IDA Logo */}
          <div className="shrink-0">
            <OfficialLogo />
          </div>

          {/* Center: Streamlined Navigation Links for Desktop */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 2xl:gap-8">
            {/* 1. HOME */}
            <a
              href="#hero"
              onClick={() => onSelectCategory && onSelectCategory('HOME')}
              className={`group relative text-xs font-['Inter'] font-semibold uppercase tracking-wider py-1.5 transition-colors duration-250 whitespace-nowrap shrink-0 ${
                activeCategory.toUpperCase() === 'HOME' ? 'text-brand-yellow' : 'text-white/90 hover:text-brand-yellow'
              }`}
            >
              <span>HOME</span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-brand-yellow transition-all duration-300 ${
                  activeCategory.toUpperCase() === 'HOME' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>

            {/* 2. NEWS */}
            <a
              href="#latest-news"
              onClick={() => onSelectCategory && onSelectCategory('NEWS')}
              className={`group relative text-xs font-['Inter'] font-semibold uppercase tracking-wider py-1.5 transition-colors duration-250 whitespace-nowrap shrink-0 ${
                activeCategory.toUpperCase() === 'NEWS' ? 'text-brand-yellow' : 'text-white/90 hover:text-brand-yellow'
              }`}
            >
              <span>NEWS</span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-brand-yellow transition-all duration-300 ${
                  activeCategory.toUpperCase() === 'NEWS' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>

            {/* 3. ARTICLES */}
            <a
              href="#featured-news"
              onClick={() => onSelectCategory && onSelectCategory('ARTICLES')}
              className={`group relative text-xs font-['Inter'] font-semibold uppercase tracking-wider py-1.5 transition-colors duration-250 whitespace-nowrap shrink-0 ${
                activeCategory.toUpperCase() === 'ARTICLES' ? 'text-brand-yellow' : 'text-white/90 hover:text-brand-yellow'
              }`}
            >
              <span>ARTICLES</span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-brand-yellow transition-all duration-300 ${
                  activeCategory.toUpperCase() === 'ARTICLES' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>

            {/* 4. STREAMLINED DOMAIN DROPDOWN */}
            <div
              className="relative group/dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="group relative flex items-center gap-1 text-xs font-['Inter'] font-semibold uppercase tracking-wider py-1.5 transition-colors duration-250 whitespace-nowrap shrink-0 text-white/90 hover:text-brand-yellow cursor-pointer"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>DOMAIN</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-250 ${
                    dropdownOpen ? 'rotate-180 text-brand-yellow' : 'text-white/60 group-hover:text-brand-yellow'
                  }`}
                />
                <span className="absolute bottom-0 left-0 h-[2px] bg-brand-yellow transition-all duration-300 w-0 group-hover:w-full" />
              </button>

              {/* Inner Dropdown Menu Card */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 transition-all duration-200 z-50 ${
                  dropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                    : 'opacity-0 -translate-y-2 pointer-events-none invisible'
                }`}
              >
                <div className="w-72 rounded-xl bg-[#121715]/95 backdrop-blur-xl border border-white/15 p-2 shadow-[0_20px_40px_rgba(0,0,0,0.85)] space-y-1 text-left relative overflow-hidden">
                  {/* Subtle top golden glow line */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-yellow to-transparent" />

                  {/* Dropdown Items (without top heading or active border) */}
                  {[
                    {
                      label: 'ACQUISITIONS',
                      category: 'ACQUISITIONS',
                      href: '#latest-news',
                      desc: 'Procurement contracts, tenders & naval programs',
                    },
                    {
                      label: 'WEAPONS & SYSTEMS',
                      category: 'WEAPONS',
                      href: '#domains',
                      desc: 'Directed energy, smart ammo, armor & AESA radars',
                    },
                    {
                      label: 'GEOPOLITICS',
                      category: 'GEOPOLITICS',
                      href: '#latest-news',
                      desc: 'Regional alliances, deterrence & maritime chokepoints',
                    },
                    {
                      label: 'CONFLICT THEATRES',
                      category: 'CONFLICT',
                      href: '#latest-news',
                      desc: 'A2/AD operational envelopes & live-fire exercises',
                    },
                  ].map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      onClick={() => {
                        if (onSelectCategory) onSelectCategory(subItem.category);
                        setDropdownOpen(false);
                      }}
                      className="group/item block px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-wide text-white group-hover/item:text-brand-yellow transition-colors">
                          {subItem.label}
                        </span>
                        <span className="text-[10px] text-[#A7ADA9] group-hover/item:text-brand-yellow font-mono">
                          ›
                        </span>
                      </div>
                      <span className="font-['Inter'] text-[11px] text-[#A7ADA9] leading-tight block mt-0.5 line-clamp-1">
                        {subItem.desc}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. EXPOS */}
            <a
              href="#magazines"
              onClick={() => onSelectCategory && onSelectCategory('EXPOS')}
              className={`group relative text-xs font-['Inter'] font-semibold uppercase tracking-wider py-1.5 transition-colors duration-250 whitespace-nowrap shrink-0 ${
                activeCategory.toUpperCase() === 'EXPOS' ? 'text-brand-yellow' : 'text-white/90 hover:text-brand-yellow'
              }`}
            >
              <span>EXPOS</span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-brand-yellow transition-all duration-300 ${
                  activeCategory.toUpperCase() === 'EXPOS' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>

            {/* 6. MAGAZINES */}
            <a
              href="#magazines"
              onClick={() => onSelectCategory && onSelectCategory('MAGAZINES')}
              className={`group relative text-xs font-['Inter'] font-semibold uppercase tracking-wider py-1.5 transition-colors duration-250 whitespace-nowrap shrink-0 ${
                activeCategory.toUpperCase() === 'MAGAZINES' ? 'text-brand-yellow' : 'text-white/90 hover:text-brand-yellow'
              }`}
            >
              <span>MAGAZINES</span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-brand-yellow transition-all duration-300 ${
                  activeCategory.toUpperCase() === 'MAGAZINES' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>

            {/* 7. INTERVIEWS */}
            <a
              href="#interviews"
              onClick={() => onSelectCategory && onSelectCategory('INTERVIEWS')}
              className={`group relative text-xs font-['Inter'] font-semibold uppercase tracking-wider py-1.5 transition-colors duration-250 whitespace-nowrap shrink-0 ${
                activeCategory.toUpperCase() === 'INTERVIEWS' ? 'text-brand-yellow' : 'text-white/90 hover:text-brand-yellow'
              }`}
            >
              <span>INTERVIEWS</span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-brand-yellow transition-all duration-300 ${
                  activeCategory.toUpperCase() === 'INTERVIEWS' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          </nav>

          {/* Right: Advertising CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Advertise with us CTA */}
            <div className="hidden sm:block">
              <PrimaryButton
                asAnchor
                href="#advertise"
                variant="primary"
                size="sm"
                icon="none"
              >
                ADVERTISE WITH US
              </PrimaryButton>
            </div>

            {/* Mobile / Tablet Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-brand-yellow text-white hover:text-brand-yellow transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSearch={onOpenSearch}
        activeItem={activeCategory}
        onSelectNav={(cat) => {
          if (cat && onSelectCategory) onSelectCategory(cat);
        }}
      />
    </>
  );
};
