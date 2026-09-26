import React, { useState } from 'react';
import { X, Calendar, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
  presetPackage?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  presetService,
  presetPackage,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState(presetPackage || presetService || 'Wedding Cinema & Stills');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const whatsappMsg = encodeURIComponent(
    `Hello Abdullah Anees,\n\nI would like to book a private consultation for: ${eventType}.\n` +
    `Name: ${name || 'Prospective Patron'}\n` +
    `Target Date: ${date || 'Flexible'}\n` +
    `Location / Venue: ${location || 'TBD'}\n` +
    (notes ? `Notes: ${notes}\n` : '') +
    `\nPlease let me know your available times for a consultation call.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
    >
      <div className="bg-[#0f0f12] border border-zinc-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#e2b77a] font-mono">
              Private Reservation
            </span>
            <h3 className="font-serif-luxury text-2xl text-white font-medium mt-1">
              Reserve Your Date & Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {sent ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-serif-luxury text-xl text-white">Consultation Request Queued</h4>
            <p className="text-xs text-zinc-400 font-sans-clean">
              We look forward to meeting with you. For expedited scheduling, you can also reach Abdullah directly on WhatsApp:
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/923000000000?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/70 border border-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Open WhatsApp Direct Chat</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans-clean block">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Zara & Bilal"
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#e2b77a]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans-clean block">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#e2b77a]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans-clean block">
                  WhatsApp / Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+92 300..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#e2b77a]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans-clean block">
                  Event Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-[#e2b77a]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans-clean block">
                  City / Venue
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Lake Como"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#e2b77a]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans-clean block">
                Discipline / Collection
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-[#e2b77a]"
              >
                <option value="The Royal Heritage Package">The Royal Heritage Package ($6,500)</option>
                <option value="The Heritage Package">The Heritage Package ($3,800)</option>
                <option value="The Imperial Bespoke">The Imperial Bespoke ($11,500)</option>
                <option value="Cinematic Wedding Films">Cinematic Wedding Films</option>
                <option value="Editorial & Bridal Couture">Editorial & Bridal Couture</option>
                <option value="Commercial & Brand Narrative">Commercial & Brand Narrative</option>
                <option value="Destination Documentary">Destination Documentary</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-zinc-300 font-sans-clean block">
                Additional Notes
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special requests or questions..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#e2b77a]"
              />
            </div>

            <div className="pt-3 flex items-center justify-between gap-3">
              <a
                href={`https://wa.me/923000000000?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 rounded-lg hover:bg-emerald-900 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <button
                type="submit"
                className="flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-[#e2b77a] hover:bg-[#d8a865] rounded-lg transition-colors"
              >
                Submit Consultation
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
