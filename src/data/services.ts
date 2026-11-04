export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  reachStats: string;
}

export const IDA_SERVICES: ServiceItem[] = [
  {
    id: 'service-1',
    number: '01',
    title: 'Digital Campaigns',
    description: 'Strategic communication and targeted defence industry visibility across our verified global digital network.',
    deliverables: [
      'High-impact homepage and editorial banner placements',
      'Dedicated bespoke newsletter sponsorships to 45,000+ defence officials',
      'Targeted demographic retargeting across aerospace & naval clusters',
      'Audited quarterly reach and engagement analytics'
    ],
    reachStats: '120+ Countries Reached'
  },
  {
    id: 'service-2',
    number: '02',
    title: 'Features & Strategic Promotion',
    description: 'Dedicated promotional features and authoritative technical industry exposure crafted by our specialist defence journalists.',
    deliverables: [
      'Multi-page in-depth product capability teardowns & whitepapers',
      'Executive thought-leadership profiles and strategic op-eds',
      'High-resolution technical diagrams and infographic syndication',
      'Permanent indexed archiving in our digital intelligence library'
    ],
    reachStats: '85k+ Monthly Senior Readers'
  },
  {
    id: 'service-3',
    number: '03',
    title: 'News & Editorial Coverage',
    description: 'Professional reporting and editorial coverage across air, land, maritime, space, and electronic warfare domains.',
    deliverables: [
      'Press release syndication and breaking news alerts',
      'Neutral independent analysis of procurement programs & bids',
      'Direct distribution to defence attachés and procurement bureaus',
      'Social media amplification across defence networks'
    ],
    reachStats: 'Daily Intelligence Dispatch'
  },
  {
    id: 'service-4',
    number: '04',
    title: 'Exhibition Media Coverage',
    description: 'Specialized reporting, high-definition video interviews, and show-daily distribution for premier international defence expos.',
    deliverables: [
      'On-site video production and booth interviews at major expos',
      'Official print and digital show-daily magazine integration',
      'Daily recap newsletters dispatched directly to delegates',
      'Permanent show-floor video broadcast on IDA channels'
    ],
    reachStats: 'Official Media Partner at 12+ Expos'
  }
];
