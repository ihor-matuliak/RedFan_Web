import React, { useState, useEffect } from 'react';
import { Send, Menu, X, Globe, Flame, ShieldCheck } from 'lucide-react';

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

  const navLinks = [
    { name: t.nav.accounts, href: "#accounts" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.calculator, href: "#calculator" },
    { name: t.nav.reviews, href: "#reviews" },
    { name: t.nav.shield, href: "#shield" },
    { name: t.nav.faq, href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#08080C]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-[#FF5722] via-[#FF007A] to-[#00F0FF] shadow-lg shadow-[#FF007A]/25 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/logo.jpg" 
                alt="ReddFan Studio Logo" 
                className="w-full h-full object-cover rounded-full bg-[#0d0e17]"
              />
            </div>
            {/* Online indicator ping */}
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#08080C] rounded-full">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            </span>
          </div>
          
          <div className="flex flex-col">
            <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white flex items-center gap-1">
              Redd<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FF007A]">Fan</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00F0FF] border border-[#00F0FF]/30 px-1.5 py-0.5 rounded ml-1">Studio</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.nav.onlineStatus}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#121422]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Lang Switcher & TG CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Toggle Button */}
          <button
            onClick={() => setLang(lang === 'ua' ? 'en' : 'ua')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#141627] text-slate-300 hover:text-white border border-white/10 hover:border-[#FF5722]/50 transition-all cursor-pointer"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span className="uppercase tracking-wider">{lang === 'ua' ? 'EN' : 'UA'}</span>
          </button>

          {/* Telegram CTA */}
          <a
            href="https://t.me/ReddFan_Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#FF5722] via-[#FF007A] to-[#00F0FF] animate-glow-spin group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d0e17] text-xs sm:text-sm font-semibold text-white group-hover:bg-[#121422] transition-colors shadow-lg">
              <Send className="w-3.5 h-3.5 text-[#00F0FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>{t.nav.ctaButton}</span>
              <span className="hidden md:inline text-slate-400 font-normal text-xs">{t.nav.telegramHandle}</span>
            </span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === 'ua' ? 'en' : 'ua')}
            className="px-2 py-1 rounded text-xs font-bold bg-[#141627] text-slate-200 border border-white/10"
          >
            {lang === 'ua' ? 'EN' : 'UA'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#141627] text-slate-200 border border-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0D0E17]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10">
            <a
              href="https://t.me/ReddFan_Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#FF5722] via-[#FF007A] to-[#8A2BE2] text-white font-bold text-sm shadow-lg shadow-[#FF5722]/30"
            >
              <Send className="w-4 h-4" />
              <span>Telegram: {t.nav.telegramHandle}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
