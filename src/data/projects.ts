export type ProjectCategory = 'fitness' | 'social' | 'food' | 'emergency' | 'services';

export type Project = {
  id: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  images: string[];
  links: {
    playstore: string | null;
    appstore: string | null;
    website: string | null;
  };
  tags: string[];
};

export const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  fitness:   '#00f5ff',
  social:    '#00ff88',
  food:      '#ffb800',
  emergency: '#ff4444',
  services:  '#b44dff',
};

const CDN = 'https://res.cloudinary.com/dab60aiwe/image/upload/w_400,f_auto,q_auto';

export function cdnUrl(path: string) {
  return `${CDN}/${path}`;
}

export const projects: Project[] = [
  {
    id: 'habitails',
    name: 'Habitails',
    tagline: 'Self-improvement, gamified.',
    category: 'fitness',
    categoryLabel: 'Fitness & Wellness',
    description:
      'Habitails reimagines the habit tracker as a game worth coming back to every day. Each completed habit grows a virtual pet, creating an emotionally rewarding feedback loop. Pairs gamification with serious wellness tools — productivity, calories, water intake, and focus sessions — turning daily self-improvement into an experience that feels less like discipline and more like play.',
    images: [
      'wyfflo/projects/habitails/icon',
      'wyfflo/projects/habitails/screen-1',
      'wyfflo/projects/habitails/screen-2',
      'wyfflo/projects/habitails/screen-3',
    ],
    links: { playstore: null, appstore: null, website: null },
    tags: ['Gamification', 'Habit Tracking', 'Wellness', 'Android'],
  },
  {
    id: 'pro-workout',
    name: 'PR.O — Workout Tracker',
    tagline: 'Serious analytics for serious lifters.',
    category: 'fitness',
    categoryLabel: 'Fitness & Wellness',
    description:
      'PR.O is built for lifters who have outgrown basic set-and-rep logging. It captures progressive overload, RPE, time under tension, muscle-group distribution, and recovery data — feeding detailed analytics that turn raw workout logs into actionable insight. A performance dashboard for dedicated athletes who treat training as a long-term project.',
    images: [
      'wyfflo/projects/pro-workout/icon',
      'wyfflo/projects/pro-workout/screen-1',
      'wyfflo/projects/pro-workout/screen-2',
      'wyfflo/projects/pro-workout/screen-3',
    ],
    links: { playstore: null, appstore: null, website: null },
    tags: ['Performance Analytics', 'Strength Training', 'Android', 'iOS'],
  },
  {
    id: 'lift4fit',
    name: 'Lift4Fit',
    tagline: 'Structured strength training, no account required.',
    category: 'fitness',
    categoryLabel: 'Fitness & Wellness',
    description:
      'A privacy-first strength training app with a refreshingly simple premise — start training immediately, no account needed. Ships with ready-made programs and supports fully custom workout creation. Smart automatic progression, warm-up calculations, and personal-record tracking give serious functionality without compromising user data.',
    images: [
      'wyfflo/projects/lift4fit/icon',
      'wyfflo/projects/lift4fit/screen-1',
      'wyfflo/projects/lift4fit/screen-2',
      'wyfflo/projects/lift4fit/screen-3',
    ],
    links: { playstore: null, appstore: null, website: null },
    tags: ['Privacy-First', 'Strength Training', 'Android', 'iOS'],
  },
  {
    id: 'interval-weight-loss',
    name: 'Interval Weight Loss',
    tagline: 'Science-backed, sustainable weight management.',
    category: 'fitness',
    categoryLabel: 'Fitness & Wellness',
    description:
      'Grounded in a clinically informed method developed at the University of Sydney, Interval Weight Loss is built around lasting results rather than rapid, unsustainable change. Habit tracking, structured meal plans, educational content, and progress monitoring combine to make healthy habits permanent — not temporary sacrifices.',
    images: [
      'wyfflo/projects/interval-weight-loss/icon',
      'wyfflo/projects/interval-weight-loss/screen-1',
      'wyfflo/projects/interval-weight-loss/screen-2',
      'wyfflo/projects/interval-weight-loss/screen-3',
    ],
    links: { playstore: null, appstore: null, website: null },
    tags: ['Evidence-Based', 'Nutrition', 'Weight Management', 'Android'],
  },
  {
    id: 'healthblocks',
    name: 'HealthBlocks',
    tagline: 'Healthier habits, rewarded.',
    category: 'fitness',
    categoryLabel: 'Fitness & Wellness',
    description:
      'A digital health platform that makes healthy living engaging rather than obligatory. Connects with wearables to sync activity data, layers community challenges on top, and delivers personalized wellness insights — all with user privacy kept firmly in focus. A complete ecosystem for building habits that stick beyond the initial burst of enthusiasm.',
    images: [
      'wyfflo/projects/healthblocks/icon',
      'wyfflo/projects/healthblocks/screen-1',
      'wyfflo/projects/healthblocks/screen-2',
      'wyfflo/projects/healthblocks/screen-3',
    ],
    links: { playstore: null, appstore: null, website: null },
    tags: ['Wearables', 'Community', 'Wellness', 'Android', 'iOS'],
  },
  {
    id: 'beyond-body',
    name: 'Beyond Body',
    tagline: 'Personalized intermittent fasting, made simple.',
    category: 'fitness',
    categoryLabel: 'Fitness & Wellness',
    description:
      'Beyond Body treats fasting not as an isolated practice but as one piece of a complete wellness routine — coordinating fasting schedules, nutrition, workouts, water intake, and mood tracking in one cohesive experience. Guided personalized plans, recipe libraries, daily challenges, and educational content make intermittent fasting a sustainable lifestyle.',
    images: [
      'wyfflo/projects/beyond-body/icon',
      'wyfflo/projects/beyond-body/screen-1',
      'wyfflo/projects/beyond-body/screen-2',
      'wyfflo/projects/beyond-body/screen-3',
    ],
    links: { playstore: null, appstore: null, website: null },
    tags: ['Intermittent Fasting', 'Holistic Wellness', 'Android', 'iOS'],
  },
  {
    id: 'nearcircle',
    name: 'NearCircle',
    tagline: 'Your local community, anonymously connected.',
    category: 'social',
    categoryLabel: 'Social & Community',
    description:
      'A location-based, anonymous social platform that reconnects people with the community physically surrounding them. Ask questions, share local recommendations, post neighborhood updates, and create polls — all without a public identity. NearCircle creates a network rooted in place rather than personality, lowering barriers to genuine local conversation.',
    images: [
      'wyfflo/projects/nearcircle/icon',
      'wyfflo/projects/nearcircle/screen-1',
      'wyfflo/projects/nearcircle/screen-2',
      'wyfflo/projects/nearcircle/screen-3',
    ],
    links: { playstore: null, appstore: null, website: null },
    tags: ['Location-Based', 'Anonymous', 'Community', 'Android'],
  },
  {
    id: 'vibe',
    name: 'Vibe — Social Map',
    tagline: 'Find your people and your plans, in real time.',
    category: 'social',
    categoryLabel: 'Social & Community',
    description:
      'A social discovery app built to solve what traditional social media ignores — actually meeting people in the real world, right now. A live map shows activities and plans happening nearby. Join plans, create your own events, and connect through direct messages and group chats. A genuine social discovery engine that turns idle time into shared experiences.',
    images: [
      'wyfflo/projects/vibe/icon',
      'wyfflo/projects/vibe/screen-1',
      'wyfflo/projects/vibe/screen-2',
      'wyfflo/projects/vibe/screen-3',
    ],
    links: { playstore: null, appstore: null, website: null },
    tags: ['Real-Time', 'Social Discovery', 'Live Map', 'Android', 'iOS'],
  },
  {
    id: 'hoyzee',
    name: 'Hoyzee',
    tagline: 'Find the food trucks near you, live.',
    category: 'food',
    categoryLabel: 'Food Discovery',
    description:
      'A food-truck discovery app that bridges a persistent gap in the local food scene — food trucks move, and their fans have no reliable way to find them. A live map displays vendor locations in real time for diners, while giving vendors a dependable channel to reach nearby customers wherever they set up. Both sides of the transaction, solved at once.',
    images: [
      'wyfflo/projects/hoyzee/icon',
      'wyfflo/projects/hoyzee/screen-1',
      'wyfflo/projects/hoyzee/screen-2',
      'wyfflo/projects/hoyzee/screen-3',
    ],
    links: { playstore: null, appstore: null, website: null },
    tags: ['Live Map', 'Food Discovery', 'Local', 'Android', 'iOS'],
  },
  {
    id: 'rural-response',
    name: 'Rural Response',
    tagline: 'Community-powered emergency help where services are scarce.',
    category: 'emergency',
    categoryLabel: 'Emergency & Safety',
    description:
      'An emergency alert app built for a life-or-death reality of rural living — professional services can be far away, and the minutes before help arrives are critical. Rural Response lets users instantly alert nearby community members, mobilizing local responders in the window before official help can reach the scene. A community-driven safety net for remote areas.',
    images: [
      'wyfflo/projects/rural-response/icon',
      'wyfflo/projects/rural-response/screen-1',
      'wyfflo/projects/rural-response/screen-2',
      'wyfflo/projects/rural-response/screen-3',
    ],
    links: { playstore: null, appstore: null, website: null },
    tags: ['Emergency Alerts', 'Community Safety', 'Rural', 'Android'],
  },
  {
    id: 'jacobs-dry-cleaners',
    name: 'Jacobs Dry Cleaners',
    tagline: 'Doorstep dry cleaning across North London.',
    category: 'services',
    categoryLabel: 'On-Demand Services',
    description:
      'An on-demand dry cleaning and laundry app that brings a traditionally in-person service fully into the digital age for customers in St Albans and North London. Place an order, schedule a collection, and have freshly cleaned garments delivered back to your doorstep — collapsing a multi-step errand into a few taps. A smart modernization of a trusted local business.',
    images: [
      'wyfflo/projects/jacobs-dry-cleaners/icon',
      'wyfflo/projects/jacobs-dry-cleaners/screen-1',
      'wyfflo/projects/jacobs-dry-cleaners/screen-2',
      'wyfflo/projects/jacobs-dry-cleaners/screen-3',
    ],
    links: { playstore: null, appstore: null, website: null },
    tags: ['On-Demand', 'Local Services', 'Android', 'iOS'],
  },
];

export const categories = [
  { id: 'all',       label: 'All Projects' },
  { id: 'fitness',   label: 'Fitness & Wellness' },
  { id: 'social',    label: 'Social & Community' },
  { id: 'food',      label: 'Food Discovery' },
  { id: 'emergency', label: 'Emergency & Safety' },
  { id: 'services',  label: 'On-Demand Services' },
] as const;
