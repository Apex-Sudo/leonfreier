import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Alignment — Leon Freier",
  description:
    "Core values, Culture Map, and Predictive Index profile. What you're aligning with before we work together.",
};

// Server component by default (FHDP rule #9)

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
          <p className="text-[13px] font-medium text-foreground mb-0.5">
            {d.label}
          </p>
          <p className="text-[11px] text-foreground/40 mb-2">{d.subtitle}</p>
          <div className="flex justify-between text-[11px] text-foreground/40 mb-2">
            <span>{d.left}</span>
            <span>{d.right}</span>
          </div>
          <div className="relative h-2 bg-foreground/5 rounded-full">
            <div
              className="absolute top-1/2 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background shadow-sm z-10"
              style={{
                left: `${d.value}%`,
                transform: `translate(-50%, -50%)`,
              }}
            />
            <div
              className="absolute top-0 left-0 h-full rounded-full bg-accent/15"
              style={{ width: `${d.value}%` }}
            />
          </div>
        </div>
      ))}
      <p className="text-[11px] text-foreground/40 pt-1">
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
    <div className="space-y-6">
      <div className="flex justify-between text-[11px] text-foreground/40 mb-1">
        <span>{t.low}</span>
        <span>{t.high}</span>
      </div>
      {piFactors.map((f) => (
        <div key={f.label}>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-[11px] font-mono text-accent/60">
              {f.shortLabel}
            </span>
            <span className="text-[13px] font-medium text-foreground">
              {f.label}
            </span>
          </div>
          <div className="relative h-3 bg-foreground/5 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                width: `${f.value}%`,
                background:
                  f.value > 70
                    ? "rgba(184, 145, 106, 0.6)"
                    : f.value > 40
                    ? "rgba(184, 145, 106, 0.35)"
                    : "rgba(184, 145, 106, 0.2)",
              }}
            />
            <div
              className="absolute top-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background shadow-sm z-10"
              style={{
                left: `${f.value}%`,
                transform: `translate(-50%, -50%)`,
              }}
            />
          </div>
          <p className="text-[11px] text-foreground/40 mt-1">{f.desc}</p>
        </div>
      ))}
      <p className="text-[11px] text-foreground/40 pt-1">
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

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            {t.hero_title}
          </h1>
          <p className="text-[15px] text-foreground/70 leading-relaxed">
            {t.hero_intro}
          </p>
        </div>
      </section>

      {/* ═══ Values ═══ */}
      <section className="px-6 py-16 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[18px] font-semibold tracking-tight text-foreground mb-8">
            {t.values_title}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-[15px] font-semibold tracking-tight mb-1">{t.drive_title}</h3>
              <p className="text-[13px] text-foreground/40">{t.drive_short}</p>
            </div>
            <div>
              <h3 className="text-[15px] font-semibold tracking-tight mb-1">{t.craft_title}</h3>
              <p className="text-[13px] text-foreground/40">{t.craft_short}</p>
            </div>
            <div>
              <h3 className="text-[15px] font-semibold tracking-tight mb-1">{t.clarity_title}</h3>
              <p className="text-[13px] text-foreground/40">{t.clarity_short}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ How I'm Wired ═══ */}
      <section className="px-6 py-16 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[18px] font-semibold tracking-tight text-foreground mb-10">
            {t.wired_title}
          </h2>

          <div className="mb-16">
            <h3 className="text-[13px] font-medium text-foreground/40 mb-6">{t.culture_title}</h3>
            <CultureMapChart t={t} />
          </div>

          <div>
            <h3 className="text-[13px] font-medium text-foreground/40 mb-6">{t.pi_title}</h3>
            <PIChart t={t} />
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-6 pt-16 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[18px] font-semibold tracking-tight mb-3">
            {t.cta_title}
          </p>
          <p className="text-[13px] text-foreground/40 mb-8">
            {t.cta_sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/4915906592672"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium text-[14px] hover:bg-accent-dark transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a
              href="mailto:leon@leonfreier.com"
              className="inline-flex items-center justify-center gap-2 bg-foreground/10 text-foreground px-6 py-3 rounded-lg font-medium text-[14px] hover:bg-foreground/15 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              Email
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
