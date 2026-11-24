import type { ReactNode } from 'react';
import { Bell, Lightbulb, Heart, Flag, BarChart3, Users, BadgeCheck, ListChecks, CheckCircle, TrendingUp } from 'lucide-react';

type Card = { icon: ReactNode; title: string; desc: string };

export const highlights: Card[] = [
  { icon: <Bell className="w-7 h-7 text-primary" />, title: 'Benefits Boosts', desc: 'Reminders and quick checklists for the benefits your employer already offers.' },
  { icon: <Lightbulb className="w-7 h-7 text-primary" />, title: 'Benefits Spotlights', desc: 'A short monthly explainer on one benefit at a time.' },
  { icon: <Heart className="w-7 h-7 text-primary" />, title: 'Shout-Outs', desc: 'Peer and manager recognition, plus birthday and work-anniversary celebrations.' },
  { icon: <Flag className="w-7 h-7 text-primary" />, title: 'Team Challenges', desc: 'Monthly team goals you reach together.' },
];

export const features: Card[] = [
  {
    icon: <ListChecks className="w-8 h-8 text-background" />,
    title: 'Benefits Boosts',
    desc: 'Friendly reminders and quick checklists help you use the benefits your employer already offers, from open enrollment and wellness screenings to the EAP, retirement plan enrollment and learning benefits.',
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-background" />,
    title: 'Recognition & Badges',
    desc: 'Peer and manager shout-outs, birthday and work-anniversary celebrations, and badges for milestones and completed benefits checklists.',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-background" />,
    title: 'Employer Dashboard',
    desc: 'Employers see benefits participation and recognition activity in one place. Everything is anonymous and aggregate, never individual.',
  },
];

export const steps = [
  { title: 'Your employer launches a boost', desc: 'Your employer picks a benefit to highlight, such as open enrollment or a wellness screening, and starts a boost for the team.' },
  { title: 'You complete quick checklists', desc: 'Short, simple checklists walk you through what to do and when, so nothing slips past a deadline.' },
  { title: 'Your team celebrates wins', desc: 'Shout-outs from peers and managers, anniversary and birthday celebrations, and badges for completed checklists keep good work visible.' },
  { title: 'Everyone gets more from their benefits', desc: 'With clear reminders and a little recognition along the way, more people use what is already available to them.' },
];

export const audiences = [
  {
    title: 'Small & Mid-Size Teams',
    desc: 'Build a supportive culture from day one. Celebrate wins, mark milestones and help everyone find their benefits as the team grows.',
    items: ['Easy onboarding', 'Peer-to-peer shout-outs', 'Birthday & work anniversary celebrations'],
    highlight: false,
  },
  {
    title: 'Larger Organizations',
    desc: 'Keep departments, locations and remote teams on the same page with one consistent way to learn about benefits and recognize great work.',
    items: ['Multi-department support', 'Manager-led recognition', 'Anonymous, aggregate dashboard'],
    highlight: true,
  },
  {
    title: 'Remote & Hybrid Teams',
    desc: 'Keep distributed teams connected. Digital shout-outs and reminders reach everyone, wherever they work.',
    items: ['Virtual shout-outs & badges', 'SMS & email notifications', 'Monthly team challenges'],
    highlight: false,
  },
];

export const loves: Card[] = [
  { icon: <CheckCircle className="w-7 h-7 text-background" />, title: 'Helpful Reminders', desc: 'Know what to do and when, with quick checklists for the benefits you already have.' },
  { icon: <BadgeCheck className="w-7 h-7 text-background" />, title: 'Timely Recognition', desc: 'Get recognized when you do something great, not months later at an annual review.' },
  { icon: <Users className="w-7 h-7 text-background" />, title: 'Team Connection', desc: 'Celebrate wins together. Peer shout-outs build stronger bonds and a more supportive culture.' },
  { icon: <TrendingUp className="w-7 h-7 text-background" />, title: 'Your Milestones', desc: 'Collect badges as you finish checklists and reach milestones, and look back on them anytime.' },
];
