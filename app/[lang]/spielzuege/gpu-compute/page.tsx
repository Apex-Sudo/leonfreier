import { getDictionary, type Locale } from '@/lib/i18n';

export default async function GpuComputeCaseStudy({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const t = dict.gpu;
  const prefix = lang === 'en' ? '' : `/${lang}`;

  const showItems = [
    { label: t.shows_1_label, text: t.shows_1_text },
    { label: t.shows_2_label, text: t.shows_2_text },
    { label: t.shows_3_label, text: t.shows_3_text },
    { label: t.shows_4_label, text: t.shows_4_text },
  ];

  return (
    <main className="min-h-screen pt-14">
      {/* ═══ Hero ═══ */}
      <section className="gradient-hero px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-medium tracking-widest text-accent uppercase mb-5">
            {t.case_study}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            {t.title}
          </h1>
          <p className="text-[15px] text-foreground/55 max-w-lg leading-relaxed">
            {t.hero_desc}
          </p>
          <p className="text-[13px] text-muted mt-4">{t.date}</p>
        </div>
      </section>

      {/* ═══ Context ═══ */}
      <section className="px-6 py-14 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">
            {t.situation_title}
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground/70">
            <p>{t.situation_p1}</p>
            <p>{t.situation_p2}</p>
          </div>
        </div>
      </section>

      {/* ═══ What I Built ═══ */}
      <section className="px-6 pb-14 md:pb-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">
            {t.what_i_did}
          </h2>

          <div className="space-y-5">
            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">01</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">{t.step1_title}</h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">{t.step1_desc}</p>
            </div>

            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">02</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">{t.step2_title}</h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">{t.step2_desc}</p>
              <div className="mt-4 space-y-3 text-[13px] text-foreground/50">
                <p><span className="text-accent font-medium">Stage 1.</span> {t.stage1}</p>
                <p><span className="text-accent font-medium">Stage 2.</span> {t.stage2}</p>
                <p><span className="text-accent font-medium">Stage 3.</span> {t.stage3}</p>
                <p><span className="text-accent font-medium">Stage 4.</span> {t.stage4}</p>
              </div>
            </div>

            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">03</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">{t.step3_title}</h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">{t.step3_desc}</p>
            </div>

            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">04</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">{t.step4_title}</h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">{t.step4_desc}</p>
            </div>

            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">05</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">{t.step5_title}</h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">{t.step5_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ The Decision ═══ */}
      <section className="px-6 pb-14 md:pb-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">
            {t.decision_title}
          </h2>
          <div className="border-l-2 border-accent/40 pl-8">
            <div className="space-y-4 text-[15px] leading-relaxed text-foreground/70">
              <p>{t.decision_p1}</p>
              <p>{t.decision_p2}</p>
              <p>{t.decision_p3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ What This Shows ═══ */}
      <section className="px-6 pb-14 md:pb-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">
            {t.shows_title}
          </h2>
          <div className="space-y-5">
            {showItems.map((item) => (
              <div key={item.label} className="flex gap-4">
                <span className="text-accent text-[14px] mt-0.5 shrink-0">&#x2022;</span>
                <div>
                  <p className="text-[14px] font-medium text-foreground">{item.label}</p>
                  <p className="text-[13px] text-foreground/50 mt-0.5">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Transparency Note ═══ */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="border-t border-border pt-10">
            <p className="text-[13px] text-foreground/40 leading-relaxed max-w-lg">
              {t.transparency}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 pt-10 pb-10">
        <div className="max-w-2xl mx-auto border-t border-border pt-8 flex justify-between items-center">
          <a href={`${prefix}/spielzuege`} className="accent-link text-[13px]">
            &larr; {t.all_spielzuege}
          </a>
          <a href="mailto:leon@maxresult.ai" className="accent-link text-[13px]">
            leon@maxresult.ai
          </a>
        </div>
      </footer>
    </main>
  );
}
