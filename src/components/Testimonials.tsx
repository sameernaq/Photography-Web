import React, { useState } from 'react';
import { Star, Quote, MapPin, Calendar, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#09090b] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#e2b77a] font-medium font-sans-clean">
              Patron Chronicles & Kind Words
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white text-balance leading-tight">
              Treasured by Families & <br />
              <span className="italic font-light text-zinc-300">Acclaimed by Brands</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#e2b77a] transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#e2b77a] transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative rounded-3xl bg-zinc-900/60 border border-zinc-800/90 p-8 sm:p-12 backdrop-blur-sm shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              {/* Star Rating & Highlight */}
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#e2b77a]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e2b77a]" />
                  ))}
                  <span className="ml-2 text-xs font-mono text-zinc-400">5.0 Verified Review</span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium italic">
                  "{current.highlightPhrase}"
                </h3>
              </div>

              {/* Body Quote */}
              <p className="text-zinc-300 font-sans-clean leading-relaxed text-sm sm:text-base font-light">
                {current.quote}
              </p>

              {/* Attribution (No Pills) */}
              <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-400 font-sans-clean">
                <span className="font-semibold text-white text-sm">{current.clientNames}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#e2b77a]">{current.eventDetails}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  {current.location}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-zinc-500" />
                  {current.year}
                </span>
              </div>
            </div>

            {/* Right Column: Trust Badges */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-zinc-800 lg:pl-8 space-y-4">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold font-sans-clean">
                  Client Confidence
                </p>
                <div className="space-y-3 text-xs text-zinc-300 font-sans-clean">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>100% On-Time Delivery Guarantee for all wedding film cuts</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Redundant dual-slot memory recording & cloud mirror backup</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Direct personal direction by Abdullah Anees on every set</span>
                  </div>
                </div>
              </div>

              {/* Quick Dots Pagination */}
              <div className="pt-4 flex items-center gap-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      currentIndex === idx ? 'w-6 bg-[#e2b77a]' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    aria-label={`Jump to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
