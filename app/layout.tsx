import type {Metadata, Viewport} from "next";
import Script from "next/script";
import type {ReactNode} from "react";
import "./globals.css";
import {APP_CONFIG} from "./lib/config";
import {SITE_META} from "./lib/site-meta-config";

import { Inter } from "next/font/google";
import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";
import ChatAssistant from "@/app/components/chat-assistant";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

const siteUrl = APP_CONFIG.SITE_URL ?? "https://dhaval2404.com";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: SITE_META.TITLE,
    applicationName: "DhavalKumar Patel's Portfolio",
    description: SITE_META.DESCRIPTION,
    keywords: SITE_META.KEYWORDS.join(','),
    authors: [{name: SITE_META.AUTHOR}],
    alternates: {canonical: APP_CONFIG.CANONICAL_URL},
    robots: "index,follow",
    openGraph: {
        type: "website",
        url: siteUrl,
        siteName: SITE_META.SITE_NAME,
        title: SITE_META.TITLE,
        description: SITE_META.DESCRIPTION,
        locale: "en_US",
        images: [
            {
                url: SITE_META.OG_IMAGE,
                width: 1200,
                height: 630,
                alt: SITE_META.DESCRIPTION,
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@dhaval2404",
        title: SITE_META.TITLE,
        description: SITE_META.DESCRIPTION,
        images: [SITE_META.OG_IMAGE],
    },

    icons: {
        icon: [
            {url: SITE_META.FAVICONS.SVG, type: "image/svg+xml"},
            {url: SITE_META.FAVICONS.ICO, sizes: "any"},
            {url: SITE_META.FAVICONS.PNG_32, sizes: "32x32", type: "image/png"},
            {url: SITE_META.FAVICONS.PNG_16, sizes: "16x16", type: "image/png"},
        ],
        apple: SITE_META.FAVICONS.APPLE,
    },
    manifest: SITE_META.WEB_MANIFEST,
};

export const viewport: Viewport = {
    themeColor: "#2563eb",
    colorScheme: "light",
};

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${siteUrl}/`,
            url: `${siteUrl}/`,
            name: SITE_META.TITLE,
            description: SITE_META.DESCRIPTION,
        },
        {
            "@type": "Person",
            "@id": `${siteUrl}/#about`,
            name: SITE_META.AUTHOR,
            alternateName: SITE_META.ALTERNATE_NAME,
            jobTitle: SITE_META.JOB_TITLE,
            url: `${siteUrl}/`,
            image: `${siteUrl}${SITE_META.OG_IMAGE}`,
            email: APP_CONFIG.SOCIAL.EMAIL,
            sameAs: SITE_META.SOCIAL_PAGES,
            knowsAbout: SITE_META.KNOWS_ABOUT,
        },
    ],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className={inter.className}>
        <body>
        <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${APP_CONFIG.GOOGLE_ANALYTICS_ID}`}
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {
                `window.dataLayer = window.dataLayer || [];
                function gtag(){
                    window.dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', '${APP_CONFIG.GOOGLE_ANALYTICS_ID}');`
            }
        </Script>

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
            }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ChatAssistant />
        </body>
        </html>
    );
}
