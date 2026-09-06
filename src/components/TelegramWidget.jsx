import React, { useState } from 'react';
import { Send, X, MessageCircle, Sparkles } from 'lucide-react';

export default function TelegramWidget({ t }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Popup Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-[#0E1020]/95 backdrop-blur-xl border border-[#FF007A]/50 p-4 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold text-white">{t.widget.status}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-1">
            <h5 className="font-display font-bold text-sm text-white">
              {t.widget.heading}
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.widget.text}
            </p>
          </div>

          <a
            href="https://t.me/ReddFan_Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF5722] via-[#FF007A] to-[#8A2BE2] text-white flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all"
          >
            <Send className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>{t.widget.button}</span>
          </a>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-[#FF5722] via-[#FF007A] to-[#8A2BE2] text-white shadow-2xl shadow-[#FF007A]/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none ring-4 ring-[#FF007A]/20"
        aria-label="Telegram Desk"
      >
        {/* Unread ping dot */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00F0FF] text-[9px] font-black text-slate-900 items-center justify-center">1</span>
        </span>

        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Send className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        )}
      </button>

    </div>
  );
}
