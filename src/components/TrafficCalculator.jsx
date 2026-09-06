import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, Eye, Sparkles, Send } from 'lucide-react';

export default function TrafficCalculator({ t, lang }) {
  const [tierIndex, setTierIndex] = useState(2); // 0 to 4
  const [modelsCount, setModelsCount] = useState(2); // 1 to 10

  const tiers = [
    { 
      label: "200 Comment ($25)", 
      baseViews: 18000, 
      baseClicks: 260, 
      baseRev: 950, 
      packRu: "Starter Comment (200 Comment, отлежка 4+ нед.)", 
      packEn: "Starter Comment (200 Comment, 4+ weeks aged)" 
    },
    { 
      label: "1,500 Karma ($64)", 
      baseViews: 48000, 
      baseClicks: 680, 
      baseRev: 2500, 
      packRu: "Pro Growth 1.5k (1,500 Karma, отлежка 4+ нед.)", 
      packEn: "Pro Growth 1.5k (1,500 Karma, 4+ weeks aged)" 
    },
    { 
      label: "2,000 Karma ($69)", 
      baseViews: 85000, 
      baseClicks: 1200, 
      baseRev: 4500, 
      packRu: "Advanced Authority 2k (2,000 Karma, отлежка 6+ нед.)", 
      packEn: "Advanced Authority 2k (2,000 Karma, 6+ weeks aged)" 
    },
    { 
      label: "2,500+ Karma ($74)", 
      baseViews: 150000, 
      baseClicks: 2100, 
      baseRev: 7200, 
      packRu: "Elite Heavyweight (2,500+ Karma, отлежка 6-8 нед.)", 
      packEn: "Elite Heavyweight (2,500+ Karma, 6-8 weeks aged)" 
    },
    { 
      label: "3,000 VIP ($200)", 
      baseViews: 320000, 
      baseClicks: 4500, 
      baseRev: 10000, 
      packRu: "VIP Supreme Trust (3,000 Karma + ID + Донат, 8+ нед.)", 
      packEn: "VIP Supreme Trust (3,000 Karma + ID + Donation, 8+ wks)" 
    }
  ];

  const currentTier = tiers[tierIndex];
  const multiplier = 0.6 + modelsCount * 0.4;
  const totalViews = Math.round(currentTier.baseViews * multiplier).toLocaleString();
  const totalClicks = Math.round(currentTier.baseClicks * multiplier).toLocaleString();
  const totalRev = Math.round(currentTier.baseRev * multiplier).toLocaleString();
  const recommendedPack = lang === 'ru' ? currentTier.packRu : currentTier.packEn;

  const handleOrderCalculated = () => {
    const text = lang === 'ru'
      ? `Здравствуйте! Рассчитал сетап в калькуляторе ReddFan Studio: ${currentTier.label} для ${modelsCount} моделей. Рекомендуемый пакет: "${recommendedPack}". Ожидаемый доход: ~$${totalRev}. Подскажите наличие и реквизиты.`
      : `Hello! I calculated a setup on ReddFan Calculator: ${currentTier.label} for ${modelsCount} creators. Recommended pack: "${recommendedPack}". Projected rev: ~$${totalRev}. Please provide availability and details.`;
    window.open(`https://t.me/ReddFan_Studio?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#16182B] border border-[#FF7A00]/40 text-xs font-bold text-[#FF7A00] tracking-wide uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.calculator.badge}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            {t.calculator.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="mt-14 max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle decorative glow inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF007A]/20 via-[#FF5722]/10 to-transparent blur-2xl pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Inputs Column */}
            <div className="md:col-span-6 space-y-7">
              
              {/* Slider 1: Karma Tier */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-200">
                    {t.calculator.karmaLabel}
                  </label>
                  <span className="font-display font-extrabold text-xs sm:text-sm text-[#00F0FF] bg-[#0E1020] px-3 py-1 rounded-lg border border-[#00F0FF]/30">
                    {currentTier.label}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={tierIndex}
                  onChange={(e) => setTierIndex(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#1B1D33] rounded-lg appearance-none cursor-pointer accent-[#FF5722]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
                  <span>200</span>
                  <span>1.5k</span>
                  <span>2k</span>
                  <span>2.5k+</span>
                  <span>3k VIP</span>
                </div>
              </div>

              {/* Slider 2: Models / Projects Count */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-200">
                    {t.calculator.modelsLabel}
                  </label>
                  <span className="font-display font-extrabold text-sm sm:text-base text-[#FF007A] bg-[#0E1020] px-3 py-1 rounded-lg border border-[#FF007A]/30">
                    {modelsCount} {lang === 'ru' ? (modelsCount === 1 ? 'модель' : modelsCount < 5 ? 'модели' : 'моделей') : (modelsCount === 1 ? 'creator' : 'creators')}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={modelsCount}
                  onChange={(e) => setModelsCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#1B1D33] rounded-lg appearance-none cursor-pointer accent-[#FF007A]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
                  <span>1</span>
                  <span>3</span>
                  <span>5</span>
                  <span>7</span>
                  <span>10+</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#090A14] border border-white/5 space-y-1">
                <div className="text-xs text-slate-400 font-medium">{t.calculator.recommendedPack}</div>
                <div className="font-display font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#FF7A00] shrink-0" />
                  <span>{recommendedPack}</span>
                </div>
              </div>

            </div>

            {/* Results Column */}
            <div className="md:col-span-6 bg-gradient-to-b from-[#16182D] to-[#0D0E1A] p-6 sm:p-7 rounded-2xl border border-white/10 space-y-5 shadow-xl">
              
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#FF7A00] flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>{t.calculator.resultsTitle}</span>
              </div>

              {/* Metric 1: Views */}
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <Eye className="w-4 h-4 text-[#00F0FF]" />
                  <span>{t.calculator.estimatedReach}</span>
                </div>
                <div className="font-display font-black text-lg sm:text-xl text-white">
                  ~{totalViews}
                </div>
              </div>

              {/* Metric 2: Subs/Clicks */}
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <Users className="w-4 h-4 text-[#FF007A]" />
                  <span>{t.calculator.estimatedSubs}</span>
                </div>
                <div className="font-display font-black text-lg sm:text-xl text-white">
                  ~{totalClicks}
                </div>
              </div>

              {/* Metric 3: Revenue */}
              <div className="pt-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span>{t.calculator.estimatedRevenue}</span>
                </div>
                <div className="font-display font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-[#00F0FF] mt-1">
                  ${totalRev} <span className="text-xs font-bold text-slate-400">/ mo</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleOrderCalculated}
                className="w-full mt-3 py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#FF5722] via-[#FF007A] to-[#8A2BE2] text-white shadow-lg shadow-[#FF5722]/30 hover:shadow-[#FF007A]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t.calculator.orderCalculated}</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
