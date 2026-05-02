export interface ThemeConfig { primaryColor: string; fontFamily: string; }
export interface BusinessConfig { name: string; whatsapp: string; address: string; logoUrl: string | null; }
export interface HeroConfig { headline: string; subheadline: string; ctaText: string; heroImage: string; }
export interface ServiceConfig { id: string; title: string; description: string; icon: string; }
export interface TestimonialConfig { id: string; author: string; quote: string; rating: number; }
export interface GalleryImage { src: string; title: string; }

export interface ContactConfig {
  phone: string;
  address: string;
  hours: { days: string; time: string }[];
}

export interface NavbarConfig {
  ctaText?: string;
}

export interface ServicesSectionConfig {
  sectionTitle?: string;
  sectionSubtitle?: string;
  items: ServiceConfig[];
}

export interface SiteConfig {
  theme: ThemeConfig;
  navbar?: NavbarConfig;
  business: BusinessConfig;
  hero: HeroConfig;
  services: ServicesSectionConfig;
  testimonials: TestimonialConfig[];
  gallery?: GalleryImage[];
  contact?: ContactConfig;
}
