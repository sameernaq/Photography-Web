import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, CheckCircle2, ChevronDown } from 'lucide-react';

interface ContactProps {
  initialService?: string;
  initialPackage?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService, initialPackage }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: initialService || initialPackage || 'Wedding Cinema & Stills',
    date: '',
    location: '',
    guestCount: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      eventType: 'Wedding Cinema & Stills',
      date: '',
      location: '',
      guestCount: '',
      notes: '',
    });
  };

  const generatedWhatsAppText = encodeURIComponent(
    `Hello Abdullah Anees,\n\nMy name is ${formData.fullName || '[Your Name]'}.\n` +
    `I am inquiring about: ${formData.eventType}.\n` +
    `Event Date: ${formData.date || 'TBD'}\n` +
    `Location / Venue: ${formData.location || 'TBD'}\n` +
    (formData.notes ? `Details: ${formData.notes}\n` : '') +
    `\nLooking forward to checking your availability and receiving a tailored proposal.`
  );

  const faqs = [
    {
      q: 'How far in advance should we reserve our celebration date?',
      a: 'Due to our bespoke commitment and personal direction on every commission, we accept a strict maximum of 25 weddings per calendar year. Peak wedding season dates typically book 6 to 12 months in advance.',
    },
    {
      q: 'Do you and your cinema crew travel internationally for destination events?',
      a: 'Yes. Over 40% of our commissions are destination celebrations. We routinely film across Italy, France, Turkey, the UAE, the UK, and North America. Travel, flight carnets, and gear permits are comprehensively coordinated in-house.',
    },
    {
      q: 'What is your turnaround timeframe for final delivery?',
      a: 'We deliver a 60-second social cinema teaser within 72 hours of your wedding day so you can celebrate immediately with loved ones. Full high-resolution color-graded galleries and the complete 4K Director’s Cut feature film are delivered within 4 to 6 weeks.',
    },
    {
      q: 'Can we customize the music and score for our film?',
      a: 'We collaborate closely with you on musical tone and pacing. Every feature film is scored using legally licensed cinematic orchestral tracks and ambient sound design tailored to the emotional heartbeat of your day.',
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0c0c0e] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#e2b77a] font-medium font-sans-clean">
            Commence Your Inquiry
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white text-balance leading-tight">
            Let Us Immortalize <br />
            <span className="italic font-light text-zinc-300">Your Next Chapter</span>
          </h2>
          <p className="text-sm text-zinc-400 font-sans-clean leading-relaxed">
            Please share a few initial details about your celebration. We review all inquiries personally within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white">
                    Inquiry Received with Pleasure
                  </h3>
                  <p className="text-sm text-zinc-300 font-sans-clean max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Abdullah Anees and our studio director have received your celebration details and will reply via email/WhatsApp with bespoke availability.
                  </p>
                </div>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/923000000000?text=${generatedWhatsAppText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 rounded-lg hover:bg-emerald-900/60 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Send Message on WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-5 py-3 text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium font-sans-clean block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alizeh & Shahmeer"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#e2b77a] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium font-sans-clean block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alizeh@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#e2b77a] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium font-sans-clean block">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#e2b77a] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium font-sans-clean block">
                      Event / Discipline Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#e2b77a] transition-colors"
                    >
                      <option value="Wedding Cinema & Stills">Wedding Cinema & Stills</option>
                      <option value="The Royal Heritage Package">The Royal Heritage Package</option>
                      <option value="The Heritage Package">The Heritage Package</option>
                      <option value="The Imperial Bespoke">The Imperial Bespoke</option>
                      <option value="Editorial & Bridal Couture">Editorial & Bridal Couture</option>
                      <option value="Commercial & Brand Narrative">Commercial & Brand Narrative</option>
                      <option value="Destination Documentary">Destination Documentary</option>
                      <option value="Fine Art Portraiture">Fine Art Portraiture</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium font-sans-clean block">
                      Target Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#e2b77a] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium font-sans-clean block">
                      City, Venue or Country
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Lahore, Lake Como, London"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#e2b77a] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium font-sans-clean block">
                    Your Vision & Aesthetic Wishes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about the flow of your day, guest count, design aesthetic, or specific film ideas..."
                    className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#e2b77a] transition-colors"
                  />
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-[#e2b77a] hover:bg-[#ebd0a3] rounded-lg transition-all shadow-md shadow-[#e2b77a]/15 focus:outline-none"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>

                  <a
                    href={`https://wa.me/923000000000?text=${generatedWhatsAppText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 rounded-lg hover:bg-emerald-900/60 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Studio Contact & FAQs */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Studio Coordinates */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
              <h3 className="font-serif-luxury text-xl font-medium text-white">
                Studio Atelier & Direct Lines
              </h3>
              
              <div className="space-y-3 text-xs text-zinc-300 font-sans-clean">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#e2b77a] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Main Studio Atelier</strong>
                    <span>Gulberg III, Lahore, Pakistan · Global Travel Deployments Worldwide</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-zinc-400">Direct WhatsApp Concierge: </span>
                    <a
                      href="https://wa.me/923000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-300 hover:underline font-mono"
                    >
                      +92 300 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#e2b77a] shrink-0" />
                  <div>
                    <span className="text-zinc-400">Studio Inquiries: </span>
                    <a href="mailto:studio@abdullahanees.com" className="text-zinc-200 hover:underline font-mono">
                      studio@abdullahanees.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-[#e2b77a] shrink-0" />
                  <div>
                    <span className="text-zinc-400">Instagram Portfolio: </span>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e2b77a] hover:underline font-mono"
                    >
                      @abdullahanees.films
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Curated FAQs */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#e2b77a] font-semibold font-sans-clean">
                Frequently Clarified Questions
              </h4>
              <div className="space-y-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-3.5 text-left flex items-center justify-between text-xs font-medium text-zinc-200 hover:text-white"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${
                            isOpen ? 'rotate-180 text-[#e2b77a]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 text-xs text-zinc-400 font-sans-clean leading-relaxed border-t border-zinc-800/50 pt-2">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
