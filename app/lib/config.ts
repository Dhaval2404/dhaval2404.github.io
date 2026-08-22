export const APP_CONFIG = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || "https://api.dhaval2404.com",
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://dhaval2404.com",
  SOCIAL: {
    EMAIL: "dhaval2404@hotmail.com",
    TWITTER: "https://x.com/dhaval2404",
    LINKEDIN: "https://www.linkedin.com/in/dhaval2404/",
    GITHUB: "https://github.com/Dhaval2404",
  },
  RESUME_PATH: "/docs/dhavalkumar-patel-resume-2026.pdf",
  COPYRIGHT: "© 2026 Dhavalkumar Patel. All rights reserved.",
  CANONICAL_URL: "https://dhaval2404.com/",
  GOOGLE_ANALYTICS_ID: "G-CMWZPSDTY3",
} as const;
