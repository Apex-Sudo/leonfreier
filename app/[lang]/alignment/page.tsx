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
      {piFactors.map((f) => (
        <div key={f.label}>
          <div className="flex items-baseline justify-between mb-1">
            <div>
              <span className="text-[11px] font-mono text-accent/60 mr-2">
                {f.shortLabel}
              </span>
              <span className="text-[13px] font-medium text-foreground">
                {f.label}
              </span>
            </div>
            <span className="text-[11px] text-foreground/40">{f.desc}</span>
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
          <div className="flex justify-between text-[10px] text-foreground/25 mt-1">
            <span>Low</span>
            <span>High</span>
          </div>
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
      <section className="gradient-hero px-6 pt-24 pb-16 md:pt-36 md:pb-24 mt-14">
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
          <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/60 mb-6">
            Most people skip this part. They talk about the project, the
            terms, the timeline. Then six months in, something breaks and
            nobody can explain why.
          </p>
          <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/60 mb-6">
            It&rsquo;s almost never the work. It&rsquo;s the wiring
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
      <section className="px-6 pb-14">
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
      <section className="px-6 py-14">
        <div className="max-w-2xl mx-auto">
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
              &ldquo;Negative feedback is provided frankly, bluntly, and honestly.&rdquo;
            </p>
            <p className="text-[13px] text-foreground/40 italic leading-relaxed">
              &ldquo;Trust is built through work. We work well together, we like each other&rsquo;s work, we like each other, so I trust you.&rdquo;
            </p>
            <p className="text-[13px] text-foreground/40 italic leading-relaxed">
              &ldquo;Linear-time cultures approach tasks sequentially, completing one before starting the next. They value order and punctuality.&rdquo;
            </p>
            <p className="text-[11px] text-foreground/25 mt-2">
              &mdash; Erin Meyer, <em>The Culture Map</em>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Predictive Index ═══ */}
      <section className="px-6 pt-14 pb-20">
        <div className="max-w-2xl mx-auto">
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
              &ldquo;Resourceful and forceful in overcoming obstacles, vigorously and directly attacks problems; fights back hard when challenged. Incredibly strong sense of urgency; this individual is in nearly constant motion.&rdquo;
            </p>
            <p className="text-[13px] text-foreground/40 italic leading-relaxed">
              &ldquo;Risk-taking, daring, and focus on future goals; more concerned with where they&rsquo;re going than either how they&rsquo;ll get there, or where they&rsquo;ve been.&rdquo;
            </p>
            <p className="text-[11px] text-foreground/25 mt-2">
              &mdash; Predictive Index Behavioral Report, Feb 2026
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
