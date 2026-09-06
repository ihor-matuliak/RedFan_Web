import React from 'react';
import { ShieldCheck, XCircle, CheckCircle2, Shield, Zap } from 'lucide-react';

export default function Comparison({ t, lang }) {
  return (
    <section className="py-16 md:py-28 relative">
      {/* Glow */}
      <div className="absolute top-1/2 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#00F0FF]/10 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div id="shield" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#16182B] border border-emerald-500/40 text-xs font-bold text-emerald-400 tracking-wide uppercase">
            <Shield className="w-3.5 h-3.5" />
            <span>{t.shield.badge}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            {t.shield.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {t.shield.subtitle}
          </p>
        </div>

        {/* Mobile View (< md): High-UX Comparison Cards */}
        <div className="md:hidden mt-10 space-y-4">
          {t.shield.rows.map((row, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-[#0F1122] border border-white/10 shadow-xl space-y-3"
            >
              <div className="font-display font-bold text-sm text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF5722] shrink-0" />
                <span>{row.feature}</span>
              </div>

              <div className="space-y-2 pt-1">
                {/* ReddFan Studio Card */}
                <div className="p-3 rounded-xl bg-[#11241C] border border-emerald-500/30 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                      {t.shield.ourName}
                    </div>
                    <div className="text-xs font-semibold text-emerald-200 mt-0.5 leading-snug">
                      {row.us}
                    </div>
                  </div>
                </div>

                {/* Generic bot farms Card */}
                <div className="p-3 rounded-xl bg-[#201117] border border-rose-500/20 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400/80 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-rose-400/80">
                      {t.shield.competitorName}
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5 leading-snug">
                      {row.them}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View (>= md): Classic Sleek Comparison Table */}
        <div className="hidden md:block mt-14 max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#0C0E1A] p-4 sm:p-6 border-b border-white/10 items-center text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="col-span-5 sm:col-span-6 text-slate-400">
              {lang === 'ru' ? 'Критерий безопасности' : 'Security Criterion'}
            </div>
            <div className="col-span-4 sm:col-span-3 text-[#FF5722] flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" />
              <span>{t.shield.ourName}</span>
            </div>
            <div className="col-span-3 sm:col-span-3 text-slate-500">
              {t.shield.competitorName}
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {t.shield.rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-white/[0.02] transition-colors">
                
                {/* Feature Name */}
                <div className="col-span-5 sm:col-span-6 pr-2 sm:pr-4">
                  <div className="font-semibold text-xs sm:text-base text-white">
                    {row.feature}
                  </div>
                </div>

                {/* ReddFan Studio Advantage */}
                <div className="col-span-4 sm:col-span-3 pr-2 sm:pr-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-emerald-300">
                      {row.us}
                    </span>
                  </div>
                </div>

                {/* Competitor drawback */}
                <div className="col-span-3 sm:col-span-3">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500/80 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-400">
                      {row.them}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
