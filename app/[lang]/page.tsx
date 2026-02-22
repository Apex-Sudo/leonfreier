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

      {/* ═══ The Thread ═══ */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/70 mb-10">
            {t.thread}
          </p>

          <div className="space-y-5">
            <div className="glass-card p-8 transition-all duration-200 hover:border-accent/20">
              <a href="https://danangbeachvillas.com" target="_blank" rel="noopener noreferrer" className="company-name hover:underline decoration-accent/30 underline-offset-4">
                Da Nang Beach Villas
              </a>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
                {t.dnbv_desc}
              </p>
            </div>

            <div className="glass-card p-8 transition-all duration-200 hover:border-accent/20">
              <a href="https://apexalpha.app" target="_blank" rel="noopener noreferrer" className="company-name hover:underline decoration-accent/30 underline-offset-4">
                ApexAlpha
              </a>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
                {t.apexalpha_desc}
              </p>
            </div>

            <div className="glass-card p-8 transition-all duration-200 hover:border-accent/20">
              <a href="https://forgehouse.io" target="_blank" rel="noopener noreferrer" className="company-name hover:underline decoration-accent/30 underline-offset-4">
                ForgeHouse
              </a>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
                {t.forgehouse_desc}
              </p>
            </div>
          </div>

          <p className="text-[14px] leading-relaxed text-foreground/40 mt-10">
            {t.pattern}
          </p>
        </div>
      </section>

      {/* ═══ How I Add Value ═══ */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-2 border-accent/40 pl-8">
            <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-5">{t.how_i_add_value}</h2>
            <div className="space-y-4 text-[15px] md:text-[16px] leading-relaxed text-foreground/75 max-w-xl">
              <p>{t.value_p1}</p>
              <p>{t.value_p2}</p>
              <p>{t.value_p3}</p>
            </div>
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
