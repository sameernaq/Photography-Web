import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, MessageCircle } from 'lucide-react';
import { heroReelImg } from '../data/portfolioData';

interface ShowreelModalProps {
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ onClose, onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: 'Amalfi Coast Twilight', time: '0:00 - 0:45', cam: 'RED V-Raptor 8K' },
    { title: 'Heritage Palace Nikah', time: '0:45 - 1:30', cam: 'Cooke Anamorphic' },
    { title: 'Haute Horlogerie Craft', time: '1:30 - 2:15', cam: 'ARRI Alexa Mini LF' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fadeIn"
    >
      <div className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-zinc-800 bg-zinc-900/80">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-serif-luxury text-sm tracking-wider uppercase text-white font-medium">
              Abdullah Anees — 2026 Director's Cinema Showreel (4K DCI)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close showreel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Visual Simulation Canvas */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img
            src={heroReelImg}
            alt="Director Showreel"
            className={`w-full h-full object-cover filter brightness-[0.6] contrast-[1.1] transition-transform duration-1000 ${
              isPlaying ? 'scale-105' : 'scale-100'
            }`}
            referrerPolicy="no-referrer"
          />

          {/* Letterbox Bars for 2.39:1 Anamorphic Cinema Feel */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-black/80 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-black/80 pointer-events-none" />

          {/* Center Play/Pause Overlay */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-20 w-16 h-16 rounded-full bg-[#e2b77a]/90 text-zinc-950 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform"
            aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-zinc-950" />
            ) : (
              <Play className="w-6 h-6 fill-zinc-950 translate-x-0.5" />
            )}
          </button>

          {/* Active Chapter Watermark */}
          <div className="absolute top-8 left-8 z-10 text-left pointer-events-none">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#e2b77a]">
              Chapter {activeChapter + 1}
            </span>
            <p className="font-serif-luxury text-lg text-white font-medium">
              {chapters[activeChapter].title}
            </p>
            <span className="text-[11px] font-mono text-zinc-400">
              {chapters[activeChapter].cam}
            </span>
          </div>

          {/* Playback Simulation Progress Bar */}
          <div className="absolute bottom-8 left-8 right-8 z-10 flex items-center gap-4 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:text-[#e2b77a] transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Simulated Timeline */}
            <div className="flex-1 h-1 bg-zinc-700 rounded-full overflow-hidden relative">
              <div
                className={`h-full bg-[#e2b77a] transition-all duration-300 ${
                  activeChapter === 0 ? 'w-1/3' : activeChapter === 1 ? 'w-2/3' : 'w-full'
                }`}
              />
            </div>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-white hover:text-[#e2b77a] transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Chapters Footer Bar */}
        <div className="px-6 py-4 bg-zinc-950 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mr-1">
              Chapters:
            </span>
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${
                  activeChapter === idx
                    ? 'bg-[#e2b77a] text-zinc-950 font-semibold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                {ch.title}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/923000000000?text=Hello%20Abdullah%2C%20I%20just%20watched%20your%20showreel%20and%20would%20love%20to%20discuss%20a%20film%20commission."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 rounded-lg hover:bg-emerald-900/60 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Inquire via WhatsApp</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-[#e2b77a] hover:bg-[#d8a865] rounded-lg transition-colors"
            >
              Commission Reel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
