import React, { useEffect, useState, useMemo } from 'react';
import { Search, X, ArrowRight, BookOpen, User, Newspaper, Tag } from 'lucide-react';
import { FEATURED_ARTICLES, LATEST_NEWSROOM_ARTICLES, NewsArticle } from '../../data/news';
import { IDA_MAGAZINES, MagazineEdition } from '../../data/magazines';
import { EXCLUSIVE_INTERVIEWS, InterviewItem } from '../../data/interviews';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: NewsArticle) => void;
  onSelectMagazine: (magazine: MagazineEdition) => void;
  onSelectInterview: (interview: InterviewItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
  onSelectMagazine,
  onSelectInterview,
}) => {
  const [query, setQuery] = useState('');

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

  const allArticles = useMemo(() => {
    return [...FEATURED_ARTICLES, ...LATEST_NEWSROOM_ARTICLES];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { articles: allArticles.slice(0, 4), magazines: IDA_MAGAZINES.slice(0, 2), interviews: EXCLUSIVE_INTERVIEWS.slice(0, 2) };

    const filteredArticles = allArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q)
    );

    const filteredMagazines = IDA_MAGAZINES.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.edition.toLowerCase().includes(q) ||
        m.summary.toLowerCase().includes(q)
    );

    const filteredInterviews = EXCLUSIVE_INTERVIEWS.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.organization.toLowerCase().includes(q) ||
        i.headline.toLowerCase().includes(q)
    );

    return {
      articles: filteredArticles,
      magazines: filteredMagazines,
      interviews: filteredInterviews,
    };
  }, [query, allArticles]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#121715] border border-white/20 rounded-2xl shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-[#191E1B]">
          <Search className="w-5 h-5 text-[#FFAF00] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search defense news, magazines, interviews, weapon systems..."
            autoFocus
            className="w-full bg-transparent text-white placeholder-[#A7ADA9] font-['Inter'] text-sm sm:text-base focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#A7ADA9] hover:text-white hover:bg-white/10"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-6">
          {/* Quick Categories */}
          {!query && (
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-wider text-[#A7ADA9] block mb-2 px-2">
                Popular Coverage Domains
              </span>
              <div className="flex flex-wrap gap-2 px-2">
                {['EFES 2026', 'Su-57', 'Air Defense', 'Hangor Submarine', 'ASELSAN', 'HAVELSAN', 'Laser Weapons'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 rounded-full bg-[#191E1B] hover:bg-[#FFAF00] hover:text-[#000] text-xs text-[#A7ADA9] font-medium transition-colors border border-white/5"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {results.articles.length > 0 && (
            <div>
              <div className="flex items-center gap-2 px-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#FFAF00]">
                <Newspaper className="w-3.5 h-3.5" />
                <span>Editorial Articles & Intelligence ({results.articles.length})</span>
              </div>
              <div className="space-y-1">
                {results.articles.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      onSelectArticle(art);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl hover:bg-white/5 text-left transition-colors flex items-center justify-between group"
                  >
                    <div className="space-y-0.5 pr-4">
                      <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#FFAF00] font-bold uppercase tracking-wider block">
                        {art.category} · {art.date}
                      </span>
                      <h4 className="font-['Barlow_Condensed'] font-semibold text-base text-white group-hover:text-[#FFAF00] transition-colors leading-tight">
                        {art.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#A7ADA9] group-hover:text-[#FFAF00] group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Magazines */}
          {results.magazines.length > 0 && (
            <div>
              <div className="flex items-center gap-2 px-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#FFAF00]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>IDA Publications ({results.magazines.length})</span>
              </div>
              <div className="space-y-1">
                {results.magazines.map((mag) => (
                  <button
                    key={mag.id}
                    onClick={() => {
                      onSelectMagazine(mag);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl hover:bg-white/5 text-left transition-colors flex items-center justify-between group"
                  >
                    <div className="space-y-0.5 pr-4">
                      <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#FFAF00] font-bold uppercase tracking-wider block">
                        {mag.edition}
                      </span>
                      <h4 className="font-['Barlow_Condensed'] font-semibold text-base text-white group-hover:text-[#FFAF00] transition-colors">
                        {mag.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#A7ADA9] group-hover:text-[#FFAF00] group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Interviews */}
          {results.interviews.length > 0 && (
            <div>
              <div className="flex items-center gap-2 px-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#FFAF00]">
                <User className="w-3.5 h-3.5" />
                <span>Executive Interviews ({results.interviews.length})</span>
              </div>
              <div className="space-y-1">
                {results.interviews.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectInterview(item);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl hover:bg-white/5 text-left transition-colors flex items-center justify-between group"
                  >
                    <div className="space-y-0.5 pr-4">
                      <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#FFAF00] font-bold uppercase tracking-wider block">
                        {item.name} — {item.organization}
                      </span>
                      <h4 className="font-['Barlow_Condensed'] font-semibold text-base text-white group-hover:text-[#FFAF00] transition-colors">
                        "{item.headline}"
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#A7ADA9] group-hover:text-[#FFAF00] group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.articles.length === 0 && results.magazines.length === 0 && results.interviews.length === 0 && (
            <div className="text-center py-10 text-[#A7ADA9]">
              <p className="text-sm">No defence reports matching "{query}"</p>
              <p className="text-xs text-white/40 mt-1">Try searching for EFES, Su-57, Naval, or ASELSAN</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 border-t border-white/10 bg-[#0B0F0E] flex items-center justify-between text-[11px] text-[#A7ADA9]">
          <span>Press ESC to exit</span>
          <span className="text-[#FFAF00]">Live Index Search</span>
        </div>
      </div>
    </div>
  );
};
