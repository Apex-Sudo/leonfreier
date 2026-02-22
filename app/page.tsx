import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero px-6 pt-28 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            <Image
              src="/leon.webp"
              alt="Leon Freier"
              width={200}
              height={200}
              className="rounded-2xl photo-ring flex-shrink-0 w-[160px] h-[160px] md:w-[200px] md:h-[200px] object-cover"
              priority
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3">Leon Freier</h1>
              <p className="text-accent font-medium text-[14px] tracking-wide mb-4">Alignment. Agreement. Execution.</p>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-foreground/75 max-w-lg">
                Three companies, two continents, no outside capital.
              </p>
              <p className="text-muted text-[13px] mt-4">Hamburg, Germany</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ The Thread ═══ */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/70 mb-10">
            I&apos;ve never separated work from play. Building companies is how I express myself, the way some people write music or paint. Three companies, two continents, zero outside capital. Every one started with something I couldn&apos;t leave alone.
          </p>

          <div className="space-y-5">
            <div className="glass-card p-8 transition-all duration-200 hover:border-accent/20">
              <a href="https://danangbeachvillas.com" target="_blank" rel="noopener noreferrer" className="company-name hover:underline decoration-accent/30 underline-offset-4">
                Da Nang Beach Villas
              </a>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
                10 years running beachfront villas in Vietnam. 15 properties, 374 guest reviews.
                Built the team, the operations, the direct booking site. All from Hamburg.
              </p>
            </div>

            <div className="glass-card p-8 transition-all duration-200 hover:border-accent/20">
              <a href="https://apexalpha.app" target="_blank" rel="noopener noreferrer" className="company-name hover:underline decoration-accent/30 underline-offset-4">
                ApexAlpha
              </a>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
                Vacation rental operators are flying blind to who&apos;s browsing their site and
                what those visitors would actually pay. I&apos;m building the intelligence layer
                that makes demand visible.
              </p>
            </div>

            <div className="glass-card p-8 transition-all duration-200 hover:border-accent/20">
              <a href="https://forgehouse.io" target="_blank" rel="noopener noreferrer" className="company-name hover:underline decoration-accent/30 underline-offset-4">
                ForgeHouse
              </a>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/60 mt-2">
                Mentorship shouldn&apos;t require a calendar invite. AI agents trained on
                real expertise, available the moment you need them.
              </p>
            </div>
          </div>

          <p className="text-[14px] leading-relaxed text-foreground/40 mt-10">
            The pattern: find the gap, build what should exist, own the whole stack.
          </p>
        </div>
      </section>

      {/* ═══ How I Help ═══ */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-2 border-accent/40 pl-8">
            <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-5">How I Help</h2>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/75 max-w-xl mb-4">
              I work with early-stage founders who can build but can&apos;t see the full picture yet.
              GTM, positioning, business model architecture.
            </p>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/75 max-w-xl">
              No theory. No borrowed frameworks. Pattern recognition from building across
              two continents with zero outside capital.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Writing + Contact ═══ */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8">
              <div>
                <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-4">Writing</h2>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/leonfreier/" target="_blank" rel="noopener noreferrer" className="accent-link text-[15px]">
                    LinkedIn &rarr;
                  </a>
                  <a href="https://substack.com/@leonfreier" target="_blank" rel="noopener noreferrer" className="accent-link text-[15px]">
                    Substack &rarr;
                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-4">Contact</h2>
                <div className="flex gap-6">
                  <a href="mailto:leon@maxresult.ai" className="accent-link text-[15px]">
                    leon@maxresult.ai
                  </a>
                  <a href="https://wa.me/4915758182075" target="_blank" rel="noopener noreferrer" className="accent-link text-[15px]">
                    WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 pt-8 pb-12">
        <div className="max-w-3xl mx-auto border-t border-border pt-8">
          <p className="text-[13px] text-muted/50">Hamburg. Da Nang. Wherever the work is.</p>
        </div>
      </footer>

    </main>
  );
}
