'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="shrink-0">
            <span className="text-2xl font-extrabold text-foreground tracking-tight">Boost Hub Club</span>
          </Link>
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-1">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      active ? 'text-primary' : 'text-text-body hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/signup"
              className="ml-3 bg-primary text-background hover:bg-primary-hover px-4 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              Employee Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
