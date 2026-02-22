'use client';

import { usePathname } from 'next/navigation';

const labels: Record<string, string> = {
  en: 'EN',
  vi: 'VI',
  zh: '中文',
  ru: 'RU',
};

const locales = ['en', 'vi', 'zh', 'ru'] as const;

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();

  function getLocalePath(locale: string) {
    // Strip current locale prefix from pathname
    let path = pathname;
    for (const l of locales) {
      if (l !== 'en' && (path.startsWith(`/${l}/`) || path === `/${l}`)) {
        path = path.slice(l.length + 1) || '/';
        break;
      }
    }
    if (locale === 'en') return path || '/';
    return `/${locale}${path === '/' ? '' : path}`;
  }

  return (
    <div className="flex items-center gap-1 text-[12px]">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && <span className="text-foreground/20 mx-1">|</span>}
          {locale === currentLocale ? (
            <span className="text-foreground font-medium">{labels[locale]}</span>
          ) : (
            <a
              href={getLocalePath(locale)}
              className="text-foreground/40 hover:text-foreground transition-colors"
            >
              {labels[locale]}
            </a>
          )}
        </span>
      ))}
    </div>
  );
}
