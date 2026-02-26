import { getDictionary, locales, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import NavBar from './NavBar';

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
      <NavBar locale={locale} dict={dict} prefix={prefix} />
      {children}
    </>
  );
}
