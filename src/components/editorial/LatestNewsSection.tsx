import React, { useState, useMemo } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { PrimaryButton } from '../shared/PrimaryButton';
import { TacticalImage } from '../shared/TacticalImage';
import { LATEST_NEWSROOM_ARTICLES, NewsArticle } from '../../data/news';

interface LatestNewsSectionProps {
  onSelectArticle: (article: NewsArticle) => void;
  selectedCategoryFilter?: string;
  onFilterChange?: (cat: string) => void;
}

const CATEGORIES = ['ALL', 'AIR', 'LAND', 'NAVAL', 'TECHNOLOGY', 'GEOPOLITICS'];

export const LatestNewsSection: React.FC<LatestNewsSectionProps> = ({
  onSelectArticle,
  selectedCategoryFilter = 'ALL',
  onFilterChange,
}) => {
  const [activeCategory, setActiveCategory] = useState(selectedCategoryFilter);

  // Sync if parent updates filter
  React.useEffect(() => {
    setActiveCategory(selectedCategoryFilter);
  }, [selectedCategoryFilter]);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    if (onFilterChange) onFilterChange(cat);
  };

  const allArticles = useMemo(() => {
    return [...LATEST_NEWSROOM_ARTICLES].sort((a, b) =>
      (b.publishedAt || '').localeCompare(a.publishedAt || '')
    );
  }, []);

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'ALL') return allArticles;
    return allArticles.filter((art) => art.category.toUpperCase() === activeCategory.toUpperCase());
  }, [activeCategory, allArticles]);

  const visibleArticles = filteredArticles.slice(0, 5);
  const leadArticle = visibleArticles[0];
  const sideArticles = visibleArticles.slice(1);

  return (
    <section id="latest-news" className="relative py-20 sm:py-28 bg-[#121715]">
      {/* Background divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <SectionHeading
            eyebrow="LATEST INTELLIGENCE"
            title="THE LATEST FROM IDA"
            accentWord="LATEST"
            description="Selected reporting from International Defence Analysis on aerospace, land systems, naval developments, defence technology, and geopolitics."
          />

          {/* Category Filter Buttons (Functional button controls per Frontend Constitution §1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#191E1B] border border-white/10">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory.toUpperCase() === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => handleCategoryClick(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-brand-yellow text-[#000000] shadow-sm font-bold'
                      : 'text-[#A7ADA9] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Editorial Layout */}
        <p aria-live="polite" className="text-xs text-[#A7ADA9]">
          {visibleArticles.length} articles · {activeCategory === 'ALL' ? 'Latest across all categories' : activeCategory} · Source: defenceida.com
        </p>
        {leadArticle ? <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Prominent Featured Article (span 7) */}
          <div
            role="button"
            tabIndex={0}
            aria-label={`Read ${leadArticle.title}`}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onSelectArticle(leadArticle);
              }
            }}
            onClick={() => onSelectArticle(leadArticle)}
            className="lg:col-span-7 group rounded-2xl overflow-hidden bg-[#191E1B] border border-white/10 hover:border-brand-yellow transition-all duration-350 cursor-pointer flex flex-col justify-between shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0F0E]">
              <TacticalImage
                key={leadArticle.id}
                src={leadArticle.imageUrl}
                alt={leadArticle.title}
                className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191E1B] via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="p-6 sm:p-8 space-y-3 text-left">
              {/* Unboxed Metadata */}
              <div className="flex items-center gap-2 text-xs font-['Plus_Jakarta_Sans']">
                <span className="font-bold text-brand-yellow uppercase tracking-wider">
                  {leadArticle.category}
                </span>
                <span className="text-white/40">·</span>
                <span className="text-[#A7ADA9]">{leadArticle.date}</span>
                <span className="text-white/40">·</span>
                <span className="text-[#A7ADA9]">{leadArticle.readTime}</span>
              </div>

              <h3 className="font-['Barlow_Condensed'] font-extrabold uppercase text-2xl sm:text-3xl text-white group-hover:text-brand-yellow transition-colors leading-tight">
                {leadArticle.title}
              </h3>

              <p className="font-['Inter'] text-sm sm:text-base text-[#D0D6D2] line-clamp-3 leading-relaxed">
                {leadArticle.excerpt}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-yellow group-hover:text-white transition-colors">
                  <span>Read Article Brief</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="text-xs text-[#A7ADA9]">{leadArticle.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Compact News Articles with Thin Separators (span 5) */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-white/10 rounded-2xl bg-[#191E1B] border border-white/10 overflow-hidden shadow-xl text-left">
            {sideArticles.map((article) => (
              <div
                role="button"
                tabIndex={0}
                aria-label={`Read ${article.title}`}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelectArticle(article);
                  }
                }}
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group p-5 hover:bg-white/[0.03] transition-colors duration-200 cursor-pointer flex gap-4 items-center"
              >
                {/* Thumbnail */}
                <div className="w-24 h-20 rounded-lg overflow-hidden shrink-0 bg-[#0B0F0E] relative border border-white/10">
                  <TacticalImage
                    key={article.id}
                    src={article.imageUrl}
                    alt={article.title}
                    containerClassName="w-full h-full"
                    overlayGradient={false}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-['Plus_Jakarta_Sans'] font-bold text-brand-yellow uppercase tracking-wider">
                    <span>{article.category}</span>
                    <span className="text-white/30">·</span>
                    <span className="text-[#A7ADA9] font-normal">{article.date}</span>
                  </div>

                  <h4 className="font-['Barlow_Condensed'] font-bold uppercase text-base sm:text-lg text-white group-hover:text-brand-yellow transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs leading-relaxed text-[#A7ADA9] line-clamp-2">{article.excerpt}</p>

                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#A7ADA9] group-hover:text-brand-yellow transition-colors pt-0.5">
                    <span>Read brief</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> : <p className="py-12 text-center text-[#A7ADA9]">No articles available in this category.</p>}

        {/* View All News CTA */}
        <div className="flex justify-center pt-4">
          <PrimaryButton
            asAnchor
            href="https://defenceida.com/"
            variant="secondary"
            size="lg"
            icon="right"
          >
            MORE ON DEFENCEIDA.COM
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};
