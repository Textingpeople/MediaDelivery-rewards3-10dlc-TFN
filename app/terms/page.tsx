import { LegalPage, H2, H3, P, UL, TextLink, SmsTypes, SampleMessages, ContactBlock } from '../legal';
import { COMPANY_INTRO, DISCLAIMER, NO_SHARING, PHONE_DISPLAY, PHONE_TEL, SUPPORT_EMAIL } from '../siteText';

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <H2>1. Acceptance of Terms</H2>
      <P>
        {COMPANY_INTRO} provides Boost Hub Club, an employee benefits engagement and recognition program offered through your employer (the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, you may not use the Service.
      </P>
      <P>{DISCLAIMER}</P>

      <H2>2. Description of Service</H2>
      <P>The Service is provided to employees through their employer and includes:</P>
      <UL>
        <li>Benefits boosts: reminders and quick checklists for benefits your employer already offers</li>
        <li>Benefits spotlights: short monthly explainers on one benefit at a time</li>
        <li>Recognition: peer and manager shout-outs, birthday and work-anniversary celebrations, and badges for milestones and completed checklists</li>
        <li>Team challenges: monthly team goals</li>
        <li>An employer dashboard showing benefits participation and recognition activity, anonymous and in aggregate</li>
      </UL>

      <H2>3. Account Registration and Security</H2>
      <H3>3.1 Account Creation</H3>
      <P>
        To use the Service, you must sign up with the Company ID your employer provides and give accurate, complete and current information. You are responsible for keeping your account credentials confidential and for activity under your account.
      </P>
      <H3>3.2 Account Security</H3>
      <P>
        Tell us promptly about any unauthorized use of your account or other breach of security. We are not liable for loss or damage arising from your failure to do so.
      </P>
      <H3>3.3 Eligibility</H3>
      <P>
        You must be at least 18 years old and an employee, or otherwise authorized participant, of an employer that offers the Service.
      </P>

      <H2>4. Acceptable Use</H2>
      <p className="text-text-body mb-4">You agree not to use the Service to:</p>
      <UL>
        <li>Violate any law, regulation or third-party right</li>
        <li>Send spam or unsolicited messages, or engage in fraud</li>
        <li>Post harassing, discriminatory or inappropriate recognition messages</li>
        <li>Transmit malware or other harmful code</li>
        <li>Interfere with or disrupt the Service</li>
        <li>Try to gain unauthorized access to any part of the Service</li>
        <li>Impersonate any person or misrepresent your affiliation</li>
        <li>Collect personal information about others without consent</li>
      </UL>

      <H2>5. Recognition and Benefits</H2>
      <H3>5.1 Badges</H3>
      <P>
        Recognition in the Service uses badges and shout-outs. Badges are a way to celebrate achievements and completed checklists. They are not a form of payment and cannot be exchanged for anything.
      </P>
      <H3>5.2 Your Benefits</H3>
      <P>
        Your benefits, including their terms, eligibility and enrollment, are provided by your employer and its plan providers. Boost Hub Club only sends reminders, checklists and information to help you find and use them, and does not give benefits, insurance, tax, legal or financial advice. Please contact your employer or plan provider about your benefits.
      </P>
      <H3>5.3 Employer Responsibilities</H3>
      <P>
        Your employer decides how it uses the Service and is responsible for its own communications and policies about benefits and recognition.
      </P>

      <H2>6. Fees</H2>
      <P>
        Any fees for the Service are arranged between us and your employer. Employees are not asked to pay fees to sign up through the Service.
      </P>

      <H2>7. Intellectual Property</H2>
      <H3>7.1 Our Rights</H3>
      <P>
        The Service and its content, features and functionality are owned by Media Delivery Solutions LLC and protected by copyright, trademark and other laws. You may not copy, modify, distribute or create derivative works of the Service without our written permission.
      </P>
      <H3>7.2 Your Content</H3>
      <P>
        You keep ownership of content you submit, such as shout-outs. You give us a worldwide, non-exclusive license to use, reproduce and display it solely to provide the Service.
      </P>

      <H2>8. Availability and Support</H2>
      <P>
        We work to keep the Service available but do not guarantee uninterrupted access. We may perform maintenance with notice when possible. We provide email support during business hours at <TextLink href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</TextLink>.
      </P>

      <H2>9. Data and Privacy</H2>
      <P>
        Your use of the Service is also governed by our <TextLink href="/privacy">Privacy Policy</TextLink>. Checklist progress and recognition stay within your employer&apos;s program, employers see participation only in aggregate, and we never sell your data.
      </P>

      <H2>10. Disclaimers and Limitation of Liability</H2>
      <H3>10.1 Service &quot;As Is&quot;</H3>
      <P>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
      </P>
      <H3>10.2 Limitation of Liability</H3>
      <P>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, MEDIA DELIVERY SOLUTIONS LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, USE, GOODWILL OR OTHER INTANGIBLE LOSSES.
      </P>
      <H3>10.3 Maximum Liability</H3>
      <P>
        Our total liability to you for all claims arising from or related to the Service will not exceed the amount you paid us, if any, in the twelve (12) months before the claim.
      </P>

      <H2>11. Indemnification</H2>
      <P>
        You agree to indemnify and hold harmless Media Delivery Solutions LLC and its officers, directors, employees and agents from claims, liabilities, damages, losses and expenses (including reasonable attorney fees) arising from your use of the Service, your violation of these Terms, or your violation of any law or third-party right.
      </P>

      <H2>12. Termination</H2>
      <H3>12.1 Termination by You</H3>
      <P>
        You may stop using the Service and ask us to close your account at any time by contacting us.
      </P>
      <H3>12.2 Termination by Us</H3>
      <P>
        We may suspend or end your access if you violate these Terms, if your employer ends its participation, or if we believe your conduct is harmful to other users or the Service.
      </P>

      <H2>13. Dispute Resolution</H2>
      <H3>13.1 Informal Resolution</H3>
      <P>
        Before filing a claim, you agree to contact us and try to resolve the dispute informally by sending a written notice describing it and your proposed resolution.
      </P>
      <H3>13.2 Arbitration</H3>
      <P>
        If we cannot resolve the dispute informally, it will be resolved through binding arbitration under the rules of the American Arbitration Association.
      </P>
      <H3>13.3 Class Action Waiver</H3>
      <P>
        Disputes will be resolved only on an individual basis and not in a class, consolidated or representative action.
      </P>

      <H2>14. General Provisions</H2>
      <H3>14.1 Governing Law</H3>
      <P>
        These Terms are governed by the laws of the State of New Jersey, without regard to its conflict of law provisions.
      </P>
      <H3>14.2 Entire Agreement</H3>
      <P>
        These Terms and our Privacy Policy are the entire agreement between you and Media Delivery Solutions LLC regarding the Service.
      </P>
      <H3>14.3 Severability</H3>
      <P>
        If any provision of these Terms is unenforceable, the remaining provisions stay in full force and effect.
      </P>

      <H2>15. Changes to Terms</H2>
      <P>
        We may modify these Terms at any time by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. Continued use of the Service after changes take effect means you accept them.
      </P>

      <H2>16. SMS Communications Policy</H2>
      <H3>16.1 Overview</H3>
      <P>
        {COMPANY_INTRO} is committed to responsible and transparent SMS communications. This section describes how and when we use text messaging.
      </P>
      <H3>16.2 What We Send</H3>
      <SmsTypes />
      <H3>16.3 Opt-In</H3>
      <P>
        Text messages are optional. During sign-up you can opt in to Account Notifications, Promotional messages, both or neither, using two separate unchecked checkboxes. Opting in is not required to use the Service, and consent is not a condition of purchasing any products or services.
      </P>
      <H3>16.4 Opt-Out and Re-Subscribe</H3>
      <P>
        Reply <strong className="text-foreground">STOP</strong> to any message to opt out at any time. To start receiving texts again, reply <strong className="text-foreground">START</strong> or contact <TextLink href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</TextLink>.
      </P>
      <H3>16.5 Help</H3>
      <P>
        Reply <strong className="text-foreground">HELP</strong> to any message, or contact us at <TextLink href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</TextLink> or <TextLink href={PHONE_TEL}>{PHONE_DISPLAY}</TextLink>.
      </P>
      <H3>16.6 Message &amp; Data Rates</H3>
      <P>
        Message and data rates may apply depending on your mobile carrier and plan. Message frequency varies. Boost Hub Club is not responsible for charges from your mobile carrier.
      </P>
      <H3>16.7 Data Privacy</H3>
      <P>
        <strong className="text-foreground">{NO_SHARING}</strong> See our <TextLink href="/privacy">Privacy Policy</TextLink> and <TextLink href="/sms-policy">SMS Policy</TextLink> for more.
      </P>
      <SampleMessages level="h3" number="16.8" />
      <H3>16.9 Carrier Disclaimer</H3>
      <P>
        Carriers are not liable for delayed or undelivered messages. Delivery is subject to your carrier&apos;s network availability and coverage.
      </P>

      <H2>17. Contact Information</H2>
      <P>If you have any questions about these Terms, please contact us:</P>
      <ContactBlock />
    </LegalPage>
  );
}
