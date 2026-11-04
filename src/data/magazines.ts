export interface MagazineEdition {
  id: string;
  title: string;
  subtitle: string;
  edition: string;
  year: string;
  category: string;
  coverImage: string;
  accentColor: string;
  featuredThemes: string[];
  keyInterviews: string[];
  summary: string;
}

export const IDA_MAGAZINES: MagazineEdition[] = [
  {
    id: 'mag-saha-2026',
    title: 'SAHA 2026 Special Edition',
    subtitle: 'Türkiye’s Defense Industry Miracle',
    edition: 'May 2026',
    year: '2026',
    category: 'TÜRKİYE’S DEFENCE INDUSTRY',
    coverImage: '/assets/magazines/ida-saha-may-2026.png',
    accentColor: '#FFAF00',
    summary: 'The May 2026 SAHA special edition of International Defence Analysis, with the cover story “Türkiye’s Defense Industry Miracle” and missile-launch imagery highlighting the issue’s defence industry focus.',
    featuredThemes: ['Türkiye’s Defense Industry Miracle', 'SAHA 2026 Special Edition', 'Missile launch and air defence imagery'],
    keyInterviews: [],
  },
  {
    id: 'mag-dsa-2026',
    title: 'DSA Malaysia 2026 Special Edition',
    subtitle: 'KIZILELMA & Exclusive Industry Interviews',
    edition: 'April 2026',
    year: '2026',
    category: 'AEROSPACE & INDUSTRY INTERVIEWS',
    coverImage: '/assets/magazines/ida-dsa-malaysia-april-2026.png',
    accentColor: '#FFAF00',
    summary: 'The April 2026 DSA Malaysia special edition of International Defence Analysis features KIZILELMA on the cover and highlights exclusive interviews with the CEOs of ASELSAN and GIDS.',
    featuredThemes: ['KIZILELMA cover feature', 'DSA Malaysia 2026 Special Edition', 'Exclusive defence industry interviews'],
    keyInterviews: ['CEO ASELSAN', 'CEO GIDS'],
  },
  {
    id: 'mag-edex-2025',
    title: 'EDEX 2025 Special Edition',
    subtitle: 'Trusted Insight into Global Defence & Security',
    edition: 'December 2025',
    year: '2025',
    category: 'GLOBAL DEFENCE & SECURITY',
    coverImage: '/assets/magazines/ida-mag-edex-december-2025.png',
    accentColor: '#FFAF00',
    summary: 'The December 2025 EDEX special edition of IDA-MAG presents global defence and security insight, with an ASELSAN GÖKTAN launcher displayed on its cover.',
    featuredThemes: ['EDEX 2025 Special Edition', 'ASELSAN GÖKTAN launcher cover', 'Global defence and security'],
    keyInterviews: [],
  },
];
