import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, Layers, Sparkles, X, MessageCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0c0c0e] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#e2b77a] font-medium font-sans-clean">
              Our Disciplines
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white text-balance leading-tight">
              Curated Services Crafted for <br />
              <span className="italic font-light text-zinc-300">Generations to Come</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 font-sans-clean max-w-sm leading-relaxed">
            Every production is tailored to the exact visual ambitions of our patrons, from intimate bespoke elopements to global couture campaigns.
          </p>
        </div>

        {/* Services List / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-[#e2b77a]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif-luxury text-lg text-[#e2b77a]/80 font-medium">
                    {service.editorialNumber}.
                  </span>
                  <span className="text-xs text-zinc-400 font-sans-clean tracking-wider uppercase">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white group-hover:text-[#e2b77a] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-zinc-300 font-sans-clean font-light leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-2 text-xs text-zinc-400 space-y-1.5 font-sans-clean">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Clock className="w-3.5 h-3.5 text-[#e2b77a] shrink-0" />
                    <span>{service.turnaround}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Sparkles className="w-3.5 h-3.5 text-[#e2b77a] shrink-0" />
                    <span>{service.highlight}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#e2b77a] hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e2b77a]"
                >
                  <span>View Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectServiceForBooking(service.title)}
                  className="px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-zinc-300 hover:text-zinc-950 hover:bg-[#e2b77a] border border-zinc-700/60 hover:border-[#e2b77a] rounded-lg transition-all"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Specification Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0f0f12] border border-zinc-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#e2b77a] font-mono">
                  {selectedService.editorialNumber} / Service Spec
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium mt-1">
                  {selectedService.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">{selectedService.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-zinc-300 font-sans-clean leading-relaxed">
              <p>{selectedService.description}</p>
              
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block">Ideal For:</span>
                <p className="text-xs text-zinc-200">{selectedService.idealFor}</p>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-[#e2b77a] font-semibold">
                Signature Deliverables
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-zinc-900/40 p-2.5 rounded-lg border border-zinc-800/60">
                    <Check className="w-3.5 h-3.5 text-[#e2b77a] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Camera & Production Tech */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                Camera & Audio Rigging
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-300 font-mono">
                {selectedService.equipment.map((gear, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {gear}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <a
                href={`https://wa.me/923000000000?text=${encodeURIComponent(`Hello Abdullah Anees, I am inquiring about your ${selectedService.title} service.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 rounded-lg hover:bg-emerald-900/60 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Inquiry</span>
              </a>

              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForBooking(title);
                }}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-[#e2b77a] hover:bg-[#d8a865] rounded-lg transition-colors"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
