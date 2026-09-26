import React, { useState } from 'react';
import { Maximize2, Camera, MapPin, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { Lightbox } from './Lightbox';

interface PortfolioProps {
  onOpenBooking: () => void;
}

type FilterCategory = 'All' | 'Weddings' | 'Fashion' | 'Films' | 'Commercial' | 'Portraits';

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  const filterTabs: FilterCategory[] = ['All', 'Weddings', 'Fashion', 'Films', 'Commercial', 'Portraits'];

  const filteredItems = activeFilter === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#09090b] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#e2b77a] font-medium font-sans-clean">
              Selected Works & Archives
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white text-balance leading-tight">
              An Ode to Light, Shadow, <br />
              <span className="italic font-light text-zinc-300">& Timeless Sentiment</span>
            </h2>
          </div>

          {/* Interactive Filter Tabs (Segmented Control Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-xl">
            {filterTabs.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded-lg transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e2b77a] ${
                  activeFilter === cat
                    ? 'bg-[#e2b77a] text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Media-First Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isFeatured = index === 0; // First item gets featured bento sizing on larger screens
            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-[#e2b77a]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isFeatured ? 'lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Visual Frame */}
                <div className={`relative overflow-hidden bg-zinc-950 ${isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Overlay Quick-Action Affordance */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-[#e2b77a] group-hover:text-zinc-950 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Unboxed Metadata & Title Footer */}
                <div className="p-5 space-y-2 bg-zinc-950/80">
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-sans-clean">
                    <span className="text-[#e2b77a] font-medium">{item.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      {item.location}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{item.year}</span>
                  </div>

                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-white group-hover:text-[#e2b77a] transition-colors">
                      {item.title}
                    </h3>
                    <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 shrink-0">
                      <Camera className="w-3 h-3 text-zinc-500" />
                      <span>{item.exif.focalLength}</span>
                      <span>·</span>
                      <span>{item.exif.aperture}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 font-sans-clean line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Action */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-luxury text-xl text-white font-medium">
              Desire a tailored creative treatment for your celebration?
            </h4>
            <p className="text-xs text-zinc-400 font-sans-clean">
              We accept a limited number of commissions per season to ensure uncompromising artistic immersion.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-[#e2b77a] hover:bg-[#d8a865] rounded-lg transition-colors whitespace-nowrap"
          >
            Check Available Dates
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <Lightbox
          item={activeLightboxItem}
          items={filteredItems}
          onClose={() => setActiveLightboxItem(null)}
          onNavigate={(newItem) => setActiveLightboxItem(newItem)}
        />
      )}
    </section>
  );
};
