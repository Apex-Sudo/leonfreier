import { getDictionary, type Locale } from '@/lib/i18n';

export default async function SpielzuegePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const t = dict.spielzuege_index;
  const prefix = lang === 'en' ? '' : `/${lang}`;

  return (
    <main className="min-h-screen pt-14">
      <section className="px-6 pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">{t.title}</h1>
          <p className="text-[15px] text-foreground/60">{t.subtitle}</p>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto space-y-5">
          <a href={`${prefix}/spielzuege/forgehouse`} className="glass-card p-8 block transition-all duration-200 hover:border-accent/20 hover:bg-accent/5">
            <h2 className="company-name">ForgeHouse</h2>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
              {t.forgehouse_desc_1}
            </p>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
              {t.forgehouse_desc_2}
            </p>
            <span className="text-accent text-[13px] mt-4 inline-block">{t.read_case} &rarr;</span>
          </a>

          <a href={`${prefix}/spielzuege/gpu-compute`} className="glass-card p-8 block transition-all duration-200 hover:border-accent/20 hover:bg-accent/5">
            <h2 className="company-name">{t.gpu_title}</h2>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
              {t.gpu_desc_1}
            </p>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
              {t.gpu_desc_2}
            </p>
            <span className="text-accent text-[13px] mt-4 inline-block">{t.read_case} &rarr;</span>
          </a>
        </div>
      </section>

      <footer className="px-6 pt-8 pb-12">
        <div className="max-w-3xl mx-auto border-t border-border pt-8 flex justify-between items-center">
          <a href={prefix || '/'} className="accent-link text-[13px]">
            &larr; leonfreier.com
          </a>
          <a href="mailto:leon@maxresult.ai" className="accent-link text-[13px]">
            leon@maxresult.ai
          </a>
        </div>
      </footer>
    </main>
  );
}
