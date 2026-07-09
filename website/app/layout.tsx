import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adamellahi.com"),
  title: {
    default: "Adam Ellahi | Project F1 Digital Ecosystem",
    template: "%s | Adam Ellahi"
  },
  description:
    "The official digital platform for Adam Ellahi: racing journey, sponsor value, media resources, results, and Mission Control intelligence.",
  applicationName: "Adam Ellahi Project F1",
  authors: [{ name: "Adam Ellahi Racing" }],
  keywords: [
    "Adam Ellahi",
    "motorsport",
    "karting",
    "junior racing driver",
    "racing sponsorship",
    "British racing driver",
    "motorsport media"
  ],
  openGraph: {
    type: "website",
    url: "https://adamellahi.com",
    siteName: "Adam Ellahi",
    title: "Adam Ellahi | Project F1 Digital Ecosystem",
    description:
      "A sponsor-ready motorsport platform documenting Adam Ellahi's racing journey with precision, progress, and proof.",
    images: [
      {
        url: "/brand/app-icon.svg",
        width: 512,
        height: 512,
        alt: "Adam Ellahi AE mark"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Ellahi | Project F1 Digital Ecosystem",
    description:
      "A premium motorsport platform for Adam Ellahi's racing journey, sponsors, fans, and media."
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/brand/app-icon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090909"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

