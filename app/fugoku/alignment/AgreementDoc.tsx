"use client";

const sections = [
  {
    num: "§1",
    title: "ENGAGEMENT",
    content: [
      "This agreement establishes a partnership between Leon Freier and Richard Okonicha (Fugoku Cloud) for the launch phase of Fugoku Cloud.",
      "This is not an employment relationship. Leon operates as an independent strategic partner with skin in the game.",
    ],
  },
  {
    num: "§2",
    title: "THE PROBLEM",
    content: [
      "Fugoku Cloud's previous billing infrastructure blocked revenue. Richard has the product and the clients. Leon has a US LLC (Leonidas LLC) with active Stripe.",
      "This agreement removes the billing bottleneck and establishes a long-term strategic partnership.",
    ],
  },
  {
    num: "§3",
    title: "LAYER 1: BILLING UNLOCK",
    content: [
      "3.1  Fugoku Cloud billing runs through Leonidas LLC's Stripe for the launch phase. Clients pay through Leon's entity, Richard delivers the infrastructure.",
      "3.2  Zero cost to Richard upfront.",
      "3.3  Revenue royalty on gross collections through Stripe:",
    ],
    tiers: [
      { range: "Until $5k/month", rate: "25%" },
      { range: "$5k to $15k/month", rate: "15%" },
      { range: "Above $15k/month", rate: "10%" },
    ],
    afterTiers: [
      "3.4  No salary, no retainer. Leon only earns when Fugoku earns.",
      "3.5  Minimum 18-month term on all clients acquired during the partnership window, even if Richard moves to his own billing stack sooner.",
      "3.6  Royalty continues indefinitely on the declining tiers for all clients acquired during the partnership window.",
      "3.7  Buyout option: Richard may buy out the royalty obligation at any time for a fixed amount equal to 24× the average monthly royalty of the preceding 6 months. Upon payment, all future royalty obligations are extinguished.",
      "3.8  Richard retains full operational control of Fugoku Cloud at all times.",
    ],
  },
  {
    num: "§4",
    title: "LAYER 2: STRATEGIC ADVISORY",
    content: [
      "4.1  Leon contributes strategic advisory: category positioning, go-to-market, pricing architecture, framing, messaging, and design.",
      "4.2  15% advisory equity stake in Fugoku, vested monthly over 24 months, tied to active contribution.",
      "4.3  Vesting stops if either side goes inactive for 60 days.",
      "4.4  This is not a consultant arrangement. Leon is financially aligned with Fugoku's growth. Skin in the game from day one.",
    ],
  },
  {
    num: "§5",
    title: "TRANSPARENCY",
    content: [
      "5.1  Full transparency on revenue. Shared dashboard, not reports.",
      "5.2  Both parties have real-time access to Stripe data.",
    ],
  },
  {
    num: "§6",
    title: "FIRST MILESTONE",
    content: [
      "6.1  The first milestone is defined jointly after the upstream work (ICP, business model, GTM strategy) is completed.",
      "6.2  Both parties agree on a specific, measurable deliverable with a 30-day deadline.",
      "6.3  30 days is enough to know if Stage 1 has legs. First customer signed or clear pivot signal.",
    ],
  },
  {
    num: "§7",
    title: "EXIT",
    content: [
      "7.1  Leon can pause billing infrastructure with 30 days notice if commitments aren't met.",
      "7.2  Richard can exit the arrangement anytime with 30 days notice.",
      "7.3  Upon exit, the 18-month minimum on acquired clients still applies.",
      "7.4  Vested equity is retained. Unvested equity is forfeited.",
    ],
  },
  {
    num: "§8",
    title: "CONFIDENTIALITY",
    content: [
      "8.1  Both parties agree to keep confidential any proprietary information shared during the engagement.",
      "8.2  This obligation survives termination for 24 months.",
    ],
  },
  {
    num: "§9",
    title: "GOVERNING LAW",
    content: [
      "This agreement is governed by the laws of the State of Delaware, United States. Disputes shall be resolved in the courts of Delaware.",
    ],
  },
];

export default function AgreementDoc() {
  const handleExportPDF = () => {
    window.print();
  };

  return (
    <>
      {/* Print styles */}
      <style jsx global>{`
        @media print {
          nav, footer, .no-print, .print-hide {
            display: none !important;
          }
          body {
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          main {
            padding: 0 !important;
          }
          .print-page {
            max-width: 100% !important;
            padding: 2rem 3rem !important;
          }
          @page {
            margin: 1.5cm 2cm;
          }
          .sig-block {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
          .print-page section, .print-page > div > div {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>

      <main className="min-h-screen">
        <div className="print-page max-w-2xl mx-auto px-6 pt-24 pb-20 md:pt-36">

          {/* Header */}
          <header className="text-center mb-20">
            <p className="text-[11px] font-medium tracking-[0.25em] text-accent uppercase mb-8">
              Launch Partnership Agreement
            </p>
            <h1 className="text-[28px] md:text-[34px] font-light tracking-tight text-foreground/90 mb-3" style={{ fontFamily: "Georgia, serif" }}>
              Leon Freier  <span className="text-accent/40">×</span>  Fugoku Cloud
            </h1>
            <p className="text-[13px] text-foreground/35 mt-6">February 25, 2026</p>
          </header>

          {/* Parties */}
          <div className="mb-16 pb-16 border-b border-border/50">
            <p className="text-[11px] font-medium tracking-[0.2em] text-accent/70 uppercase mb-4">Between</p>
            <div className="space-y-2">
              <p className="text-[14px] text-foreground/70">
                <span className="font-medium text-foreground/90">Leon Freier</span>, operating through Leonidas LLC (US), Hamburg, Germany
              </p>
              <p className="text-[14px] text-foreground/70">
                <span className="font-medium text-foreground/90">Richard Okonicha</span>, trading as Fugoku Cloud, Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.num} className="mb-14">
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-[12px] font-medium text-accent/60" style={{ fontFamily: "Georgia, serif" }}>
                  {section.num}
                </span>
                <h2 className="text-[12px] font-medium tracking-[0.2em] text-foreground/50 uppercase">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-3 pl-0">
                {section.content.map((p, i) => (
                  <p key={i} className="text-[14px] leading-[1.8] text-foreground/70">
                    {p}
                  </p>
                ))}
              </div>

              {/* Revenue tiers */}
              {section.tiers && (
                <div className="mt-6 mb-6">
                  <div className="glass-card p-6">
                    <div className="space-y-3 mb-8">
                      {section.tiers.map((tier, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <span className="text-[13px] text-foreground/60">{tier.range}</span>
                          <span className="text-[16px] font-semibold text-foreground">{tier.rate}</span>
                        </div>
                      ))}
                    </div>

                    {/* Revenue vs Take chart */}
                    <div>
                      <p className="text-[11px] font-medium tracking-widest text-muted uppercase mb-4">Monthly Revenue vs Leon&apos;s Take</p>
                      <div className="space-y-3">
                        {[
                          { rev: 2000, take: 500, label: "$2k" },
                          { rev: 5000, take: 1250, label: "$5k" },
                          { rev: 10000, take: 2000, label: "$10k" },
                          { rev: 15000, take: 2750, label: "$15k" },
                          { rev: 20000, take: 3250, label: "$20k" },
                          { rev: 30000, take: 4250, label: "$30k" },
                          { rev: 50000, take: 6250, label: "$50k" },
                        ].map((d) => {
                          const maxRev = 50000;
                          const revWidth = (d.rev / maxRev) * 100;
                          const takeWidth = (d.take / maxRev) * 100;
                          return (
                            <div key={d.label} className="flex items-center gap-3">
                              <span className="text-[11px] text-foreground/40 w-10 text-right shrink-0">{d.label}</span>
                              <div className="flex-1 relative h-5">
                                {/* Revenue bar */}
                                <div
                                  className="absolute inset-y-0 left-0 rounded-full bg-foreground/8"
                                  style={{ width: `${revWidth}%` }}
                                />
                                {/* Take bar */}
                                <div
                                  className="absolute inset-y-0 left-0 rounded-full bg-accent/40"
                                  style={{ width: `${takeWidth}%` }}
                                />
                              </div>
                              <span className="text-[11px] font-medium text-accent shrink-0 w-12 text-right">
                                ${(d.take / 1000).toFixed(1)}k
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex gap-6 mt-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-2.5 rounded-full bg-foreground/8" />
                          <span className="text-[10px] text-muted">Gross revenue</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-2.5 rounded-full bg-accent/40" />
                          <span className="text-[10px] text-muted">Leon&apos;s take</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* After tiers content */}
              {section.afterTiers && (
                <div className="space-y-3">
                  {section.afterTiers.map((p, i) => (
                    <p key={i} className="text-[14px] leading-[1.8] text-foreground/70">
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Signatures */}
          <div className="mt-20 pt-16 border-t border-border/50 sig-block" style={{ breakInside: "avoid", pageBreakInside: "avoid" }}>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-[11px] font-medium tracking-[0.2em] text-accent/70 uppercase mb-6">Partner</p>
                <p className="text-[15px] font-medium text-foreground/90 mb-5">Leon Freier</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-[11px] text-foreground/30 mb-1">Signature</p>
                    <div className="border-b border-foreground/15 w-full h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] text-foreground/30 mb-1">Date</p>
                    <div className="border-b border-foreground/15 w-full h-6" />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-medium tracking-[0.2em] text-accent/70 uppercase mb-4">Founder</p>
                <p className="text-[15px] font-medium text-foreground/90 mb-5">Richard Okonicha</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-[11px] text-foreground/30 mb-1">Signature</p>
                    <div className="border-b border-foreground/15 w-full h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] text-foreground/30 mb-1">Date</p>
                    <div className="border-b border-foreground/15 w-full h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="print-hide mt-20 text-center space-y-4">
            <div>
              <button
                onClick={handleExportPDF}
                className="inline-block text-[15px] font-medium px-8 py-3.5 rounded-xl bg-accent text-white hover:bg-accent-dark transition-colors duration-200"
              >
                Export PDF
              </button>
              <p className="text-[13px] text-foreground/35 mt-3">Print or save as PDF.</p>
            </div>
            <div className="pt-4 flex justify-center gap-6">
              <a
                href="/fugoku"
                className="text-[13px] font-medium text-foreground/50 hover:text-accent transition-colors"
              >
                ← Working Agreement
              </a>
              <a
                href="/fugoku/execution"
                className="text-[13px] font-medium text-foreground/50 hover:text-accent transition-colors"
              >
                Execution →
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-border/30 flex justify-between items-center">
            <p className="text-[12px] text-foreground/25">leonfreier.com</p>
            <p className="text-[12px] text-foreground/25">leon@maxresult.ai</p>
          </div>
        </div>
      </main>
    </>
  );
}
