import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPU Compute Startup — Case Study | Leon Freier",
  description:
    "How I assessed a pre-revenue GPU compute startup and built the operating system for scale. Then walked away when alignment wasn't there.",
};

export default function GpuComputeCaseStudy() {
  return (
    <main className="min-h-screen pt-14">
      {/* ═══ Hero ═══ */}
      <section className="gradient-hero px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-medium tracking-widest text-accent uppercase mb-5">
            Case Study
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            GPU Compute Startup
          </h1>
          <p className="text-[15px] text-foreground/55 max-w-lg leading-relaxed">
            GPU compute startup. Pre-revenue, pre-structure. I built the operating
            system for their go-to-market, then walked away when the fit wasn&apos;t
            right.
          </p>
          <p className="text-[13px] text-muted mt-4">
            February 2026 · Engagement ended amicably
          </p>
        </div>
      </section>

      {/* ═══ Context ═══ */}
      <section className="px-6 py-14 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">
            The Situation
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground/70">
            <p>
              The company sells managed GPU infrastructure. The thesis: emerging-market
              companies need compute but can&apos;t access
              hyperscaler pricing or navigate the procurement complexity. They
              broker capacity and wrap it in a managed service.
            </p>
            <p>
              The founder had technical depth and a clear market read. What he
              didn&apos;t have was a go-to-market structure, pricing validation, or
              an operating cadence that would survive contact with customers.
            </p>
            <p>
              He&apos;d been building for months. Website up, pitch deck done, some
              warm leads. But no closed customers, no validated pricing, no
              systematic way to track whether the business was working.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ What I Built ═══ */}
      <section className="px-6 pb-14 md:pb-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">
            What I Built
          </h2>

          <div className="space-y-8">
            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">01</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">
                EOS Foundation
              </h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">
                Vision/Traction Organizer from scratch. Core values, core focus,
                10-year target, 3-year picture, 1-year plan, quarterly rocks. The
                full operating system that turns vision into weekly accountability.
              </p>
            </div>

            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">02</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">
                GTM Sequencing
              </h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">
                Staged go-to-market: start with managed compute for target-market
                enterprises (warm network), validate pricing through 5 discovery
                calls in week 2, then expand or pivot based on signal. Not a
                12-month roadmap. A 30-day pressure test.
              </p>
            </div>

            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">03</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">
                Pricing Architecture
              </h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">
                Tiered engagement model with cash-equity blend calibrated to the
                founder&apos;s stage. Lower cash when pre-revenue. Equity that
                vests monthly. Cliff only at the highest commitment tier. The
                structure itself becomes a signal: if you can&apos;t commit to the
                cadence, you can&apos;t commit to the outcome.
              </p>
            </div>

            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">04</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">
                Deliverable Infrastructure
              </h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">
                Custom web-based proposal system. Branded pages for the
                engagement: scope options, consulting agreement, and an
                interactive EOS execution document the founder could fill out
                directly. No PDFs. No back-and-forth. One URL, everything in it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ The Decision ═══ */}
      <section className="px-6 pb-14 md:pb-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">
            The Decision
          </h2>
          <div className="border-l-2 border-accent/40 pl-8">
            <div className="space-y-4 text-[15px] leading-relaxed text-foreground/70">
              <p>
                After the alignment call, it became clear the engagement
                wouldn&apos;t work. Not because of capability on either side, but
                because of timing and priorities. The founder needed to resolve
                upstream questions (funding, technical partnerships) before a
                strategic consulting layer would deliver value.
              </p>
              <p>
                I told him directly. We parted on good terms. He wrote a LinkedIn
                recommendation the same week.
              </p>
              <p>
                Walking away from revenue when you&apos;re pre-revenue yourself is
                not comfortable. But taking on an engagement where the
                prerequisites aren&apos;t met would have burned both parties. The
                consulting only works when the founder is ready to execute on the
                output.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ What This Shows ═══ */}
      <section className="px-6 pb-14 md:pb-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">
            What This Shows
          </h2>
          <div className="glass-card p-8">
            <div className="space-y-5">
              {[
                {
                  label: "Speed to structure",
                  text: "Full EOS implementation, proposal system, and GTM plan built in days, not months.",
                },
                {
                  label: "Honest assessment",
                  text: "The hardest consulting skill is telling a client they're not ready yet. Revenue lost, trust gained.",
                },
                {
                  label: "Reusable infrastructure",
                  text: "The branded proposal system, consulting agreement, and EOS tooling are now templates for every future engagement.",
                },
                {
                  label: "Stage-appropriate thinking",
                  text: "Pre-revenue companies don't need 12-month roadmaps. They need 30-day pressure tests with binary outcomes.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-accent text-[14px] mt-0.5 shrink-0">
                    &#x2022;
                  </span>
                  <div>
                    <p className="text-[14px] font-medium text-foreground">
                      {item.label}
                    </p>
                    <p className="text-[13px] text-foreground/50 mt-0.5">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Transparency Note ═══ */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="border-t border-border pt-10">
            <p className="text-[13px] text-foreground/40 leading-relaxed max-w-lg">
              This engagement did not result in an ongoing contract. It&apos;s
              included here because the work was real, the frameworks were
              delivered, and the outcome (walking away) is as much a part of
              strategy as the wins.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 pt-10 pb-10">
        <div className="max-w-2xl mx-auto border-t border-border pt-8 flex justify-between items-center">
          <a href="/plays" className="accent-link text-[13px]">
            &larr; All plays
          </a>
          <a
            href="mailto:leon@maxresult.ai"
            className="accent-link text-[13px]"
          >
            leon@maxresult.ai
          </a>
        </div>
      </footer>
    </main>
  );
}
