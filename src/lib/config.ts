/**
 * Centralized site configuration.
 * All domain names, emails, and branding should come from here
 * to avoid the 20+ hardcoded instances scattered across the codebase.
 */

export const SITE_URL = "https://www.getsolardoctor.com";
export const SITE_NAME = "SolarDoctor";
export const SUPPORT_EMAIL = "hello@getsolardoctor.com";
export const ALERTS_FROM_EMAIL = "SolarDoctor <alerts@getsolardoctor.com>";

export const AUTHOR = {
  name: "Rich",
  title: "Founder & Solar Energy Expert",
  bio: "20-year solar industry veteran and founder of SolarDoctor. Built the tool after discovering his own system had been offline for 8 months.",
  initials: "R",
} as const;
