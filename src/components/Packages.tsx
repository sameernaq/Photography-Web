import React, { useState } from 'react';
import { Check, Plus, MessageCircle, Calendar, Sparkles, ShieldCheck } from 'lucide-react';
import { PACKAGES_DATA, PACKAGE_ADDONS } from '../data/packagesData';
import { PackageTier } from '../types';

interface PackagesProps {
  onSelectPackageForBooking: (packageName: string, total: number, selectedAddons: string[]) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackageForBooking }) => {
  const [selectedTier, setSelectedTier] = useState<PackageTier>(PACKAGES_DATA[1]); // Default to featured
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['aerial-drone']);

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const calculatedAddonsTotal = selectedAddonIds.reduce((sum, id) => {
    const addon = PACKAGE_ADDONS.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const grandTotal = selectedTier.numericPrice + calculatedAddonsTotal;

  const chosenAddonNames = selectedAddonIds
    .map((id) => PACKAGE_ADDONS.find((a) => a.id === id)?.name)
    .filter(Boolean) as string[];

  const whatsappInquiryMessage = encodeURIComponent(
    `Hello Abdullah Anees, I am interested in booking the "${selectedTier.name}" package ($${selectedTier.numericPrice.toLocaleString()}). ` +
    (chosenAddonNames.length > 0
      ? `With add-ons: ${chosenAddonNames.join(', ')}. `
      : '') +
    `Estimated Total: $${grandTotal.toLocaleString()}. Please let me know your availability.`
  );

  return (
    <section id="packages" className="py-24 sm:py-32 bg-[#0c0c0e] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#e2b77a] font-medium font-sans-clean">
            Curated Investment & Packages
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white text-balance leading-tight">
            Transparent Collections for <br />
            <span className="italic font-light text-zinc-300">Uncompromising Memories</span>
          </h2>
          <p className="text-sm text-zinc-400 font-sans-clean max-w-xl mx-auto leading-relaxed">
            Every commission includes full pre-production art direction, archival cinema color mastering, and priority gallery access.
          </p>
        </div>

        {/* 3 Package Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PACKAGES_DATA.map((tier) => {
            const isChosen = selectedTier.id === tier.id;
            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier)}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  tier.featured
                    ? 'bg-zinc-900/90 border-2 border-[#e2b77a] shadow-2xl shadow-[#e2b77a]/10'
                    : 'bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700'
                } ${isChosen ? 'ring-2 ring-[#e2b77a]/60' : ''}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#e2b77a] text-zinc-950 text-[10px] font-bold uppercase tracking-widest shadow-md">
                    Signature Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 font-sans-clean min-h-[32px]">
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-zinc-800">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif-luxury text-4xl sm:text-5xl font-medium text-white tabular-nums">
                        {tier.price}
                      </span>
                      <span className="text-xs text-zinc-400 font-sans-clean uppercase tracking-wider">
                        USD / Event
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-[#e2b77a] font-medium font-sans-clean">
                      {tier.duration} · {tier.crew}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                      Deliverables Included
                    </p>
                    <ul className="space-y-2.5 text-xs text-zinc-300 font-sans-clean">
                      {tier.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#e2b77a] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Archival Inclusions */}
                  <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                      Service Inclusions
                    </p>
                    <ul className="space-y-1.5 text-[11px] text-zinc-400 font-sans-clean">
                      {tier.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#e2b77a]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-zinc-800">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTier(tier);
                    }}
                    className={`w-full py-3 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                      isChosen
                        ? 'bg-[#e2b77a] text-zinc-950 shadow-md shadow-[#e2b77a]/15'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    }`}
                  >
                    {isChosen ? 'Selected Base Tier' : 'Select This Tier'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Add-Ons Calculator */}
        <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/90 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#e2b77a] font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Bespoke Add-On Enhancements</span>
              </div>
              <h3 className="font-serif-luxury text-2xl text-white font-medium mt-1">
                Customize Your Production Suite
              </h3>
              <p className="text-xs text-zinc-400 font-sans-clean mt-0.5">
                Toggle tailored cinema upgrades to calculate your bespoke investment in real-time.
              </p>
            </div>

            {/* Live Total Pill / Metric */}
            <div className="text-right sm:border-l sm:border-zinc-800 sm:pl-6">
              <span className="text-xs uppercase tracking-wider text-zinc-400 block font-sans-clean">
                Estimated Total Investment
              </span>
              <span className="font-serif-luxury text-3xl sm:text-4xl text-[#e2b77a] font-medium tabular-nums">
                ${grandTotal.toLocaleString()}
              </span>
              <span className="text-[11px] text-zinc-500 block font-mono">
                {selectedTier.name} + {selectedAddonIds.length} Add-on(s)
              </span>
            </div>
          </div>

          {/* Add-ons List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PACKAGE_ADDONS.map((addon) => {
              const isChecked = selectedAddonIds.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isChecked
                      ? 'bg-zinc-800/80 border-[#e2b77a]/60 text-white'
                      : 'bg-zinc-900/30 border-zinc-800/80 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-semibold text-zinc-200">
                        {addon.name}
                      </span>
                      <span className="font-mono text-xs text-[#e2b77a] font-medium shrink-0 tabular-nums">
                        +${addon.price}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-sans-clean leading-normal">
                      {addon.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-2 flex items-center gap-2 text-xs font-medium">
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        isChecked ? 'bg-[#e2b77a] border-[#e2b77a] text-zinc-950' : 'border-zinc-600'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-zinc-300">
                      {isChecked ? 'Included' : 'Click to Add'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-sans-clean">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Complimentary contract, date holding policy, and backup gear protocol included.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/923000000000?text=${whatsappInquiryMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 rounded-lg hover:bg-emerald-900/60 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Book via WhatsApp</span>
              </a>

              <button
                onClick={() =>
                  onSelectPackageForBooking(selectedTier.name, grandTotal, chosenAddonNames)
                }
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-[#e2b77a] hover:bg-[#d8a865] rounded-lg transition-colors whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
