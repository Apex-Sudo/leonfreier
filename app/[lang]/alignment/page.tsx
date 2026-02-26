import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alignment — Leon Freier",
  description:
    "Core values, Culture Map, and Predictive Index profile. What you're aligning with before we work together.",
};

// Server component by default (FHDP rule #9)

/* ─── Culture Map Data ─── */
const cultureAxes = [
  {
    label: "Scheduling",
    subtitle: "How I treat deadlines and time commitments",
    left: "Linear",
    right: "Flexible",
    value: 18,
  },
  {
    label: "Trust",
    subtitle: "How trust is built: through delivery or through relationship",
    left: "Task-based",
    right: "Relationship-based",
    value: 45,
  },
  {
    label: "Communication",
    subtitle: "How I say things: explicit and brief, or wrapped in context",
    left: "Direct / Low-context",
    right: "High-context",
    value: 15,
  },
  {
    label: "Feedback",
    subtitle: "How I deliver criticism: straight or softened",
    left: "Direct negative",
    right: "Indirect",
    value: 20,
  },
];

/* ─── PI Data ─── */
const piFactors = [
  {
    label: "Dominance",
    shortLabel: "A",
    value: 92,
    desc: "Independent, assertive, drives change",
  },
  {
    label: "Extraversion",
    shortLabel: "B",
    value: 38,
    desc: "Task-focused, private, doesn't need an audience",
  },
  {
    label: "Patience",
    shortLabel: "C",
    value: 12,
    desc: "Intense, restless, needs variety and pace",
  },
  {
    label: "Formality",
    shortLabel: "D",
    value: 28,
    desc: "Flexible, informal, tolerant of uncertainty",
  },
];

/* ─── Culture Map Chart ─── */
function CultureMapChart() {
  return (
    <div className="space-y-8">
      {cultureAxes.map((d) => (
        <div key={d.label}>
          <p className="text-[13px] font-medium text-foreground mb-0.5">
            {d.label}
          </p>
          <p className="text-[11px] text-foreground/35 mb-2">{d.subtitle}</p>
          <div className="flex justify-between text-[11px] text-muted mb-2">
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
    </div>
  );
}

/* ─── PI Bar Chart ─── */
function PIChart() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between text-[10px] text-foreground/25 mb-1">
        <span>Low</span>
        <span>High</span>
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
      <p className="text-[11px] text-foreground/30 pt-2">
        Predictive Index: Venturer profile.
      </p>
    </div>
  );
}

/* ─── Page ─── */
export default function ValuesPage() {
  return (
    <main className="min-h-screen">

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-medium tracking-widest text-accent uppercase mb-6">Alignment</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            What You&rsquo;re Aligning With
          </h1>
          <p className="text-[17px] text-foreground/60 leading-relaxed">
            The things most partnerships get wrong are never in the contract.
          </p>
        </div>
      </section>

      {/* ═══ Intro ═══ */}
      <section className="px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/80 mb-6 font-medium">
            This is who I am and how I work. Not the resume version. The
            actual operating system: how I make decisions, communicate,
            handle friction, and what I value. If we&rsquo;re going to work
            together, this is what you&rsquo;re signing up for.
          </p>
          <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/60 mb-6">
            Most people skip this part. They talk about the project, the
            terms, the timeline. Then six months in, something breaks and
            nobody can explain why. It&rsquo;s almost never the work. It&rsquo;s the wiring
            underneath.
          </p>
          <div className="pl-6 border-l-2 border-accent/20 space-y-2 mb-6">
            <p className="text-[14px] text-foreground/50">One person optimizes for speed, the other for consensus.</p>
            <p className="text-[14px] text-foreground/50">One says what they think, the other wraps it in three layers of diplomacy.</p>
            <p className="text-[14px] text-foreground/50">One ships at 90%, the other can&rsquo;t let go at 99%.</p>
          </div>
          <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/60">
            Misaligned values don&rsquo;t cause arguments. They cause slow,
            invisible friction that drains both sides until someone quits
            without a reason they can articulate.
          </p>
        </div>
      </section>

      {/* ═══ Values ═══ */}
      <section className="px-6 pb-16 pt-2">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-8">
            Core Values
          </h2>
          <div className="space-y-5">
            <div className="section-module">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[13px] font-mono text-accent/60">01</span>
                <h3 className="text-[18px] font-semibold tracking-tight">Drive</h3>
              </div>
              <p className="text-[15px] leading-relaxed text-foreground/70 pl-9">
                I don&rsquo;t wait for permission, motivation, or the right
                moment. The work starts before the conditions are perfect.
                High energy isn&rsquo;t a side effect, it&rsquo;s the engine. If you
                need someone to tell you to start, we&rsquo;re not aligned.
              </p>
            </div>
            <div className="section-module">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[13px] font-mono text-accent/60">02</span>
                <h3 className="text-[18px] font-semibold tracking-tight">Craft</h3>
              </div>
              <p className="text-[15px] leading-relaxed text-foreground/70 pl-9">
                No &ldquo;good enough.&rdquo; If it ships, it should look like
                someone cared. The details aren&rsquo;t details. The formatting,
                the follow-through, the extra pass before it goes out.
                That&rsquo;s not perfectionism. It&rsquo;s respect for the work
                and the person receiving it.
              </p>
            </div>
            <div className="section-module">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[13px] font-mono text-accent/60">03</span>
                <h3 className="text-[18px] font-semibold tracking-tight">Clarity</h3>
              </div>
              <p className="text-[15px] leading-relaxed text-foreground/70 pl-9">
                Say what you mean. Say it once. No hedging, no padding, no
                diplomatic fog. If something isn&rsquo;t working, I&rsquo;ll
                tell you. I expect the same back. Clarity isn&rsquo;t bluntness
                for its own sake. It&rsquo;s the fastest way to trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Culture Map ═══ */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="section-module">
            <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">
              How I Operate
            </h2>
            <p className="text-[14px] text-foreground/50 mb-10">
              Based on Erin Meyer&rsquo;s{" "}
              <a
                href="https://erinmeyer.com/books/the-culture-map/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Culture Map
              </a>
              . Where I sit on the axes that matter in working relationships.
            </p>
            <CultureMapChart />
            <div className="pl-6 border-l-2 border-accent/20 space-y-3 mt-8">
              <p className="text-[13px] text-foreground/40 italic leading-relaxed">
                &ldquo;Good communication is precise, simple, explicit, and clear. Messages are expressed and understood at face value.&rdquo;
              </p>
              <p className="text-[13px] text-foreground/40 italic leading-relaxed">
                &ldquo;Trust is built through work. We work well together, we like each other&rsquo;s work, we like each other, so I trust you.&rdquo;
              </p>
              <p className="text-[11px] text-foreground/25 mt-2">
                &mdash; Erin Meyer, <em>The Culture Map</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Predictive Index ═══ */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="section-module">
            <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">
              How I&rsquo;m Wired
            </h2>
            <p className="text-[14px] text-foreground/50 mb-10">
              Based on the{" "}
              <a
                href="https://www.predictiveindex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Predictive Index
              </a>
              . Behavioral DNA. Not personality, not preference. The pattern
              underneath.
            </p>
            <PIChart />
            <div className="pl-6 border-l-2 border-accent/20 space-y-3 mt-8">
              <p className="text-[13px] text-foreground/40 italic leading-relaxed">
                &ldquo;A self-starting, self-motivating, and goal-oriented risk-taker. This Behavioral Pattern is extremely wide, which means that observed behaviors are very strongly expressed and needs are very strongly felt.&rdquo;
              </p>
              <p className="text-[13px] text-foreground/40 italic leading-relaxed">
                &ldquo;Risk-taking, daring, and focus on future goals; more concerned with where they&rsquo;re going than either how they&rsquo;ll get there, or where they&rsquo;ve been.&rdquo;
              </p>
              <p className="text-[11px] text-foreground/25 mt-2">
                &mdash; Predictive Index Behavioral Report, Feb 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-module py-12 px-8">
            <p className="text-[20px] md:text-[22px] font-semibold tracking-tight mb-3">
              If this didn&rsquo;t scare you away
            </p>
            <p className="text-[15px] text-foreground/50 mb-8">
              Let&rsquo;s see if there&rsquo;s something worth building together.
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
        </div>
      </section>

    </main>
  );
}
