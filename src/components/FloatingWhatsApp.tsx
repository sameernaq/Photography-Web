import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('Hello Abdullah Anees, I am inquiring about booking your photography & films for an upcoming celebration.');

  const handleSend = () => {
    const url = `https://wa.me/923000000000?text=${encodeURIComponent(quickMsg)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl p-5 space-y-4 animate-fadeIn backdrop-blur-xl">
          <div className="flex items-start justify-between border-b border-zinc-800/80 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                  Abdullah Anees Studio
                </h4>
                <p className="text-[11px] text-emerald-400 font-sans-clean flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Direct Studio WhatsApp
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-zinc-400 hover:text-white rounded"
              aria-label="Close WhatsApp chat drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/60 text-xs text-zinc-300 font-sans-clean leading-relaxed">
            "Salam & Welcome. We look forward to discovering your celebration story. Drop us a quick note below to check availability or request a tailored brochure."
          </div>

          <div className="space-y-2">
            <textarea
              rows={2}
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
              placeholder="Type your message..."
            />

            <button
              onClick={handleSend}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-lg shadow-emerald-500/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs tracking-wider uppercase shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-zinc-950" />
        <span className="hidden sm:inline font-sans-clean">Chat on WhatsApp</span>
        {/* Subtle ping indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-zinc-950" />
        </span>
      </button>
    </div>
  );
};
