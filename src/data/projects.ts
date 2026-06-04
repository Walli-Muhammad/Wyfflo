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
  features: { title: string; description: string }[];
  techStack: string[];
  timeline: string;
  region: string;
};

export const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  fitness:   '#7C3AED',
  social:    '#7C3AED',
  food:      '#7C3AED',
  emergency: '#7C3AED',
  services:  '#7C3AED',
};

export const projects: Project[] = [
  {
    id: 'pro-workout',
    name: 'PR.O — Workout Tracker',
    tagline: 'Serious analytics for serious lifters.',
    category: 'fitness',
    categoryLabel: 'Fitness & Wellness',
    description:
      'PR.O is built for lifters who have outgrown basic set-and-rep logging. It captures progressive overload, RPE, time under tension, muscle-group distribution, and recovery data — feeding detailed analytics that turn raw workout logs into actionable insight. A performance dashboard for dedicated athletes who treat training as a long-term project.',
    images: [
      '/projects/PRO/icon.png',
      '/projects/PRO/IMG_4797.jpg',
      '/projects/PRO/IMG_4799.jpg',
      '/projects/PRO/IMG_4807.jpg',
      '/projects/PRO/IMG_4808.jpg',
    ],
    links: { playstore: 'https://play.google.com/store/apps/details?id=com.overloadapps.proo', appstore: 'https://apps.apple.com/us/app/pr-o-workout-tracker-gym-log/id6758912247', website: null },
    tags: ['Performance Analytics', 'Strength Training', 'Android', 'iOS'],
    features: [
      { title: 'Set & Rep Logging', description: 'Track every set, rep, and weight with precision.' },
      { title: 'Progressive Overload', description: 'Automatic volume tracking to ensure continuous progress.' },
      { title: 'RPE Tracking', description: 'Rate perceived exertion for smarter programming.' },
      { title: 'Muscle Group Analytics', description: 'Visual breakdown of training distribution.' },
      { title: 'Recovery Insights', description: 'Data-driven recovery recommendations.' },
      { title: 'Personal Records', description: 'Automatic PR detection and celebration.' },
    ],
    techStack: ['Flutter', 'Firebase', 'Dart', 'App Store', 'Google Play'],
    timeline: '5–7 months',
    region: 'Global',
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
      '/projects/Interval weight loss/icon.png',
      '/projects/Interval weight loss/IMG_4848.PNG',
      '/projects/Interval weight loss/IMG_4849.PNG',
      '/projects/Interval weight loss/IMG_4850.PNG',
      '/projects/Interval weight loss/IMG_4851.PNG',
    ],
    links: { playstore: 'https://play.google.com/store/apps/details?id=com.iwl.app', appstore: null, website: 'https://intervalweightloss.com' },
    tags: ['Evidence-Based', 'Nutrition', 'Weight Management', 'Android'],
    features: [
      { title: 'Interval Method', description: 'Clinically informed weight cycling approach.' },
      { title: 'Meal Planning', description: 'Structured plans tailored to your goals.' },
      { title: 'Habit Tracking', description: 'Build and maintain healthy daily habits.' },
      { title: 'Progress Monitoring', description: 'Visual charts and milestone tracking.' },
      { title: 'Educational Content', description: 'Science-backed articles and guidance.' },
      { title: 'Evidence-Based Guidance', description: 'Methods developed at the University of Sydney.' },
    ],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Google Play'],
    timeline: '4–6 months',
    region: 'Australia',
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
      '/projects/healthblocks/icon.png',
      '/projects/healthblocks/IMG_4814.jpg',
      '/projects/healthblocks/IMG_4815.jpg',
      '/projects/healthblocks/IMG_4816.jpg',
      '/projects/healthblocks/IMG_4817.jpg',
    ],
    links: { playstore: 'https://play.google.com/store/apps/details?id=com.app.healthblocks', appstore: 'https://apps.apple.com/nl/app/healthblocks-all-about-health/id6502659174', website: 'https://www.healthblocks.ai' },
    tags: ['Wearables', 'Community', 'Wellness', 'Android', 'iOS'],
    features: [
      { title: 'Wearable Sync', description: 'Connect Fitbit, Apple Watch, and more.' },
      { title: 'Community Challenges', description: 'Compete and collaborate with others.' },
      { title: 'Wellness Insights', description: 'Personalized health recommendations.' },
      { title: 'Privacy Controls', description: 'Full control over your health data.' },
      { title: 'Activity Tracking', description: 'Steps, sleep, heart rate, and more.' },
      { title: 'Personalized Plans', description: 'AI-driven wellness programs.' },
    ],
    techStack: ['Flutter', 'Firebase', 'Wearable APIs', 'App Store', 'Google Play'],
    timeline: '6–8 months',
    region: 'Global',
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
      '/projects/Beyond body/icon.png',
      '/projects/Beyond body/0109cbfc-6062-44c1-8c8e-5afca452cec9.jpg',
      '/projects/Beyond body/5f2a22ff-dec6-4597-8ed8-fe4764c4f4f2.jpg',
      '/projects/Beyond body/6b55a5dd-6018-4f5b-9f44-772598f269d4.jpg',
      '/projects/Beyond body/7af030b1-bd42-4a9b-a1aa-b52855f52c9a.jpg',
    ],
    links: { playstore: 'https://play.google.com/store/apps/details?id=com.kilogroup.fastingplan', appstore: null, website: 'https://woman.beyondbody.me' },
    tags: ['Intermittent Fasting', 'Holistic Wellness', 'Android', 'iOS'],
    features: [
      { title: 'Fasting Schedules', description: 'Multiple fasting protocols to choose from.' },
      { title: 'Nutrition Tracking', description: 'Log meals and track macros effortlessly.' },
      { title: 'Recipe Library', description: 'Hundreds of healthy, curated recipes.' },
      { title: 'Workout Plans', description: 'Exercise routines that complement fasting.' },
      { title: 'Mood Tracking', description: 'Monitor emotional wellness alongside physical.' },
      { title: 'Daily Challenges', description: 'Stay motivated with fresh daily goals.' },
    ],
    techStack: ['React Native', 'Firebase', 'Node.js', 'Google Play'],
    timeline: '5–7 months',
    region: 'Global',
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
      '/projects/near circle/icon.png',
      '/projects/near circle/IMG_4841.JPG',
      '/projects/near circle/IMG_4842.JPG',
      '/projects/near circle/IMG_4843.JPG',
      '/projects/near circle/IMG_4844.JPG',
    ],
    links: { playstore: 'https://play.google.com/store/apps/details?id=com.pillarsis.nearcircle', appstore: null, website: 'https://nearcircl.com' },
    tags: ['Location-Based', 'Anonymous', 'Community', 'Android'],
    features: [
      { title: 'Anonymous Posting', description: 'Share thoughts without revealing identity.' },
      { title: 'Location-Based Feed', description: 'See what\'s happening around you.' },
      { title: 'Neighborhood Q&A', description: 'Ask and answer local questions.' },
      { title: 'Local Polls', description: 'Create polls for community input.' },
      { title: 'Community Updates', description: 'Stay informed about local events.' },
      { title: 'Privacy First', description: 'No public profiles or tracking.' },
    ],
    techStack: ['Flutter', 'Firebase', 'Google Maps API', 'Google Play'],
    timeline: '4–6 months',
    region: 'US',
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
      '/projects/hoyzee/icon.png',
      '/projects/hoyzee/IMG_4822.jpg',
      '/projects/hoyzee/IMG_4824.jpg',
      '/projects/hoyzee/IMG_4825.jpg',
      '/projects/hoyzee/IMG_4826.jpg',
    ],
    links: { playstore: 'https://play.google.com/store/apps/details?id=com.hozyee_app.hoyzee', appstore: 'https://apps.apple.com/us/app/hoyzee/id1540325360', website: null },
    tags: ['Live Map', 'Food Discovery', 'Local', 'Android', 'iOS'],
    features: [
      { title: 'Live Vendor Map', description: 'See food trucks on a real-time map.' },
      { title: 'Real-Time Location', description: 'GPS-powered vendor tracking.' },
      { title: 'Food Truck Discovery', description: 'Browse menus and reviews.' },
      { title: 'Vendor Profiles', description: 'Detailed pages for each vendor.' },
      { title: 'Search & Filter', description: 'Find by cuisine, distance, or rating.' },
      { title: 'Notifications', description: 'Alerts when favorites are nearby.' },
    ],
    techStack: ['React Native', 'Node.js', 'Google Maps API', 'App Store', 'Google Play'],
    timeline: '5–7 months',
    region: 'US',
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
      '/projects/Rural Response/icon.png',
      '/projects/Rural Response/IMG_4829.PNG',
      '/projects/Rural Response/IMG_4830.PNG',
      '/projects/Rural Response/IMG_4831.PNG',
      '/projects/Rural Response/IMG_4832.PNG',
    ],
    links: { playstore: 'https://play.google.com/store/apps/details?id=com.rural.ruralresponse', appstore: null, website: 'https://rural-response.com' },
    tags: ['Emergency Alerts', 'Community Safety', 'Rural', 'Android'],
    features: [
      { title: 'Emergency Alerts', description: 'One-tap SOS to nearby community.' },
      { title: 'Community Responders', description: 'Mobilize trained local volunteers.' },
      { title: 'Location Sharing', description: 'Real-time GPS for responders.' },
      { title: 'Offline Support', description: 'Works in low-connectivity areas.' },
      { title: 'Quick SOS', description: 'Emergency button on lock screen.' },
      { title: 'Response Tracking', description: 'Monitor help en route in real time.' },
    ],
    techStack: ['Flutter', 'Firebase', 'Push Notifications', 'Google Play'],
    timeline: '4–6 months',
    region: 'UK',
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
      '/projects/Jacobs Dry Cleaner/icon.png',
      '/projects/Jacobs Dry Cleaner/IMG_4837.jpg',
      '/projects/Jacobs Dry Cleaner/IMG_4838.jpg',
      '/projects/Jacobs Dry Cleaner/IMG_4839.jpg',
      '/projects/Jacobs Dry Cleaner/IMG_4840.jpg',
    ],
    links: { playstore: 'https://play.google.com/store/apps/details?id=com.jacobsdrycleaners.jacobsapp', appstore: 'https://apps.apple.com/us/app/jacobs-dry-cleaners/id6468426753', website: null },
    tags: ['On-Demand', 'Local Services', 'Android', 'iOS'],
    features: [
      { title: 'Order Placement', description: 'Place orders in just a few taps.' },
      { title: 'Collection Scheduling', description: 'Pick a convenient collection time.' },
      { title: 'Doorstep Delivery', description: 'Clean garments delivered to your door.' },
      { title: 'Order Tracking', description: 'Real-time status updates on your order.' },
      { title: 'Garment Management', description: 'Save preferences for repeat orders.' },
      { title: 'Push Notifications', description: 'Updates on collection and delivery.' },
    ],
    techStack: ['Flutter', 'Firebase', 'Stripe', 'App Store', 'Google Play'],
    timeline: '3–5 months',
    region: 'UK',
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
