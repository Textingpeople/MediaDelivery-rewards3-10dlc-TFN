import { LegalPage, H2, P, TextLink, SmsTypes, SampleMessages, ContactBlock } from '../legal';
import { COMPANY_INTRO, NO_SHARING, PHONE_DISPLAY, PHONE_TEL, SUPPORT_EMAIL } from '../siteText';

export default function SmsPolicyPage() {
  return (
    <LegalPage title="SMS Policy">
      <P>
        {COMPANY_INTRO} is committed to responsible and transparent SMS communications. This page describes how and when we use SMS (text messaging) to communicate with employees who join Boost Hub Club through their employer&apos;s program.
      </P>

      <H2>What We Send</H2>
      <SmsTypes />

      <H2>Opt-In</H2>
      <P>
        Text messages are optional. During sign-up you can choose to receive Account Notification messages, Promotional messages, both, or neither, using two separate checkboxes. Both are unchecked by default. Opting in is not required to sign up for or use Boost Hub Club, and consent is not a condition of purchasing any products or services. A mobile phone number is required only if you opt in to texts.
      </P>

      <H2>Opt-Out</H2>
      <P>
        You may opt out at any time by replying <strong className="text-foreground">STOP</strong> to any message you receive from us. After opting out, you will no longer receive text messages from Boost Hub Club, except for one final message confirming your request.
      </P>

      <H2>Re-Subscribe</H2>
      <P>
        To start receiving texts again, reply <strong className="text-foreground">START</strong> to any previous message, or contact us at <TextLink href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</TextLink> and we will help you re-subscribe.
      </P>

      <H2>Help</H2>
      <P>
        For help with text messages, reply <strong className="text-foreground">HELP</strong> to any message or contact us at <TextLink href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</TextLink> or <TextLink href={PHONE_TEL}>{PHONE_DISPLAY}</TextLink>.
      </P>

      <H2>Message &amp; Data Rates</H2>
      <P>
        Message and data rates may apply depending on your mobile carrier and plan. Message frequency varies. Boost Hub Club is not responsible for any charges incurred from your mobile carrier.
      </P>

      <H2>Data Privacy</H2>
      <P>
        <strong className="text-foreground">{NO_SHARING}</strong> Your phone number and text opt-in status are used only to deliver the messages described in this policy and in our <TextLink href="/privacy">Privacy Policy</TextLink>.
      </P>

      <SampleMessages level="h2" />

      <H2>Carrier Disclaimer</H2>
      <P>
        Carriers are not liable for delayed or undelivered messages. Delivery of text messages is subject to your mobile carrier&apos;s network availability and coverage.
      </P>

      <H2>Contact Us</H2>
      <ContactBlock />
    </LegalPage>
  );
}
