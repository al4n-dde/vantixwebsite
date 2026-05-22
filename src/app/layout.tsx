import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VantixAI — Web Developer London | Websites & Web Apps That Convert",
    template: "%s | VantixAI — Web Developer London",
  },
  description:
    "London-based full-stack developer building websites, web apps and automations for founders and small businesses. Fast delivery, production-grade quality.",
  metadataBase: new URL("https://vantixai.com"),
  openGraph: {
    title: "VantixAI — Web Developer London | Websites & Web Apps That Convert",
    description:
      "London-based full-stack developer building websites, web apps and automations for founders and small businesses. Fast delivery, production-grade quality.",
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
