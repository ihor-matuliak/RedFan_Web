import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldAlert, Sparkles, Clock, Flame, Shield, Award, Layers } from 'lucide-react';

export default function AccountsCatalog({ t, lang }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = t.accounts.items.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const generateTgLink = (itemName, price) => {
    const text = lang === 'ru' 
      ? `Здравствуйте! Хочу приобрести аккаунт "${itemName}" (${price}) в ReddFan Studio. Подскажите наличие и реквизиты для оплаты.`
      : `Hello! I would like to purchase "${itemName}" (${price}) at ReddFan Studio. Please provide availability and payment details.`;
    return `https://t.me/ReddFan_Studio?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF5722]/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF007A]/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div id="accounts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#16182B] border border-[#FF5722]/40 text-xs font-bold text-[#FF7A00] tracking-wide uppercase">
            <Flame className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>{t.accounts.badge}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            {t.accounts.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {t.accounts.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10 mb-12">
          {[
            { id: 'all', label: t.accounts.filterAll },
            { id: 'starter', label: t.accounts.filterStarter },
            { id: 'mid', label: t.accounts.filterMid },
            { id: 'high', label: t.accounts.filterHigh },
            { id: 'vip', label: t.accounts.filterVip }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-[#FF5722] to-[#FF007A] text-white shadow-lg shadow-[#FF5722]/30 scale-105'
                  : 'bg-[#121422] text-slate-300 hover:text-white hover:bg-[#181A2D] border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                item.isPopular
                  ? 'bg-gradient-to-b from-[#1A182F] to-[#10111E] border-2 border-[#FF007A] shadow-2xl shadow-[#FF007A]/20 scale-[1.02]'
                  : item.isBestValue
                  ? 'bg-gradient-to-b from-[#1C1A27] to-[#0F101C] border-2 border-[#FF5722]/80 shadow-2xl shadow-[#FF5722]/20'
                  : item.category === 'vip'
                  ? 'bg-gradient-to-b from-[#1E1730] to-[#0D0E1C] border-2 border-[#00F0FF]/60 shadow-2xl shadow-[#00F0FF]/15'
                  : 'bg-[#10121F]/90 border border-white/10 hover:border-white/20 shadow-xl'
              }`}
            >
              {/* Badges on top */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
                  item.isPopular
                    ? 'bg-[#FF007A] text-white shadow-md shadow-[#FF007A]/40'
                    : item.isBestValue
                    ? 'bg-[#FF5722] text-white shadow-md shadow-[#FF5722]/40'
                    : item.category === 'vip'
                    ? 'bg-[#00F0FF] text-slate-900 shadow-md shadow-[#00F0FF]/40 font-black'
                    : 'bg-[#1D2035] text-[#00F0FF] border border-[#00F0FF]/30'
                }`}>
                  {item.badge}
                </span>

                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{t.accounts.instantBadge}</span>
                </div>
              </div>

              {/* Title & Karma */}
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {item.name}
                </h3>

                <div className="mt-3 p-3.5 rounded-xl bg-[#090A13] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Karma Level</div>
                    <div className="font-display font-black text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FF007A]">
                      {item.karma}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Отлежка / Age</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      {item.age}
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>{item.karmaRatio}</span>
                </div>

                {/* Features list */}
                <div className="mt-5 space-y-2.5">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="mt-8 pt-5 border-t border-white/10">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Стоимость / Price</span>
                    <span className="font-display font-black text-3xl sm:text-4xl text-white">
                      {item.price}
                    </span>
                  </div>
                  <div className="text-right max-w-[140px]">
                    <span className="text-[10px] text-slate-400 block">Для кого / Target</span>
                    <span className="text-xs font-semibold text-[#00F0FF] truncate block">
                      {item.recommendedFor}
                    </span>
                  </div>
                </div>

                <a
                  href={generateTgLink(item.name, item.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                    item.isPopular || item.isBestValue
                      ? 'bg-gradient-to-r from-[#FF5722] via-[#FF007A] to-[#8A2BE2] text-white shadow-lg shadow-[#FF5722]/30 hover:scale-[1.02]'
                      : item.category === 'vip'
                      ? 'bg-gradient-to-r from-[#00F0FF] via-[#FF007A] to-[#FF5722] text-slate-900 font-extrabold shadow-lg shadow-[#00F0FF]/30 hover:scale-[1.02]'
                      : 'bg-[#181A2D] hover:bg-[#20233B] text-white border border-white/10 hover:border-[#FF5722]/50'
                  }`}
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>{t.accounts.buyNow}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Wholesale & Referral Callout */}
        <div className="mt-14 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#16182B] via-[#1D172E] to-[#16182B] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5722]/20 text-xs font-bold text-[#FF7A00]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ru' ? 'Скидка 5-10% • Опт & Рефералы' : '5-10% Off • Bulk & Referrals'}</span>
            </div>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              {t.accounts.wholesaleNoticeTitle}
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              {t.accounts.wholesaleNoticeDesc}
            </p>
          </div>

          <a
            href="https://t.me/ReddFan_Studio?text=Hello!%20Interested%20in%20bulk%20or%20referral%20discount%20for%20Reddit%20accounts."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#FF7A00] to-[#FF007A] text-white shadow-xl shadow-[#FF007A]/30 hover:scale-105 transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{lang === 'ru' ? 'Получить скидку 5-10% в TG' : 'Claim 5-10% Discount in TG'}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
