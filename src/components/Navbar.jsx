import React, { useState, useEffect } from 'react';
import { Send, Menu, X, Globe, ChevronRight } from 'lucide-react';

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t.nav.accounts, href: "#accounts" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.calculator, href: "#calculator" },
    { name: t.nav.reviews, href: "#reviews" },
    { name: t.nav.shield, href: "#shield" },
    { name: t.nav.faq, href: "#faq" },
  ];

  const handleMobileNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#08080C]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-3' 
        : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-[#FF5722] via-[#FF007A] to-[#00F0FF] shadow-lg shadow-[#FF007A]/25 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/logo.jpg" 
                alt="ReddFan Studio Logo" 
                className="w-full h-full object-cover rounded-full bg-[#0d0e17]"
              />
            </div>
            {/* Online indicator ping */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 border-2 border-[#08080C] rounded-full">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            </span>
          </div>
          
          <div className="flex flex-col">
            <span className="font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight text-white flex items-center gap-1 whitespace-nowrap">
              Redd<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FF007A]">Fan</span>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#00F0FF] border border-[#00F0FF]/30 px-1 py-0.5 rounded ml-0.5 sm:ml-1">Studio</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium tracking-wide flex items-center gap-1 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.nav.onlineStatus}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - prevent line breaks */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 bg-[#121422]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white px-2.5 xl:px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Lang Switcher & TG CTA */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          {/* Language Toggle Button */}
          <button
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#141627] text-slate-300 hover:text-white border border-white/10 hover:border-[#FF5722]/50 transition-all cursor-pointer whitespace-nowrap"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span className="uppercase tracking-wider">{lang === 'ru' ? 'EN' : 'RU'}</span>
          </button>

          {/* Telegram CTA */}
          <a
            href="https://t.me/ReddFan_Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#FF5722] shrink-0"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#FF5722] via-[#FF007A] to-[#00F0FF] animate-glow-spin group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center gap-2 px-3.5 xl:px-4 py-2 rounded-full bg-[#0d0e17] text-xs sm:text-sm font-semibold text-white group-hover:bg-[#121422] transition-colors shadow-lg whitespace-nowrap">
              <Send className="w-3.5 h-3.5 text-[#00F0FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              <span className="whitespace-nowrap">{t.nav.ctaButton}</span>
              <span className="hidden xl:inline text-slate-400 font-normal text-xs whitespace-nowrap">{t.nav.telegramHandle}</span>
            </span>
          </a>
        </div>

        {/* Mobile menu toggle & Lang button */}
        <div className="flex sm:hidden items-center gap-2 shrink-0">
          <button
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
            className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#141627] text-slate-200 border border-white/10 flex items-center gap-1"
          >
            <Globe className="w-3 h-3 text-[#00F0FF]" />
            <span>{lang === 'ru' ? 'EN' : 'RU'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#141627] text-slate-200 border border-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF007A]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Fullscreen App-style Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] bottom-0 bg-[#08080C]/98 backdrop-blur-2xl border-t border-white/10 px-6 py-6 sm:hidden flex flex-col justify-between z-[60] overflow-y-auto animate-in fade-in duration-200">
          
          {/* Navigation Links */}
          <div className="flex flex-col space-y-1.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavClick(link.href);
                }}
                className="flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-bold text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10 border border-transparent hover:border-white/5 transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          {/* Bottom Drawer Actions */}
          <div className="pt-6 pb-2 space-y-3 border-t border-white/10">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{t.nav.onlineStatus}</span>
              </span>
              <span>24/7 VIP Support</span>
            </div>

            <a
              href="https://t.me/ReddFan_Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF5722] via-[#FF007A] to-[#8A2BE2] text-white font-bold text-sm shadow-xl shadow-[#FF5722]/30 active:scale-95 transition-transform"
            >
              <Send className="w-4 h-4 text-[#00F0FF]" />
              <span>Telegram: {t.nav.telegramHandle}</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
