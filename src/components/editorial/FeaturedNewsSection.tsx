import React from 'react';
import { SectionHeading } from '../shared/SectionHeading';
import { NewsCard } from './NewsCard';
import { FEATURED_ARTICLES, NewsArticle } from '../../data/news';

interface FeaturedNewsSectionProps {
  onSelectArticle: (article: NewsArticle) => void;
}

export const FeaturedNewsSection: React.FC<FeaturedNewsSectionProps> = ({ onSelectArticle }) => {
  const primaryStory = FEATURED_ARTICLES[0];
  const secondaryStories = FEATURED_ARTICLES.slice(1, 5);

  return (
    <section id="featured-news" className="relative py-20 sm:py-28 bg-[#0B0F0E]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        {/* Section Header */}
        <div className="border-b border-white/10 pb-8">
          <SectionHeading
            eyebrow="LATEST DEVELOPMENTS"
            title="THE STORIES SHAPING GLOBAL DEFENCE"
            accentWord="GLOBAL"
            description="Comprehensive strategic reporting on military advancements, live-fire doctrine, and sovereign aerospace initiatives."
          />
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Big Lead Feature (half width: span 6) */}
          <div className="lg:col-span-6 flex">
            <NewsCard
              article={primaryStory}
              onRead={onSelectArticle}
              variant="featured"
              className="w-full h-full"
            />
          </div>

          {/* Right Column: 4 Smaller Story Cards in 2x2 grid (span 6) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {secondaryStories.map((story) => (
              <NewsCard
                key={story.id}
                article={story}
                onRead={onSelectArticle}
                variant="standard"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
