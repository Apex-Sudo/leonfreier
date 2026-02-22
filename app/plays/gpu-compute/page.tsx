import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPU Compute Startup — Case Study | Leon Freier",
  description:
    "How I repositioned a pre-revenue GPU compute startup from vague B2C play to a staged market penetration strategy. Then walked away when alignment wasn't there.",
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
            Pre-revenue compute company with technical depth and no go-to-market.
            I redesigned the entire business model, built a 4-stage market
            penetration strategy, and architected cash flow before a single
            customer signed. Then walked away when the fit wasn&apos;t right.
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
              The founder had deep infrastructure knowledge and a clear technical
              thesis: resell managed GPU compute to companies locked out of
              hyperscaler pricing. He could build the stack. What he
              couldn&apos;t see was the path from &ldquo;I have compute&rdquo;
              to &ldquo;I have a business.&rdquo;
            </p>
            <p>
              When I came in, the positioning was scattered. Half B2C
              (&ldquo;the cooler AWS for young people&rdquo;), half B2B, with
              no clear first customer. Website looked AI-generated. No pricing
              validation. No discovery calls. No understanding of payment terms
              with his own supplier. He was about to spend his last money buying
              infrastructure before talking to a single prospect.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ What I Built ═══ */}
      <section className="px-6 pb-14 md:pb-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">
            What I Did
          </h2>

          <div className="space-y-8">
            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">01</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">
                Killed the B2C Angle
              </h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">
                Repositioned the entire business from vague &ldquo;cool AWS for
                Gen Z&rdquo; to a specific, defensible position: B2B
                infrastructure for emerging markets, starting with Nigeria. One
                country. One value proposition. Economic nationalism as the
                wedge: &ldquo;Your data stays in Nigeria.&rdquo;
              </p>
            </div>

            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">02</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">
                4-Stage Market Penetration
              </h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">
                Designed a strategy where each stage funds the next. No outside
                capital needed at any point.
              </p>
              <div className="mt-4 space-y-3 text-[13px] text-foreground/50">
                <p>
                  <span className="text-accent font-medium">Stage 1.</span>{" "}
                  Resell compute at price parity. Win on nationalism, not price.
                  Validate with 10 paying customers from warm network.
                </p>
                <p>
                  <span className="text-accent font-medium">Stage 2.</span>{" "}
                  Managed deployment layer. &ldquo;I push code and it works.&rdquo;
                  3-5x markup over raw compute. This is where real margin lives.
                </p>
                <p>
                  <span className="text-accent font-medium">Stage 3.</span>{" "}
                  Identity layer. Emerges naturally from 30-50 companies
                  authenticating through your stack. You don&apos;t build KYC.
                  You observe the pattern and unify it. The identity graph
                  becomes the moat.
                </p>
                <p>
                  <span className="text-accent font-medium">Stage 4.</span>{" "}
                  App marketplace. Identity and payments solved. Third-party
                  developers build on the stack because the hard problems are
                  done. Transaction fees on every API call.
                </p>
              </div>
            </div>

            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">03</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">
                Cash Flow Architecture
              </h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">
                The founder was about to pay his infrastructure provider upfront.
                I redesigned the model: charge customers on the 1st, pay the
                supplier at end of month. Positive float from day one. Then
                reframed the supplier relationship entirely. The supplier needs
                demand generators. We are their next market. Negotiate from that
                position, not as a small buyer begging for credit.
              </p>
            </div>

            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">04</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">
                GTM Before Build
              </h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">
                Stopped him from buying infrastructure before talking to a
                single prospect. Designed a discovery call sequence using his
                existing network. No cold outreach. Every call ends with
                &ldquo;Who should I talk to next?&rdquo; so the pipeline
                generates itself. The Mom Test applied: learn what they need,
                don&apos;t pitch what you have.
              </p>
            </div>

            <div className="glass-card p-7">
              <span className="text-accent font-mono text-[13px]">05</span>
              <h3 className="text-[16px] font-semibold mt-2 mb-2">
                Operating System
              </h3>
              <p className="text-[14px] leading-relaxed text-foreground/60">
                Full EOS implementation: vision, core values, quarterly rocks,
                weekly accountability. Plus a branded proposal system, consulting
                agreement, and interactive execution documents. One URL,
                everything in it.
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
                upstream questions before a strategic consulting layer would
                deliver value.
              </p>
              <p>
                I told him directly. We parted on good terms. He wrote a LinkedIn
                recommendation the same week.
              </p>
              <p>
                Walking away from revenue when you&apos;re pre-revenue yourself is
                not comfortable. But taking on an engagement where the
                prerequisites aren&apos;t met burns both parties. The consulting
                only works when the founder is ready to execute on the output.
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
                  label: "Business model design, not advice",
                  text: "Repositioned the company, designed the revenue architecture, and sequenced 4 stages of market penetration in a single session.",
                },
                {
                  label: "Supplier as partner, not vendor",
                  text: "Reframed the infrastructure provider relationship from 'small buyer' to 'demand generator for your next market.' Changes the entire negotiation dynamic.",
                },
                {
                  label: "Revenue before product",
                  text: "Stopped a founder from spending his last money on infrastructure. Designed GTM that validates demand with zero capital deployed.",
                },
                {
                  label: "Honest assessment",
                  text: "The hardest consulting skill is telling a client they're not ready yet. Revenue lost, trust gained.",
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
