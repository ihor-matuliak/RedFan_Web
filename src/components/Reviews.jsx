import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquare, TrendingUp, ThumbsUp, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';

export default function Reviews({ t, lang }) {
  return (
    <section className="py-20 md:py-28 relative">
      {/* Glows */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#FF007A]/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#16182B] border border-[#FF007A]/40 text-xs font-bold text-[#FF007A] tracking-wide uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.reviews.badge}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            {t.reviews.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {t.reviews.subtitle}
          </p>

          {/* Rating Summary Bar */}
          <div className="inline-flex items-center gap-2 pt-2 text-xs sm:text-sm font-semibold text-amber-400">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-slate-200">{t.reviews.ratingSummary}</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-14">
          {t.reviews.items.map((review, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-[#FF007A]/40 transition-all duration-300 shadow-xl relative group"
            >
              {/* Telegram chat style quote mark */}
              <div className="space-y-4">
                
                {/* User Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FF007A]/40"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-base sm:text-lg text-white">
                          {review.name}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" title={t.reviews.verifiedClient} />
                      </div>
                      <div className="text-xs text-slate-400">
                        {review.role}
                      </div>
                    </div>
                  </div>

                  {/* Stars & Date */}
                  <div className="text-right">
                    <div className="flex text-amber-400 justify-end">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {review.date}
                    </span>
                  </div>
                </div>

                {/* Purchase Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0C0E1B] border border-white/5 text-[11px] font-semibold text-[#00F0FF]">
                  <Award className="w-3.5 h-3.5" />
                  <span>{review.karmaBought}</span>
                </div>

                {/* Review text */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  "{review.text}"
                </p>

              </div>

              {/* Bottom Verification Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t.reviews.verifiedClient}</span>
                </span>
                <span className="text-slate-500">via Telegram @ReddFan_Studio</span>
              </div>

            </div>
          ))}
        </div>

        {/* Visual Proof Case Study Mockup */}
        <div className="mt-16 glass-card rounded-3xl p-6 sm:p-10 border border-[#00F0FF]/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00F0FF]/20 text-xs font-bold text-[#00F0FF]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{lang === 'ru' ? 'Кейс Месяца' : 'Case Study of the Month'}</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {lang === 'ru' 
                  ? 'Рост OnlyFans модели с $2,000 до $10,000/месяц за 45 дней' 
                  : 'Scaling an OnlyFans creator from $2,000 to $10,000/mo in 45 days'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === 'ru'
                  ? 'Использовали 3 прогретых аккаунта с отлежкой 6-8 недель, целевой постинг в 25 профильных сабреддитах и органический пуш. 0 блокировок и стабильный поток новых платных фанов.'
                  : 'Deployed 3 pre-warmed accounts with 6-8 weeks aging, targeted posting in 25 niche subreddits, and organic momentum. Zero flags and a steady stream of paying fans.'}
              </p>
              
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#0C0E1A] border border-white/5 text-center">
                  <div className="font-display font-black text-lg sm:text-xl text-[#FF7A00]">+400%</div>
                  <div className="text-[10px] text-slate-400">MRR Growth</div>
                </div>
                <div className="p-3 rounded-xl bg-[#0C0E1A] border border-white/5 text-center">
                  <div className="font-display font-black text-lg sm:text-xl text-[#00F0FF]">$10,000</div>
                  <div className="text-[10px] text-slate-400">Monthly Rev</div>
                </div>
                <div className="p-3 rounded-xl bg-[#0C0E1A] border border-white/5 text-center">
                  <div className="font-display font-black text-lg sm:text-xl text-emerald-400">0 bans</div>
                  <div className="text-[10px] text-slate-400">Full Safety</div>
                </div>
              </div>
            </div>

            {/* Simulated Reddit Viral Post Widget */}
            <div className="lg:col-span-6 bg-[#0E101D] p-5 rounded-2xl border border-white/10 shadow-2xl space-y-3 font-sans">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-2">
                <span className="font-semibold text-slate-200">r/goddesses • Posted by u/ReddFan_VIP</span>
                <span className="text-emerald-400 font-medium">Verified OP</span>
              </div>
              <div className="font-semibold text-sm sm:text-base text-white">
                "Felt cute in my new set, thought Reddit might appreciate it ✨ [OC]"
              </div>
              <div className="h-28 rounded-xl bg-gradient-to-r from-purple-900/40 via-pink-900/30 to-[#121422] flex items-center justify-center border border-white/5 relative overflow-hidden">
                <div className="text-center space-y-1">
                  <span className="text-xs font-bold text-[#FF007A] uppercase tracking-wider block">Viral Reddit Thread</span>
                  <span className="text-2xl font-black text-white">#1 on r/all NSFW</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 pt-1">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[#FF5722]">
                    <ThumbsUp className="w-3.5 h-3.5" /> 5,420 Upvotes (99%)
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <MessageSquare className="w-3.5 h-3.5" /> 412 Comments
                  </span>
                </div>
                <span className="text-[#00F0FF] bg-[#00F0FF]/10 px-2.5 py-0.5 rounded-full">
                  18 Awards
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
