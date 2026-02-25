import Image from "next/image";
import { getDictionary, type Locale } from '@/lib/i18n';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const t = dict.home;

  return (
    <main className="min-h-screen">

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero px-6 pt-28 pb-8 md:pt-36 md:pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <Image
              src="/leon.webp"
              alt="Leon Freier"
              width={220}
              height={220}
              className="rounded-2xl photo-ring flex-shrink-0 w-[160px] h-[160px] md:w-[220px] md:h-[220px] object-cover"
              priority
            />
            <div>
              <h1 className="text-3xl md:text-[2.5rem] font-['Lust_Pro'] tracking-tight leading-[1.1] mb-3 whitespace-nowrap">Leon Aljoscha Till Freier</h1>
              <p className="text-base leading-relaxed text-foreground/75 max-w-lg">
                {t.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Belief ═══ */}
      <section className="px-6 pt-10 pb-4 md:pt-14 md:pb-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[20px] font-medium leading-snug tracking-wide text-accent">
            {t.tagline}
          </p>
        </div>
      </section>

      {/* ═══ Companies ═══ */}
      <section className="px-6 py-10 md:py-14">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">

            <div className="glass-card p-7 transition-all duration-200 hover:border-accent/20 hover:shadow-md">
              <div className="flex items-baseline justify-between gap-4">
                <a href="https://danangbeachvillas.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-accent hover:underline decoration-accent/30 underline-offset-4 transition-colors">
                  Da Nang Beach Villas
                </a>
                <span className="text-[13px] text-muted shrink-0">{t.dnbv_date}</span>
              </div>
              <p className="text-base leading-relaxed text-foreground/60 mt-2">
                {t.dnbv_deep}
              </p>
            </div>

            <div className="glass-card p-7 transition-all duration-200 hover:border-accent/20 hover:shadow-md">
              <div className="flex items-baseline justify-between gap-4">
                <a href="https://apexalpha.app" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-accent hover:underline decoration-accent/30 underline-offset-4 transition-colors">
                  ApexAlpha
                </a>
                <span className="text-[13px] text-muted shrink-0">{t.aa_date}</span>
              </div>
              <p className="text-base leading-relaxed text-foreground/60 mt-2">
                {t.aa_deep}
              </p>
            </div>

            <div className="glass-card p-7 transition-all duration-200 hover:border-accent/20 hover:shadow-md">
              <div className="flex items-baseline justify-between gap-4">
                <a href="https://forgehouse.io" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-accent hover:underline decoration-accent/30 underline-offset-4 transition-colors">
                  ForgeHouse
                </a>
                <span className="text-[13px] text-muted shrink-0">{t.fh_date}</span>
              </div>
              <p className="text-base leading-relaxed text-foreground/60 mt-2">
                {t.fh_deep}
              </p>
            </div>

          </div>

          <div className="pl-6 border-l-2 border-accent/20 mt-8">
            <p className="text-[14px] text-foreground/45 italic leading-relaxed">
              &ldquo;{t.value_p1}&rdquo;
            </p>
          </div>
          <a href={`/${lang === 'en' ? '' : lang + '/'}spielzuege`} className="inline-block mt-4 text-[15px] font-medium text-accent hover:text-foreground transition-colors">
            {t.see_work} &rarr;
          </a>
        </div>
      </section>

      {/* ═══ Writing + Contact ═══ */}
      <section className="px-6 pb-12 md:pb-18">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8">
              <div>
                <h2 className="text-[13px] font-medium tracking-widest text-muted uppercase mb-4">{t.writing}</h2>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/leonfreier/" target="_blank" rel="noopener noreferrer" className="accent-link text-base">
                    LinkedIn &rarr;
                  </a>
                  <a href="https://substack.com/@leonfreier" target="_blank" rel="noopener noreferrer" className="accent-link text-base">
                    Substack &rarr;
                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-[13px] font-medium tracking-widest text-muted uppercase mb-4">{t.contact}</h2>
                <div className="flex gap-6">
                  <a href="mailto:leon@maxresult.ai" className="accent-link text-base">
                    leon@maxresult.ai
                  </a>
                  <a href="https://wa.me/4915758182075" target="_blank" rel="noopener noreferrer" className="accent-link text-base">
                    WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 pt-6 pb-10">
        <div className="max-w-3xl mx-auto border-t border-border pt-6">
          <p className="text-[13px] text-muted">{t.footer}</p>
        </div>
      </footer>

    </main>
  );
}
