import Link from 'next/link';

type Props = {
  smsTransactional: boolean;
  smsPromotional: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const linkClass = 'text-accent hover:text-accent-hover underline';
const boxClass = 'mt-1 h-4 w-4 accent-primary focus:ring-2 focus:ring-accent border-border rounded shrink-0';
const labelClass = 'ml-3 text-sm/relaxed text-text-body';

function TermsPrivacyLinks() {
  return (
    <span className="block mt-2">
      See our{' '}
      <Link href="/terms" className={linkClass}>Terms of Service</Link>{' '}
      and{' '}
      <Link href="/privacy" className={linkClass}>Privacy Policy</Link>.
    </span>
  );
}

export default function SmsConsent({ smsTransactional, smsPromotional, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="text-base font-semibold text-foreground mb-2">What Boost Hub Club will text you</h3>
        <ul className="list-disc pl-5 text-sm text-text-body space-y-1">
          <li>Benefits deadline reminders</li>
          <li>Recognition alerts</li>
          <li>Milestone and anniversary notices</li>
          <li>Account notifications</li>
          <li>Benefits spotlights and team challenges (promotional, only if you select it below)</li>
        </ul>
      </div>

      <div className="bg-card border border-border rounded-lg p-5">
        <div className="flex items-start">
          <input type="checkbox" id="smsTransactional" name="smsTransactional" checked={smsTransactional}
            onChange={onChange} className={boxClass} />
          <label htmlFor="smsTransactional" className={labelClass}>
            By checking this box, I agree to receive Transactional Account Notification SMS messages from Boost Hub Club at the phone number provided. I understand I may opt out at any time by replying STOP. Reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not required as a condition of purchasing any products or services.
            <TermsPrivacyLinks />
          </label>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-5">
        <div className="flex items-start">
          <input type="checkbox" id="smsPromotional" name="smsPromotional" checked={smsPromotional}
            onChange={onChange} className={boxClass} />
          <label htmlFor="smsPromotional" className={labelClass}>
            By checking this box, I agree to receive Promotional Marketing SMS messages from Boost Hub Club at the phone number provided, including benefits spotlights and team challenges. I understand I may opt out at any time by replying STOP. Reply HELP for help. Message and data rates may apply. Message frequency varies. Opting in is optional and not required to submit this form. Consent is not required as a condition of purchasing any products or services.
            <TermsPrivacyLinks />
          </label>
        </div>
      </div>
    </div>
  );
}
