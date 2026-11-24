import Link from 'next/link';
import { Star } from 'lucide-react';
import SiteShell from './SiteShell';
import { DISCLAIMER } from './siteText';
import { highlights, features } from './homeData';
import { HowItWorks, Audiences, WhyEmployeesLove } from './HomeSections';

export default function HomePage() {
  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center bg-primary text-background px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Star className="w-4 h-4 mr-2" />
            Supercharge Your Employee Benefits
          </div>
          <h1 className="text-5xl/tight font-extrabold text-foreground sm:text-6xl/tight md:text-7xl/tight">
            Get more from your benefits
            <span className="block text-primary">and get recognized for your wins</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-text-body">
            Boost Hub Club is the program your employer provides to help you use the benefits you already have, and to celebrate the great work you and your team do along the way.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-primary text-background text-lg font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-md"
            >
              Employee Sign Up
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-card text-foreground text-lg font-semibold rounded-lg hover:border-accent transition-colors border-2 border-border"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-card border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {highlights.map((item) => (
              <div key={item.title}>
                <div className="flex justify-center mb-3">{item.icon}</div>
                <p className="text-lg font-bold text-foreground">{item.title}</p>
                <p className="text-text-body mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground">Everything You Need to Make the Most of Your Benefits</h2>
          <p className="mt-4 text-xl text-text-body">
            Benefits engagement and recognition, together in one employer-provided program
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div key={item.title} className="bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">{item.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-foreground text-center mb-3">{item.title}</h3>
              <p className="text-text-body text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <HowItWorks />
      <Audiences />
      <WhyEmployeesLove />

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Get More From Your Benefits?</h2>
            <p className="text-xl text-text-body mb-8 max-w-2xl mx-auto">
              Sign up with the Company ID your employer gave you, and start finding the benefits and celebrations that are already waiting for you.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-primary text-background text-lg font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-lg"
            >
              Employee Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <p className="text-sm text-text-muted text-center">{DISCLAIMER}</p>
      </section>
    </SiteShell>
  );
}
