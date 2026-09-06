import React from 'react';
import { ShieldCheck, XCircle, CheckCircle2, Shield, Zap } from 'lucide-react';

export default function Comparison({ t, lang }) {
  return (
    <section id="shield" className="py-20 md:py-28 relative scroll-mt-20">
      {/* Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#00F0FF]/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* Comparison Table / Grid */}
        <div className="mt-14 max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#0C0E1A] p-4 sm:p-6 border-b border-white/10 items-center text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="col-span-5 sm:col-span-6 text-slate-400">
              {lang === 'ua' ? 'Критерій безпеки' : 'Security Criterion'}
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
