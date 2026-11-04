export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: 'AIR' | 'LAND' | 'NAVAL' | 'TECHNOLOGY' | 'GEOPOLITICS' | 'EXPOS' | 'ACQUISITIONS' | 'WEAPONS' | 'CONFLICT';
  date: string;
  readTime: string;
  author: string;
  location: string;
  imageUrl: string;
  sourceUrl?: string;
  publishedAt?: string;
  excerpt: string;
  featured?: boolean;
  content: {
    summary: string;
    paragraphs: string[];
    technicalBrief?: { label: string; value: string }[];
    intelTakeaway?: string;
  };
}

export const FEATURED_ARTICLES: NewsArticle[] = [
  {
    id: 'feat-1',
    title: 'From Precision Engineering to Aerospace: An Exclusive Interview with Akbar Allana, Director Alsons Group',
    slug: 'from-precision-engineering-to-aerospace-akbar-allana-interview',
    category: 'TECHNOLOGY',
    date: 'OCTOBER 28, 2026',
    readTime: '6 MIN READ',
    author: 'Akbar Allana / IDA Strategic Analysis',
    location: 'Karachi / Eurosatory',
    imageUrl: '/assets/aistudio/image_139bb0ea.png',
    excerpt: 'Alsons Group has built a strong reputation in precision engineering and manufacturing over the past seven decades. What strategic factors led to the creation of AKAL Group?',
    featured: true,
    content: {
      summary: 'Alsons Group has built a strong reputation in precision engineering and manufacturing over the past seven decades. What strategic factors led to the creation of AKAL Group?',
      paragraphs: [
        'Alsons Group has built an enduring legacy in high-precision engineering, tooling, and critical components across civilian and defence industrial applications. With over seven decades of precision manufacturing expertise, the strategic establishment of AKAL Group marks an ambitious evolution into aerospace subsystems, advanced propulsion components, and mission-critical systems.',
        'In this exclusive discussion, Akbar Allana, Director of Alsons Group, outlines how decades of sovereign manufacturing proficiency, strict quality standards (AS9100 / ISO), and targeted technology investments enabled the transition from precision mechanical engineering to turnkey aerospace manufacturing.',
        '"The future of aerospace and defence lies in rapid prototyping, tight tolerance manufacturing, and indigenous supply chain sovereignty," noted Akbar Allana during our discussion at the international defence exposition. AKAL Group continues to expand capabilities in specialized alloys, UAV components, and aerospace-grade engine assemblies.'
      ],
      technicalBrief: [
        { label: 'Domain', value: 'Aerospace Subsystems & Precision Engineering' },
        { label: 'Leadership', value: 'Akbar Allana, Director Alsons Group' },
        { label: 'Heritage', value: 'Alsons Group (70+ Years Manufacturing Heritage)' },
        { label: 'Strategic Venture', value: 'AKAL Group Advanced Systems & Propulsion' }
      ],
      intelTakeaway: "AKAL Group's entry into aerospace represents a high-impact private-sector capability advancement, delivering critical precision components for defense aviation and unmanned platforms."
    }
  },
  {
    id: 'feat-2',
    title: 'SAHA EXPO: Rule the Technology, Shape the Future',
    slug: 'saha-expo-rule-the-technology-shape-the-future',
    category: 'EXPOS',
    date: 'OCTOBER 24, 2026',
    readTime: '5 MIN READ',
    author: 'Defence Industry Bureau',
    location: 'Istanbul, Türkiye',
    imageUrl: '/assets/aistudio/image_f6824246.png',
    excerpt: 'Established 9 years ago to ensure the involvement and integration of private sector dynamism in the defence industry in Türkiye, SAHA Istanbul has progressively expanded to become the largest industrial cluster in both Türkiye and Europe.',
    content: {
      summary: 'Established 9 years ago to ensure the involvement and integration of private sector dynamism in the defence industry in Türkiye, SAHA Istanbul has progressively expanded to become the largest industrial cluster in both Türkiye and Europe.',
      paragraphs: [
        'Established 9 years ago to ensure the involvement and integration of private sector dynamism in the defence industry in Türkiye, SAHA Istanbul has progressively expanded to become the largest industrial cluster in both Türkiye and Europe.',
        'SAHA EXPO serves as a premier international aerospace and defence platform, presenting groundbreaking advancements in autonomous unmanned systems, indigenous jet propulsion, cutting-edge radar suites, and next-generation munitions.',
        'Under the banner "Rule the Technology, Shape the Future", the exhibition brings together defense ministers, armed forces delegations, and industrial consortiums from over 100 countries to establish strategic defense procurement and co-production agreements.'
      ],
      technicalBrief: [
        { label: 'Cluster', value: 'SAHA Istanbul Defence & Aerospace Cluster' },
        { label: 'European Standing', value: 'Largest Industrial Cluster in Türkiye & Europe' },
        { label: 'Theme', value: 'Rule the Technology, Shape the Future' },
        { label: 'Strategic Focus', value: 'Private Sector Dynamism, Autonomous Systems & Aerospace' }
      ],
      intelTakeaway: 'SAHA EXPO cements Türkiye\'s transformation into a top-tier aerospace innovator and critical defense exporter, connecting dynamic private enterprises with global strategic defense programs.'
    }
  },
  {
    id: 'feat-3',
    title: 'PL-17 Air-To-Air Missile Seen On Chinese J-16',
    slug: 'pl-17-air-to-air-missile-seen-on-chinese-j-16',
    category: 'AIR',
    date: 'OCTOBER 19, 2026',
    readTime: '4 MIN READ',
    author: 'Aviation Warfare Analysis',
    location: 'Beijing, China',
    imageUrl: '/assets/aistudio/image_3dc3d5be.png',
    excerpt: 'China has released a photo of its J-16 Flanker derivatives tooled up with air-to-air missiles. The most impressive loadout shown out of a quartet',
    content: {
      summary: 'China has released a photo of its J-16 Flanker derivatives tooled up with air-to-air missiles. The most impressive loadout shown out of a quartet includes the ultra-long-range PL-17 missile.',
      paragraphs: [
        'China has released a photo of its J-16 Flanker derivatives tooled up with air-to-air missiles. The most impressive loadout shown out of a quartet includes the massive PL-17 beyond-visual-range (BVR) interceptor.',
        'Measuring approximately six meters in length, the PL-17 is engineered specifically to target high-value airborne assets such as airborne early warning (AEW&C) platforms, aerial refueling tankers, and strategic ISR aircraft at standoff distances estimated between 300 to 400 kilometers.',
        'The J-16 heavy strike fighter, equipped with an active electronically scanned array (AESA) radar and high weapon station capacity, serves as the prime launch platform to penetrate contested airspace and neutralize adversary support corridors.'
      ],
      technicalBrief: [
        { label: 'Munition Class', value: 'Very Long Range Air-to-Air Missile (VLRAAM)' },
        { label: 'Launch Platform', value: 'Shenyang J-16 Multi-Role Strike Fighter' },
        { label: 'Operational Role', value: 'Counter-High Value Airborne Assets (HVAA)' },
        { label: 'Estimated Engagement Range', value: '300–400 km Standoff' }
      ],
      intelTakeaway: 'The operational pairing of the PL-17 with the J-16 establishes an asymmetric anti-access threat specifically tailored to push adversary surveillance and refueling tankers far beyond practical mission operating radius.'
    }
  },
  {
    id: 'feat-4',
    title: 'HAVELSAN Signs Cooperation Agreement with Belgian Technology Company EURAMEC',
    slug: 'havelsan-signs-cooperation-agreement-with-belgian-euramec',
    category: 'TECHNOLOGY',
    date: 'OCTOBER 15, 2026',
    readTime: '5 MIN READ',
    author: 'Defence Industry Correspondent',
    location: 'Brussels / Ankara',
    imageUrl: '/assets/aistudio/image_a4e42808.png',
    excerpt: 'HAVELSAN, one of Türkiye’s leading defense technology companies, providing high value-added solutions in defense technologies,',
    content: {
      summary: 'HAVELSAN, one of Türkiye’s leading defense technology companies providing high value-added solutions in defense technologies, has signed a strategic cooperation agreement with Belgian simulation specialist EURAMEC.',
      paragraphs: [
        'HAVELSAN, one of Türkiye’s leading defense technology companies, providing high value-added solutions in defense technologies, has signed an international cooperation agreement with Belgian technology leader EURAMEC.',
        'The partnership concentrates on the joint development and deployment of next-generation flight simulators, pilot training systems, and mission-critical simulation software for military and civil aviation.',
        'By integrating HAVELSAN\'s cutting-edge combat simulation software and synthetic training environments with EURAMEC\'s precision cockpit hardware and aerodynamic modeling, the collaboration expands both companies\' presence across NATO and international aerospace markets.'
      ],
      technicalBrief: [
        { label: 'Signatories', value: 'HAVELSAN & EURAMEC' },
        { label: 'Core Field', value: 'Flight Simulation & Pilot Synthetic Training Systems' },
        { label: 'Strategic Focus', value: 'Joint Aerospace Modeling, Software & Export Growth' },
        { label: 'Target Markets', value: 'European & NATO Defense Procurement, Civil Aviation' }
      ],
      intelTakeaway: 'This bilateral industrial agreement highlights HAVELSAN\'s growing global reach in mission training systems and deepens technological integration with European aerospace innovators.'
    }
  },
  {
    id: 'feat-5',
    title: 'Counter-UAV Laser and Kinetic Interceptors Reshaping Asymmetric Warfare',
    slug: 'counter-uav-laser-kinetic-interceptors',
    category: 'WEAPONS',
    date: 'OCTOBER 10, 2026',
    readTime: '5 MIN READ',
    author: 'Dr. Marcus Vance',
    location: 'Doha, Qatar',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Direct-energy 50kW fiber lasers paired with micro-missile interceptors achieve sub-$100 engagement economics against swarms of loitering munitions.',
    content: {
      summary: 'The prohibitive cost ratio of firing million-dollar surface-to-air missiles against $2,000 Shahed-type drones has compelled military commands to adopt hybrid laser-kinetic arrays.',
      paragraphs: [
        'For military forces confronting sustained drone attrition, financial stamina is as critical as kinetic efficacy. High-energy laser systems (HEL) operating in the 30kW to 100kW spectrum have achieved steady operational maturity in operational evaluations.',
        'Focused laser optics heat drone composite structures, blinding infrared guidance sensors within three seconds and detonating warheads mid-air at marginal costs under $5 per shot.',
        'When atmospheric dust or marine fog limits optical transmittance, miniaturized kinetic micro-missiles engage targets with fragmentation rings, ensuring continuous defensive rings under all weather contingencies.'
      ],
      technicalBrief: [
        { label: 'Beam Power Output', value: '50 kW solid-state fiber laser' },
        { label: 'Shot Cost', value: '< $4.50 electrical power draw' },
        { label: 'Effective Engagement Range', value: '1.2 km – 3.5 km' },
        { label: 'Kinetic Backup', value: '38mm guided micro-interceptor missile cell' }
      ],
      intelTakeaway: 'Hybrid directed-energy and micro-kinetic doctrine provides the only sustainable defense against saturated industrial-scale drone campaigns.'
    }
  }
];

export { IMPORTED_NEWS as LATEST_NEWSROOM_ARTICLES } from './importedNews';
