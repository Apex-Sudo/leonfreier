import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fugoku — Engagement Proposal | Leon Freier",
  description: "Strategic consulting engagement proposal for Fugoku Cloud.",
  robots: { index: false, follow: false },
};

export default function FugokuProposal() {
  return (
    <main className="min-h-screen">

      {/* ═══ Header ═══ */}
      <section className="px-6 pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-medium tracking-widest text-muted uppercase mb-4">Engagement Proposal</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Fugoku Cloud</h1>
          <p className="text-[15px] text-foreground/60">Leon Freier · February 22, 2026</p>
        </div>
      </section>

      {/* ═══ Purpose ═══ */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="section-module">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/80">
              Before we build, we align on how we work together. 
              This document covers scope, compensation, and cadence. 
              Pick what fits. Everything else follows.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Scope Options ═══ */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-8">Scope</h2>
          
          <div className="space-y-6">
            {/* Option A */}
            <div className="glass-card p-8">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-[17px] font-semibold text-foreground">Strategy + Architecture</h3>
                <span className="text-[12px] font-medium text-muted bg-foreground/5 px-3 py-1 rounded-full">5h/week</span>
              </div>
              <p className="text-[14px] leading-relaxed text-foreground/65 mb-5">
                Weekly 1-hour calls. Written deliverables: roadmap, GTM, positioning. 
                No day-to-day involvement.
              </p>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-[14px]">
                  <span className="text-muted">Retainer</span>
                  <span className="text-foreground font-medium">$1,500/month</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-muted">Equity</span>
                  <span className="text-foreground font-medium">5%</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-muted">Vesting</span>
                  <span className="text-foreground font-medium">1 year, no cliff</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-muted">Starts</span>
                  <span className="text-foreground font-medium">March 1, 2026</span>
                </div>
              </div>
            </div>

            {/* Option B — Recommended */}
            <div className="glass-card p-8 ring-1 ring-accent/30">
              <div className="flex items-baseline justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-[17px] font-semibold text-foreground">Strategy + Accountability</h3>
                  <span className="text-[11px] font-medium text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">Recommended</span>
                </div>
                <span className="text-[12px] font-medium text-muted bg-foreground/5 px-3 py-1 rounded-full">10h/week</span>
              </div>
              <p className="text-[14px] leading-relaxed text-foreground/65 mb-5">
                Everything in Strategy, plus EOS implementation, weekly scorecard reviews, 
                and issue resolution. Fractional COO role.
              </p>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-[14px]">
                  <span className="text-muted">Retainer</span>
                  <span className="text-foreground font-medium">$2,500/month</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-muted">Equity</span>
                  <span className="text-foreground font-medium">10%</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-muted">Vesting</span>
                  <span className="text-foreground font-medium">1 year, no cliff</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-muted">Starts</span>
                  <span className="text-foreground font-medium">March 1, 2026</span>
                </div>
              </div>
            </div>

            {/* Option C */}
            <div className="glass-card p-8">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-[17px] font-semibold text-foreground">Strategy + Execution</h3>
                <span className="text-[12px] font-medium text-muted bg-foreground/5 px-3 py-1 rounded-full">15–20h/week</span>
              </div>
              <p className="text-[14px] leading-relaxed text-foreground/65 mb-5">
                Everything in Accountability, plus direct execution: outreach, partnerships, 
                vendor negotiations. Lower cash, higher equity.
              </p>
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-[14px]">
                  <span className="text-muted">Retainer</span>
                  <span className="text-foreground font-medium">$1,500/month</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-muted">Equity</span>
                  <span className="text-foreground font-medium">15%</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-muted">Vesting</span>
                  <span className="text-foreground font-medium">1 year, 3-month cliff</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-muted">Starts</span>
                  <span className="text-foreground font-medium">March 1, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Cadence ═══ */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-8">Cadence</h2>
          <div className="section-module">
            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="text-accent font-mono text-[13px] mt-0.5 shrink-0">01</span>
                <div>
                  <p className="text-[15px] font-medium text-foreground">Weekly sync</p>
                  <p className="text-[14px] text-foreground/60">Fixed day and time. On the calendar, non-negotiable.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-mono text-[13px] mt-0.5 shrink-0">02</span>
                <div>
                  <p className="text-[15px] font-medium text-foreground">24h decision turnaround</p>
                  <p className="text-[14px] text-foreground/60">Blocking items get resolved within one business day.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-mono text-[13px] mt-0.5 shrink-0">03</span>
                <div>
                  <p className="text-[15px] font-medium text-foreground">Async via Telegram</p>
                  <p className="text-[14px] text-foreground/60">Quick updates, links, decisions. No Slack overhead for two people.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-mono text-[13px] mt-0.5 shrink-0">04</span>
                <div>
                  <p className="text-[15px] font-medium text-foreground">Missed meetings</p>
                  <p className="text-[14px] text-foreground/60">Reschedule within 48h. Three no-shows pauses the engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ First 30 Days ═══ */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-8">First 30 Days</h2>
          <div className="space-y-4">
            <div className="glass-card p-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[12px] font-medium text-accent">Week 1</span>
                <span className="text-[14px] font-medium text-foreground">Lock scope + comp. Set up EOS basics.</span>
              </div>
              <p className="text-[13px] text-foreground/55">VTO, Rocks, Scorecard. The operating system.</p>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[12px] font-medium text-accent">Week 2</span>
                <span className="text-[14px] font-medium text-foreground">5 discovery calls with your network.</span>
              </div>
              <p className="text-[13px] text-foreground/55">Validate Stage 1 demand. Real conversations, not assumptions.</p>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[12px] font-medium text-accent">Week 3</span>
                <span className="text-[14px] font-medium text-foreground">Validate pricing. Draft first proposal.</span>
              </div>
              <p className="text-[13px] text-foreground/55">What will Nigerian companies pay for managed infrastructure?</p>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[12px] font-medium text-accent">Week 4</span>
                <span className="text-[14px] font-medium text-foreground">First customer signed or clear pivot signal.</span>
              </div>
              <p className="text-[13px] text-foreground/55">30 days is enough to know if Stage 1 has legs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Principles ═══ */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-8">How This Works</h2>
          <div className="section-module">
            <div className="space-y-4 text-[14px] md:text-[15px] leading-relaxed text-foreground/70">
              <p>I&apos;m a consultant, not a cofounder. Clear boundary, clean relationship.</p>
              <p>You own execution. I own strategy and accountability.</p>
              <p>If the cadence breaks down, the engagement pauses. No hard feelings.</p>
              <p>We renegotiate when the business hits a revenue milestone that changes the math.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 pt-12 pb-10">
        <div className="max-w-2xl mx-auto border-t border-border pt-8">
          <p className="text-[13px] text-muted/60">leonfreier.com</p>
        </div>
      </footer>

    </main>
  );
}
