import React from 'react';
import { Send, Shield, Heart } from 'lucide-react';

export default function Footer({ t, lang }) {
  return (
    <footer className="border-t border-white/5 bg-[#05060A] pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="ReddFan Studio" 
                className="w-10 h-10 rounded-full ring-2 ring-[#FF007A]/50 object-cover"
              />
              <span className="font-display font-black text-xl text-white">
                Redd<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FF007A]">Fan</span> Studio
              </span>
            </div>
            
            <p className="text-slate-400 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{t.footer.supportTime}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#accounts" className="hover:text-white transition-colors">{t.nav.accounts}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">{t.nav.calculator}</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">{t.nav.reviews}</a>
              </li>
              <li>
                <a href="#shield" className="hover:text-white transition-colors">{t.nav.shield}</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">{t.nav.faq}</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Telegram Inquiries */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider">
              {t.footer.contactsTitle}
            </h4>
            <p className="text-xs text-slate-400">
              {lang === 'ua' 
                ? 'Усі замовлення, видача акаунтів та консультації проводяться через офіційний акаунт:' 
                : 'All orders, account dispatches, and private inquiries are processed via our official desk:'}
            </p>

            <a
              href="https://t.me/ReddFan_Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#121424] hover:bg-[#181B30] border border-[#00F0FF]/30 text-white text-xs font-bold transition-all shadow-md shadow-black/40"
            >
              <Send className="w-4 h-4 text-[#00F0FF]" />
              <span>@ReddFan_Studio</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>{t.footer.copyright}</div>
          <div className="flex items-center gap-1">
            <span>Powered for high-converting traffic</span>
            <span className="text-[#FF007A]">⚡</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
