import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SiteShell from '../SiteShell';
import ContactForm from '../ContactForm';
import { NO_SHARING, PHONE_DISPLAY, PHONE_TEL, SUPPORT_EMAIL } from '../siteText';

export default function ContactPage() {
  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="bg-card border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-text-body max-w-2xl mx-auto">
            Have a question about Boost Hub Club? We&apos;d love to hear from you. Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-5">
                  <MapPin className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Company</h3>
                  <p className="text-text-body text-lg/relaxed">
                    Media Delivery Solutions LLC<br />
                    9 Johnston Dr<br />
                    Bloomsbury, NJ 08804<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-5">
                  <Phone className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                  <a href={PHONE_TEL} className="text-accent hover:text-accent-hover text-lg">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-5">
                  <Mail className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:text-accent-hover text-lg">
                    {SUPPORT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-5">
                  <Clock className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-text-body text-lg">
                    Monday – Friday: 9am – 6pm EST<br />
                    Saturday – Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-text-muted mt-10">{NO_SHARING}</p>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
