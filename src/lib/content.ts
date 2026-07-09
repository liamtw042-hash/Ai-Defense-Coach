import type { ComponentType, SVGProps } from 'react'
import {
  IconDiscovery,
  IconBranding,
  IconSearch,
  IconInterview,
  IconTransition,
} from '../components/icons'

/**
 * Single source of truth for site copy and structure. Editing content here
 * updates every page. All names, testimonials and figures are placeholders,
 * written to be replaced — no real individuals or precise statistics are
 * fabricated.
 */

export const nav = [
  { label: 'Our Program', to: '/program' },
  { label: 'Approach', to: '/approach' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
] as const

export type Pillar = {
  no: string
  key: string
  title: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  summary: string
  detail: string
  points: string[]
}

export const pillars: Pillar[] = [
  {
    no: '01',
    key: 'discovery',
    title: 'Career Discovery',
    icon: IconDiscovery,
    summary:
      'Understanding who you are beyond your service — your strengths, values and the civilian direction that will genuinely suit you.',
    detail:
      'We begin with clarity. Through structured conversations and considered assessment, we help you translate a career of service into a clear picture of where you want to go — and why. This is the work that makes everything that follows deliberate rather than reactive.',
    points: [
      'Strengths, values and motivations mapping',
      'Translation of military experience into civilian terms',
      'Sector and role exploration aligned to your goals',
      'A written career direction you can act on',
    ],
  },
  {
    no: '02',
    key: 'branding',
    title: 'Professional Branding',
    icon: IconBranding,
    summary:
      'A résumé, LinkedIn presence and personal narrative that speak the language of civilian employers with authority.',
    detail:
      'Employers rarely understand a service record on their own terms. We craft materials that carry the weight of your experience into language hiring managers recognise — a considered résumé, a credible LinkedIn profile, and a personal narrative you can speak to with confidence.',
    points: [
      'Executive-standard résumé and cover letters',
      'LinkedIn profile built for recruiter search',
      'Your professional story, clearly articulated',
      'Positioning tailored to target sectors',
    ],
  },
  {
    no: '03',
    key: 'search',
    title: 'Job Search Support',
    icon: IconSearch,
    summary:
      'Practical, hands-on guidance through the civilian job market — where to look, how to apply, and how to open the right doors.',
    detail:
      'The civilian market runs on conventions that are rarely obvious from the inside of Defence. We work alongside you — identifying the right opportunities, refining applications, and building the professional network that so often matters more than any single advertisement.',
    points: [
      'Targeted opportunity identification',
      'Application strategy and tailoring',
      'Networking and referral approaches',
      'Guidance on recruiters and hidden roles',
    ],
  },
  {
    no: '04',
    key: 'interview',
    title: 'Interview Preparation',
    icon: IconInterview,
    summary:
      'The confidence to walk into any interview and speak to your value in terms a civilian panel will understand and remember.',
    detail:
      'Interviewing is a discipline of its own. We prepare you thoroughly — rehearsing the questions that matter, sharpening how you evidence your impact, and helping you carry the composure of your service into a conversation that feels, to many, entirely foreign at first.',
    points: [
      'Mock interviews with structured feedback',
      'Behavioural and competency question practice',
      'Framing service achievements for civilian panels',
      'Salary and offer negotiation guidance',
    ],
  },
  {
    no: '05',
    key: 'transition',
    title: 'Transition Support',
    icon: IconTransition,
    summary:
      'A steady partnership that continues well past your first day — through the real adjustment of settling into civilian working life.',
    detail:
      'The offer is not the finish line. The first ninety days in a civilian role are where transition is genuinely won or lost, and we stay with you through them — a considered, human point of contact as you find your footing and establish yourself in your new career.',
    points: [
      'Onboarding and first-90-days guidance',
      'Navigating civilian workplace culture',
      'Ongoing check-ins as you establish yourself',
      'A continuing relationship, not a hand-off',
    ],
  },
]

export type Testimonial = {
  quote: string
  initials: string
  attribution: string
  context: string
}

/** Placeholder testimonials — representative, clearly editable, no real names. */
export const testimonials: Testimonial[] = [
  {
    quote:
      'After more than two decades in uniform, I had no idea how to describe what I did in a way a civilian employer would value. They helped me see it clearly — and then helped me say it.',
    initials: 'J.M.',
    attribution: 'Former Warrant Officer',
    context: 'Australian Army · now in operations management',
  },
  {
    quote:
      'It never felt transactional. It felt like someone had genuinely taken the time to understand my situation and was in my corner for the whole journey, not just the résumé.',
    initials: 'S.R.',
    attribution: 'Former Petty Officer',
    context: 'Royal Australian Navy · now in project delivery',
  },
  {
    quote:
      'The interview preparation alone changed everything. I walked in composed, knowing exactly how to speak to my experience. I had two offers within a month.',
    initials: 'D.K.',
    attribution: 'Former Flight Lieutenant',
    context: 'Royal Australian Air Force · now in logistics',
  },
]

export type Insight = {
  category: string
  title: string
  excerpt: string
  readingTime: string
}

/** Placeholder thought-leadership articles. */
export const insights: Insight[] = [
  {
    category: 'Transition Strategy',
    title: 'Translating military experience into language civilian employers value',
    excerpt:
      'A rank and a mustering rarely mean much to a hiring manager. The skill is in translation — carrying the substance of your service into terms the civilian market recognises.',
    readingTime: '6 min read',
  },
  {
    category: 'The Job Market',
    title: 'The hidden job market: why most civilian roles are never advertised',
    excerpt:
      'A large share of good roles are filled before they are ever posted. Understanding how that market actually works is one of the most valuable things a transitioning member can learn.',
    readingTime: '5 min read',
  },
  {
    category: 'Personal Branding',
    title: 'What recruiters actually look for in a veteran’s LinkedIn profile',
    excerpt:
      'LinkedIn is a search engine before it is a network. A profile written for how recruiters search is a quietly powerful asset in a civilian job search.',
    readingTime: '7 min read',
  },
  {
    category: 'Wellbeing',
    title: 'The first ninety days: settling into civilian working life',
    excerpt:
      'The offer is a milestone, not the destination. The genuine work of transition happens in the first quarter of a new role — and it rewards preparation.',
    readingTime: '8 min read',
  },
  {
    category: 'Interviews',
    title: 'Answering “tell me about yourself” when your career was in uniform',
    excerpt:
      'The most common interview question is also the hardest to answer well after a career of service. A clear, practised narrative makes all the difference.',
    readingTime: '5 min read',
  },
  {
    category: 'Families',
    title: 'Transition is a family decision, not just a career one',
    excerpt:
      'Leaving Defence reshapes far more than a job title. Bringing family into the conversation early makes for a steadier, more considered move.',
    readingTime: '6 min read',
  },
]

export type JourneyStep = {
  phase: string
  title: string
  body: string
}

export const journey: JourneyStep[] = [
  {
    phase: 'Before you decide',
    title: 'Thinking about transition',
    body: 'Long before a discharge date, we help you weigh the decision with clarity — exploring what civilian life could hold and what the move would ask of you and your family.',
  },
  {
    phase: 'Planning',
    title: 'Setting your direction',
    body: 'We turn intention into a plan: a clear career direction, a realistic timeline, and the materials and preparation that a considered transition depends on.',
  },
  {
    phase: 'In market',
    title: 'The active search',
    body: 'We work alongside you through applications, networking and interviews — a steady partner keeping the process deliberate rather than overwhelming.',
  },
  {
    phase: 'The offer',
    title: 'Securing the right role',
    body: 'Not just any offer, but the right one. We help you assess opportunities, negotiate with confidence, and step into a role that genuinely fits.',
  },
  {
    phase: 'Establishment',
    title: 'The first ninety days',
    body: 'We stay with you through the real adjustment — the culture, the pace, the unfamiliar rhythms — until you are established and assured in your new career.',
  },
]
