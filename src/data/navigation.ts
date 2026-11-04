export interface NavItem {
  label: string;
  href: string;
  category?: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#hero' },
  { label: 'NEWS', href: '#latest-news', category: 'NEWS' },
  { label: 'ARTICLES', href: '#featured-news', category: 'ARTICLES' },
  { label: 'ACQUISITIONS', href: '#latest-news', category: 'ACQUISITIONS' },
  { label: 'EXPOS', href: '#magazines', category: 'EXPOS' },
  { label: 'CONFLICT', href: '#latest-news', category: 'CONFLICT' },
  { label: 'WEAPONS', href: '#domains', category: 'WEAPONS' },
  { label: 'GEOPOLITICS', href: '#latest-news', category: 'GEOPOLITICS' },
  { label: 'MAGAZINES', href: '#magazines', category: 'MAGAZINES' },
  { label: 'INTERVIEWS', href: '#interviews', category: 'INTERVIEWS' },
];

export const FOOTER_EXPLORE_LINKS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'News Feed', href: '#latest-news' },
  { label: 'In-Depth Articles', href: '#featured-news' },
  { label: 'IDA Magazines', href: '#magazines' },
  { label: 'Exclusive Interviews', href: '#interviews' },
];

export const FOOTER_CATEGORY_LINKS: NavItem[] = [
  { label: 'Acquisitions & Procurement', href: '#latest-news' },
  { label: 'International Defence Expos', href: '#magazines' },
  { label: 'Weapons & Modern Systems', href: '#domains' },
  { label: 'Conflict & Strategic Theatres', href: '#latest-news' },
  { label: 'Geopolitics & Security', href: '#latest-news' },
];

export const FOOTER_ORGANIZATION_LINKS: NavItem[] = [
  { label: 'About IDA', href: '#services' },
  { label: 'Contact Bureau', href: '#contact' },
  { label: 'Advertise With Us', href: '#advertise' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'X / Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
  { name: 'RSS Feed', url: '/rss.xml', icon: 'rss' },
];
