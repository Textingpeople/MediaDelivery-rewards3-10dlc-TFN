import Link from 'next/link';
import { Shield, Target, Users, BadgeCheck, Heart, BarChart3, ListChecks, Flag } from 'lucide-react';
import SiteShell from '../SiteShell';

const principles = [
  { icon: <Target className="w-6 h-6 text-background" />, title: 'Clear and Simple', desc: 'Quick checklists and short monthly spotlights make benefits easy to understand, one benefit at a time.' },
  { icon: <Shield className="w-6 h-6 text-background" />, title: 'Privacy First', desc: "Checklist progress and recognition stay within your company's program. Employers see participation only in aggregate, and we never sell your data." },
  { icon: <Heart className="w-6 h-6 text-background" />, title: 'Recognition With Meaning', desc: 'Recognition uses badges and shout-outs that celebrate real achievements and milestones.' },
];

const offers = [
  { icon: <ListChecks className="w-8 h-8 text-background" />, title: 'Benefits Boosts', desc: 'Reminders and quick checklists for open enrollment, wellness screenings, EAP, retirement plan enrollment and learning benefits.' },
  { icon: <BadgeCheck className="w-8 h-8 text-background" />, title: 'Recognition & Badges', desc: 'Peer and manager shout-outs, birthday and work-anniversary celebrations, and badges for milestones.' },
  { icon: <Flag className="w-8 h-8 text-background" />, title: 'Team Challenges', desc: 'Monthly team goals, like everyone completing their wellness checklist, that bring people together.' },
  { icon: <BarChart3 className="w-8 h-8 text-background" />, title: 'Employer Dashboard', desc: 'Benefits participation and recognition activity, shown anonymously and in aggregate.' },
];

export default function AboutPage() {
  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="bg-card border-b border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-foreground mb-6">About Boost Hub Club</h1>
          <p className="text-xl text-text-body max-w-3xl mx-auto">
            We help employees get more from the benefits their employer already offers, and we make sure good work gets noticed along the way.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-text-body mb-4">
              Employers put real thought into the benefits they offer, yet many of those benefits go unused. Deadlines get missed, enrollment windows close, and helpful programs like wellness screenings or the Employee Assistance Program stay unfamiliar.
            </p>
            <p className="text-lg text-text-body mb-4">
              Recognition matters just as much. When teams feel seen, with a shout-out from a peer, a note from a manager or a celebration on a work anniversary, they stay motivated and connected.
            </p>
            <p className="text-lg text-text-body">
              Boost Hub Club brings the two together. Employers provide it, employees use it, and everyone gets more from the benefits already in place while celebrating each other&apos;s wins.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="space-y-6">
              {principles.map((item) => (
                <div key={item.title} className="flex items-start">
                  <div className="shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">{item.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-card border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Boost Hub Club Offers</h2>
            <p className="text-xl text-text-body">
              A program your employer provides to help you use your benefits and celebrate your team
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offers.map((item) => (
              <div key={item.title} className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-text-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Get More From Your Benefits?</h2>
          <p className="text-xl text-text-body mb-8 max-w-2xl mx-auto">
            Sign up with the Company ID from your employer and join your team on Boost Hub Club.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-primary text-background text-lg font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-lg"
          >
            Employee Sign Up
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
