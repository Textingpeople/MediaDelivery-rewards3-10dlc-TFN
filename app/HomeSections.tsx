import { BadgeCheck, Heart, TrendingUp, Cake } from 'lucide-react';
import { steps, audiences, loves } from './homeData';

export function HowItWorks() {
  const mock = [
    { icon: <BadgeCheck className="w-8 h-8 text-primary mr-3" />, title: 'Wellness Checklist Badge', sub: 'Member of the Operations team', tag: 'New badge' },
    { icon: <Heart className="w-8 h-8 text-primary mr-3" />, title: 'Peer Shout-Out', sub: 'From a teammate: "Great teamwork on the launch"', tag: 'Shout-out' },
    { icon: <TrendingUp className="w-8 h-8 text-primary mr-3" />, title: "This Month's Boost", sub: 'Wellness checklist, across all teams', tag: 'In progress' },
    { icon: <Cake className="w-8 h-8 text-primary mr-3" />, title: 'Work Anniversary', sub: 'Celebrated by a manager and team', tag: 'Celebrate' },
  ];

  return (
    <section className="bg-card border-y border-border py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground">How Boost Hub Club Works</h2>
          <p className="mt-4 text-xl text-text-body">Simple steps, shared by your whole team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={step.title} className="flex items-start">
                <div className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-background text-lg mr-6">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-lg/relaxed text-text-body">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-background border border-border rounded-2xl p-10">
            <div className="space-y-6">
              {mock.map((row) => (
                <div key={row.title} className="flex items-center justify-between bg-card border border-border rounded-xl p-4">
                  <div className="flex items-center">
                    {row.icon}
                    <div>
                      <p className="font-semibold text-foreground">{row.title}</p>
                      <p className="text-text-muted text-sm">{row.sub}</p>
                    </div>
                  </div>
                  <span className="text-accent font-bold text-sm ml-3">{row.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Audiences() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground">Built for Every Workplace</h2>
        <p className="mt-4 text-xl text-text-body">
          Whether your team is small or spread across many locations, Boost Hub Club fits in
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {audiences.map((card) => (
          <div
            key={card.title}
            className={`bg-card border-2 rounded-xl p-8 transition-colors hover:border-primary ${
              card.highlight ? 'border-primary' : 'border-border'
            }`}
          >
            <h3 className="text-xl font-bold text-foreground mb-4">{card.title}</h3>
            <p className="text-text-body mb-6">{card.desc}</p>
            <ul className="space-y-2 text-text-body">
              {card.items.map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhyEmployeesLove() {
  return (
    <section className="bg-card border-y border-border py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground">Why Employees Love Boost Hub Club</h2>
          <p className="mt-4 text-xl text-text-body">Benefits made simpler, and good work made visible</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loves.map((item) => (
            <div key={item.title} className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-text-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
