import { APP_CONFIG } from "./config";

export const SITE_META = {
  TITLE: "Dhavalkumar Patel - Lead Mobile Engineer",
  DESCRIPTION:
    "Building scalable mobile and backend solutions using Android, Kotlin Multiplatform, Flutter, and Spring Boot. Specialized in Banking and Healthcare platforms.",
  KEYWORDS: [
    "Dhavalkumar Patel",
    "Lead Mobile Engineer",
    "Android Developer",
    "Flutter Developer",
    "Kotlin Multiplatform",
    "Spring Boot",
  ],
  AUTHOR: "Dhavalkumar Patel",
  ALTERNATE_NAME: "Dhaval2404",
  JOB_TITLE: "Lead Mobile Engineer",
  SITE_NAME: "Dhavalkumar Patel Portfolio",
  OG_IMAGE: "/og-image.png",
  FAVICONS: {
    SVG: "/favicon.svg",
    ICO: "/favicon.ico",
    PNG_32: "/favicon-32x32.png",
    PNG_16: "/favicon-16x16.png",
    APPLE: "/apple-touch-icon.png",
  },
  WEB_MANIFEST: "/site.webmanifest",
  KNOWS_ABOUT: [
    "Kotlin",
    "Java",
    "Dart",
    "Flutter",
    "Kotlin Multiplatform",
    "Jetpack Compose",
    "Spring Boot",
    "Firebase",
    "Clean Architecture",
  ],
  SOCIAL_PAGES: [
    APP_CONFIG.SOCIAL.TWITTER,
    APP_CONFIG.SOCIAL.LINKEDIN,
    APP_CONFIG.SOCIAL.GITHUB,
    APP_CONFIG.SITE_URL,
    "https://dhaval2404.github.io/",
  ],
} as const;
