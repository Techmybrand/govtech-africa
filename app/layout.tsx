import type { Metadata } from "next";
import { PreLoader } from "@/shared";
import "@/styles/index.scss";
import React from "react";

export const metadata: Metadata = {
  title: `Africa Govtech Week 2025 | Powering Africa's Public Sector Digitisation`,
  description: `Join top government leaders, tech innovators, and development 
    partners at Africa Govtech Week 2025—a premier conference and exhibition 
    focused on  digitising Africa's public sector. Be part of Africa's most 
    influential  gathering of government technology stakeholders. 
    Discover innovations, forge partnerships, and shape the future of digital 
    governance across the continent.`,
  keywords: [
      'Africa Govtech Week',
      'GovTech Africa 2025',
      'Government technology Africa',
      'Digital transformation public sector Africa',
      'African digital governance conference',
      'Gov-a-thon Africa',
      'Public sector innovation Africa',
      'Tech for governance Africa',
      'Smart governance Africa',
      'African government digitisation',
      'How to digitize government services in Africa',
      'Africa government technology events 2025',
      'GovTech innovation in Africa',
      'Public sector digital solutions Africa',
      'Smart city and e-governance Africa',
      'Africa GovTech policy forum',
      'AI in public sector Africa',
      'Digital ID and infrastructure in African governance',
  ],
  openGraph: {
    title: `Africa Govtech Week 2025 | Powering Africa's Public Sector Digitisation`,
    description: `Join top government leaders, tech innovators, and development 
      partners at Africa Govtech Week 2025—a premier conference and exhibition 
      focused on  digitising Africa's public sector. Be part of Africa's most 
      influential  gathering of government technology stakeholders. 
      Discover innovations, forge partnerships, and shape the future of digital 
      governance across the continent.`,
    url: 'https://africagovtechweek.com',
    type: 'website',
    siteName: 'Africa Govtech Week 2025',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Africa Govtech Week 2025',
      },
    ],
  },
  metadataBase: new URL('https://africagovtechweek.com'),
  twitter: {
    card: 'summary_large_image',
    title: `Africa Govtech Week 2025 | Powering Africa's Public Sector Digitisation`,
    description: `Join top government leaders, tech innovators, and development
      partners at Africa Govtech Week 2025—a premier conference and exhibition
      focused on  digitising Africa's public sector. Be part of Africa's most
      influential  gathering of government technology stakeholders.
      Discover innovations, forge partnerships, and shape the future of digital
      governance across the continent.`,
    images: '/images/opengraph-image.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PreLoader />
        <React.Fragment>
          {children}
        </React.Fragment>
      </body>
    </html>
  );
}
