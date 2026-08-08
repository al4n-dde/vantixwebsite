import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://vantixai.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "VantixAI — Web Developer London | Websites & Web Apps That Convert",
    template: "%s | VantixAI",
  },
  description:
    "London-based full-stack developer building websites, web apps and automations for founders and small businesses. Fast delivery, production-grade quality.",

  keywords: [
    "web developer London",
    "freelance web developer London",
    "full stack developer London",
    "Next.js developer London",
    "web app development London",
    "website design London",
    "React developer London",
    "AI developer London",
    "startup developer London",
    "Cambridge developer",
    "website redesign London",
    "custom web development",
    "automation developer",
    "Stripe developer",
    "Supabase developer",
  ],

  authors: [{ name: "Alan", url: BASE_URL }],
  creator: "VantixAI",
  publisher: "VantixAI",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: "VantixAI — Web Developer London | Websites & Web Apps That Convert",
    description:
      "London-based full-stack developer building websites, web apps and automations for founders and small businesses. Fast delivery, production-grade quality.",
    url: BASE_URL,
    siteName: "VantixAI",
    type: "website",
    locale: "en_GB",
  },

  twitter: {
    card: "summary_large_image",
    title: "VantixAI — Web Developer London",
    description:
      "London-based full-stack developer building websites, web apps and automations for founders and small businesses.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",

  verification: {
    google: "Ha3brHcDpwOSyCQ5MNVIPADM12aRf7jqaSCqZofxJzM",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "VantixAI",
      description: "London-based full-stack developer",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#business`,
      name: "VantixAI",
      url: BASE_URL,
      logo: `${BASE_URL}/icon`,
      description:
        "London-based full-stack developer building websites, web apps and automations for founders and small businesses.",
      founder: {
        "@type": "Person",
        name: "Alan",
        jobTitle: "Full-Stack Developer",
        url: BASE_URL,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Cambridge",
        },
        knowsAbout: [
          "Web Development",
          "Next.js",
          "TypeScript",
          "React",
          "Supabase",
          "Stripe",
          "AI Automation",
        ],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB",
      },
      areaServed: [
        { "@type": "City", name: "London" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      serviceType: [
        "Website Design and Development",
        "Web Application Development",
        "Automation and Integrations",
      ],
      priceRange: "££",
      email: "info@vantixai.com",
      sameAs: [],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-[var(--font-inter)] antialiased bg-[var(--background)] text-[var(--text-primary)]">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
