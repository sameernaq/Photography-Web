import { PackageTier, PackageAddon } from '../types';

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: 'heritage-intimate',
    name: 'The Heritage',
    tagline: 'Refined single-day celebration with timeless essentials',
    price: '$3,800',
    numericPrice: 3800,
    duration: 'Up to 8 Hours Coverage',
    crew: '1 Lead Cinematographer & 1 Master Photographer',
    deliverables: [
      '3-4 Minute 4K Cinematic Highlight Film',
      'Full Ceremony & Speeches Audio Edit',
      '450+ Hand-Retouched High-Resolution Stills',
      'Online Private Cloud Gallery (10-Year Hosting)',
    ],
    inclusions: [
      'Pre-wedding consultation & timeline planning',
      'Color graded in signature warm film tones',
      'Full personal printing rights',
      'Sneak peek gallery within 72 hours',
    ],
  },
  {
    id: 'cinematic-signature',
    name: 'The Royal Heritage',
    tagline: 'Our signature cinematic experience for grand celebrations',
    price: '$6,500',
    numericPrice: 6500,
    featured: true,
    duration: 'Full Day (Up to 14 Hours Coverage)',
    crew: '2 Senior Cinematographers + 2 Master Photographers + Drone Pilot',
    deliverables: [
      '5-7 Minute 4K Cinema Highlight Film',
      '15-20 Minute Extended Director’s Cut Feature',
      '750+ Master Color-Graded Stills',
      '4K Aerial Drone Cinematography & Landscape Establishing Shots',
      'Full Speeches & Ceremony Multi-Cam Edit',
    ],
    inclusions: [
      'Pre-wedding editorial couple session',
      'Handcrafted 12x12 Italian Fine Leather Album (40 Pages)',
      'Custom engraved crystal & walnut USB presentation box',
      'Same-week cinematic teaser reel for social media',
      'Direct creative direction by Abdullah Anees',
    ],
  },
  {
    id: 'grandeur-destination',
    name: 'The Imperial Bespoke',
    tagline: 'Multi-day luxury celebration and destination weddings worldwide',
    price: '$11,500',
    numericPrice: 11500,
    duration: '3 Full Days Multi-Event Coverage',
    crew: 'Full Cinema Unit (3 Cinematographers + 2 Photographers + Aerial Director)',
    deliverables: [
      '8-10 Minute Cinematic Masterpiece Wedding Film',
      '30-40 Minute Archival Documentary Feature',
      '1,400+ Curated Fine Art Archival Stills',
      'Same-Day-Edit (SDE) Film screened at the grand reception',
      'Two 12x12 Heirloom Albums for Couple & Parents',
    ],
    inclusions: [
      'Welcome dinner & rehearsal party coverage',
      'All domestic & regional travel included',
      'RAW archival hard drive backup delivered',
      'Dedicated post-production concierge manager',
      'Exclusive priority delivery in 3 weeks',
    ],
  },
];

export const PACKAGE_ADDONS: PackageAddon[] = [
  {
    id: 'sde-film',
    name: 'Same-Day-Edit (SDE) Film Screened at Reception',
    price: 950,
    description: 'A 2-3 minute cinematic film edited live on-site to surprise your guests during the dinner reception.',
  },
  {
    id: 'aerial-drone',
    name: '4K Aerial Drone Cinematography (Licensed Pilot)',
    price: 600,
    description: 'Dramatic bird’s-eye perspective capturing grand architectural venues and scenic terrain.',
  },
  {
    id: 'leather-album',
    name: 'Handcrafted Italian Fine Leather Album (40 Pages)',
    price: 750,
    description: 'Flush-mount archival photographic paper encased in hand-stitched Tuscan leather with custom embossing.',
  },
  {
    id: 'raw-footage',
    name: 'Full Uncut RAW Footage & Master Hard Drive',
    price: 500,
    description: 'Delivery of all unedited 8K/4K footage and original sound tracks on an encrypted SSD drive.',
  },
  {
    id: 'pre-wedding-shoot',
    name: 'Pre-Wedding Sunset Editorial Session (3 Hours)',
    price: 850,
    description: 'A relaxed, styled couple session at a dramatic landscape or historical landmark prior to wedding days.',
  },
];
