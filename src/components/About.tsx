import React from 'react';
import { Camera, Film, Award, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { aboutCraftImg } from '../data/portfolioData';

interface AboutProps {
  onExplorePortfolio: () => void;
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onExplorePortfolio, onOpenBooking }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#09090b] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#e2b77a] font-medium font-sans-clean">
            About The Artist & Studio
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white text-balance leading-tight">
            We Don't Follow Trends. <br />
            <span className="italic font-light text-zinc-300">We Capture the Unrepeatable.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image with Film Craft Aesthetics */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl">
              <img
                src={aboutCraftImg}
                alt="Abdullah Anees inspecting negatives and cinema lenses"
                className="w-full aspect-[4/5] object-cover filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-zinc-300">
                <p className="font-serif-luxury text-lg text-white font-medium">Abdullah Anees</p>
                <p className="text-xs text-zinc-400 font-sans-clean">Director of Photography & Founder</p>
              </div>
            </div>

            {/* Gear & Archival Quality Specs */}
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#e2b77a] font-semibold">
                Archival Standard & Equipment
              </h4>
              <ul className="text-xs text-zinc-300 space-y-2 font-sans-clean">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e2b77a] shrink-0" />
                  <span>RED V-Raptor 8K VV & ARRI Cinema Color Science</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e2b77a] shrink-0" />
                  <span>Hasselblad H6D-100c Medium Format Stills</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e2b77a] shrink-0" />
                  <span>Cooke Anamorphic Prime Lenses (Organic Oval Bokeh)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e2b77a] shrink-0" />
                  <span>Handcrafted Italian Archival Flush-Mount Albums</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-zinc-300 font-sans-clean leading-relaxed text-sm sm:text-base font-light">
              <p className="text-zinc-100 text-lg sm:text-xl font-serif-luxury italic leading-snug">
                "Light is not merely illumination; it is emotional architecture. When a father hugs his daughter before she walks down the aisle, there is a micro-second of stillness. That is what we live to immortalize."
              </p>

              <p>
                Founded by visual storyteller <strong className="text-white font-medium">Abdullah Anees</strong>, our studio was born out of a desire to break away from stiff poses, sterile lighting, and fleeting digital gimmicks. Over the past decade, we have evolved into an internationally commissioned boutique film and photography atelier.
              </p>

              <p>
                Our signature aesthetic unites classical portraiture with raw documentary truth. Whether filming an intimate candlelit nikah in Lahore or orchestrating a three-day celebration on the cliffs of Lake Como, we immerse ourselves completely in your world, preserving genuine intimacy with the cadence of fine cinema.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#e2b77a]/10 flex items-center justify-center text-[#e2b77a]">
                  <Film className="w-4 h-4" />
                </div>
                <h4 className="font-serif-luxury text-base font-medium text-white">Cinematic Soul</h4>
                <p className="text-xs text-zinc-400 font-sans-clean leading-normal">
                  Authentic film pacing, nuanced sound design, and custom orchestral scoring that never feels generic.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#e2b77a]/10 flex items-center justify-center text-[#e2b77a]">
                  <Camera className="w-4 h-4" />
                </div>
                <h4 className="font-serif-luxury text-base font-medium text-white">Fine-Art Optics</h4>
                <p className="text-xs text-zinc-400 font-sans-clean leading-normal">
                  Shot on ultra-high resolution medium format sensors rendering heirloom skin tones and couture texture.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#e2b77a]/10 flex items-center justify-center text-[#e2b77a]">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="font-serif-luxury text-base font-medium text-white">Discreet Presence</h4>
                <p className="text-xs text-zinc-400 font-sans-clean leading-normal">
                  No intrusive equipment or forced directing. We let natural sentiment unfold effortlessly.
                </p>
              </div>
            </div>

            {/* Editorial Features / Honors (Clean Unboxed Metadata) */}
            <div className="pt-6 border-t border-zinc-800/80 space-y-3">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-sans-clean">
                Published & Commended Across
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-300 font-serif-luxury tracking-widest uppercase">
                <span className="text-zinc-200">Vogue Weddings</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-200">Harper’s Bazaar Bride</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-200">WedLuxe International</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-200">The Wedding Filmmaker Guild</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onExplorePortfolio}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e2b77a] hover:text-[#ebd0a3] transition-colors"
              >
                <span>View Selected Works</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-zinc-600">/</span>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors"
              >
                <span>Inquire About Availability</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
