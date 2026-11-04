import React from 'react';
import { ArrowUpRight, Clock, Shield } from 'lucide-react';
import { NewsArticle } from '../../data/news';
import { TacticalImage } from '../shared/TacticalImage';

interface NewsCardProps {
  article: NewsArticle;
  onRead: (article: NewsArticle) => void;
  variant?: 'featured' | 'compact' | 'standard';
  className?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  article,
  onRead,
  variant = 'standard',
  className = '',
}) => {
  if (variant === 'featured') {
    return (
      <div
        onClick={() => onRead(article)}
        className={`group relative rounded-2xl overflow-hidden bg-[#191E1B] border border-white/10 hover:border-[#FFAF00]/60 transition-all duration-400 cursor-pointer flex flex-col justify-between text-left shadow-xl ${className}`}
      >
        {/* Dedicated Hero Image Showcase - fully visible and crystal clear */}
        <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] md:h-[320px] lg:h-[360px] overflow-hidden bg-[#121715] shrink-0 border-b border-white/10">
          <img
            src={article.imageUrl}
            alt={article.title}
            decoding="async"
            className="w-full h-full object-cover object-[center_28%] transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle bottom shadow transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#191E1B] via-transparent to-transparent pointer-events-none opacity-60" />

          {/* Tactical Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#0B0F0E]/85 backdrop-blur-md border border-white/10 text-xs font-['Plus_Jakarta_Sans'] font-bold text-[#FFAF00]">
            <Shield className="w-3.5 h-3.5 text-[#FFAF00]" />
            <span>EXCLUSIVE INTERVIEW</span>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            {/* Unboxed Metadata per Zero-Pill Discipline */}
            <div className="flex items-center gap-2 text-xs font-['Plus_Jakarta_Sans']">
              <span className="font-bold text-[#FFAF00] uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-white/40">·</span>
              <span className="text-[#A7ADA9]">{article.date}</span>
              <span className="text-white/40">·</span>
              <span className="text-[#A7ADA9]">{article.readTime}</span>
            </div>

            {/* Headline */}
            <h3 className="font-['Barlow_Condensed'] font-extrabold uppercase text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-[#FFAF00] transition-colors duration-300 leading-tight">
              {article.title}
            </h3>

            {/* Excerpt */}
            <p className="font-['Inter'] text-sm sm:text-base text-[#D0D6D2] leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FFAF00] group-hover:text-white transition-colors">
              <span>Read Exclusive Interview</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <span className="text-xs text-[#A7ADA9]">{article.location}</span>
          </div>
        </div>
      </div>
    );
  }

  // Standard Card in grid
  return (
    <div
      onClick={() => onRead(article)}
      className={`group relative rounded-xl overflow-hidden bg-[#191E1B] border border-white/10 hover:border-[#FFAF00]/50 transition-all duration-350 cursor-pointer flex flex-col text-left ${className}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#121715]">
        <TacticalImage
          src={article.imageUrl}
          alt={article.title}
          overlayGradient={false}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191E1B] via-transparent to-transparent pointer-events-none opacity-60" />
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
        <div className="space-y-2">
          {/* Metadata */}
          <div className="flex items-center gap-2 text-[11px] font-['Plus_Jakarta_Sans']">
            <span className="font-bold text-[#FFAF00] uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[#A7ADA9]">{article.date}</span>
          </div>

          {/* Headline */}
          <h4 className="font-['Barlow_Condensed'] font-bold uppercase text-lg sm:text-xl text-white group-hover:text-[#FFAF00] transition-colors duration-300 leading-snug">
            {article.title}
          </h4>

          {article.excerpt && (
            <p className="font-['Inter'] text-xs text-[#A7ADA9] line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </div>

        {/* Read link */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-[#FFAF00] group-hover:text-white transition-colors">
            <span>Read Article</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <span className="text-[11px] text-[#A7ADA9]">{article.readTime}</span>
        </div>
      </div>
    </div>
  );
};
