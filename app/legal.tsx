import Link from 'next/link';
import type { ReactNode } from 'react';
import SiteShell from './SiteShell';
import {
  ACCOUNT_SAMPLES,
  ADDRESS_ONE_LINE,
  DOMAIN,
  LAST_UPDATED,
  LEGAL_NAME,
  NO_SENSITIVE_TEXTS,
  PHONE_DISPLAY,
  PHONE_TEL,
  PROMO_SAMPLES,
  SUPPORT_EMAIL,
  WEBSITE_URL,
} from './siteText';

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <SiteShell>
      <section className="bg-card border-b border-border py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-foreground mb-4">{title}</h1>
          <p className="text-lg text-text-body">{`Last Updated: ${LAST_UPDATED}`}</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</section>
    </SiteShell>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-text-body mb-6">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 text-text-body mb-6 space-y-2">{children}</ul>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const className = 'text-accent hover:text-accent-hover underline';
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function SmsTypes() {
  return (
    <>
      <p className="text-text-body mb-4">
        We send two kinds of text messages, and you choose which, if any, you want to receive:
      </p>
      <UL>
        <li>
          <strong className="text-foreground">Account Notifications:</strong> benefits deadline reminders, recognition alerts, milestone and anniversary notices and account updates.
        </li>
        <li>
          <strong className="text-foreground">Promotional:</strong> monthly benefits spotlights and team challenges.
        </li>
      </UL>
      <P>{NO_SENSITIVE_TEXTS}</P>
    </>
  );
}

export function SampleMessages({ level, number }: { level: 'h2' | 'h3'; number?: string }) {
  const title = number ? `${number} Sample Messages` : 'Sample Messages';
  return (
    <>
      {level === 'h2' ? <H2>{title}</H2> : <H3>{title}</H3>}
      <p className="text-foreground font-semibold mb-3">Account Notifications</p>
      <ol className="list-decimal pl-6 text-text-body mb-6 space-y-3">
        {ACCOUNT_SAMPLES.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ol>
      <p className="text-foreground font-semibold mb-3">Promotional</p>
      <ol start={ACCOUNT_SAMPLES.length + 1} className="list-decimal pl-6 text-text-body mb-6 space-y-3">
        {PROMO_SAMPLES.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ol>
    </>
  );
}

export function ContactBlock() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <p className="text-foreground font-semibold mb-3">{LEGAL_NAME}</p>
      <p className="text-text-body mb-2">
        <strong className="text-foreground">Address:</strong> {ADDRESS_ONE_LINE}
      </p>
      <p className="text-text-body mb-2">
        <strong className="text-foreground">Phone:</strong> <TextLink href={PHONE_TEL}>{PHONE_DISPLAY}</TextLink>
      </p>
      <p className="text-text-body mb-2">
        <strong className="text-foreground">Email:</strong> <TextLink href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</TextLink>
      </p>
      <p className="text-text-body">
        <strong className="text-foreground">Website:</strong> <TextLink href={WEBSITE_URL}>{DOMAIN}</TextLink>
      </p>
    </div>
  );
}
