export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full py-24">

        {/* Name */}
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Leon Freier</h1>
        <p className="text-[#737373] text-sm mb-16">Hamburg, Germany</p>

        {/* Who */}
        <section className="mb-14">
          <p className="text-[15px] leading-relaxed text-[#404040]">
            I build businesses from zero. Strategy, positioning, go-to-market architecture.
            Self-taught across the full stack, from code to category design.
            Currently running three companies, all bootstrapped, all profitable or pre-revenue by choice.
          </p>
        </section>

        {/* What I've Built */}
        <section className="mb-14">
          <h2 className="text-[11px] font-medium tracking-widest text-[#999] uppercase mb-6">What I&apos;ve Built</h2>
          <div className="space-y-6">
            <div>
              <a href="https://apexalpha.app" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium hover:text-[#B8916A] transition-colors">
                ApexAlpha
              </a>
              <p className="text-[13px] text-[#737373] mt-1">
                Demand visibility for vacation rental operators. The intelligence layer between traffic and revenue that nobody built yet. Category creator.
              </p>
            </div>
            <div>
              <a href="https://danangbeachvillas.com" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium hover:text-[#B8916A] transition-colors">
                Da Nang Beach Villas
              </a>
              <p className="text-[13px] text-[#737373] mt-1">
                Beachfront villa hosting in Vietnam. 10 years, 355 guest reviews, 15 properties.
                Built the direct booking site, operations, and team from scratch.
              </p>
            </div>
            <div>
              <a href="https://forgehouse.io" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium hover:text-[#B8916A] transition-colors">
                ForgeHouse
              </a>
              <p className="text-[13px] text-[#737373] mt-1">
                AI-native mentorship platform. Mentor agents available 24/7, trained on real expertise.
              </p>
            </div>
          </div>
        </section>

        {/* What I Help With */}
        <section className="mb-14">
          <h2 className="text-[11px] font-medium tracking-widest text-[#999] uppercase mb-6">What I Help With</h2>
          <p className="text-[15px] leading-relaxed text-[#404040] mb-4">
            I work with early-stage founders who can build but need help seeing the full picture.
            GTM strategy, positioning, business model architecture, and the discipline to ship what matters.
          </p>
          <p className="text-[15px] leading-relaxed text-[#404040]">
            Everything I advise on, I&apos;ve done myself. No theory. No frameworks borrowed from books I half-read.
            Just pattern recognition from building three businesses across two continents with zero outside capital.
          </p>
        </section>

        {/* Writing */}
        <section className="mb-14">
          <h2 className="text-[11px] font-medium tracking-widest text-[#999] uppercase mb-6">Writing</h2>
          <div className="space-y-3">
            <a href="https://www.linkedin.com/in/leonfreier/" target="_blank" rel="noopener noreferrer" className="block text-[15px] text-[#404040] hover:text-[#B8916A] transition-colors">
              LinkedIn &rarr;
            </a>
            <a href="https://substack.com/@leonfreier" target="_blank" rel="noopener noreferrer" className="block text-[15px] text-[#404040] hover:text-[#B8916A] transition-colors">
              Substack &rarr;
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-[11px] font-medium tracking-widest text-[#999] uppercase mb-6">Get in Touch</h2>
          <div className="space-y-3">
            <a href="mailto:leon@apexalpha.app" className="block text-[15px] text-[#404040] hover:text-[#B8916A] transition-colors">
              leon@apexalpha.app
            </a>
            <a href="https://wa.me/4915758182075" target="_blank" rel="noopener noreferrer" className="block text-[15px] text-[#404040] hover:text-[#B8916A] transition-colors">
              WhatsApp &rarr;
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-[#E5E5E5]">
          <p className="text-[12px] text-[#999]">Hamburg. Da Nang. Wherever the work is.</p>
        </footer>

      </div>
    </main>
  );
}
