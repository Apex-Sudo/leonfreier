import { getDictionary, locales, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = getDictionary(locale);

  const prefix = locale === 'en' ? '' : `/${locale}`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang="${locale}"` }} />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/80 backdrop-blur-md border-b border-black/[0.04]">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href={prefix || '/'} className="hover:opacity-70 transition-opacity">
            <img src="/icon-light.svg" alt="LF" className="h-7 w-7" />
          </a>
          <div className="flex items-center gap-6">
            <a href={`${prefix}/spielzuege`} className="text-[13px] text-foreground/60 hover:text-foreground transition-colors">
              {dict.nav.spielzuege}
            </a>
            <a href="mailto:leon@maxresult.ai" className="text-[13px] text-foreground/60 hover:text-foreground transition-colors">
              {dict.nav.contact}
            </a>
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
