import { getDictionary, type Locale } from '@/lib/i18n';

export default async function ForgeHouseCase({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const t = dict.forgehouse;
  const prefix = lang === 'en' ? '' : `/${lang}`;

  return (
    <main className="min-h-screen">

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero px-6 pt-24 pb-16 md:pt-36 md:pb-24 mt-14">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-medium tracking-widest text-accent uppercase mb-6">{t.case_study}</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">{t.title}</h1>
          <p className="text-[17px] text-foreground/60 leading-relaxed">{t.hero_desc}</p>
        </div>
      </section>

      {/* ═══ The Numbers ═══ */}
      <section className="px-6 py-14 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <span className="text-[32px] md:text-[40px] font-bold text-foreground">3h</span>
              <p className="text-[12px] text-muted mt-1">{t.stat1_label}</p>
            </div>
            <div className="text-center">
              <span className="text-[32px] md:text-[40px] font-bold text-foreground">77</span>
              <p className="text-[12px] text-muted mt-1">{t.stat2_label}</p>
            </div>
            <div className="text-center">
              <span className="text-[32px] md:text-[40px] font-bold text-foreground">1</span>
              <p className="text-[12px] text-muted mt-1">{t.stat3_label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ The Problem ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">{t.problem_title}</h2>
          <div className="section-module">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/75 mb-4">{t.problem_p1}</p>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/75">{t.problem_p2}</p>
          </div>
        </div>
      </section>

      {/* ═══ The Insight ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">{t.insight_title}</h2>
          <div className="border-l-2 border-accent/40 pl-6 py-2">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/70">{t.insight_p1}</p>
          </div>
        </div>
      </section>

      {/* ═══ The Build ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">{t.build_title}</h2>
          <div className="space-y-5">
            {[
              { time: 'Hour 1', title: t.hour1_title, desc: t.hour1_desc },
              { time: 'Hour 2', title: t.hour2_title, desc: t.hour2_desc },
              { time: 'Hour 3', title: t.hour3_title, desc: t.hour3_desc },
            ].map((item) => (
              <div key={item.time} className="glass-card p-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-[12px] font-semibold text-accent shrink-0 w-16">{item.time}</span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground">{item.title}</p>
                    <p className="text-[13px] text-foreground/50">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ The Model ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">{t.model_title}</h2>
          <div className="section-module">
            <div className="space-y-6">
              <div>
                <p className="text-[14px] font-medium text-foreground mb-1">{t.for_mentors}</p>
                <p className="text-[14px] text-foreground/60">{t.for_mentors_desc}</p>
              </div>
              <div className="border-t border-border/50"></div>
              <div>
                <p className="text-[14px] font-medium text-foreground mb-1">{t.for_founders}</p>
                <p className="text-[14px] text-foreground/60">{t.for_founders_desc}</p>
              </div>
              <div className="border-t border-border/50"></div>
              <div>
                <p className="text-[14px] font-medium text-foreground mb-1">{t.friedrich_move}</p>
                <p className="text-[14px] text-foreground/60">{t.friedrich_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ What I Did ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">{t.role_title}</h2>
          <div className="grid grid-cols-2 gap-y-3 text-[14px]">
            <span className="text-foreground/50">Strategy</span>
            <span className="text-foreground">{t.role_strategy}</span>
            <span className="text-foreground/50">Design</span>
            <span className="text-foreground">{t.role_design}</span>
            <span className="text-foreground/50">Product</span>
            <span className="text-foreground">{t.role_product}</span>
            <span className="text-foreground/50">GTM</span>
            <span className="text-foreground">{t.role_gtm}</span>
            <span className="text-foreground/50">Launch</span>
            <span className="text-foreground">{t.role_launch}</span>
          </div>
        </div>
      </section>

      {/* ═══ Result ═══ */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">{t.result_title}</h2>
          <div className="border-l-2 border-accent/40 pl-6 py-2">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/70 mb-4">{t.result_p1}</p>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/50">{t.result_p2}</p>
            <p className="text-[13px] text-foreground/35 mt-6">{t.result_footnote}</p>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <a href="https://forgehouse.io" target="_blank" rel="noopener noreferrer" className="accent-link text-[15px] block">
            {t.cta_live} &rarr;
          </a>
          <a href="https://www.indiehackers.com/post/i-built-an-agentic-mentor-marketplace-this-morning-first-mentor-is-extracting-right-now-a1599c1536" target="_blank" rel="noopener noreferrer" className="accent-link text-[15px] block">
            {t.cta_post} &rarr;
          </a>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 pt-10 pb-10">
        <div className="max-w-2xl mx-auto border-t border-border pt-8 flex justify-between items-center">
          <a href={prefix || '/'} className="accent-link text-[13px]">{t.footer_home}</a>
          <a href="mailto:leon@maxresult.ai" className="accent-link text-[13px]">leon@maxresult.ai</a>
        </div>
      </footer>

    </main>
  );
}
