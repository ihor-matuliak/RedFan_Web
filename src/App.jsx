import React, { useState } from 'react';
import { content } from './data/content';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AccountsCatalog from './components/AccountsCatalog';
import Services from './components/Services';
import TrafficCalculator from './components/TrafficCalculator';
import Reviews from './components/Reviews';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import TelegramWidget from './components/TelegramWidget';

export default function App() {
  const [lang, setLang] = useState('ru');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#08080C] text-slate-100 font-sans selection:bg-[#FF007A] selection:text-white bg-grid-pattern relative">
      
      {/* Dynamic Ambient Background Elements */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none -z-10"></div>

      {/* Navigation */}
      <Navbar lang={lang} setLang={setLang} t={t} />

      {/* Main Content */}
      <main>
        <Hero t={t} />
        <AccountsCatalog t={t} lang={lang} />
        <Services t={t} lang={lang} />
        <TrafficCalculator t={t} lang={lang} />
        <Reviews t={t} lang={lang} />
        <Comparison t={t} lang={lang} />
        <FAQ t={t} />
        <CtaBanner t={t} lang={lang} />
      </main>

      {/* Footer */}
      <Footer t={t} lang={lang} />

      {/* Floating Telegram Widget */}
      <TelegramWidget t={t} />

    </div>
  );
}
