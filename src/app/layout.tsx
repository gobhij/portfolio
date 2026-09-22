import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gobhi J | Senior SDET & Automation Architect",
  description:
    "Senior SDET and Automation Architect specializing in Playwright, TypeScript, API automation, CI/CD and AI-assisted quality engineering.",
  keywords: [
    "SDET",
    "QA Automation",
    "Playwright",
    "TypeScript",
    "Automation Architect",
    "API Testing",
    "CI/CD",
    "AI Testing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}