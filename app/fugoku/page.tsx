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
          <div className="section-module">
            <p className="text-[16px] md:text-[17px] leading-relaxed text-foreground/80">
              Before we build, we align on how we work together. 
              This document covers scope, compensation, and cadence. 
              Pick what fits. Everything else follows.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ What's Already Done ═══ */}
      <section className="px-6 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="border-l-2 border-accent/40 pl-6 py-2">
            <p className="text-[14px] leading-relaxed text-foreground/60">
              The 4-stage strategy is designed: compute resale → managed deployment → identity graph → marketplace. 
              Each stage funds the next. Zero outside capital required. 
              This proposal covers how we execute it together.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Scope Options ═══ */}
      <section className="px-6 pt-8 pb-20 md:pb-28">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-10">Scope</h2>
          
          <div className="space-y-8">
            {/* Option A */}
            <div className="glass-card p-8 md:p-10 transition-all duration-200 hover:border-accent/20">
              <div className="flex items-start justify-between mb-5">
                <h3 className="text-[18px] font-semibold text-foreground">Strategy + Architecture</h3>
                <span className="text-[11px] font-medium text-muted bg-foreground/5 px-3 py-1.5 rounded-full shrink-0 ml-4">5h/week</span>
              </div>
              <p className="text-[14px] leading-relaxed text-foreground/60 mb-6">
                Weekly 1-hour calls. Written deliverables: roadmap, GTM, positioning. 
                No day-to-day involvement.
              </p>
              <div className="border-t border-border pt-5 grid grid-cols-2 gap-y-4">
                <span className="text-[13px] text-muted">Retainer</span>
                <span className="text-[17px] font-semibold text-foreground text-right">$1,500<span className="text-[12px] font-normal text-muted">/mo</span></span>
                <span className="text-[13px] text-muted">Equity</span>
                <span className="text-[17px] font-semibold text-foreground text-right">5%</span>
                <span className="text-[13px] text-muted">Vesting</span>
                <span className="text-[14px] text-foreground/70 text-right">1 year, no cliff</span>
                <span className="text-[13px] text-muted">Starts</span>
                <span className="text-[14px] text-foreground/70 text-right">March 1, 2026</span>
              </div>
            </div>

            {/* Option B — Recommended */}
            <div className="relative glass-card p-8 md:p-10 ring-2 ring-accent/40 shadow-[0_0_40px_rgba(184,145,106,0.08)] transition-all duration-200">
              <div className="absolute -top-3 left-8">
                <span className="text-[11px] font-semibold text-white bg-accent px-4 py-1 rounded-full tracking-wide">RECOMMENDED</span>
              </div>
              <div className="flex items-start justify-between mb-5 mt-2">
                <h3 className="text-[18px] font-semibold text-foreground">Strategy + Accountability</h3>
                <span className="text-[11px] font-medium text-muted bg-foreground/5 px-3 py-1.5 rounded-full shrink-0 ml-4">10h/week</span>
              </div>
              <p className="text-[14px] leading-relaxed text-foreground/60 mb-6">
                Everything in Strategy, plus EOS implementation, weekly scorecard reviews, 
                and issue resolution. Fractional CSO role.
              </p>
              <div className="border-t border-accent/20 pt-5 grid grid-cols-2 gap-y-4">
                <span className="text-[13px] text-muted">Retainer</span>
                <span className="text-[17px] font-semibold text-foreground text-right">$2,500<span className="text-[12px] font-normal text-muted">/mo</span></span>
                <span className="text-[13px] text-muted">Equity</span>
                <span className="text-[17px] font-semibold text-foreground text-right">10%</span>
                <span className="text-[13px] text-muted">Vesting</span>
                <span className="text-[14px] text-foreground/70 text-right">1 year, no cliff</span>
                <span className="text-[13px] text-muted">Starts</span>
                <span className="text-[14px] text-foreground/70 text-right">March 1, 2026</span>
              </div>
            </div>

            {/* Option C */}
            <div className="glass-card p-8 md:p-10 transition-all duration-200 hover:border-accent/20">
              <div className="flex items-start justify-between mb-5">
                <h3 className="text-[18px] font-semibold text-foreground">Strategy + Execution</h3>
                <span className="text-[11px] font-medium text-muted bg-foreground/5 px-3 py-1.5 rounded-full shrink-0 ml-4">15–20h/week</span>
              </div>
              <p className="text-[14px] leading-relaxed text-foreground/60 mb-6">
                Everything in Accountability, plus direct execution: outreach, partnerships, 
                vendor negotiations. Lower cash, higher equity.
              </p>
              <div className="border-t border-border pt-5 grid grid-cols-2 gap-y-4">
                <span className="text-[13px] text-muted">Retainer</span>
                <span className="text-[17px] font-semibold text-foreground text-right">$1,500<span className="text-[12px] font-normal text-muted">/mo</span></span>
                <span className="text-[13px] text-muted">Equity</span>
                <span className="text-[17px] font-semibold text-foreground text-right">15%</span>
                <span className="text-[13px] text-muted">Vesting</span>
                <span className="text-[14px] text-foreground/70 text-right">1 year, 3-month cliff</span>
                <span className="text-[13px] text-muted">Starts</span>
                <span className="text-[14px] text-foreground/70 text-right">March 1, 2026</span>
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

      {/* ═══ Fine Print: Case Study + Principles ═══ */}
      <section className="px-6 pt-8 pb-20 md:pb-28">
        <div className="max-w-2xl mx-auto">
          <div className="border-t border-border pt-12">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-4">Case Study Rights</h3>
                <p className="text-[13px] leading-relaxed text-foreground/50">
                  I reserve the right to document this engagement as a public case study 
                  on leonfreier.com after 90 days. No proprietary data, financials, or technical IP 
                  without written approval. You get final review before publication.
                </p>
              </div>
              <div>
                <h3 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-4">How This Works</h3>
                <p className="text-[13px] leading-relaxed text-foreground/50">
                  I&apos;m a consultant, not a cofounder. You own execution, I own strategy and accountability. 
                  If cadence breaks down, the engagement pauses. We renegotiate at revenue milestones 
                  that change the math.
                </p>
              </div>
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
