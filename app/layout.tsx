import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boost Hub Club — Employee Benefits & Recognition",
  description: "Boost Hub Club helps employees get more from their benefits and celebrates their wins, through a program their employer provides.",
  keywords: "employee benefits, benefits engagement, employee recognition, benefits reminders, team challenges",
  openGraph: {
    title: "Boost Hub Club — Employee Benefits & Recognition",
    description: "Boost Hub Club helps employees get more from their benefits and celebrates their wins, through a program their employer provides.",
    url: "https://boosthubclub.com",
    siteName: "Boost Hub Club",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Boost Hub Club — Employee Benefits & Recognition",
    description: "Boost Hub Club helps employees get more from their benefits and celebrates their wins, through a program their employer provides.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [],
    shortcut: [],
    apple: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
