export interface InterviewItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  headline: string;
  category: string;
  date: string;
  location: string;
  imageUrl: string;
  coverImage?: string;
  quote: string;
  interviewBody: {
    question: string;
    answer: string;
  }[];
}

export const EXCLUSIVE_INTERVIEWS: InterviewItem[] = [
  {
    id: 'interview-havelsan',
    name: 'Dr. Mehmet Akif Nacar',
    role: 'General Manager & CEO',
    organization: 'HAVELSAN',
    headline: 'Autonomous Digital Troops, Network-Centric Combat & Subsurface Systems',
    category: 'AUTONOMOUS SYSTEMS & C4ISR',
    date: 'OCTOBER 2026',
    location: 'Ankara, Türkiye',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    quote: 'The warfare of tomorrow will not be determined by isolated weapon platforms, but by the speed and resilience of the algorithmic mesh connecting unmanned air, land, and naval nodes.',
    interviewBody: [
      {
        question: 'How is HAVELSAN advancing the "Digital Troop" concept across operational combat units?',
        answer: 'Our Digital Troop ecosystem unites our autonomous unmanned ground vehicle BARKAN, our sub-cloud autonomous UAV BAHA, and our naval armed USV SANCAR under one common cognitive command matrix (ADVENT). The goal is to remove the human soldier from the dangerous initial breach line. Instead, swarming robotic elements identify enemy electronic signatures, scout concealed positions, and transmit target-quality fire solutions directly to field commanders.'
      },
      {
        question: 'What role does the ADVENT Combat Management System play on international naval platforms?',
        answer: 'ADVENT has evolved from a single-ship management system into an interoperable task force coordinator. A Corvette operating 50 nautical miles away can designate a missile target that is engaged by a companion frigate over encrypted datalinks without either vessel giving away their radar coordinates. That capability is now actively deployed across multiple international partner navies.'
      },
      {
        question: 'What are the biggest challenges in deploying AI within contested electronic warfare environments?',
        answer: 'Connectivity denial. When GPS and satellite uplinks are completely jammed, our autonomous platforms cannot rely on cloud computation. We have engineered edge-computing neural processors onto each platform, allowing autonomous image recognition, dead reckoning navigation, and coordinated retreat or attack protocols even under total communications blackout.'
      }
    ]
  },
  {
    id: 'interview-pakistan-navy',
    name: 'Admiral Naveed Ashraf',
    role: 'Chief of the Naval Staff',
    organization: 'Pakistan Navy',
    headline: 'Securing Vital Sea Lines of Communication & Regional Maritime Balance',
    category: 'NAVAL STRATEGY & FLEET DYNAMICS',
    date: 'SEPTEMBER 2026',
    location: 'Islamabad, Pakistan',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    quote: 'Peaceful coexistence in the Indian Ocean requires credible conventional deterrence and unwavering commitment to securing international sea lanes from piracy, terrorism, and asymmetric disruption.',
    interviewBody: [
      {
        question: 'How does the introduction of the Hangor-class submarines reshape the regional subsurface equation?',
        answer: 'The induction of the Hangor-class submarines equipped with advanced Air-Independent Propulsion provides extended silent endurance across the north Arabian Sea. Submarines are vital instruments of conventional deterrence. They ensure that any unilateral adventurism against our sea lines of communication will encounter unacceptable operational costs.'
      },
      {
        question: 'What is the significance of the biennial AMAN international naval exercises?',
        answer: 'Exercise AMAN, conducted under the motto "Together for Peace," brings together over 50 nations with diverse strategic alliances. In an era marked by geopolitical polarization, AMAN demonstrates that maritime security, counter-narcotics, and search-and-rescue remain universal responsibilities shared by all responsible maritime nations.'
      },
      {
        question: 'How is the Pakistan Navy addressing coastal defense and unmanned maritime systems?',
        answer: 'We have initiated extensive coastal missile battery upgrades and are deploying indigenous unmanned surface vessels for persistent surveillance along the Makran coastline. Integrating unmanned pickets with our maritime patrol aircraft ensures round-the-clock domain awareness across the approaches to the Strait of Hormuz.'
      }
    ]
  },
  {
    id: 'interview-aselsan',
    name: 'Ahmet Akyol',
    role: 'President & CEO',
    organization: 'ASELSAN',
    headline: 'Sovereign Radar, GaN Semiconductor Foundry & Next-Gen Electro-Optics',
    category: 'DEFENCE ELECTRONICS & RADAR',
    date: 'AUGUST 2026',
    location: 'Istanbul, Türkiye',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1517976487588-66236b22ee05?auto=format&fit=crop&w=800&q=80',
    quote: 'True defence sovereignty begins at the chip level. Without indigenous Gallium Nitride components, no nation can claim full control over its radar, electronic warfare, or missile guidance.',
    interviewBody: [
      {
        question: 'How significant is the domestic production of Gallium Nitride (GaN) for ASELSAN radar systems?',
        answer: 'GaN technology provides dramatically higher power density and thermal efficiency compared to legacy Gallium Arsenide. By manufacturing our own GaN transmit-receive modules in Ankara, we can build AESA radars with double the detection range, smaller antenna footprints, and exceptional resistance to electronic counter-countermeasures for platforms like KAAN and our air-defense frigates.'
      },
      {
        question: 'What lessons has ASELSAN drawn from recent high-intensity drone warfare in Eastern Europe and the Middle East?',
        answer: 'Layered defense is non-negotiable. No single missile or gun can stop a multi-tiered attack. You need directional RF jammers to disrupt cheap commercial drones, electro-optical tracking for radar-silent targets, 35mm smart airburst guns for close-in interception, and low-cost micro-missiles for medium-range swarms. Our GÖKER and KORKUT systems were engineered specifically for this doctrine.'
      },
      {
        question: 'What are your export priorities for the next five years?',
        answer: 'ASELSAN is active in over 85 countries. Our focus is long-term joint industrial partnerships: we establish engineering bureaus and maintenance centers in partner nations rather than simply exporting black boxes. This approach builds enduring technological alliances across the Middle East, Central Asia, and Latin America.'
      }
    ]
  },
  {
    id: 'interview-alsons',
    name: 'Akbar Allana',
    role: 'Chairman & Chief Executive',
    organization: 'Alsons Group',
    headline: 'Precision Aerospace Engineering, Critical Metallurgy & Defence Supply Chains',
    category: 'AEROSPACE MANUFACTURING',
    date: 'JULY 2026',
    location: 'Karachi, Pakistan',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    quote: 'High-precision manufacturing tolerances in aerospace cannot be compromised. One micron of deviation can determine the structural integrity of a supersonic turbine or guidance gyroscope.',
    interviewBody: [
      {
        question: 'How has Alsons Group integrated into high-tier global aerospace and defense supply chains?',
        answer: 'For over four decades, we built our reputation on micron-level precision CNC machining, specialized heat treatment, and AS9100 aerospace certification. We supply flight-critical components, fuzing mechanisms, and missile airframe components to leading international prime contractors who require absolute metallurgical fidelity.'
      },
      {
        question: 'What investments are you making in additive manufacturing and advanced composite materials?',
        answer: 'We have commissioned five-axis industrial laser powder bed fusion (LPBF) machines for titanium and Inconel alloy parts. This allows us to manufacture complex conformal cooling channels and lightweight rocket motor housings that were physically impossible to produce using traditional subtractive machining.'
      },
      {
        question: 'How can regional private engineering enterprises best collaborate with state defence organizations?',
        answer: 'The private sector brings commercial agility, cost discipline, and speed to the table. When national defence research centers partner with private certified manufacturing facilities, prototyping cycles drop from years to months, allowing armed forces to field modernized hardware at a fraction of legacy acquisition costs.'
      }
    ]
  }
];
