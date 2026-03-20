export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  resume?: string;
  socialLinks?: { text: string; href: string }[];
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string | string[];
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
}

export interface HeaderProps {
  navLinks: { text: string; href: string }[];
  email?: string;
  brandName?: string;
}
