export interface ThemeConfig {
  primaryColor: string;
  fontFamily: string;
}

export interface BusinessConfig {
  name: string;
  whatsapp: string;
  address: string;
  logoUrl: string | null;
}

export interface HeroConfig {
  headline: string;
  subheadline: string;
  ctaText: string;
  heroImage: string;
}

export interface ServiceConfig {
  id: string;
  title: string;
  description: string;
  icon: string; // Refers to a Lucide React icon name
}

export interface TestimonialConfig {
  id: string;
  author: string;
  quote: string;
  rating: number;
}

export interface SiteConfig {
  theme: ThemeConfig;
  business: BusinessConfig;
  hero: HeroConfig;
  services: ServiceConfig[];
  testimonials: TestimonialConfig[];
}
