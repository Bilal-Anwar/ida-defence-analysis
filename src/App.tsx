import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/hero/HeroSection';
import { FeaturedNewsSection } from './components/editorial/FeaturedNewsSection';
import { DefenceDomainsSection } from './components/editorial/DefenceDomainsSection';
import { MagazineSection } from './components/magazines/MagazineSection';
import { InterviewsSection } from './components/interviews/InterviewsSection';
import { ServicesSection } from './components/services/ServicesSection';
import { LatestNewsSection } from './components/editorial/LatestNewsSection';
import { AdvertisingSection } from './components/advertising/AdvertisingSection';
import { ContactSection } from './components/contact/ContactSection';
import { PartnersSection } from './components/partners/PartnersSection';
import { NewsletterSection } from './components/newsletter/NewsletterSection';
import { Footer } from './components/layout/Footer';

import { ArticleModal } from './components/shared/ArticleModal';
import { MagazineViewerModal } from './components/shared/MagazineViewerModal';
import { InterviewModal } from './components/shared/InterviewModal';
import { SearchModal } from './components/shared/SearchModal';

import { NewsArticle } from './data/news';
import { MagazineEdition, IDA_MAGAZINES } from './data/magazines';
import { InterviewItem } from './data/interviews';
import { ServiceItem } from './data/services';

export default function App() {
  // Modal states
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedMagazine, setSelectedMagazine] = useState<MagazineEdition | null>(null);
  const [selectedInterview, setSelectedInterview] = useState<InterviewItem | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // Active category filter state for newsroom
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('ALL');
  const [navActiveCategory, setNavActiveCategory] = useState<string>('HOME');

  const handleSelectNavCategory = (category?: string) => {
    if (!category) return;
    setNavActiveCategory(category);
    if (['AIR', 'LAND', 'NAVAL', 'TECHNOLOGY', 'GEOPOLITICS', 'WEAPONS', 'ACQUISITIONS', 'NEWS', 'ARTICLES'].includes(category)) {
      setActiveCategoryFilter(category === 'NEWS' || category === 'ARTICLES' ? 'ALL' : category);
    }
  };

  const handleSelectDomain = (domain: 'LAND' | 'NAVAL' | 'AIR') => {
    setActiveCategoryFilter(domain);
    const el = document.getElementById('latest-news');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServiceInquire = (service: ServiceItem) => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0F0E] text-[#FFFFFF] font-['Inter'] selection:bg-brand-yellow selection:text-[#000000] relative">
      {/* Global Header */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onSelectCategory={handleSelectNavCategory}
        activeCategory={navActiveCategory}
      />

      {/* Main Homepage Sections */}
      <main>
        {/* 1. Hero Section — Cinematic Defence Experience */}
        <HeroSection
          onExploreNews={() => {
            const el = document.getElementById('featured-news');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreMagazines={() => {
            const el = document.getElementById('magazines');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Featured News — Editorial Grid (Section 10) */}
        <FeaturedNewsSection onSelectArticle={setSelectedArticle} />

        {/* 3. Land & Sea — Defence Domains (Section 11) */}
        <DefenceDomainsSection onSelectDomain={handleSelectDomain} />

        {/* 4. IDA Magazines — Premium Editorial Showcase (Section 12) */}
        <MagazineSection onViewMagazine={setSelectedMagazine} />

        {/* 5. Exclusive Interviews — Continuous Slider (Section 13) */}
        <InterviewsSection onReadInterview={setSelectedInterview} />

        {/* 6. Our Services — Editorial Service Cards (Section 14) */}
        <ServicesSection onSelectService={handleServiceInquire} />

        {/* 7. IDA Latest News — Editorial Newsroom (Section 15) */}
        <LatestNewsSection
          onSelectArticle={setSelectedArticle}
          selectedCategoryFilter={activeCategoryFilter}
          onFilterChange={(cat) => setActiveCategoryFilter(cat)}
        />

        {/* 8. Advertise with IDA (Section 16) */}
        <AdvertisingSection
          onOpenInquiry={() => {
            const el = document.getElementById('contact');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreServices={() => {
            const el = document.getElementById('services');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 9. Contact & Business Inquiry Form (Section 17) */}
        <ContactSection />

        {/* 10. Our Valuable Partners (Section 18) */}
        <PartnersSection />

        {/* 11. Newsletter Section (Section 19) */}
        <NewsletterSection />
      </main>

      {/* 12. Footer (Section 20) */}
      <Footer />

      {/* Interactive Modals */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <MagazineViewerModal
        magazine={selectedMagazine}
        onClose={() => setSelectedMagazine(null)}
      />

      <InterviewModal
        interview={selectedInterview}
        onClose={() => setSelectedInterview(null)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectArticle={setSelectedArticle}
        onSelectMagazine={setSelectedMagazine}
        onSelectInterview={setSelectedInterview}
      />
    </div>
  );
}
