export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Fashion' | 'Films' | 'Commercial' | 'Portraits';
  categoryLabel: string;
  image: string;
  location: string;
  year: string;
  aspectRatio: 'landscape' | 'portrait' | 'wide' | 'square';
  description: string;
  client?: string;
  exif: {
    camera: string;
    lens: string;
    focalLength: string;
    aperture: string;
    shutter: string;
    iso: string;
  };
  filmSnippetUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  editorialNumber: string;
  description: string;
  turnaround: string;
  equipment: string[];
  deliverables: string[];
  highlight: string;
  idealFor: string;
}

export interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  numericPrice: number;
  featured?: boolean;
  duration: string;
  crew: string;
  deliverables: string[];
  inclusions: string[];
}

export interface PackageAddon {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientNames: string;
  eventDetails: string;
  location: string;
  year: string;
  rating: number;
  highlightPhrase: string;
}
