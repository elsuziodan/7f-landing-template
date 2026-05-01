import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSiteConfig } from "@/lib/config";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const config = getSiteConfig();
  return {
    title: config.business.name,
    description: config.hero.subheadline,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = getSiteConfig();

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
