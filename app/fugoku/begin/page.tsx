import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fugoku — Let's Begin | Leon Freier",
  description: "EOS onboarding: Vision/Traction Organizer.",
  robots: { index: false, follow: false },
};

export default function FugokuBegin() {
  return (
    <main className="min-h-screen">

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero px-6 pt-24 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-medium tracking-widest text-accent uppercase mb-6">Step 1</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Vision/Traction Organizer</h1>
          <p className="text-[15px] text-foreground/50">
            Before we build, we align on where we&apos;re going. Fill this out before our next call.
            Be honest, not polished. Wrong answers are more useful than impressive ones.
          </p>
        </div>
      </section>

      {/* ═══ Core Values ═══ */}
      <section className="px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">Core Values</h2>
          <p className="text-[13px] text-foreground/45 mb-8">
            3-5 words that describe how you operate at your best. Not aspirational. Descriptive. 
            Think about the people you&apos;ve loved working with. What did they have in common?
          </p>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="glass-card p-5 flex items-center gap-4">
                <span className="text-accent font-mono text-[13px] shrink-0">{String(n).padStart(2, '0')}</span>
                <div className="flex-1 border-b border-border/50 pb-1 text-[14px] text-foreground/30">
                  &nbsp;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Core Focus ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">Core Focus</h2>
          <p className="text-[13px] text-foreground/45 mb-8">
            Two things. Your purpose (why does Fugoku exist beyond money?) and your niche 
            (what do you do better than anyone else, for whom?).
          </p>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <p className="text-[12px] font-medium text-accent mb-3">Purpose / Cause / Passion</p>
              <div className="border-b border-border/50 pb-8 text-[14px] text-foreground/30">
                &nbsp;
              </div>
            </div>
            <div className="glass-card p-6">
              <p className="text-[12px] font-medium text-accent mb-3">Niche</p>
              <div className="border-b border-border/50 pb-8 text-[14px] text-foreground/30">
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 10-Year Target ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">10-Year Target</h2>
          <p className="text-[13px] text-foreground/45 mb-8">
            One sentence. Where is Fugoku in 10 years if everything goes right? 
            Be specific enough to be wrong.
          </p>
          <div className="glass-card p-6">
            <div className="border-b border-border/50 pb-8 text-[14px] text-foreground/30">
              &nbsp;
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3-Year Picture ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">3-Year Picture</h2>
          <p className="text-[13px] text-foreground/45 mb-8">
            What does Fugoku look like in 3 years? Revenue, team size, customers, product.
          </p>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                <div>
                  <p className="text-[12px] font-medium text-accent mb-2">Revenue</p>
                  <div className="border-b border-border/50 pb-1 text-[14px] text-foreground/30">&nbsp;</div>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-accent mb-2">Profit</p>
                  <div className="border-b border-border/50 pb-1 text-[14px] text-foreground/30">&nbsp;</div>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-accent mb-2">Team size</p>
                  <div className="border-b border-border/50 pb-1 text-[14px] text-foreground/30">&nbsp;</div>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-accent mb-2">Customers</p>
                  <div className="border-b border-border/50 pb-1 text-[14px] text-foreground/30">&nbsp;</div>
                </div>
              </div>
            </div>
            <div className="glass-card p-6">
              <p className="text-[12px] font-medium text-accent mb-3">What does the world look like?</p>
              <p className="text-[13px] text-foreground/40 mb-4">
                Describe it like you&apos;re telling a friend. &ldquo;Nigerian companies run on our infrastructure, 
                identity verification takes 0.3 seconds, we process X transactions per month...&rdquo;
              </p>
              <div className="border-b border-border/50 pb-8 text-[14px] text-foreground/30">
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 1-Year Plan ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">1-Year Plan</h2>
          <p className="text-[13px] text-foreground/45 mb-8">
            What has to be true 12 months from now for you to feel like this year was a success?
          </p>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                <div>
                  <p className="text-[12px] font-medium text-accent mb-2">Revenue goal</p>
                  <div className="border-b border-border/50 pb-1 text-[14px] text-foreground/30">&nbsp;</div>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-accent mb-2">Customer goal</p>
                  <div className="border-b border-border/50 pb-1 text-[14px] text-foreground/30">&nbsp;</div>
                </div>
              </div>
            </div>
            <div className="glass-card p-6">
              <p className="text-[12px] font-medium text-accent mb-3">3-7 Goals for the year</p>
              <p className="text-[13px] text-foreground/40 mb-4">
                Specific, measurable, binary. &ldquo;Sign 10 paying customers&rdquo; not &ldquo;grow the business.&rdquo;
              </p>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <div key={n} className="flex items-center gap-3">
                    <span className="text-accent font-mono text-[12px] shrink-0">{n}.</span>
                    <div className="flex-1 border-b border-border/50 pb-1 text-[14px] text-foreground/30">&nbsp;</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Rocks (90-Day Priorities) ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">Rocks</h2>
          <p className="text-[13px] text-foreground/45 mb-8">
            3-5 priorities for the next 90 days. These are the things that, if completed, 
            move everything else forward. Each one should be completable and binary: done or not done.
          </p>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="glass-card p-5">
                <div className="flex items-start gap-4">
                  <span className="text-accent font-mono text-[13px] shrink-0 mt-0.5">R{n}</span>
                  <div className="flex-1">
                    <div className="border-b border-border/50 pb-1 text-[14px] text-foreground/30 mb-3">&nbsp;</div>
                    <div className="flex gap-6 text-[12px] text-foreground/35">
                      <span>Owner: ___</span>
                      <span>Due: ___</span>
                      <span>Done: ☐</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ The Real Question ═══ */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="max-w-2xl mx-auto">
          <div className="section-module text-center">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/70 mb-2">
              Last question. Answer it honestly.
            </p>
            <p className="text-[17px] md:text-[18px] font-medium text-foreground leading-relaxed mt-6">
              &ldquo;What&apos;s the one thing you&apos;re avoiding that would change everything if you did it?&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 pt-10 pb-10">
        <div className="max-w-2xl mx-auto border-t border-border pt-8 flex justify-between items-center">
          <a href="/fugoku" className="accent-link text-[13px]">&larr; Back to proposal</a>
          <a href="mailto:leon@maxresult.ai" className="accent-link text-[13px]">leon@maxresult.ai</a>
        </div>
      </footer>

    </main>
  );
}
