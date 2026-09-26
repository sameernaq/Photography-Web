import React from 'react';
import { ArrowUp, Instagram, MessageCircle, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-850 border-zinc-800/60">
          <div className="space-y-2">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white tracking-widest uppercase font-semibold">
              Abdullah Anees
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] text-[#e2b77a] font-medium font-sans-clean">
              Photography & Films
            </p>
            <p className="text-xs text-zinc-400 font-sans-clean max-w-sm pt-1">
              "We Don't Just Capture Moments. We Turn Them Into Memories."
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider font-sans-clean">
            <a href="#home" className="hover:text-[#e2b77a] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#e2b77a] transition-colors">About</a>
            <a href="#services" className="hover:text-[#e2b77a] transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-[#e2b77a] transition-colors">Portfolio</a>
            <a href="#packages" className="hover:text-[#e2b77a] transition-colors">Packages</a>
            <a href="#testimonials" className="hover:text-[#e2b77a] transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-[#e2b77a] transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors text-xs font-mono"
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-clean text-zinc-500">
          <p>© {new Date().getFullYear()} Abdullah Anees Atelier. All visual rights reserved worldwide.</p>
          <div className="flex items-center gap-6 text-zinc-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e2b77a] transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:studio@abdullahanees.com"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>studio@abdullahanees.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
