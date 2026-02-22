import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases | Leon Freier",
  description: "Strategy in practice. Real builds, real outcomes.",
};

export default function CasesPage() {
  return (
    <main className="min-h-screen pt-14">
      <section className="px-6 pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Cases</h1>
          <p className="text-[15px] text-foreground/60">Strategy in practice.</p>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto space-y-5">
          <a href="/cases/forgehouse" className="glass-card p-8 block transition-all duration-200 hover:border-accent/20">
            <h2 className="company-name">ForgeHouse</h2>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
              From concept to live product in 3 hours. AI-powered mentorship marketplace.
            </p>
            <span className="text-accent text-[13px] mt-4 inline-block">Read case &rarr;</span>
          </a>
        </div>
      </section>
    </main>
  );
}
