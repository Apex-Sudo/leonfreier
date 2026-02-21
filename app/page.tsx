import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero px-6 pt-28 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            <Image
              src="/leon.webp"
              alt="Leon Freier"
              width={180}
              height={180}
              className="rounded-2xl photo-ring flex-shrink-0 w-[140px] h-[140px] md:w-[180px] md:h-[180px] object-cover"
              priority
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Leon Freier</h1>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-foreground/75 max-w-lg">
                I build things from zero. Strategy, operations, go-to-market.
                Three companies, two continents, no outside capital.
              </p>
              <p className="text-muted text-[13px] mt-4">Hamburg, Germany</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ The Thread ═══ */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="section-module">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/80 mb-8">
              Every company I&apos;ve built started the same way.
              I saw something missing and couldn&apos;t stop thinking about it.
            </p>

            <div className="space-y-8">
              <div>
                <a href="https://danangbeachvillas.com" target="_blank" rel="noopener noreferrer" className="company-name hover:underline decoration-accent/30 underline-offset-4">
                  Da Nang Beach Villas
                </a>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/65 mt-1.5">
                  10 years running beachfront villas in Vietnam. 15 properties, 374 guest reviews.
                  Built the team, the operations, the direct booking site. All from Hamburg.
                </p>
              </div>

              <div>
                <a href="https://apexalpha.app" target="_blank" rel="noopener noreferrer" className="company-name hover:underline decoration-accent/30 underline-offset-4">
                  ApexAlpha
                </a>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/65 mt-1.5">
                  Vacation rental operators are flying blind to who&apos;s browsing their site and
                  what those visitors would actually pay. I&apos;m building the intelligence layer
                  that makes demand visible.
                </p>
              </div>

              <div>
                <a href="https://forgehouse.io" target="_blank" rel="noopener noreferrer" className="company-name hover:underline decoration-accent/30 underline-offset-4">
                  ForgeHouse
                </a>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/65 mt-1.5">
                  Mentorship shouldn&apos;t require a calendar invite. AI agents trained on
                  real expertise, available the moment you need them.
                </p>
              </div>
            </div>

            <p className="text-[14px] md:text-[15px] leading-relaxed text-foreground/50 mt-10 pt-8 border-t border-border">
              The pattern: find the gap, build what should exist, own the whole stack.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ How I Help ═══ */}
      <section className="px-6 py-14 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">How I Help</h2>
          <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/75 max-w-xl mb-4">
            I work with early-stage founders who can build but can&apos;t see the full picture yet.
            GTM, positioning, business model architecture.
          </p>
          <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/75 max-w-xl">
            No theory. No borrowed frameworks. Pattern recognition from building across
            two continents with zero outside capital.
          </p>
        </div>
      </section>

      {/* ═══ Writing ═══ */}
      <section className="px-6 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">Writing</h2>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/leonfreier/" target="_blank" rel="noopener noreferrer" className="accent-link text-[15px]">
              LinkedIn &rarr;
            </a>
            <a href="https://substack.com/@leonfreier" target="_blank" rel="noopener noreferrer" className="accent-link text-[15px]">
              Substack &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ═══ Contact ═══ */}
      <section className="px-6 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-8">
            <a href="mailto:leon@apexalpha.app" className="accent-link text-[15px]">
              leon@apexalpha.app
            </a>
            <a href="https://wa.me/4915758182075" target="_blank" rel="noopener noreferrer" className="accent-link text-[15px]">
              WhatsApp &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 pt-16 pb-12">
        <div className="max-w-3xl mx-auto border-t border-border pt-10">
          <p className="text-[13px] text-muted/60">Hamburg. Da Nang. Wherever the work is.</p>
        </div>
      </footer>

    </main>
  );
}
