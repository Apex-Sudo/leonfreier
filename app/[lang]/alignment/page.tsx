import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Alignment — Leon Freier",
  description:
    "Culture Map, Predictive Index, and what it means to work with me.",
};

/* ─── Culture Map Chart ─── */
function CultureMapChart({ t }: { t: Record<string, string> }) {
  const cultureAxes = [
    { label: t.scheduling, subtitle: t.scheduling_sub, left: t.linear, right: t.flexible, value: 18 },
    { label: t.trust, subtitle: t.trust_sub, left: t.task_based, right: t.relationship_based, value: 45 },
    { label: t.communication, subtitle: t.communication_sub, left: t.direct, right: t.high_context, value: 15 },
    { label: t.feedback, subtitle: t.feedback_sub, left: t.direct_negative, right: t.indirect, value: 20 },
  ];

  return (
    <div className="space-y-8">
      {cultureAxes.map((d) => (
        <div key={d.label}>
          <div className="flex justify-between items-end mb-3">
            <div>
              <h4 className="font-serif text-lg text-foreground">{d.label}</h4>
              <p className="text-xs text-muted mt-0.5">{d.subtitle}</p>
            </div>
          </div>
          <div className="relative h-2 w-full bg-border rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-accent/20 rounded-full"
              style={{ width: `${d.value}%` }}
            />
            <div
              className="absolute top-1/2 w-3.5 h-3.5 rounded-full bg-accent border-2 border-bg shadow-sm z-10"
              style={{
                left: `${d.value}%`,
                transform: `translate(-50%, -50%)`,
              }}
            />
          </div>
          <div className="flex justify-between mt-2 text-[10px] uppercase tracking-wider text-muted/60">
            <span>{d.left}</span>
            <span>{d.right}</span>
          </div>
        </div>
      ))}
      <p className="text-xs text-muted pt-2">
        <a href="https://erinmeyer.com/books/the-culture-map/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Erin Meyer, The Culture Map</a>
      </p>
    </div>
  );
}

/* ─── PI Bar Chart ─── */
function PIChart({ t }: { t: Record<string, string> }) {
  const piFactors = [
    { label: t.dominance, shortLabel: "A", value: 92, desc: t.dominance_desc },
    { label: t.extraversion, shortLabel: "B", value: 38, desc: t.extraversion_desc },
    { label: t.patience, shortLabel: "C", value: 12, desc: t.patience_desc },
    { label: t.formality, shortLabel: "D", value: 28, desc: t.formality_desc },
  ];

  return (
    <div className="space-y-8">
      {piFactors.map((f) => (
        <div key={f.label}>
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-xs font-mono text-accent/70 font-medium">
              {f.shortLabel}
            </span>
            <h4 className="font-serif text-lg text-foreground">{f.label}</h4>
          </div>
          <div className="relative h-3 bg-border rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                width: `${f.value}%`,
                background:
                  f.value > 70
                    ? "rgba(184, 145, 106, 0.6)"
                    : f.value > 40
                    ? "rgba(184, 145, 106, 0.35)"
                    : "rgba(184, 145, 106, 0.25)",
              }}
            />
            <div
              className="absolute top-1/2 w-3 h-3 rounded-full bg-accent border-2 border-bg shadow-sm z-10"
              style={{
                left: `${f.value}%`,
                transform: `translate(-50%, -50%)`,
              }}
            />
          </div>
          <div className="flex justify-between mt-2 text-[10px] uppercase tracking-wider text-muted/60">
            <span>{t.low}</span>
            <span>{t.high}</span>
          </div>
          <p className="text-sm text-muted mt-2">{f.desc}</p>
        </div>
      ))}
      <p className="text-xs text-muted pt-2">
        <a href="https://www.predictiveindex.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Predictive Index</a>: Venturer profile.
      </p>
    </div>
  );
}

/* ─── Page ─── */
export default async function AlignmentPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const t = dict.alignment;

  return (
    <main className="min-h-screen">

      {/* ═══ Hero Section ═══ */}
      <section className="px-8 pt-32 pb-24 md:pt-40 md:pb-32 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
              What You&rsquo;re <br /><em className="italic">Aligning</em> With.
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-3xl leading-relaxed">
              {t.hero_intro}
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Cultural Wiring Section - 4 Column Cards ═══ */}
      <section className="bg-bg-warm py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-16 gap-8">
            <h2 className="font-serif text-3xl md:text-4xl font-medium">{t.culture_title}</h2>
            <p className="text-muted max-w-xl leading-relaxed">
              The unwritten rules of engagement that define my day-to-day interactions and long-term partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Scheduling Card */}
            <div className="bg-bg p-8 rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold">{t.scheduling}</h3>
              <div className="h-px bg-border w-full"></div>
              <p className="text-sm text-muted leading-relaxed">
                I lean toward <span className="text-accent font-medium">{t.linear}</span>. While I appreciate flexibility, I find that deep work thrives within structured, predictable containers.
              </p>
            </div>

            {/* Trust Card */}
            <div className="bg-bg p-8 rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold">{t.trust}</h3>
              <div className="h-px bg-border w-full"></div>
              <p className="text-sm text-muted leading-relaxed">
                Trust is built through <span className="text-accent font-medium">{t.relationship_based.toLowerCase()}</span> patterns. I invest in long-term relationships and expect the same depth in return.
              </p>
            </div>

            {/* Communication Card */}
            <div className="bg-bg p-8 rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold">{t.communication}</h3>
              <div className="h-px bg-border w-full"></div>
              <p className="text-sm text-muted leading-relaxed">
                Prioritize <span className="text-accent font-medium">{t.direct.toLowerCase()} clarity</span>. I value well-written documentation over frequent status meetings. Clarity is kindness.
              </p>
            </div>

            {/* Feedback Card */}
            <div className="bg-bg p-8 rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold">{t.feedback}</h3>
              <div className="h-px bg-border w-full"></div>
              <p className="text-sm text-muted leading-relaxed">
                Direct, radical <span className="text-accent font-medium">candor</span>. I prefer the unvarnished truth delivered with professional empathy rather than delayed or softened critiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ How I'm Wired - Two Column Layout ═══ */}
      <section className="py-32 px-8 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start">
            
            {/* Left Column - Heading + Profile Callout */}
            <div className="md:col-span-4 md:sticky md:top-32">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">{t.wired_title}</h2>
              <p className="text-muted leading-relaxed mb-12">
                A data-driven snapshot of my behavioral tendencies. These aren&rsquo;t constraints, but natural inclinations that surface during periods of high intensity.
              </p>
              
              {/* Profile Callout Box */}
              <div className="p-8 bg-bg-warm rounded-xl">
                <h4 className="font-serif italic text-2xl mb-3 text-foreground">Venturer</h4>
                <p className="text-sm text-muted leading-relaxed">
                  High dominance and low patience suggest a profile that thrives on driving change independently, with urgency and minimal need for external validation.
                </p>
              </div>
            </div>

            {/* Right Column - Charts */}
            <div className="md:col-span-8 space-y-20">
              {/* Culture Map */}
              <div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-muted mb-8">{t.culture_title}</h3>
                <CultureMapChart t={t} />
              </div>

              {/* PI Chart */}
              <div className="pt-12 border-t border-border">
                <h3 className="text-sm font-medium tracking-widest uppercase text-muted mb-8">{t.pi_title}</h3>
                <PIChart t={t} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ What This Means in Practice - Two Column Layout ═══ */}
      <section className="bg-bg-warm py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left - Image */}
          <div className="aspect-square bg-bg relative overflow-hidden rounded-xl shadow-2xl shadow-black/20 group">
            <Image
              src="/philosophy-v2.jpg"
              alt="Mountain peak above the clouds"
              width={1200}
              height={1800}
              className="w-full h-full object-cover grayscale brightness-110 transition-all duration-700 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-accent/5 mix-blend-multiply"></div>
          </div>

          {/* Right - Numbered Principles */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-16">{t.implications_title}</h2>
            <ul className="space-y-12">
              <li className="flex gap-6">
                <span className="font-serif italic text-accent text-3xl flex-shrink-0">01</span>
                <div>
                  <p className="text-muted leading-relaxed">{t.implication_1}</p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="font-serif italic text-accent text-3xl flex-shrink-0">02</span>
                <div>
                  <p className="text-muted leading-relaxed">{t.implication_2}</p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="font-serif italic text-accent text-3xl flex-shrink-0">03</span>
                <div>
                  <p className="text-muted leading-relaxed">{t.implication_3}</p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="font-serif italic text-accent text-3xl flex-shrink-0">04</span>
                <div>
                  <p className="text-muted leading-relaxed">{t.implication_4}</p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="font-serif italic text-accent text-3xl flex-shrink-0">05</span>
                <div>
                  <p className="text-muted leading-relaxed">{t.implication_5}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ CTA Section ═══ */}
      <section className="py-48 px-8 text-center bg-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">{t.cta_title}</h2>
          <p className="text-xl text-muted mb-12 leading-relaxed italic max-w-2xl mx-auto">
            {t.cta_sub}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="mailto:leon@leonfreier.com"
              className="inline-flex items-center justify-center gap-3 bg-accent text-white px-10 py-4 rounded-full font-medium hover:bg-accent-dark hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email
            </a>
            <a
              href="https://wa.me/4915906592672"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-border text-foreground px-10 py-4 rounded-full font-medium hover:bg-bg-warm hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
