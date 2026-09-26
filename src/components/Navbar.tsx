import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Packages', href: '#packages' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e2b77a]"
        >
          <span className="font-serif-luxury text-xl sm:text-2xl tracking-[0.2em] font-semibold text-zinc-100 group-hover:text-[#e2b77a] transition-colors uppercase whitespace-nowrap">
            Abdullah Anees
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-zinc-400 uppercase font-sans-clean font-medium">
            Photography & Films
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-widest uppercase font-sans-clean text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 hover:text-[#e2b77a] transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e2b77a]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/923000000000?text=Hello%20Abdullah%20Anees%2C%20I%20would%20like%20to%20inquire%20about%20your%20photography%20and%20film%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium uppercase tracking-wider text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/50 rounded-lg transition-colors whitespace-nowrap"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-[#e2b77a] hover:bg-[#d8a865] rounded-lg transition-all duration-200 shadow-md shadow-[#e2b77a]/10 whitespace-nowrap"
          >
            Book Inquiries
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-zinc-950 bg-[#e2b77a] rounded-md whitespace-nowrap"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090b]/95 border-b border-zinc-800 px-6 py-5 mt-2 space-y-3 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm tracking-widest uppercase font-medium text-zinc-300 hover:text-[#e2b77a] py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
            <a
              href="https://wa.me/923000000000?text=Hello%20Abdullah%20Anees%2C%20I%20would%20like%20to%20inquire%20about%20your%20photography%20and%20film%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium uppercase tracking-wider text-emerald-300 bg-emerald-950/50 border border-emerald-800/50 rounded-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Chat</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-[#e2b77a] rounded-lg"
            >
              Request Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
