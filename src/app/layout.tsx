import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteConfig from "@/data/siteConfig.json";
import { SiteConfig } from "@/types/site";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

const config = siteConfig as SiteConfig;

export const metadata: Metadata = {
  title: config.business.name,
  description: config.hero.subheadline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Map JSON hex codes to CSS variables dynamically
  const dynamicStyles = {
    "--theme-primary": config.theme.primaryColor,
    "--theme-font": config.theme.fontFamily,
  } as React.CSSProperties;

  return (
    <html lang="en" className="dark" style={dynamicStyles}>
      <body className={`${inter.className} min-h-screen bg-zinc-950 text-zinc-50 antialiased selection:bg-theme-primary/30 selection:text-theme-primary`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
