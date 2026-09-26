import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Camera, MessageCircle, MapPin, Calendar, Share2, Check } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxProps {
  item: PortfolioItem;
  items: PortfolioItem[];
  onClose: () => void;
  onNavigate: (newItem: PortfolioItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, items, onClose, onNavigate }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const handlePrev = () => {
    if (hasPrev) {
      setZoomLevel(1);
      onNavigate(items[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setZoomLevel(1);
      onNavigate(items[currentIndex + 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items]);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 0.7));
  const handleResetZoom = () => setZoomLevel(1);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Abdullah Anees, I am captivated by your work "${item.title}" (${item.categoryLabel}, ${item.location}). I would love to discuss a similar visual direction for my event.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl text-white select-none animate-fadeIn"
    >
      {/* Top Bar Controls */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 z-20 bg-black/60">
        <div className="flex items-center gap-3">
          <span className="font-serif-luxury text-lg tracking-wider font-semibold text-white">
            {item.title}
          </span>
          <span className="text-zinc-500">·</span>
          <span className="text-xs text-zinc-400 font-sans-clean">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Controls */}
          <div className="hidden sm:flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-1">
            <button
              onClick={handleZoomOut}
              className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors"
              title="Zoom out"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-[10px] font-mono px-2 text-zinc-300">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors"
              title="Zoom in"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            {zoomLevel !== 1 && (
              <button
                onClick={handleResetZoom}
                className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors ml-1"
                title="Reset zoom"
                aria-label="Reset zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            onClick={handleCopyLink}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
            title="Share"
            aria-label="Share project"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
            title="Close (Esc)"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden p-4 sm:p-8">
        {/* Navigation Arrows */}
        {hasPrev && (
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-30 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 text-white transition-all transform hover:scale-110 focus:outline-none"
            title="Previous (Left Arrow)"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {hasNext && (
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-30 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 text-white transition-all transform hover:scale-110 focus:outline-none"
            title="Next (Right Arrow)"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Media Frame */}
        <div
          className="relative max-w-5xl max-h-[75vh] flex items-center justify-center transition-transform duration-200 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[72vh] max-w-full w-auto object-contain rounded-lg shadow-2xl shadow-black/80"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Bottom Metadata & EXIF Specs Sheet */}
      <div className="bg-zinc-950/90 border-t border-zinc-800/80 px-6 py-4 z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-sans-clean">
              <span className="text-[#e2b77a] font-medium">{item.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-500" />
                {item.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-zinc-500" />
                {item.year}
              </span>
            </div>
            <p className="text-xs text-zinc-300 font-sans-clean line-clamp-2">
              {item.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* EXIF Tech Data */}
            <div className="hidden lg:flex items-center gap-3 text-[11px] font-mono text-zinc-400 bg-zinc-900 px-3.5 py-2 rounded-lg border border-zinc-800">
              <Camera className="w-3.5 h-3.5 text-[#e2b77a]" />
              <span>{item.exif.camera}</span>
              <span>·</span>
              <span>{item.exif.lens}</span>
              <span>·</span>
              <span>{item.exif.aperture}</span>
              <span>·</span>
              <span>{item.exif.shutter}</span>
              <span>·</span>
              <span>ISO {item.exif.iso}</span>
            </div>

            {/* Direct WhatsApp CTA for this work */}
            <a
              href={`https://wa.me/923000000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-700/60 rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Inquire This Style</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
