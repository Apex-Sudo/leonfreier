import Image from "next/image";
import { getDictionary, type Locale } from '@/lib/i18n';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const t = dict.home;

  return (
    <main className="min-h-screen">

      {/* ═══ Hero Section - Two Column with Portrait ═══ */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Headline */}
          <div className="md:col-span-7 z-10">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.1] mb-8">
              {t.tagline}
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-xl leading-relaxed mb-4 italic">
              {t.intro}
            </p>
            <p className="text-lg md:text-xl text-foreground/75 max-w-xl leading-relaxed italic">
              &ldquo;{t.value_p1}&rdquo;
            </p>
          </div>

          {/* Right Column - Portrait */}
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-bg-warm rounded-xl overflow-hidden relative group shadow-2xl shadow-black/20">
              <Image
                src="/leon-headshot.png"
                alt="Leon Freier"
                width={998}
                height={1248}
                className="w-full h-full object-cover grayscale brightness-110 contrast-100 transition-all duration-700 group-hover:grayscale-0"
                priority
              />
              <div className="absolute inset-0 bg-accent/5 mix-blend-multiply"></div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* ═══ Ventures Grid - Asymmetric Bento Layout ═══ */}
      <section className="py-24 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">{t.current_ventures}</h2>
              <p className="text-muted text-lg">Four companies. Zero outside capital. Built to compound.</p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
            
            {/* ApexAlpha - Flagship (2x2) */}
            <div className="md:col-span-2 md:row-span-2 bg-bg p-8 md:p-12 rounded-xl flex flex-col justify-between group transition-all duration-500 hover:shadow-lg">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-muted/60 mb-8 block">01 / {t.cat_demand}</span>
                <a 
                  href="https://apexalpha.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-serif text-3xl md:text-4xl mb-4 block hover:text-accent transition-colors"
                >
                  ApexAlpha
                </a>
                <p className="text-muted leading-relaxed text-lg max-w-sm">
                  {t.aa_deep}
                </p>
                <p className="text-sm text-muted/60 mt-4">{t.aa_date}</p>
              </div>
            </div>

            {/* ForgeHouse (2x1) */}
            <div className="md:col-span-2 bg-bg p-8 rounded-xl flex flex-col justify-between hover:shadow-lg transition-all duration-500">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs tracking-[0.3em] uppercase text-muted/60 mb-4 block">02 / {t.cat_knowledge}</span>
                  <a 
                    href="https://forgehouse.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-serif text-2xl mb-2 block hover:text-accent transition-colors"
                  >
                    ForgeHouse
                  </a>
                  <p className="text-muted leading-relaxed">
                    {t.fh_deep}
                  </p>
                  <p className="text-sm text-muted/60 mt-3">{t.fh_date}</p>
                </div>
              </div>
            </div>

            {/* MaxResult (1x1) */}
            <div className="md:col-span-1 bg-bg p-8 rounded-xl flex flex-col justify-between hover:shadow-lg transition-all duration-500">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-muted/60 mb-4 block">03 / {t.cat_saas}</span>
                <a 
                  href="https://maxresult.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-serif text-xl mb-2 block hover:text-accent transition-colors"
                >
                  MaxResult
                </a>
                <p className="text-sm text-muted leading-relaxed">
                  {t.mr_deep}
                </p>
                <p className="text-xs text-muted/60 mt-3">{t.mr_date}</p>
              </div>
            </div>

            {/* Da Nang Beach Villas (1x1) */}
            <div className="md:col-span-1 bg-bg p-8 rounded-xl flex flex-col justify-between hover:shadow-lg transition-all duration-500">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-muted/60 mb-4 block">04 / {t.cat_hospitality}</span>
                <a 
                  href="https://danangbeachvillas.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-serif text-xl mb-2 block hover:text-accent transition-colors"
                >
                  Da Nang Beach Villas
                </a>
                <p className="text-sm text-muted leading-relaxed">
                  {t.dnbv_deep}
                </p>
                <p className="text-xs text-muted/60 mt-3">{t.dnbv_date}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ Manifesto Section - Image + Text Side by Side ═══ */}
      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            
            {/* Image Column */}
            <div className="md:col-span-5 md:col-start-2">
              <div className="aspect-square bg-bg-warm overflow-hidden rounded-xl group shadow-2xl shadow-black/20">
                <Image
                  src="/philosophy-v2.jpg"
                  alt="Mountain peak above the clouds"
                  width={1200}
                  height={1800}
                  className="w-full h-full object-cover grayscale brightness-110 transition-all duration-700 group-hover:grayscale-0"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="md:col-span-5">
              <h2 className="font-serif text-4xl mb-8">{t.philosophy}</h2>
              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>
                  {t.philosophy_p1}
                </p>
                <p>
                  {t.philosophy_p2}
                </p>
              </div>
              <div className="mt-12">
                <a 
                  href={`/${lang === 'en' ? '' : lang + '/'}alignment`}
                  className="inline-flex items-center gap-3 font-serif italic text-xl text-accent hover:gap-5 transition-all"
                >
                  {t.see_alignment}
                  <span className="text-2xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Writing + Contact ═══ */}
      <section className="px-6 py-16 md:py-20 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="bg-bg-warm p-8 md:p-12 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8">
              <div>
                <h2 className="text-[13px] font-medium tracking-widest text-muted uppercase mb-4">{t.writing}</h2>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/leonfreier/" target="_blank" rel="noopener noreferrer" className="accent-link text-base">
                    LinkedIn →
                  </a>
                  <a href="https://substack.com/@leonfreier" target="_blank" rel="noopener noreferrer" className="accent-link text-base">
                    Substack →
                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-[13px] font-medium tracking-widest text-muted uppercase mb-4">{t.contact}</h2>
                <div className="flex gap-6">
                  <a href="mailto:leon@maxresult.ai" className="accent-link text-base">
                    leon@maxresult.ai
                  </a>
                  <a href="https://wa.me/4915758182075" target="_blank" rel="noopener noreferrer" className="accent-link text-base">
                    WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 py-12 bg-accent">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <span className="font-serif text-lg text-white">Leon Aljoscha Till Freier</span>
            <p className="text-sm tracking-widest uppercase text-white/70 mt-2">{t.tagline}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/40">
              © {new Date().getFullYear()} Leon Aljoscha Till Freier
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
