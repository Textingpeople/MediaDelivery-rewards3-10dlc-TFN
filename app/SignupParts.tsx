import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, SUPPORT_EMAIL } from './siteText';

const steps = [
  { num: 1, label: 'Company ID' },
  { num: 2, label: 'Your Details' },
];

export function Stepper({ step }: { step: number }) {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10">
      <div className="flex items-center justify-between">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                step > s.num
                  ? 'bg-primary border-primary text-background'
                  : step === s.num
                  ? 'bg-card border-primary text-primary'
                  : 'bg-card border-border text-text-muted'
              }`}>
                {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
              </div>
              <span className={`mt-2 text-xs font-medium ${step === s.num ? 'text-foreground' : 'text-text-muted'}`}>{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 mb-5 ${step > s.num ? 'bg-primary' : 'bg-border'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Confirmation({ firstName, companyId, email }: { firstName: string; companyId: string; email: string }) {
  const link = 'text-accent hover:text-accent-hover underline';
  return (
    <div className="text-center py-8">
      <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-12 h-12 text-background" />
      </div>
      <h2 className="text-3xl font-bold text-foreground mb-3">Request Submitted!</h2>
      <p className="text-lg text-text-body mb-4 max-w-md mx-auto">
        Thanks, <strong className="text-foreground">{firstName}</strong>! Your sign-up request has been received.
      </p>
      <div className="bg-background border border-border rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
        <p className="text-text-body text-sm/relaxed">
          We&apos;ve notified your employer (Company ID: <strong className="text-foreground">{companyId}</strong>) that you&apos;ve asked to join Boost Hub Club. Once they approve your request, you&apos;ll receive an email at <strong className="text-foreground">{email}</strong> with instructions to activate your account.
        </p>
        <p className="text-text-body text-sm/relaxed mt-3">
          If you have questions, contact us at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className={link}>{SUPPORT_EMAIL}</a>{' '}
          or call <a href={PHONE_TEL} className={link}>{PHONE_DISPLAY}</a>.
        </p>
      </div>
      <Link href="/"
        className="inline-block px-8 py-4 bg-primary text-background text-lg font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-md">
        Back to Home
      </Link>
    </div>
  );
}
