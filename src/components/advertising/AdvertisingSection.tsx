import React from 'react';
import { ArrowUpRight, BarChart3, Globe2, Users, Download, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { PrimaryButton } from '../shared/PrimaryButton';
import { TacticalImage } from '../shared/TacticalImage';

interface AdvertisingSectionProps {
  onOpenInquiry: () => void;
  onExploreServices: () => void;
}

export const AdvertisingSection: React.FC<AdvertisingSectionProps> = ({
  onOpenInquiry,
  onExploreServices,
}) => {
  return (
    <section id="advertise" className="relative py-24 sm:py-32 bg-[#0B0F0E] overflow-hidden">
      {/* Background Exhibition Photography with Dark Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <TacticalImage
          src="https://images.unsplash.com/photo-1517976487588-66236b22ee05?auto=format&fit=crop&w=1920&q=80"
          alt="International Defence Exhibition Floor"
          containerClassName="w-full h-full opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0E] via-[#0B0F0E]/95 to-[#0B0F0E]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,175,0,0.12)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Copy, and CTAs (span 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#FFAF00]" />
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-[11px] tracking-[0.16em] text-[#FFAF00] uppercase">
                PARTNER WITH IDA
              </span>
            </div>

            <h2 className="font-['Barlow_Condensed'] font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[0.98] text-balance">
              AMPLIFY YOUR PRESENCE IN THE <span className="text-[#FFAF00]">GLOBAL DEFENCE</span> INDUSTRY
            </h2>

            <p className="font-['Inter'] text-sm sm:text-base text-[#D0D6D2] leading-relaxed max-w-xl">
              Connect with decision-makers, innovators, military leaders, and defence industry procurement authorities through our global digital platform, show-daily publications, and executive media channels.
            </p>

            {/* Credibility metric pills rendered without pill-boxes (clean unboxed text per frontend constitution) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="font-['Barlow_Condensed'] font-extrabold text-2xl sm:text-3xl text-white block">
                  120+
                </span>
                <span className="font-['Inter'] text-xs text-[#A7ADA9]">
                  Countries & Territories Reached
                </span>
              </div>

              <div>
                <span className="font-['Barlow_Condensed'] font-extrabold text-2xl sm:text-3xl text-[#FFAF00] block">
                  45,000+
                </span>
                <span className="font-['Inter'] text-xs text-[#A7ADA9]">
                  Defence Officials & Executives
                </span>
              </div>

              <div>
                <span className="font-['Barlow_Condensed'] font-extrabold text-2xl sm:text-3xl text-white block">
                  12+
                </span>
                <span className="font-['Inter'] text-xs text-[#A7ADA9]">
                  Major International Expos
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <PrimaryButton
                variant="primary"
                size="lg"
                icon="diagonal"
                onClick={onOpenInquiry}
              >
                ADVERTISE WITH US
              </PrimaryButton>

              <PrimaryButton
                variant="secondary"
                size="lg"
                icon="none"
                onClick={onExploreServices}
              >
                EXPLORE OUR SERVICES
              </PrimaryButton>
            </div>
          </div>

          {/* Right Column: Premium Commercial Panel (span 5) */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-[#191E1B]/90 backdrop-blur-md border border-[#FFAF00]/30 shadow-2xl space-y-6 text-left relative overflow-hidden">
              {/* Subtle top golden light line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFAF00] to-transparent" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#FFAF00]">
                  2026 MEDIA KIT & SPECIFICATIONS
                </span>
                <ShieldCheck className="w-4 h-4 text-[#FFAF00]" />
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-[#222824]/60 border border-white/5 space-y-1">
                  <span className="font-['Barlow_Condensed'] font-bold text-white uppercase text-base block">
                    Show Daily Sponsorships
                  </span>
                  <p className="font-['Inter'] text-xs text-[#A7ADA9]">
                    Full-bleed covers, centerfolds, and daily booth dispatches at SAHA EXPO, DSA Malaysia, EDEX, and DIMDEX.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#222824]/60 border border-white/5 space-y-1">
                  <span className="font-['Barlow_Condensed'] font-bold text-white uppercase text-base block">
                    Digital Intelligence Features
                  </span>
                  <p className="font-['Inter'] text-xs text-[#A7ADA9]">
                    Sponsored capability whitepapers, video interview syndication, and high-visibility digital banner rotations.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#222824]/60 border border-white/5 space-y-1">
                  <span className="font-['Barlow_Condensed'] font-bold text-white uppercase text-base block">
                    Executive Briefing Dispatch
                  </span>
                  <p className="font-['Inter'] text-xs text-[#A7ADA9]">
                    Exclusive sponsorship of our bi-weekly strategic defence email dispatch to accredited defence delegations.
                  </p>
                </div>
              </div>

              {/* Action Button inside panel */}
              <button
                onClick={() => {
                  alert('Request received. Downloading IDA 2026 Media Kit and Rate Card.');
                }}
                className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFAF00] text-white font-['Plus_Jakarta_Sans'] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#FFAF00]" />
                <span>Download IDA 2026 Media Kit (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
