import { PortfolioItem } from '../types';

import heroReelImg from '../assets/images/hero_cinematic_reel_1790450544548.jpg';
import weddingLuxeImg from '../assets/images/portfolio_wedding_luxe_1790450558803.jpg';
import editorialCoutureImg from '../assets/images/portfolio_editorial_couture_1790450571851.jpg';
import commercialBrandImg from '../assets/images/portfolio_commercial_brand_1790450584011.jpg';
import aboutCraftImg from '../assets/images/about_abdullah_craft_1790450595436.jpg';

export { heroReelImg, weddingLuxeImg, editorialCoutureImg, commercialBrandImg, aboutCraftImg };

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'luxe-palace-wedding',
    title: 'The Royal Courtyard Vows',
    category: 'Weddings',
    categoryLabel: 'Heritage Wedding Film & Stills',
    image: weddingLuxeImg,
    location: 'Lahore Fort Heritage Courtyard',
    year: '2025',
    aspectRatio: 'landscape',
    description: 'An ethereal twilight celebration documented through 35mm anamorphic cinema lenses and medium-format archival stills. Lit purely by 800 flickering wax candles and the soft blue hour sky.',
    client: 'Alizeh & Shahmeer',
    exif: {
      camera: 'Hasselblad H6D-100c',
      lens: 'HC 80mm f/2.2',
      focalLength: '80mm',
      aperture: 'f/2.4',
      shutter: '1/250s',
      iso: '400',
    },
  },
  {
    id: 'editorial-sculpture-couture',
    title: 'Silhouettes in Chiaroscuro',
    category: 'Fashion',
    categoryLabel: 'High-Fashion Editorial',
    image: editorialCoutureImg,
    location: 'Studio Atelier 04, Milan',
    year: '2025',
    aspectRatio: 'portrait',
    description: 'An exploration of architectural drapery and human form. Commissioned for the Autumn/Winter Couture campaign, celebrating dramatic light sculpting and tactile fabric dynamics.',
    client: 'Maison Noir Couture',
    exif: {
      camera: 'Leica S3 Medium Format',
      lens: 'Summarit-S 70mm f/2.5 ASPH',
      focalLength: '70mm',
      aperture: 'f/4.0',
      shutter: '1/160s',
      iso: '100',
    },
  },
  {
    id: 'cinematic-reel-terrace',
    title: 'Golden Hour Symphony',
    category: 'Films',
    categoryLabel: 'Director’s Cut Cinema',
    image: heroReelImg,
    location: 'Amalfi Coast, Italy',
    year: '2025',
    aspectRatio: 'wide',
    description: 'Shot on RED V-Raptor 8K with Cooke Anamorphic/i Full Frame Plus lenses. Capturing the fleeting warmth of Mediterranean dusk and candid romance across timeless coastal cliffs.',
    client: 'International Cinema Showcase',
    exif: {
      camera: 'RED V-Raptor 8K VV',
      lens: 'Cooke Anamorphic /i 50mm T2.3',
      focalLength: '50mm Anamorphic',
      aperture: 'T2.8',
      shutter: '1/48s (180°)',
      iso: '800',
    },
  },
  {
    id: 'commercial-horology-craft',
    title: 'Chronicles of Precision',
    category: 'Commercial',
    categoryLabel: 'Luxury Brand Campaign',
    image: commercialBrandImg,
    location: 'Geneva, Switzerland',
    year: '2024',
    aspectRatio: 'landscape',
    description: 'A sensory brand narrative celebrating heirloom master watchmakers. Rich directional chiaroscuro, macro mechanical movements, and the quiet dignity of timeless craftsmanship.',
    client: 'Vanguard Horlogerie',
    exif: {
      camera: 'ARRI Alexa Mini LF',
      lens: 'ARRI Master Macro 100mm T2.0',
      focalLength: '100mm Macro',
      aperture: 'T3.2',
      shutter: '1/50s',
      iso: '800',
    },
  },
  {
    id: 'portraits-analog-craft',
    title: 'The Director’s Archive',
    category: 'Portraits',
    categoryLabel: 'Artist Monograph',
    image: aboutCraftImg,
    location: 'Studio Darkroom & Archive, London',
    year: '2024',
    aspectRatio: 'landscape',
    description: 'A contemplative self-reflection on the tangibility of celluloid negatives and the eternal patience required to curate light and shadow in an era of fleeting digital noise.',
    client: 'Personal Exhibition Series',
    exif: {
      camera: 'Mamiya RZ67 Pro II',
      lens: 'Sekor 110mm f/2.8 W',
      focalLength: '110mm',
      aperture: 'f/2.8',
      shutter: '1/125s',
      iso: '160',
    },
  },
];
