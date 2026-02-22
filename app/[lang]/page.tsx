import Image from "next/image";
import { getDictionary, type Locale } from '@/lib/i18n';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const t = dict.home;

  return (
    <main className="min-h-screen">

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero px-6 pt-28 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            <Image
              src="/leon.webp"
              alt="Leon Freier"
              width={200}
              height={200}
              className="rounded-2xl photo-ring flex-shrink-0 w-[160px] h-[160px] md:w-[200px] md:h-[200px] object-cover"
              priority
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3">Leon Freier</h1>
              <p className="text-accent font-medium text-[14px] tracking-wide mb-4">{t.tagline}</p>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-foreground/75 max-w-lg">
                {t.intro}
              </p>
              <p className="text-muted text-[13px] mt-4">{t.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Belief ═══ */}
      <section className="px-6 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[22px] md:text-[28px] font-semibold leading-snug tracking-tight text-foreground/90 max-w-2xl">
            {t.belief_1}
            <br />
            {t.belief_2}
          </p>
        </div>
      </section>

      {/* ═══ Dark break ═══ */}
      <section className="bg-[#1A1A1A] text-[#FAFAF8] px-6 py-12 md:py-14">
        <div className="max-w-3xl mx-auto">
          <p className="text-[17px] md:text-[19px] font-medium text-[#FAFAF8]/70">
            {t.pattern_text}
          </p>
        </div>
      </section>

      {/* ═══ Companies ═══ */}
      <section className="px-6 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-5">

            <div className="glass-card p-7 transition-all duration-200 hover:border-accent/20">
              <div className="flex items-baseline justify-between gap-4">
                <a href="https://danangbeachvillas.com" target="_blank" rel="noopener noreferrer" className="company-name hover:underline decoration-accent/30 underline-offset-4">
                  Da Nang Beach Villas
                </a>
                <span className="text-[12px] text-muted shrink-0">{t.dnbv_date}</span>
              </div>
              <p className="text-[14px] leading-relaxed text-foreground/60 mt-2">
                {t.dnbv_deep}
              </p>
            </div>

            <div className="glass-card p-7 transition-all duration-200 hover:border-accent/20">
              <div className="flex items-baseline justify-between gap-4">
                <a href="https://apexalpha.app" target="_blank" rel="noopener noreferrer" className="company-name hover:underline decoration-accent/30 underline-offset-4">
                  ApexAlpha
                </a>
                <span className="text-[12px] text-muted shrink-0">{t.aa_date}</span>
              </div>
              <p className="text-[14px] leading-relaxed text-foreground/60 mt-2">
                {t.aa_deep}
              </p>
            </div>

            <div className="glass-card p-7 transition-all duration-200 hover:border-accent/20">
              <div className="flex items-baseline justify-between gap-4">
                <a href="https://forgehouse.io" target="_blank" rel="noopener noreferrer" className="company-name hover:underline decoration-accent/30 underline-offset-4">
                  ForgeHouse
                </a>
                <span className="text-[12px] text-muted shrink-0">{t.fh_date}</span>
              </div>
              <p className="text-[14px] leading-relaxed text-foreground/60 mt-2">
                {t.fh_deep}
              </p>
            </div>

          </div>

          <div className="mt-10 bg-[#1A1A1A] rounded-2xl p-8 md:p-10">
            <p className="text-[17px] md:text-[19px] font-medium text-[#FAFAF8]/90 leading-relaxed">
              {t.value_p1}
            </p>
            <a href={`/${lang === 'en' ? '' : lang + '/'}spielzuege`} className="inline-block mt-5 text-[14px] font-medium text-[#B8916A] hover:text-[#FAFAF8] transition-colors">
              {t.see_work} &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ═══ Writing + Contact ═══ */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8">
              <div>
                <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-4">{t.writing}</h2>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/leonfreier/" target="_blank" rel="noopener noreferrer" className="accent-link text-[15px]">
                    LinkedIn &rarr;
                  </a>
                  <a href="https://substack.com/@leonfreier" target="_blank" rel="noopener noreferrer" className="accent-link text-[15px]">
                    Substack &rarr;
                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-4">{t.contact}</h2>
                <div className="flex gap-6">
                  <a href="mailto:leon@maxresult.ai" className="accent-link text-[15px]">
                    leon@maxresult.ai
                  </a>
                  <a href="https://wa.me/4915758182075" target="_blank" rel="noopener noreferrer" className="accent-link text-[15px]">
                    WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 pt-8 pb-12">
        <div className="max-w-3xl mx-auto border-t border-border pt-8">
          <p className="text-[13px] text-muted/50">{t.footer}</p>
        </div>
      </footer>

    </main>
  );
}
