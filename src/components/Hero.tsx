import React from 'react';
import { Play, ArrowUpRight, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { heroReelImg } from '../data/portfolioData';

interface HeroProps {
  onOpenReel: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReel, onOpenBooking }) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroReelImg}
          alt="Cinematic cinematography and photography by Abdullah Anees"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08] scale-[1.02] transform transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim gradient to ensure WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/90 via-[#09090b]/40 to-transparent" />
        <div className="absolute inset-0 grain-overlay pointer-events-none opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & Tagline */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-700/60 backdrop-blur-sm text-xs font-medium tracking-widest uppercase text-[#e2b77a]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cinematography & Fine Art Photography</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-normal tracking-tight text-white leading-[1.06] text-balance">
                We Don't Just <span className="italic font-light text-zinc-300">Capture</span> Moments.
                <span className="block mt-1 font-medium bg-gradient-to-r from-[#fef08a] via-[#e2b77a] to-[#d8a865] bg-clip-text text-transparent">
                  We Turn Them Into Memories.
                </span>
              </h1>
              
              <p className="max-w-2xl text-base sm:text-lg text-zinc-300 font-sans-clean font-light leading-relaxed">
                Led by visual director <strong className="font-medium text-white">Abdullah Anees</strong>, our studio crafts transcendent wedding films, haute-couture bridal portraiture, and commercial narratives with medium-format precision and 35mm anamorphic soul.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-3 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-950 bg-[#e2b77a] hover:bg-[#ebd0a3] rounded-lg transition-all duration-200 shadow-lg shadow-[#e2b77a]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Calendar className="w-4 h-4 text-zinc-950" />
                <span>Reserve Your Date</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onOpenReel}
                className="group inline-flex items-center gap-3 px-5 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/80 rounded-lg transition-colors backdrop-blur-sm"
              >
                <div className="w-6 h-6 rounded-full bg-[#e2b77a]/20 flex items-center justify-center group-hover:bg-[#e2b77a]/30 transition-colors">
                  <Play className="w-3 h-3 text-[#e2b77a] fill-[#e2b77a]" />
                </div>
                <span>Watch 2026 Showreel</span>
              </button>

              <a
                href="https://wa.me/923000000000?text=Hi%20Abdullah%2C%20I%20love%20your%20portfolio%20and%20would%20like%20to%20check%20availability%20for%20an%20upcoming%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-emerald-300 hover:text-emerald-200 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-700/40 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quick Proof Metrics (Tabular Numbers) */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-zinc-800/80 max-w-2xl">
              <div>
                <p className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white tabular-nums">
                  10+
                </p>
                <p className="text-xs uppercase tracking-wider text-zinc-400 mt-0.5 font-sans-clean">
                  Years of Mastery
                </p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white tabular-nums">
                  450+
                </p>
                <p className="text-xs uppercase tracking-wider text-zinc-400 mt-0.5 font-sans-clean">
                  Heirloom Films
                </p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white tabular-nums">
                  18
                </p>
                <p className="text-xs uppercase tracking-wider text-zinc-400 mt-0.5 font-sans-clean">
                  Global Awards
                </p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white tabular-nums">
                  8K DCI
                </p>
                <p className="text-xs uppercase tracking-wider text-zinc-400 mt-0.5 font-sans-clean">
                  Master Archival
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Featured Card Preview */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl bg-zinc-900/70 border border-zinc-800/90 p-4 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 bg-zinc-950">
                <img
                  src={heroReelImg}
                  alt="Cinema Film Preview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={onOpenReel}
                  className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2 group-hover:bg-black/25 transition-colors cursor-pointer"
                  aria-label="Play showreel video"
                >
                  <div className="w-14 h-14 rounded-full bg-[#e2b77a] text-zinc-950 flex items-center justify-center shadow-xl shadow-black/50 transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-zinc-950 translate-x-0.5" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-white/90 drop-shadow">
                    Play Highlight Reel
                  </span>
                </button>
              </div>

              <div className="px-1 py-1 space-y-1">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Cinematic Direction</span>
                  <span className="font-mono text-zinc-500">2026 Season</span>
                </div>
                <h4 className="font-serif-luxury text-lg font-medium text-zinc-100">
                  Amalfi Dusk & Heritage Vows
                </h4>
                <p className="text-xs text-zinc-400 font-sans-clean line-clamp-2">
                  Shot across Italy & Lahore using RED V-Raptor and anamorphic Cooke optics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Repeating Marquee Ribbon Divider */}
      <div className="absolute bottom-0 left-0 right-0 py-2.5 bg-zinc-950/95 border-t border-zinc-800/80 overflow-hidden whitespace-nowrap z-20">
        <div className="inline-flex gap-8 text-[11px] font-sans-clean uppercase tracking-[0.3em] text-zinc-400 select-none animate-none">
          <span>Cinematic Wedding Films</span>
          <span className="text-[#e2b77a]">·</span>
          <span>Editorial Bridal Couture</span>
          <span className="text-[#e2b77a]">·</span>
          <span>Medium Format Archival Stills</span>
          <span className="text-[#e2b77a]">·</span>
          <span>35mm Anamorphic Cinema</span>
          <span className="text-[#e2b77a]">·</span>
          <span>Bespoke Global Documentaries</span>
          <span className="text-[#e2b77a]">·</span>
          <span>Commercial & Brand Narratives</span>
        </div>
      </div>
    </section>
  );
};
