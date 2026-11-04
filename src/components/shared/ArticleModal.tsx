import React, { useEffect } from 'react';
import { X, Clock, MapPin, Share2, Bookmark, Check, Shield } from 'lucide-react';
import { NewsArticle } from '../../data/news';
import { TacticalImage } from './TacticalImage';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(article.sourceUrl || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#121715] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0F0E]/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-widest text-brand-yellow">
              {article.category}
            </span>
            <span className="text-white/30">/</span>
            <span className="font-['Inter'] text-xs text-[#A7ADA9]">
              {article.date}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-white/10 text-[#A7ADA9] hover:text-white transition-colors"
              title="Copy Article Link"
              aria-label="Share Article"
            >
              {copied ? <Check className="w-4 h-4 text-brand-yellow" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-[#A7ADA9] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Headline */}
          <h1 className="font-['Barlow_Condensed'] font-extrabold uppercase text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#A7ADA9] border-y border-white/10 py-3">
            <div className="flex items-center gap-1.5 text-white">
              <Shield className="w-3.5 h-3.5 text-brand-yellow" />
              <span>By {article.author}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{article.location}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Hero Media */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
            <TacticalImage
              src={article.imageUrl}
              alt={article.title}
              overlayGradient={false}
              containerClassName="w-full h-full"
            />
          </div>

          {/* Summary Callout */}
          <div className="p-4 rounded-xl bg-[#191E1B] border-l-2 border-brand-yellow text-[#FFFFFF] font-['Inter'] text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-brand-yellow text-xs uppercase tracking-wider mb-1">
              {article.sourceUrl ? 'Article Brief' : 'Executive Briefing'}
            </p>
            {article.content.summary}
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 font-['Inter'] text-sm sm:text-base text-[#D0D6D2] leading-relaxed">
            {article.content.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Technical Specifications Matrix if available */}
          {article.content.technicalBrief && article.content.technicalBrief.length > 0 && (
            <div className="mt-8 rounded-xl bg-[#191E1B] border border-white/10 p-5">
              <h3 className="font-['Barlow_Condensed'] font-bold uppercase text-lg text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                Technical & Operational Parameters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {article.content.technicalBrief.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#222824]/60 border border-white/5">
                    <span className="block text-[#A7ADA9] font-medium">{item.label}</span>
                    <span className="font-semibold text-white mt-0.5 block">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Intel Takeaway */}
          {article.content.intelTakeaway && <div className="p-4 rounded-xl bg-[#1F4941]/30 border border-[#1F4941] text-xs sm:text-sm">
            <span className="font-bold text-brand-yellow uppercase tracking-wider block mb-1">
              Strategic Intelligence Takeaway
            </span>
            <p className="text-white/90">{article.content.intelTakeaway}</p>
          </div>}
          {article.sourceUrl && (
            <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-brand-yellow px-5 py-3 text-xs font-bold uppercase text-black hover:bg-brand-yellow-hover">
              Read full article on defenceida.com ↗
            </a>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-white/10 bg-[#0B0F0E] flex items-center justify-between text-xs text-[#A7ADA9]">
          <span>{article.sourceUrl ? 'Summary of reporting from defenceida.com' : 'Source: International Defence Analysis (IDA) Bureau'}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
};
