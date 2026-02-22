"use client";

const sections = [
  {
    num: "01",
    title: "Core Values",
    subtitle: "The non-negotiables. 3–5 words that define how your company operates.",
    prompt: "What behaviors do you reward? What gets someone fired even if they hit their numbers?",
    examples: ["Drive", "Craft", "Clarity", "Integrity", "Ownership"],
    deliverable: "3–5 core values, each in one word. No paragraphs. No aspirations. What's already true when you're at your best.",
  },
  {
    num: "02",
    title: "Core Focus",
    subtitle: "Your purpose and your niche. Two sentences maximum.",
    prompt: "Why does Fugoku exist beyond making money? And for whom, specifically?",
    fields: [
      { label: "Purpose", hint: "Why you exist (not what you sell)" },
      { label: "Niche", hint: "Who you serve + what you do for them" },
    ],
    deliverable: "One sentence for purpose. One sentence for niche. If it takes a paragraph, it's not clear yet.",
  },
  {
    num: "03",
    title: "10-Year Target",
    subtitle: "The big, measurable goal. Revenue, users, market position.",
    prompt: "If everything goes right for 10 years, what's the headline?",
    deliverable: "One sentence. Specific enough to know when you've hit it. \"We want to be big\" doesn't count.",
  },
  {
    num: "04",
    title: "3-Year Picture",
    subtitle: "What the company looks like in 3 years. Concrete, not aspirational.",
    prompt: "Walk me through a Tuesday morning at Fugoku in February 2029.",
    fields: [
      { label: "Revenue", hint: "Annual target" },
      { label: "Headcount", hint: "How many people" },
      { label: "Geography", hint: "Where you operate" },
      { label: "Product", hint: "What you sell" },
      { label: "Differentiator", hint: "Why customers choose you over alternatives" },
    ],
    deliverable: "Fill in each field. Short answers. This becomes the filter for every decision in the next 3 years.",
  },
  {
    num: "05",
    title: "1-Year Plan",
    subtitle: "The goals that make the 3-year picture possible.",
    prompt: "What 3–7 things must be true 12 months from now?",
    fields: [
      { label: "Revenue goal", hint: "" },
      { label: "Key metric #1", hint: "" },
      { label: "Key metric #2", hint: "" },
      { label: "Key metric #3", hint: "" },
    ],
    deliverable: "3–7 measurable goals. Each one has a number attached. No \"improve\" or \"grow\" without a target.",
  },
  {
    num: "06",
    title: "Rocks (90 days)",
    subtitle: "The 3–7 most important things for the next quarter. Everything else is noise.",
    prompt: "If you could only accomplish 3 things in the next 90 days, what would move the needle most?",
    deliverable: "3–7 rocks. Each one is binary: done or not done. No percentages. No \"in progress.\" Each rock has one owner.",
  },
  {
    num: "07",
    title: "Issues List",
    subtitle: "Everything that's in the way. Unfiltered. No solutions yet.",
    prompt: "What keeps you up at night? What are you avoiding? What's broken that nobody talks about?",
    deliverable: "Brain dump. Every issue, obstacle, idea, and frustration. We'll prioritize together. Nothing is too small or too big for this list.",
  },
  {
    num: "08",
    title: "Scorecard",
    subtitle: "5–15 weekly numbers that tell you if the business is healthy without a meeting.",
    prompt: "If you were on a beach with no phone, what 5 numbers would you check to know if everything's okay?",
    deliverable: "List the metrics. For each one: who owns it, what's the target, how often is it measured. If you don't have them yet, list what you think they should be.",
  },
];

export default function ExecutionDoc() {
  return (
    <>
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
          @page {
            margin: 1.5cm 2cm;
          }
        }
      `}</style>

      <main className="min-h-screen">
        <div className="max-w-2xl mx-auto px-6 pt-24 pb-20 md:pt-36">

          {/* Header */}
          <header className="text-center mb-20">
            <p className="text-[11px] font-medium tracking-[0.25em] text-accent uppercase mb-8">
              EOS Foundation
            </p>
            <h1 className="text-[28px] md:text-[34px] font-light tracking-tight text-foreground/90 mb-3" style={{ fontFamily: "Georgia, serif" }}>
              Execution
            </h1>
            <p className="text-[14px] text-foreground/40 max-w-md mx-auto mt-6 leading-relaxed">
              Complete each section before our first working session. 
              Imperfect answers beat empty fields.
            </p>
          </header>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.num} className="mb-16">
              {/* Section header */}
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[12px] font-medium text-accent/60" style={{ fontFamily: "Georgia, serif" }}>
                  {section.num}
                </span>
                <h2 className="text-[12px] font-medium tracking-[0.2em] text-foreground/50 uppercase">
                  {section.title}
                </h2>
              </div>

              <p className="text-[15px] font-medium text-foreground/80 mb-3">
                {section.subtitle}
              </p>

              {/* Prompt */}
              <div className="border-l-2 border-accent/30 pl-5 mb-5">
                <p className="text-[13px] text-foreground/50 italic leading-relaxed">
                  {section.prompt}
                </p>
              </div>

              {/* Examples */}
              {section.examples && (
                <div className="flex gap-2 flex-wrap mb-5">
                  {section.examples.map((ex) => (
                    <span key={ex} className="text-[11px] text-accent/70 bg-accent/[0.06] px-3 py-1 rounded-full">
                      {ex}
                    </span>
                  ))}
                  <span className="text-[11px] text-foreground/25 px-2 py-1">example only</span>
                </div>
              )}

              {/* Fields */}
              {section.fields && (
                <div className="space-y-4 mb-5">
                  {section.fields.map((field) => (
                    <div key={field.label}>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-[12px] font-medium text-foreground/60">{field.label}</span>
                        {field.hint && <span className="text-[11px] text-foreground/30">{field.hint}</span>}
                      </div>
                      <div className="border-b border-foreground/10 h-8" />
                    </div>
                  ))}
                </div>
              )}

              {/* Deliverable */}
              <div className="bg-foreground/[0.02] border border-border/40 rounded-xl p-5">
                <p className="text-[11px] font-medium tracking-[0.15em] text-accent/60 uppercase mb-2">Deliverable</p>
                <p className="text-[13px] text-foreground/55 leading-relaxed">{section.deliverable}</p>
              </div>
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="print-hide mt-16 text-center">
            <button
              onClick={() => window.print()}
              className="inline-block text-[15px] font-medium px-8 py-3.5 rounded-xl bg-accent text-white hover:bg-accent-dark transition-colors duration-200"
            >
              Export
            </button>
            <p className="text-[13px] text-foreground/35 mt-4">Print or save as PDF.</p>
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
