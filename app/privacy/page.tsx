import { LegalPage, H2, H3, P, UL, TextLink, SmsTypes, SampleMessages, ContactBlock } from '../legal';
import { COMPANY_INTRO, NO_SHARING, PHONE_DISPLAY, PHONE_TEL, SUPPORT_EMAIL } from '../siteText';

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <H2>1. Introduction</H2>
      <P>
        {COMPANY_INTRO} is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use Boost Hub Club, the employee benefits engagement and recognition program your employer provides, and our website at boosthubclub.com.
      </P>

      <H2>2. Information We Collect</H2>
      <H3>2.1 Information You Provide</H3>
      <p className="text-text-body mb-4">When you sign up, we may collect:</p>
      <UL>
        <li>Name and work contact information (email and, if you choose to give it, mobile phone number)</li>
        <li>Job title and department</li>
        <li>Your employer&apos;s Company ID</li>
        <li>Your text message preferences</li>
      </UL>

      <H3>2.2 Program Activity</H3>
      <p className="text-text-body mb-4">When you use the program, we collect activity that powers it, such as:</p>
      <UL>
        <li>Benefits checklist progress</li>
        <li>Recognition you give or receive, including shout-outs and badges</li>
        <li>Team challenge participation</li>
        <li>Birthday and work-anniversary dates your employer chooses to share</li>
      </UL>
      <P>
        We do not collect your benefit elections, health information, account numbers or Social Security numbers.
      </P>

      <H3>2.3 Information Collected Automatically</H3>
      <p className="text-text-body mb-4">When you use our website, we automatically collect:</p>
      <UL>
        <li>Device information (browser type, operating system)</li>
        <li>IP address and approximate location</li>
        <li>Usage data (pages visited and time spent)</li>
      </UL>

      <H3>2.4 Mobile Information Sharing</H3>
      <P><strong className="text-foreground">{NO_SHARING}</strong></P>

      <H2>3. How We Use Your Information</H2>
      <UL>
        <li>Provide and maintain Boost Hub Club</li>
        <li>Deliver benefits reminders, checklists, spotlights, recognition and team challenges</li>
        <li>Manage your account and send service-related communications</li>
        <li>Send text messages you have opted in to receive</li>
        <li>Prepare anonymous, aggregate reports for your employer</li>
        <li>Detect and prevent fraud or abuse</li>
        <li>Comply with legal obligations</li>
      </UL>

      <H2>4. What Your Employer Can See</H2>
      <P>
        Your checklist progress and recognition stay within your employer&apos;s Boost Hub Club program. Employers see benefits participation and recognition activity only in aggregate and anonymously, and do not see which individual employees completed which checklists. We never sell your data.
      </P>

      <H2>5. Information Sharing and Disclosure</H2>
      <H3>5.1 Service Providers</H3>
      <P>
        Vendors who perform services on our behalf, such as hosting, analytics, messaging delivery and customer support. They are contractually required to protect your information.
      </P>
      <H3>5.2 Business Transfers</H3>
      <P>
        In connection with a merger, sale of company assets, financing, or acquisition of all or part of our business.
      </P>
      <H3>5.3 Legal Requirements</H3>
      <P>
        When required by law, court order, or government regulation, or when we believe disclosure is needed to protect rights or safety.
      </P>
      <H3>5.4 With Your Consent</H3>
      <P>We may share your information for any other purpose with your explicit consent.</P>

      <H2>6. Data Security</H2>
      <P>
        We use appropriate technical and organizational measures to protect your information, including encryption in transit (HTTPS/TLS), access controls and regular reviews of our practices.
      </P>

      <H2>7. How Long We Keep Information</H2>
      <P>
        We keep your information only as long as needed for the purposes in this policy, unless the law requires or permits longer. Account information is kept while your account is active and for a reasonable period afterward for legal and business purposes.
      </P>

      <H2>8. Your Rights and Choices</H2>
      <UL>
        <li><strong className="text-foreground">Access:</strong> request the personal information we hold about you</li>
        <li><strong className="text-foreground">Correction:</strong> request correction of inaccurate information</li>
        <li><strong className="text-foreground">Deletion:</strong> request deletion of your personal information</li>
        <li><strong className="text-foreground">Opt-out:</strong> opt out of promotional communications, including texts, at any time</li>
      </UL>
      <P>
        To exercise these rights, contact us at <TextLink href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</TextLink>.
      </P>

      <H2>9. Cookies and Similar Technologies</H2>
      <P>
        We use cookies and similar technologies to keep our website working and to understand how it is used. You can set your browser to refuse cookies, but some parts of the site may not work as intended.
      </P>

      <H2>10. Third-Party Links</H2>
      <P>
        Our site may link to third-party websites. We are not responsible for their privacy practices, and we encourage you to review their policies.
      </P>

      <H2>11. Children&apos;s Privacy</H2>
      <P>
        Boost Hub Club is not intended for anyone under 18. We do not knowingly collect personal information from children. If you believe we have, please contact us immediately.
      </P>

      <H2>12. State Privacy Rights</H2>
      <P>
        Depending on where you live, you may have additional rights under state privacy laws, including the right to know, delete and correct personal information. We do not sell personal information.
      </P>

      <H2>13. Governing Law</H2>
      <P>This Privacy Policy is governed by the laws of the State of New Jersey.</P>

      <H2>14. Changes to This Privacy Policy</H2>
      <P>
        We may update this policy from time to time. We will post the new version on this page and update the &quot;Last Updated&quot; date.
      </P>

      <H2>15. SMS Communications</H2>
      <P>
        We send text messages only to users who have opted in. You can opt in to Account Notifications, Promotional messages, both or neither.
      </P>
      <SmsTypes />
      <P>
        Message and data rates may apply. Message frequency varies. Reply <strong className="text-foreground">STOP</strong> to opt out at any time, or <strong className="text-foreground">HELP</strong> for help. To re-subscribe, reply START or contact <TextLink href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</TextLink> or <TextLink href={PHONE_TEL}>{PHONE_DISPLAY}</TextLink>. More details are in our <TextLink href="/sms-policy">SMS Policy</TextLink>.
      </P>
      <P><strong className="text-foreground">{NO_SHARING}</strong></P>
      <SampleMessages level="h3" number="15.1" />

      <H2>16. Contact Us</H2>
      <P>If you have questions about this Privacy Policy or our privacy practices, please contact us:</P>
      <ContactBlock />
    </LegalPage>
  );
}
