export interface InterviewItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  headline: string;
  category: string;
  date: string;
  publishedAt: string;
  imageUrl: string;
  sourceUrl: string;
  summary: string;
  highlights: string[];
}

// Same interviews and ordering as defenceida.com's homepage.
// Summaries are paraphrased; full interviews remain at sourceUrl.
export const EXCLUSIVE_INTERVIEWS: InterviewItem[] = [
  {
    id: 'interview-alsons',
    name: 'Akbar Allana',
    role: 'Director',
    organization: 'Alsons Group',
    headline: 'From Precision Engineering to Aerospace: An Exclusive Interview with Akbar Allana, Director Alsons Group',
    category: 'AEROSPACE & PRECISION ENGINEERING',
    date: 'JUNE 24, 2026',
    publishedAt: '2026-06-24',
    imageUrl: '/assets/interviews/akbar-allana.webp',
    sourceUrl: 'https://defenceida.com/from-precision-engineering-to-aerospace-an-exclusive-interview-with-akbar-allana-director-alsons-group/',
    summary: 'Akbar Allana discusses the creation of AKAL Group and how Alsons’ manufacturing experience supports Pakistan’s ambitions in aerospace and defence technology.',
    highlights: [
      'The discussion connects Alsons’ established precision engineering business with AKAL’s move into higher-value systems, including UAV propulsion and autonomous technologies.',
      'Allana describes priorities in engine development, testing, embedded systems and platform integration, alongside the investment and long-term support needed to develop domestic capabilities.',
    ],
  },
  {
    id: 'interview-havelsan',
    name: 'Mehmet Akif Nacar',
    role: 'President & CEO',
    organization: 'HAVELSAN',
    headline: 'Exclusive Interview with President & CEO HAVELSAN Mr Mehmet Akif NACAR',
    category: 'SOFTWARE, AUTONOMY & C4ISR',
    date: 'JANUARY 09, 2026',
    publishedAt: '2026-01-09',
    imageUrl: '/assets/interviews/mehmet-akif-nacar.jpg',
    sourceUrl: 'https://defenceida.com/exclusive-interview-with-president-ceo-havelsan-mr-mehmet-akif-nacar/',
    summary: 'Mehmet Akif Nacar explains HAVELSAN’s approach to software, systems integration, simulation and autonomous capabilities, with an emphasis on lasting technology partnerships.',
    highlights: [
      'The interview explores modular architectures that bring sensors, platforms and command centres into a shared operational picture while supporting incremental modernisation.',
      'Topics include simulation as an operational capability, AI-assisted decisions and the Digital Troops concept for coordinating unmanned systems across different domains.',
    ],
  },
  {
    id: 'interview-pakistan-navy',
    name: 'Admiral Naveed Ashraf',
    role: 'Chief of the Naval Staff',
    organization: 'Pakistan Navy',
    headline: 'Pakistan Naval Chief’s Interview with International Defence Analysis',
    category: 'NAVAL STRATEGY & MODERNISATION',
    date: 'NOVEMBER 25, 2024',
    publishedAt: '2024-11-25',
    imageUrl: '/assets/interviews/naveed-ashraf.jpg',
    sourceUrl: 'https://defenceida.com/pakistan-naval-chiefs-interview-with-international-defence-analysis/',
    summary: 'Pakistan’s naval chief discusses combat readiness, fleet modernisation and maritime security amid regional instability and financial constraints.',
    highlights: [
      'Admiral Naveed Ashraf outlines priorities for responding to conventional and unconventional threats while protecting sea routes and Pakistan’s economic interests.',
      'The conversation examines indigenisation, the completion of ongoing projects and the development of a technologically advanced navy supported by trained personnel.',
    ],
  },
  {
    id: 'interview-aselsan',
    name: 'Ahmet Akyol',
    role: 'CEO & President',
    organization: 'ASELSAN',
    headline: 'Exclusive Interview: Mr. Ahmet Akyol, CEO & President of ASELSAN',
    category: 'DEFENCE ELECTRONICS & TECHNOLOGY',
    date: 'SEPTEMBER 21, 2024',
    publishedAt: '2024-09-21',
    imageUrl: '/assets/interviews/ahmet-akyol.webp',
    sourceUrl: 'https://defenceida.com/exclusive-interview-mr-ahmet-akyol-ceo-president-of-aselsan/',
    summary: 'Ahmet Akyol discusses ASELSAN’s defence electronics portfolio, international presence and experience developing and modernising systems across military domains.',
    highlights: [
      'The interview introduces Akyol’s engineering background and leadership roles before examining the company’s position in the international defence industry.',
      'Topics include electronics for naval platforms, tank modernisation and the breadth of ASELSAN’s products for military and civilian users.',
    ],
  },
];
