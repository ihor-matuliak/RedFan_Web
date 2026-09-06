import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ({ t }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#16182B] border border-[#00F0FF]/40 text-xs font-bold text-[#00F0FF] tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.badge}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            {t.faq.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-12 space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121424] border-[#FF5722]/50 shadow-lg shadow-[#FF5722]/10'
                    : 'bg-[#0E101D]/80 border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {item.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/5 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#FF5722]' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
