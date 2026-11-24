import Link from 'next/link';
import { ADDRESS_ONE_LINE, PHONE_DISPLAY, PHONE_TEL } from './siteText';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/signup', label: 'Employee Sign Up' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/sms-policy', label: 'SMS Policy' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <span className="text-2xl font-extrabold text-foreground tracking-tight">Boost Hub Club</span>
            <p className="text-text-body mt-3 max-w-sm">
              Employee benefits engagement with recognition, provided through your employer.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-accent hover:text-accent-hover">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-sm text-text-muted space-y-2 text-center md:text-left">
          <p>{`© ${year} Media Delivery Solutions LLC, d/b/a Boost Hub Club. All rights reserved.`}</p>
          <p>
            {ADDRESS_ONE_LINE} · <a href={PHONE_TEL} className="text-accent hover:text-accent-hover">{PHONE_DISPLAY}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
