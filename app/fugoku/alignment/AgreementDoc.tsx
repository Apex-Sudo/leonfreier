"use client";

import { useState } from "react";

const sections = [
  {
    num: "§1",
    title: "ENGAGEMENT",
    content: [
      "The Company engages the Consultant to provide strategic consulting services as outlined in the selected Scope Option. This is not an employment relationship. The Consultant operates as an independent contractor.",
    ],
  },
  {
    num: "§2",
    title: "SCOPE",
    content: [
      "The Company selects one of the following engagement tiers:",
    ],
    options: [
      {
        label: "Option A",
        name: "Strategy + Architecture",
        terms: "5 hours/week  ·  $2,500/month  ·  5% equity (12-month vest, no cliff)",
        desc: "Weekly 1-hour calls. Written deliverables: roadmap, GTM, positioning. No day-to-day involvement.",
      },
      {
        label: "Option B",
        name: "Strategy + Accountability",
        terms: "10 hours/week  ·  $4,000/month  ·  10% equity (12-month vest, no cliff)",
        desc: "Everything in Option A, plus EOS implementation, weekly scorecard reviews, issue resolution. Fractional CSO role.",
        recommended: true,
      },
      {
        label: "Option C",
        name: "Strategy + Execution",
        terms: "15–20 hours/week  ·  $3,000/month  ·  15% equity (12-month vest, 3-month cliff)",
        desc: "Everything in Option B, plus direct execution: outreach, partnerships, vendor negotiations.",
      },
    ],
  },
  {
    num: "§3",
    title: "COMPENSATION",
    content: [
      "3.1  Monthly retainer is due on the 1st of each calendar month, payable within 7 days.",
      "3.2  Late payments accrue interest at 1.5% per month. Payments more than 14 days overdue constitute a material breach.",
      "3.3  Equity vests monthly in equal installments over 12 months from the Effective Date. Where a cliff applies, no equity vests until the cliff period is completed, at which point all accrued equity vests immediately.",
      "3.4  Vested equity is retained upon termination regardless of which party terminates. Unvested equity is forfeited.",
    ],
  },
  {
    num: "§4",
    title: "CADENCE",
    content: [
      "4.1  Weekly sync call on a fixed day and time, agreed upon at engagement start.",
      "4.2  Blocking decisions resolved within 24 hours.",
      "4.3  Async communication via Telegram.",
      "4.4  Missed meetings must be rescheduled within 48 hours. Three unrescheduled missed meetings within any 60-day period constitutes grounds for the Consultant to pause or terminate the engagement without forfeiting vested equity.",
    ],
  },
  {
    num: "§5",
    title: "INTELLECTUAL PROPERTY",
    content: [
      "5.1  Work product created specifically for the Company during the engagement is owned by the Company.",
      "5.2  The Consultant retains ownership of all pre-existing methodologies, frameworks, and tools, including those applied during the engagement.",
      "5.3  The Consultant grants the Company a perpetual, non-exclusive license to use any frameworks applied during the engagement.",
    ],
  },
  {
    num: "§6",
    title: "CASE STUDY RIGHTS",
    content: [
      "6.1  After 90 days from the Effective Date, the Consultant may document the engagement as a public case study.",
      "6.2  No proprietary data, financials, or technical IP will be disclosed without written approval.",
      "6.3  The Company receives final review before publication, with a 14-day review window.",
    ],
  },
  {
    num: "§7",
    title: "CONFIDENTIALITY",
    content: [
      "7.1  Both parties agree to keep confidential any proprietary information shared during the engagement.",
      "7.2  This obligation survives termination for 24 months.",
    ],
  },
  {
    num: "§8",
    title: "TERMINATION",
    content: [
      "8.1  Either party may terminate with 30 days written notice.",
      "8.2  Upon termination, vested equity is retained. Unvested equity is forfeited.",
      "8.3  Outstanding retainer payments remain due for services already rendered.",
      "8.4  The cadence clause (§4.4) constitutes an additional termination right for the Consultant.",
    ],
  },
  {
    num: "§9",
    title: "GOVERNING LAW",
    content: [
      "This agreement is governed by the laws of the Federal Republic of Germany. Disputes shall be resolved in the courts of Hamburg.",
    ],
  },
];

export default function AgreementDoc() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

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
        }
      `}</style>

      <main className="min-h-screen">
        {/* spacer */}

        {/* Document */}
        <div className="print-page max-w-2xl mx-auto px-6 pt-24 pb-20 md:pt-36">

          {/* Header */}
          <header className="text-center mb-20">
            <p className="text-[11px] font-medium tracking-[0.25em] text-accent uppercase mb-8">
              Consulting Services Agreement
            </p>
            <h1 className="text-[28px] md:text-[34px] font-light tracking-tight text-foreground/90 mb-3" style={{ fontFamily: "Georgia, serif" }}>
              Leon Freier  <span className="text-accent/40">×</span>  Fugoku Cloud
            </h1>
            <p className="text-[13px] text-foreground/35 mt-6">February 22, 2026</p>
          </header>

          {/* Parties */}
          <div className="mb-16 pb-16 border-b border-border/50">
            <p className="text-[11px] font-medium tracking-[0.2em] text-accent/70 uppercase mb-4">Between</p>
            <div className="space-y-2">
              <p className="text-[14px] text-foreground/70">
                <span className="font-medium text-foreground/90">Leon Freier</span> (&ldquo;Consultant&rdquo;), Hamburg, Germany
              </p>
              <p className="text-[14px] text-foreground/70">
                <span className="font-medium text-foreground/90">Richard Okonicha</span> (&ldquo;Company&rdquo;), trading as Fugoku Cloud
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

              {/* Scope options */}
              {section.options && (
                <div className="mt-6 space-y-4">
                  {section.options.map((opt) => {
                    const isSelected = selectedOption === opt.label;
                    return (
                      <button
                        key={opt.label}
                        onClick={() => setSelectedOption(isSelected ? null : opt.label)}
                        className={`w-full text-left p-6 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? "border-accent ring-2 ring-accent/20 bg-accent/[0.05]"
                            : opt.recommended
                            ? "border-accent/30 bg-accent/[0.03] hover:border-accent/50"
                            : "border-border/50 bg-foreground/[0.01] hover:border-border"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? "border-accent bg-accent" : "border-foreground/20"
                          }`}>
                            {isSelected && (
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </div>
                          <span className="text-[13px] font-semibold text-foreground/90">
                            {opt.label} &mdash; {opt.name}
                          </span>
                          {opt.recommended && (
                            <span className="text-[9px] font-semibold tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-full uppercase">
                              Recommended
                            </span>
                          )}
                        </div>
                        <p className="text-[12px] text-accent/70 mb-2 pl-7" style={{ fontFamily: "Georgia, serif" }}>
                          {opt.terms}
                        </p>
                        <p className="text-[13px] text-foreground/55 leading-relaxed pl-7">{opt.desc}</p>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          {/* Signatures */}
          <div className="mt-20 pt-16 border-t border-border/50">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-[11px] font-medium tracking-[0.2em] text-accent/70 uppercase mb-6">Consultant</p>
                <p className="text-[15px] font-medium text-foreground/90 mb-8">Leon Freier</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-[11px] text-foreground/30 mb-2">Signature</p>
                    <div className="border-b border-foreground/15 w-full h-8" />
                  </div>
                  <div>
                    <p className="text-[11px] text-foreground/30 mb-2">Date</p>
                    <div className="border-b border-foreground/15 w-full h-8" />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-medium tracking-[0.2em] text-accent/70 uppercase mb-6">Company</p>
                <p className="text-[15px] font-medium text-foreground/90 mb-8">Richard Okonicha</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-[11px] text-foreground/30 mb-2">Signature</p>
                    <div className="border-b border-foreground/15 w-full h-8" />
                  </div>
                  <div>
                    <p className="text-[11px] text-foreground/30 mb-2">Date</p>
                    <div className="border-b border-foreground/15 w-full h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Agreement CTA */}
          <div className="print-hide mt-20 text-center">
            <button
              onClick={handleExportPDF}
              className="inline-block text-[15px] font-medium px-8 py-3.5 rounded-xl bg-accent text-white hover:bg-accent-dark transition-colors duration-200"
            >
              Agreement
            </button>
            <p className="text-[13px] text-foreground/35 mt-4">Download as PDF.</p>
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
