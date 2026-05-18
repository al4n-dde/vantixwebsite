import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VantixAI — Websites and web apps that actually work",
  description:
    "Full-stack developer building fast, conversion-focused digital products for founders and small businesses. Cambridge · AI-augmented.",
  metadataBase: new URL("https://vantixai.com"),
  openGraph: {
    title: "VantixAI — Websites and web apps that actually work",
    description:
      "Full-stack developer building fast, conversion-focused digital products for founders and small businesses.",
    url: "https://vantixai.com",
    siteName: "VantixAI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-[var(--font-inter)] antialiased bg-[var(--background)] text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
