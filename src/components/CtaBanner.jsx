import React, { useState } from 'react';
import { Send, Copy, Check, Sparkles } from 'lucide-react';

export default function CtaBanner({ t, lang }) {
  const [copied, setCopied] = useState(false);

  const copyUsername = () => {
    navigator.clipboard.writeText('@ReddFan_Studio');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF007A]/10 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-r from-[#17152B] via-[#1F142D] to-[#14182E] border border-gradient-glow shadow-2xl text-center space-y-6">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#08080C]/80 border border-[#FF5722]/50 text-xs font-bold text-[#FF7A00] tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.ctaBanner.badge}</span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white max-w-3xl mx-auto tracking-tight leading-tight">
            {t.ctaBanner.title}
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.ctaBanner.description}
          </p>

          {/* Main Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://t.me/ReddFan_Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-[#FF5722] via-[#FF007A] to-[#8A2BE2] shadow-xl shadow-[#FF5722]/40 hover:shadow-[#FF007A]/60 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Send className="w-5 h-5 text-[#00F0FF]" />
              <span>{t.ctaBanner.button}</span>
            </a>

            {/* Quick Copy Button */}
            <button
              onClick={copyUsername}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-[#0E1020] hover:bg-[#161932] border border-white/10 hover:border-[#00F0FF]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              title="Copy handle"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">{t.ctaBanner.copiedToast}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#00F0FF]" />
                  <span>{lang === 'ru' ? 'Скопировать @ReddFan_Studio' : 'Copy @ReddFan_Studio'}</span>
                </>
              )}
            </button>
          </div>

          <div className="text-xs text-slate-400 pt-2 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{t.ctaBanner.directLinkNotice}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
