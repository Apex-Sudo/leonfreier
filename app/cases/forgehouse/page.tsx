import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ForgeHouse — Case Study | Leon Freier",
  description: "From concept to live product in 3 hours. How ForgeHouse was built.",
  openGraph: {
    title: "ForgeHouse — Case Study | Leon Freier",
    description: "From concept to live product in 3 hours.",
    url: "https://leonfreier.com/cases/forgehouse",
    type: "article",
  },
};

export default function ForgeHouseCase() {
  return (
    <main className="min-h-screen">

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero px-6 pt-24 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-medium tracking-widest text-accent uppercase mb-6">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">ForgeHouse</h1>
          <p className="text-[17px] text-foreground/60 leading-relaxed">From concept to live product in 3 hours.</p>
        </div>
      </section>

      {/* ═══ The Numbers ═══ */}
      <section className="px-6 py-14 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <span className="text-[32px] md:text-[40px] font-bold text-foreground">3h</span>
              <p className="text-[12px] text-muted mt-1">Concept to launch</p>
            </div>
            <div className="text-center">
              <span className="text-[32px] md:text-[40px] font-bold text-foreground">77</span>
              <p className="text-[12px] text-muted mt-1">Page views, day one</p>
            </div>
            <div className="text-center">
              <span className="text-[32px] md:text-[40px] font-bold text-foreground">1</span>
              <p className="text-[12px] text-muted mt-1">Mentor onboarded</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ The Problem ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">The Problem</h2>
          <div className="section-module">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/75 mb-4">
              Mentorship is broken in two directions. Experienced operators want to share what they know 
              but don&apos;t have time for 1-on-1 calls. Founders who need guidance can&apos;t afford $500/hour 
              and can&apos;t wait three weeks for a calendar slot.
            </p>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/75">
              The knowledge exists. The delivery mechanism doesn&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ The Insight ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">The Insight</h2>
          <div className="border-l-2 border-accent/40 pl-6 py-2">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/70">
              What if the mentor didn&apos;t need to be in the room? Train an AI agent on a mentor&apos;s 
              real expertise, frameworks, and thinking patterns. The mentor contributes once. 
              The agent serves thousands. Available at midnight on a Sunday when the founder 
              is stuck and needs a sounding board.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ The Build ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">The Build</h2>
          <div className="space-y-5">
            <div className="glass-card p-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[12px] font-semibold text-accent shrink-0 w-16">Hour 1</span>
                <div>
                  <p className="text-[14px] font-medium text-foreground">Business model + positioning</p>
                  <p className="text-[13px] text-foreground/50">Revenue model, mentor split (75/25), category definition. 
                  Not a chatbot company. A mentorship platform where AI is the delivery mechanism.</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[12px] font-semibold text-accent shrink-0 w-16">Hour 2</span>
                <div>
                  <p className="text-[14px] font-medium text-foreground">Design system + site architecture</p>
                  <p className="text-[13px] text-foreground/50">Full design language from scratch. Not a template. 
                  Landing page, mentor profiles, agent chat interface, pricing structure.</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-baseline gap-4">
                <span className="text-[12px] font-semibold text-accent shrink-0 w-16">Hour 3</span>
                <div>
                  <p className="text-[14px] font-medium text-foreground">Deploy + first mentor recruited</p>
                  <p className="text-[13px] text-foreground/50">Live at forgehouse.io. First mentor onboarded with a personalized 
                  contribute page. Analytics wired. Everything works.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ The Model ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">The Model</h2>
          <div className="section-module">
            <div className="space-y-6">
              <div>
                <p className="text-[14px] font-medium text-foreground mb-1">For mentors</p>
                <p className="text-[14px] text-foreground/60">
                  Contribute your expertise once. Earn 75% of subscription revenue from your agent. 
                  No calendar management. No calls. Your knowledge works while you sleep.
                </p>
              </div>
              <div className="border-t border-border/50"></div>
              <div>
                <p className="text-[14px] font-medium text-foreground mb-1">For founders</p>
                <p className="text-[14px] text-foreground/60">
                  Access to experienced operators&apos; thinking. Not generic AI. Agents trained on 
                  real frameworks from people who built real companies. Available instantly.
                </p>
              </div>
              <div className="border-t border-border/50"></div>
              <div>
                <p className="text-[14px] font-medium text-foreground mb-1">The &ldquo;Friedrich Move&rdquo;</p>
                <p className="text-[14px] text-foreground/60">
                  A free blended agent gives everyone access to collective mentor wisdom. 
                  Subscriptions unlock individual mentor agents. Free tier drives adoption, 
                  paid tier drives revenue. The mentors subsidize their own distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ What I Did ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">My Role</h2>
          <div className="glass-card p-8">
            <div className="grid grid-cols-2 gap-y-3 text-[14px]">
              <span className="text-foreground/50">Strategy</span>
              <span className="text-foreground">Business model, positioning, category</span>
              <span className="text-foreground/50">Design</span>
              <span className="text-foreground">Full design system, built from scratch</span>
              <span className="text-foreground/50">Product</span>
              <span className="text-foreground">Site architecture, agent framework, UX</span>
              <span className="text-foreground/50">GTM</span>
              <span className="text-foreground">Mentor recruitment, pitch, onboarding</span>
              <span className="text-foreground/50">Launch</span>
              <span className="text-foreground">Deploy, analytics, first traffic</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Result ═══ */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-6">Result</h2>
          <div className="border-l-2 border-accent/40 pl-6 py-2">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/70 mb-4">
              A live product with its first mentor, first traffic, and a revenue model 
              that compounds without scaling headcount. Built in an afternoon.
            </p>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/50">
              The constraint was never time or money. It was seeing the full picture 
              clearly enough to build it in one pass.*
            </p>
            <p className="text-[13px] text-foreground/35 mt-6">
              *The actual constraint was GoDaddy DNS propagation. The product was done 
              before the domain pointed to it.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <a href="https://forgehouse.io" target="_blank" rel="noopener noreferrer" className="accent-link text-[15px]">
            See it live at forgehouse.io &rarr;
          </a>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 pt-10 pb-10">
        <div className="max-w-2xl mx-auto border-t border-border pt-8 flex justify-between items-center">
          <a href="/" className="accent-link text-[13px]">leonfreier.com</a>
          <a href="mailto:leon@maxresult.ai" className="accent-link text-[13px]">leon@maxresult.ai</a>
        </div>
      </footer>

    </main>
  );
}
