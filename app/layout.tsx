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
  title: "BenefitBoost — Employee Engagement Platform",
  description: "Recognize effort, reward performance, and build a culture people love. BenefitBoost is the employee engagement platform that drives real recognition, reduces turnover, and keeps your team motivated.",
  keywords: "employee benefits, benefits platform, employee recognition, workplace engagement, HR technology",
  openGraph: {
    title: "BenefitBoost — Employee Engagement Platform",
    description: "Recognize effort, reward performance, and build a culture people love. The employee engagement platform that drives real recognition and reduces turnover.",
    url: "https://trybenefitboost.com",
    siteName: "BenefitBoost",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BenefitBoost — Employee Engagement Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BenefitBoost — Employee Engagement Platform",
    description: "Recognize effort, reward performance, and build a culture people love.",
    images: ["/logo.png"],
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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YLGG52GZ09"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YLGG52GZ09');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
