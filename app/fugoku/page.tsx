import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fugoku — Engagement Proposal | Leon Freier",
  description: "Strategic consulting engagement proposal for Fugoku Cloud.",
  robots: { index: false, follow: false },
};

export default function FugokuProposal() {
  return (
    <main className="min-h-screen">

      {/* ═══ Hero Header ═══ */}
      <section className="gradient-hero px-6 pt-24 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-medium tracking-widest text-accent uppercase mb-6">Engagement Proposal</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Fugoku Cloud</h1>
          <p className="text-[15px] text-foreground/50">Leon Freier · February 22, 2026</p>
        </div>
      </section>

      {/* ═══ Purpose ═══ */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-6 md:gap-10">
            {[
              { word: "Alignment", href: "/fugoku/alignment" },
              { word: "Agreement", href: "/fugoku/alignment" },
              { word: "Execution", href: "/fugoku/execution" },
            ].map((item, i) => (
              <div key={item.word} className="flex items-center gap-6 md:gap-10">
                <a href={item.href} className="text-[20px] md:text-[24px] font-semibold tracking-tight text-foreground/80 hover:text-accent transition-colors">
                  {item.word}
                </a>
                {i < 2 && <span className="text-accent/50 text-[20px]">·</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* spacer */}

      {/* ═══ Scope Options ═══ */}
      <section className="px-6 pt-8 pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-10">Scope</h2>
          
          <div className="grid md:grid-cols-3 gap-5">
            {/* Option A */}
            <div className="glass-card p-6 md:p-7 transition-all duration-200 hover:border-accent/20 flex flex-col">
              <span className="text-[11px] font-medium text-muted bg-foreground/5 px-3 py-1 rounded-full self-start mb-4">5h/week</span>
              <h3 className="text-[16px] font-semibold text-foreground mb-3">Strategy + Architecture</h3>
              <p className="text-[13px] leading-relaxed text-foreground/55 mb-6 flex-1">
                Weekly 1-hour calls. Written deliverables: roadmap, GTM, positioning. 
                No day-to-day involvement.
              </p>
              <div className="border-t border-border pt-4 space-y-3">
                <div className="text-center mb-2">
                  <span className="text-[28px] font-bold text-foreground">$2,500</span>
                  <span className="text-[13px] text-muted">/mo</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-muted">Equity</span>
                  <span className="font-medium text-foreground">5%</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-muted">Vesting</span>
                  <span className="text-foreground/70">1yr, no cliff</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-muted">Starts</span>
                  <span className="text-foreground/70">March 1</span>
                </div>
              </div>
            </div>

            {/* Option B — Recommended */}
            <div className="relative glass-card p-6 md:p-7 ring-2 ring-accent/40 shadow-[0_0_40px_rgba(184,145,106,0.08)] transition-all duration-200 flex flex-col md:-mt-3 md:mb-[-12px]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="text-[10px] font-semibold text-white bg-accent px-4 py-1 rounded-full tracking-wide whitespace-nowrap">RECOMMENDED</span>
              </div>
              <span className="text-[11px] font-medium text-muted bg-foreground/5 px-3 py-1 rounded-full self-start mb-4 mt-2">10h/week</span>
              <h3 className="text-[16px] font-semibold text-foreground mb-3">Strategy + Accountability</h3>
              <p className="text-[13px] leading-relaxed text-foreground/55 mb-6 flex-1">
                Everything in Strategy, plus EOS implementation, weekly scorecard reviews, 
                and issue resolution. Fractional CSO role.
              </p>
              <div className="border-t border-accent/20 pt-4 space-y-3">
                <div className="text-center mb-2">
                  <span className="text-[28px] font-bold text-foreground">$4,000</span>
                  <span className="text-[13px] text-muted">/mo</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-muted">Equity</span>
                  <span className="font-medium text-foreground">10%</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-muted">Vesting</span>
                  <span className="text-foreground/70">1yr, no cliff</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-muted">Starts</span>
                  <span className="text-foreground/70">March 1</span>
                </div>
              </div>
            </div>

            {/* Option C */}
            <div className="glass-card p-6 md:p-7 transition-all duration-200 hover:border-accent/20 flex flex-col">
              <span className="text-[11px] font-medium text-muted bg-foreground/5 px-3 py-1 rounded-full self-start mb-4">15–20h/week</span>
              <h3 className="text-[16px] font-semibold text-foreground mb-3">Strategy + Execution</h3>
              <p className="text-[13px] leading-relaxed text-foreground/55 mb-6 flex-1">
                Everything in Accountability, plus direct execution: outreach, partnerships, 
                vendor negotiations. Lower cash, higher equity.
              </p>
              <div className="border-t border-border pt-4 space-y-3">
                <div className="text-center mb-2">
                  <span className="text-[28px] font-bold text-foreground">$3,000</span>
                  <span className="text-[13px] text-muted">/mo</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-muted">Equity</span>
                  <span className="font-medium text-foreground">15%</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-muted">Vesting</span>
                  <span className="text-foreground/70">1yr, 3mo cliff</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-muted">Starts</span>
                  <span className="text-foreground/70">March 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Cadence ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">Cadence</h2>
          <div className="glass-card p-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-accent font-mono text-[13px] mt-0.5 shrink-0">01</span>
                <div>
                  <p className="text-[14px] font-medium text-foreground">Weekly sync</p>
                  <p className="text-[13px] text-foreground/50">Fixed day and time. On the calendar, non-negotiable.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-mono text-[13px] mt-0.5 shrink-0">02</span>
                <div>
                  <p className="text-[14px] font-medium text-foreground">24h decision turnaround</p>
                  <p className="text-[13px] text-foreground/50">Blocking items get resolved within one business day.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-mono text-[13px] mt-0.5 shrink-0">03</span>
                <div>
                  <p className="text-[14px] font-medium text-foreground">Async via Telegram</p>
                  <p className="text-[13px] text-foreground/50">Quick updates, links, decisions. No Slack overhead for two people.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-mono text-[13px] mt-0.5 shrink-0">04</span>
                <div>
                  <p className="text-[14px] font-medium text-foreground">Missed meetings</p>
                  <p className="text-[13px] text-foreground/50">Reschedule within 48h. Three no-shows pauses the engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ First 30 Days ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">First 30 Days</h2>
          <div className="glass-card p-8">
            <div className="space-y-5">
              <div className="flex items-baseline gap-4">
                <span className="text-[12px] font-semibold text-accent shrink-0 w-14">Week 1</span>
                <div>
                  <p className="text-[14px] font-medium text-foreground">Lock scope + comp. Set up EOS basics.</p>
                  <p className="text-[13px] text-foreground/45">VTO, Rocks, Scorecard. The operating system.</p>
                </div>
              </div>
              <div className="border-t border-border/50"></div>
              <div className="flex items-baseline gap-4">
                <span className="text-[12px] font-semibold text-accent shrink-0 w-14">Week 2</span>
                <div>
                  <p className="text-[14px] font-medium text-foreground">5 discovery calls with your network.</p>
                  <p className="text-[13px] text-foreground/45">Validate Stage 1 demand. Real conversations, not assumptions.</p>
                </div>
              </div>
              <div className="border-t border-border/50"></div>
              <div className="flex items-baseline gap-4">
                <span className="text-[12px] font-semibold text-accent shrink-0 w-14">Week 3</span>
                <div>
                  <p className="text-[14px] font-medium text-foreground">Validate pricing. Draft first proposal.</p>
                  <p className="text-[13px] text-foreground/45">What will Nigerian companies pay for managed infrastructure?</p>
                </div>
              </div>
              <div className="border-t border-border/50"></div>
              <div className="flex items-baseline gap-4">
                <span className="text-[12px] font-semibold text-accent shrink-0 w-14">Week 4</span>
                <div>
                  <p className="text-[14px] font-medium text-foreground">First customer signed or clear pivot signal.</p>
                  <p className="text-[13px] text-foreground/45">30 days is enough to know if Stage 1 has legs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <a 
            href="/fugoku/alignment" 
            className="inline-block text-[15px] font-medium px-8 py-3.5 rounded-xl bg-accent text-white hover:bg-accent-dark transition-colors duration-200"
          >
            Alignment
          </a>
          {/* */}
        </div>
      </section>

      {/* ═══ Fine Print: Case Study + Principles ═══ */}
      <section className="px-6 pt-8 pb-20 md:pb-28">
        <div className="max-w-2xl mx-auto">
          <div className="border-t border-border pt-12">
            <div className="text-center max-w-lg mx-auto">
              <h3 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-4">How This Works</h3>
              <p className="text-[13px] leading-relaxed text-foreground/50">
                I&apos;m a consultant, not a cofounder. You own execution, I own strategy and accountability. 
                If cadence breaks down, the engagement pauses. We renegotiate at revenue milestones 
                that change the math.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 pt-10 pb-10">
        <div className="max-w-2xl mx-auto border-t border-border pt-8 flex justify-between items-center">
          <p className="text-[13px] text-muted/50">leonfreier.com</p>
          <a href="mailto:leon@maxresult.ai" className="accent-link text-[13px]">leon@maxresult.ai</a>
        </div>
      </footer>

    </main>
  );
}
