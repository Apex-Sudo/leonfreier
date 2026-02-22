import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spielzüge | Leon Freier",
  description: "Strategy in practice. Real builds, real outcomes.",
};

export default function SpielzuegePage() {
  return (
    <main className="min-h-screen pt-14">
      <section className="px-6 pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Spielzüge</h1>
          <p className="text-[15px] text-foreground/60">Strategy in practice.</p>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto space-y-5">
          <a href="/spielzuege/forgehouse" className="glass-card p-8 block transition-all duration-200 hover:border-accent/20">
            <h2 className="company-name">ForgeHouse</h2>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
              Most mentorship platforms sell access to a calendar. ForgeHouse trains AI agents on a mentor&apos;s actual frameworks, then lets anyone access that thinking on demand.
            </p>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
              Category, positioning, product, and live deployment in a single session. The agent went live the same day.
            </p>
            <span className="text-accent text-[13px] mt-4 inline-block">Read case &rarr;</span>
          </a>

          <a href="/spielzuege/gpu-compute" className="glass-card p-8 block transition-all duration-200 hover:border-accent/20">
            <h2 className="company-name">GPU Compute Startup</h2>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
              Pre-revenue infrastructure company selling managed compute to emerging markets. No operating system, no validated pricing, no GTM sequence. Just a founder with technical depth and warm leads going cold.
            </p>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
              Built the full EOS foundation, staged go-to-market, and pricing architecture. Then told the founder he wasn&apos;t ready yet and walked away from the revenue. He wrote a recommendation the same week.
            </p>
            <span className="text-accent text-[13px] mt-4 inline-block">Read case &rarr;</span>
          </a>
        </div>
      </section>
    </main>
  );
}
