import React, { useState } from 'react';
import { Send, ArrowDown, ShieldCheck, Flame, Zap, TrendingUp, Sparkles } from 'lucide-react';

export default function Hero({ t }) {
  // 3D tilt effect on mouse move
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    // Only apply tilt on larger screens
    if (window.innerWidth < 768) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 14);
    setRotateY(x / 14);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background cyber glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[550px] md:w-[750px] h-[300px] sm:h-[550px] md:h-[750px] bg-gradient-to-tr from-[#FF5722]/20 via-[#FF007A]/25 to-[#8A2BE2]/20 blur-[100px] md:blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-2 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#00F0FF]/15 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-2 sm:right-10 w-56 sm:w-80 h-56 sm:h-80 bg-[#FF5722]/15 blur-[80px] sm:blur-[110px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left copy, Right 3D visual mascot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Value Prop, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#16182B]/80 border border-[#FF007A]/40 text-[11px] sm:text-xs md:text-sm font-semibold text-slate-200 shadow-lg shadow-[#FF007A]/15 backdrop-blur-md">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5722] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5722]"></span>
              </span>
              <span>{t.hero.badge}</span>
            </div>

            {/* Main title */}
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] tracking-tight leading-[1.12] sm:leading-[1.08] text-white">
              {t.hero.titleStart}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-[#FF007A] to-[#00F0FF] drop-shadow-sm">
                {t.hero.titleHighlight}
              </span>
              {t.hero.titleEnd}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-2">
              <a
                href="#accounts"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#FF5722] via-[#FF007A] to-[#8A2BE2] shadow-xl shadow-[#FF5722]/30 hover:shadow-[#FF007A]/50 active:scale-[0.98] transition-all duration-200"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="https://t.me/ReddFan_Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#141628]/90 hover:bg-[#1A1E35] border border-white/10 hover:border-[#00F0FF]/50 shadow-lg shadow-black/40 active:scale-[0.98] transition-all duration-200"
              >
                <Send className="w-4 h-4 text-[#00F0FF]" />
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Guarantee subtext */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 pt-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.hero.subtext}</span>
            </div>

            {/* Trust pill */}
            <div className="pt-2 border-t border-white/5 w-full">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide font-semibold text-center lg:text-left">
                ⭐️ {t.hero.trustPill}
              </p>
            </div>

          </div>

          {/* Right Column: 3D Interactive Mascot & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative pt-4 lg:pt-0">
            
            {/* Outer Container with Perspective for 3D card tilt */}
            <div 
              className="relative perspective-1000 p-2 sm:p-4 max-w-full"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              
              {/* Center Glow aura */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5722]/30 via-[#FF007A]/40 to-[#00F0FF]/30 blur-3xl rounded-full transform scale-90 -z-10 animate-pulse-slow"></div>

              {/* 3D Tilted Card holding the Mascot Logo */}
              <div 
                className="relative w-[260px] sm:w-[340px] md:w-[410px] aspect-square rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 shadow-2xl backdrop-blur-2xl transition-transform duration-200 ease-out mx-auto"
                style={{
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Inner image frame */}
                <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                  <img 
                    src="/logo.jpg" 
                    alt="ReddFan Studio 3D Mascot" 
                    className="w-full h-full object-cover rounded-2xl filter drop-shadow-[0_15px_35px_rgba(255,0,122,0.35)] transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Floating Badge 1: Top-Left (Ban-Free) */}
                <div 
                  className="absolute -top-3 -left-2 sm:-top-5 sm:-left-6 bg-[#0E101E]/95 border border-emerald-500/40 rounded-xl px-2.5 py-1.5 sm:px-3.5 sm:py-2 shadow-xl shadow-black/70 backdrop-blur-md flex items-center gap-2 animate-float"
                  style={{ transform: 'translateZ(35px)' }}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">99.8% Ban-Free</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400">Clean Res. IP</div>
                  </div>
                </div>

                {/* Floating Badge 2: Top-Right (Karma Boost) */}
                <div 
                  className="absolute -top-3 -right-2 sm:-top-5 sm:-right-6 bg-[#0E101E]/95 border border-[#FF5722]/50 rounded-xl px-2.5 py-1.5 sm:px-3.5 sm:py-2 shadow-xl shadow-black/70 backdrop-blur-md flex items-center gap-2 animate-float"
                  style={{ animationDelay: '1.5s', transform: 'translateZ(45px)' }}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#FF5722]/20 flex items-center justify-center text-[#FF5722] shrink-0">
                    <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">3,000 Karma VIP</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400">Ready to Post</div>
                  </div>
                </div>

                {/* Floating Badge 3: Bottom-Left (Revenue) */}
                <div 
                  className="absolute -bottom-3 -left-2 sm:-bottom-5 sm:-left-6 bg-[#0E101E]/95 border border-[#00F0FF]/40 rounded-xl px-2.5 py-1.5 sm:px-3.5 sm:py-2 shadow-xl shadow-black/70 backdrop-blur-md flex items-center gap-2 animate-float"
                  style={{ animationDelay: '3s', transform: 'translateZ(40px)' }}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#00F0FF]/20 flex items-center justify-center text-[#00F0FF] shrink-0">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">Top 0.1% OF</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400">Tier-1 Funnels</div>
                  </div>
                </div>

                {/* Floating Badge 4: Bottom-Right (Instant) */}
                <div 
                  className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-6 bg-[#0E101E]/95 border border-[#FF007A]/50 rounded-xl px-2.5 py-1.5 sm:px-3.5 sm:py-2 shadow-xl shadow-black/70 backdrop-blur-md flex items-center gap-2 animate-float"
                  style={{ animationDelay: '2.2s', transform: 'translateZ(30px)' }}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#FF007A]/20 flex items-center justify-center text-[#FF007A] shrink-0">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">&lt; 10 min</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400">via Telegram</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Live Counters Stats Bar */}
        <div className="mt-12 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {t.hero.stats.map((stat, i) => (
            <div 
              key={i}
              className="glass-card rounded-2xl p-3.5 sm:p-5 md:p-6 text-center border-gradient-glow hover:border-[#FF5722]/50 transition-all duration-300"
            >
              <div className="font-display font-black text-xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs md:text-sm font-medium text-slate-400 mt-1 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Subreddit / Traffic Sources Ticker */}
        <div className="mt-6 sm:mt-8 py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl bg-[#0D0E1A]/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-semibold text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="w-4 h-4 text-[#FF7A00] shrink-0" />
            <span>Target Channels:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 md:gap-6 text-slate-300 text-[11px] sm:text-xs">
            <span className="hover:text-[#FF7A00] transition-colors">r/all Dominance</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hover:text-[#FF007A] transition-colors">120+ NSFW Subs</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hover:text-[#00F0FF] transition-colors">OnlyFans & Fansly Funnels</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hover:text-emerald-400 transition-colors">US / UK / CA / AU Audience</span>
          </div>
        </div>

      </div>
    </section>
  );
}
