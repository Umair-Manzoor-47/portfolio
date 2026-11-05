export type ProjectCategory = 'systems' | 'backend' | 'opensource';

export interface ProjectPillar {
  title: string; // e.g. "Throughput."
  image: string; // Engaging visual/screenshot for this pillar
  text: string;  // Digestible, authentic narrative
}

export interface Project {
  id: string;
  title: string;
  badgeLabel?: string; // Short label for the offset badge in Projects gallery (e.g. "Holt Engine", "Memory Allocators")
  subtitle: string;
  shortSummary: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: string;
  year: string;
  role?: string;
  coverImage: string; // High-impact engaging media for card and hero
  bannerImage?: string; // Optional wide banner for the project detail hero
  architectureDiagram?: string; // High-level architecture blueprint SVG
  architectureCaption?: string; // Short technical summary caption
  pillars: ProjectPillar[]; // 3-column pillars matching Davis Ryan project subpages
  externalLinks: {
    github?: string;
    steam?: string;
    playStore?: string;
    docs?: string;
  };
  tags: string[];
  metrics: { label: string; value: string }[];
  deepDive: {
    overview: string;
    keyArchitecture: { title: string; detail: string }[];
    technicalTakeaways: string[];
  };
}

export interface ExperienceItem {
  company: string;
  companyUrl?: string;
  role: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  current?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  period: string;
  details: string[];
}
