import React from 'react';
import { Flame, TrendingUp, Crown, CheckCircle, ArrowRight, Send } from 'lucide-react';

export default function Services({ t, lang }) {
  const icons = [Flame, TrendingUp, Crown];

  return (
    <section className="py-20 md:py-28 relative">
      {/* Glows */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#8A2BE2]/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#00F0FF]/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#16182B] border border-[#00F0FF]/40 text-xs font-bold text-[#00F0FF] tracking-wide uppercase">
            <span>{t.services.badge}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            {t.services.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
          {t.services.list.map((service, index) => {
            const Icon = icons[index % icons.length];
            const isMain = index === 0;

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group ${
                  isMain 
                    ? 'bg-[#121424] border-2 border-[#FF5722]/70 shadow-2xl shadow-[#FF5722]/15 hover:border-[#FF5722]' 
                    : 'bg-[#101220] border border-white/10 hover:border-white/20 shadow-xl'
                }`}
              >
                {/* Highlight Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    index === 0 ? 'bg-[#FF5722]/20 text-[#FF5722]' :
                    index === 1 ? 'bg-[#FF007A]/20 text-[#FF007A]' :
                    'bg-[#00F0FF]/20 text-[#00F0FF]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {service.highlight}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-4 space-y-2.5 border-t border-white/5">
                    {service.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={`https://t.me/ReddFan_Studio?text=${encodeURIComponent(
                      lang === 'ru' 
                        ? `Здравствуйте! Интересует услуга "${service.title}". Расскажите детали и условия.`
                        : `Hello! I am interested in "${service.title}". Please share details and pricing.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 bg-[#16182B] hover:bg-[#1E213A] text-white border border-white/10 hover:border-[#FF007A]/50 transition-all duration-200 group-hover:shadow-lg"
                  >
                    <Send className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>{lang === 'ru' ? 'Заказать консультацию' : 'Book a consultation'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
