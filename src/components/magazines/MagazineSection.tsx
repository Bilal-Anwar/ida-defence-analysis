import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { PrimaryButton } from '../shared/PrimaryButton';
import { MagazineCard } from './MagazineCard';
import { IDA_MAGAZINES, MagazineEdition } from '../../data/magazines';

interface MagazineSectionProps {
  onViewMagazine: (magazine: MagazineEdition) => void;
}

export const MagazineSection: React.FC<MagazineSectionProps> = ({ onViewMagazine }) => {
  const [startIndex, setStartIndex] = useState(0);

  // Responsive items per view: desktop 3, tablet 2, mobile 1
  const maxIndex = IDA_MAGAZINES.length - 1;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % IDA_MAGAZINES.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + IDA_MAGAZINES.length) % IDA_MAGAZINES.length);
  };

  // Compute 3 items circular slice for smooth display
  const visibleMagazines = [
    IDA_MAGAZINES[startIndex],
    IDA_MAGAZINES[(startIndex + 1) % IDA_MAGAZINES.length],
    IDA_MAGAZINES[(startIndex + 2) % IDA_MAGAZINES.length],
  ];

  return (
    <section id="magazines" className="relative py-20 sm:py-28 bg-[#0B0F0E]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        {/* Header with Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <SectionHeading
            eyebrow="THE IDA EDITIONS"
            title="EXCLUSIVE DEFENCE PUBLICATIONS"
            accentWord="EXCLUSIVE"
            description="Explore international defence exhibitions, technological developments, and strategic industry insights through our exclusive magazine editions."
          />

          {/* Slider Prev / Next Controls */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/15 bg-[#191E1B] hover:border-brand-yellow hover:bg-brand-yellow hover:text-black text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md"
              aria-label="Previous magazine edition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/15 bg-[#191E1B] hover:border-brand-yellow hover:bg-brand-yellow hover:text-black text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md"
              aria-label="Next magazine edition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Magazine Cards Showcase (Desktop 3, Tablet 2, Mobile 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Always Visible */}
          <div className="block">
            <MagazineCard
              magazine={visibleMagazines[0]}
              onView={onViewMagazine}
            />
          </div>

          {/* Card 2 - Hidden on small mobile, visible on md+ */}
          <div className="hidden md:block">
            <MagazineCard
              magazine={visibleMagazines[1]}
              onView={onViewMagazine}
            />
          </div>

          {/* Card 3 - Visible on lg+ */}
          <div className="hidden lg:block">
            <MagazineCard
              magazine={visibleMagazines[2]}
              onView={onViewMagazine}
            />
          </div>
        </div>

        {/* View All Action */}
        <div className="flex justify-center pt-6 border-t border-white/10">
          <PrimaryButton
            variant="secondary"
            size="md"
            icon="right"
            onClick={() => onViewMagazine(visibleMagazines[0])}
          >
            VIEW ALL MAGAZINES
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};
