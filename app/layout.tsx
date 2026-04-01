import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SelfRx — AI-Powered Peptide Prescriptions",
  description:
    "SelfRx uses AI to generate personalized peptide treatment plans. No doctor required. No appointment. Just text us your symptoms.",
  openGraph: {
    title: "SelfRx — AI-Powered Peptide Prescriptions",
    description:
      "Describe your symptoms. Get your AI prescription. Compare suppliers & checkout.",
    siteName: "SelfRx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
