import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leon Freier",
  description: "I build things from zero. Three companies, two continents, no outside capital.",
  openGraph: {
    title: "Leon Freier",
    description: "Strategy.",
    url: "https://leonfreier.com",
    siteName: "Leon Freier",
    images: [{ url: "https://leonfreier.com/og-image.png", width: 1200, height: 630, alt: "Leon Freier" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leon Freier",
    description: "Strategy.",
    images: ["https://leonfreier.com/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FAFAFA] text-[#1A1A1A] font-['Inter'] antialiased">
        {children}
      </body>
    </html>
  );
}
