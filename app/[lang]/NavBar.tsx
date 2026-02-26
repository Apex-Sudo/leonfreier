'use client';

import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import type { Locale } from '@/lib/i18n';

interface NavBarProps {
  locale: Locale;
  dict: {
    nav: {
      spielzuege: string;
      contact: string;
    };
  };
  prefix: string;
}

export default function NavBar({ locale, dict, prefix }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/80 backdrop-blur-md border-b border-black/[0.04]">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href={prefix || '/'} className="hover:opacity-70 transition-opacity">
          <img src="/icon-light.svg" alt="LF" className="h-7 w-7" />
        </a>

        {/* Desktop nav - visible md+ */}
        <div className="hidden md:flex items-center gap-6">
          <a href={`${prefix}/spielzuege`} className="text-[13px] text-foreground/60 hover:text-foreground transition-colors">
            {dict.nav.spielzuege}
          </a>
          <a href={`${prefix}/alignment`} className="text-[13px] text-foreground/60 hover:text-foreground transition-colors">
            Alignment
          </a>
          <a href="mailto:leon@maxresult.ai" className="text-[13px] text-foreground/60 hover:text-foreground transition-colors">
            {dict.nav.contact}
          </a>
          <div className="ml-4">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>

        {/* Mobile hamburger - visible <md */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center"
          aria-label="Toggle menu"
        >
          <span className="w-5 h-[2px] bg-foreground/60 transition-all" />
          <span className="w-5 h-[2px] bg-foreground/60 transition-all" />
          <span className="w-5 h-[2px] bg-foreground/60 transition-all" />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-b border-black/[0.04]">
          <div className="max-w-3xl mx-auto px-6 py-4 flex flex-col gap-4">
            <a
              href={`${prefix}/spielzuege`}
              className="text-[13px] text-foreground/60 hover:text-foreground transition-colors"
              onClick={closeMenu}
            >
              {dict.nav.spielzuege}
            </a>
            <a
              href={`${prefix}/alignment`}
              className="text-[13px] text-foreground/60 hover:text-foreground transition-colors"
              onClick={closeMenu}
            >
              Alignment
            </a>
            <a
              href="mailto:leon@maxresult.ai"
              className="text-[13px] text-foreground/60 hover:text-foreground transition-colors"
              onClick={closeMenu}
            >
              {dict.nav.contact}
            </a>
            <div className="pt-2 border-t border-black/[0.04]">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
