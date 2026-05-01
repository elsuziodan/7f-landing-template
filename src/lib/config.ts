import siteConfigMock from "@/data/siteConfig.json";
import { SiteConfig } from "@/types/site";

export function getSiteConfig(): SiteConfig {
  // Priority: Environment Variable (Vercel) > Local Mock JSON
  if (process.env.NEXT_PUBLIC_SITE_CONFIG) {
    try {
      return JSON.parse(process.env.NEXT_PUBLIC_SITE_CONFIG) as SiteConfig;
    } catch (e) {
      console.error("Failed to parse NEXT_PUBLIC_SITE_CONFIG environment variable:", e);
    }
  }
  return siteConfigMock as unknown as SiteConfig;
}
