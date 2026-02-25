import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fugoku — Working Agreement | Leon Freier",
  description: "Cultural operating agreement for the Leon + Richard partnership.",
  robots: { index: false, follow: false },
};

/* ─── Culture Map Data ─── */
const dimensions = [
  {
    label: "Scheduling",
    subtitle: "How we treat deadlines and time commitments",
    left: "Linear",
    right: "Flexible",
    leon: 18,
    richard: 72,
  },
  {
    label: "Trust",
    subtitle: "How trust is built: through delivery or through relationship",
    left: "Task-based",
    right: "Relationship-based",
    leon: 45,
    richard: 82,
  },
  {
    label: "Communication",
    subtitle: "How we say things: explicit and brief, or wrapped in context",
    left: "Direct / Low-context",
    right: "High-context",
    leon: 15,
    richard: 68,
  },
  {
    label: "Feedback",
    subtitle: "How we deliver criticism: straight or softened",
    left: "Direct negative",
    right: "Indirect",
    leon: 20,
    richard: 70,
  },
];

function CultureMapChart() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between text-[11px] font-medium text-muted uppercase tracking-widest mb-2">
        <span>Leon</span>
        <span>Richard</span>
      </div>
      {dimensions.map((d) => (
        <div key={d.label}>
          <p className="text-[13px] font-medium text-foreground mb-0.5">{d.label}</p>
          <p className="text-[11px] text-foreground/35 mb-2">{d.subtitle}</p>
          <div className="flex justify-between text-[11px] text-muted mb-2">
            <span>{d.left}</span>
            <span>{d.right}</span>
          </div>
          <div className="relative h-2 bg-foreground/5 rounded-full">
            {/* Leon marker */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background shadow-sm z-10"
              style={{ left: `${d.leon}%`, transform: `translate(-50%, -50%)` }}
              title={`Leon: ${d.left} side`}
            />
            {/* Richard marker */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-foreground/60 border-2 border-background shadow-sm z-10"
              style={{ left: `${d.richard}%`, transform: `translate(-50%, -50%)` }}
              title={`Richard: ${d.right} side`}
            />
            {/* Tension line between markers */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-red-400/30 rounded-full"
              style={{
                left: `${Math.min(d.leon, d.richard)}%`,
                width: `${Math.abs(d.leon - d.richard)}%`,
              }}
            />
          </div>
        </div>
      ))}
      <div className="flex gap-6 pt-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-[11px] text-muted">Leon</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-foreground/60" />
          <span className="text-[11px] text-muted">Richard</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-red-400/30 rounded-full" />
          <span className="text-[11px] text-muted">Tension zone</span>
        </div>
      </div>
    </div>
  );
}

/* ─── PI Comparison Data ─── */
const piFactors = [
  {
    label: "Dominance",
    shortLabel: "A",
    subtitle: "How decisions get made and authority flows",
    left: "Collaborative",
    right: "Independent",
    leon: 92,
    richard: 30,
  },
  {
    label: "Extraversion",
    shortLabel: "B",
    subtitle: "How energy is directed: inward on tasks or outward on people",
    left: "Reserved",
    right: "Sociable",
    leon: 38,
    richard: 55,
  },
  {
    label: "Patience",
    shortLabel: "C",
    subtitle: "Pace of work and tolerance for repetition",
    left: "Driving",
    right: "Steady",
    leon: 12,
    richard: 35,
  },
  {
    label: "Formality",
    shortLabel: "D",
    subtitle: "Need for structure, rules, and proof before action",
    left: "Flexible",
    right: "Precise",
    leon: 28,
    richard: 55,
  },
];

function PIComparisonChart() {
  return (
    <div className="space-y-8">
      {piFactors.map((f) => (
        <div key={f.label}>
          <div className="flex items-baseline gap-2 mb-0.5">
            <span className="text-[11px] font-mono text-accent/60">{f.shortLabel}</span>
            <p className="text-[13px] font-medium text-foreground">{f.label}</p>
          </div>
          <p className="text-[11px] text-foreground/35 mb-2">{f.subtitle}</p>
          <div className="flex justify-between text-[11px] text-muted mb-2">
            <span>{f.left}</span>
            <span>{f.right}</span>
          </div>
          <div className="relative h-2 bg-foreground/5 rounded-full">
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background shadow-sm z-10"
              style={{ left: `${f.leon}%`, transform: `translate(-50%, -50%)` }}
              title={`Leon: ${f.leon}%`}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-foreground/60 border-2 border-background shadow-sm z-10"
              style={{ left: `${f.richard}%`, transform: `translate(-50%, -50%)` }}
              title={`Richard: ${f.richard}%`}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-red-400/30 rounded-full"
              style={{
                left: `${Math.min(f.leon, f.richard)}%`,
                width: `${Math.abs(f.leon - f.richard)}%`,
              }}
            />
          </div>
        </div>
      ))}
      <div className="flex gap-6 pt-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-[11px] text-muted">Leon (Venturer)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-foreground/60" />
          <span className="text-[11px] text-muted">Richard (Altruist)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-red-400/30 rounded-full" />
          <span className="text-[11px] text-muted">Tension zone</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Friction Block ─── */
function FrictionBlock({
  number,
  dimension,
  tension,
  protocol,
}: {
  number: string;
  dimension: string;
  tension: string;
  protocol: string[];
}) {
  return (
    <div className="glass-card p-8">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-accent font-mono text-[13px] shrink-0">{number}</span>
        <h3 className="text-[16px] font-semibold text-foreground">{dimension}</h3>
      </div>
      <p className="text-[13px] leading-relaxed text-foreground/50 mb-6 italic">{tension}</p>
      <div className="space-y-3">
        {protocol.map((line, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-accent/60 mt-0.5 shrink-0">—</span>
            <p className="text-[13px] leading-relaxed text-foreground/70">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FugokuAgreement() {
  return (
    <main className="min-h-screen">

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero px-6 pt-24 pb-10 md:pt-36 md:pb-14">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-medium tracking-widest text-accent uppercase mb-6">Working Agreement</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Leon + Richard</h1>
          <p className="text-[15px] text-foreground/50 leading-relaxed max-w-lg">
            This is not a legal contract. It&apos;s a cultural operating agreement. The stuff that normally takes 
            6 months of friction to figure out, written down upfront.
          </p>
        </div>
      </section>

      {/* ═══ Behavioral Wiring ═══ */}
      <section className="px-6 py-10 md:py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">How We&apos;re Wired</h2>
          <p className="text-[13px] text-foreground/45 mb-6">
            Based on the Predictive Index. Behavioral DNA, not personality. Leon is a Venturer (rarest pattern: extremely high dominance, very low patience). Richard is an Altruist (collaborative, people-focused, steady). The gap on Dominance is the single biggest dynamic in this partnership.
          </p>
          <div className="glass-card p-8">
            <PIComparisonChart />
          </div>

          <div className="space-y-5 mt-8">
            <div className="glass-card p-8">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-accent font-mono text-[13px] shrink-0">A</span>
                <h3 className="text-[16px] font-semibold text-foreground">Dominance Gap (92 vs 30)</h3>
              </div>
              <p className="text-[13px] leading-relaxed text-foreground/50 mb-4 italic">
                The widest gap. Leon decides fast and alone. Richard collaborates and shares authority. Without structure, Leon steamrolls and Richard withdraws.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-accent/60 mt-0.5 shrink-0">&mdash;</span>
                  <p className="text-[13px] leading-relaxed text-foreground/70">Define decision domains upfront. Richard owns Fugoku operations and technical calls. Leon owns strategy and positioning. Grey zones get a 5-minute conversation, not a unilateral move.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent/60 mt-0.5 shrink-0">&mdash;</span>
                  <p className="text-[13px] leading-relaxed text-foreground/70">Leon&apos;s instinct is to act first, explain later. With Richard, reverse it: signal the direction before executing. One sentence is enough.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent/60 mt-0.5 shrink-0">&mdash;</span>
                  <p className="text-[13px] leading-relaxed text-foreground/70">Richard: disagreement needs to be spoken, not signaled through compliance. &ldquo;I see it differently&rdquo; is a complete sentence.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-accent font-mono text-[13px] shrink-0">B</span>
                <h3 className="text-[16px] font-semibold text-foreground">Extraversion Gap (38 vs 55)</h3>
              </div>
              <p className="text-[13px] leading-relaxed text-foreground/50 mb-4 italic">
                Manageable. Richard needs more verbal processing and social connection. Leon is task-first and private.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-accent/60 mt-0.5 shrink-0">&mdash;</span>
                  <p className="text-[13px] leading-relaxed text-foreground/70">Weekly sync call serves both: Richard gets the connection, Leon gets the status update. One meeting, both needs met.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent/60 mt-0.5 shrink-0">&mdash;</span>
                  <p className="text-[13px] leading-relaxed text-foreground/70">Leon&apos;s short messages are not coldness. Richard&apos;s longer messages are not inefficiency. Accept the difference.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-accent font-mono text-[13px] shrink-0">C</span>
                <h3 className="text-[16px] font-semibold text-foreground">Patience Gap (12 vs 35)</h3>
              </div>
              <p className="text-[13px] leading-relaxed text-foreground/50 mb-4 italic">
                Leon&apos;s pace is relentless. Richard is faster than average but not Venturer-fast. Without guardrails, Leon&apos;s urgency becomes Richard&apos;s anxiety.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-accent/60 mt-0.5 shrink-0">&mdash;</span>
                  <p className="text-[13px] leading-relaxed text-foreground/70">Richard sets his own timelines. Leon does not impose pace. What Leon can do: make the priority order clear so Richard isn&apos;t guessing what matters most.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent/60 mt-0.5 shrink-0">&mdash;</span>
                  <p className="text-[13px] leading-relaxed text-foreground/70">When Leon sends three ideas in one message, Richard picks one. Not all three. Sequencing beats multitasking for this pairing.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-accent font-mono text-[13px] shrink-0">D</span>
                <h3 className="text-[16px] font-semibold text-foreground">Formality Gap (28 vs 55)</h3>
              </div>
              <p className="text-[13px] leading-relaxed text-foreground/50 mb-4 italic">
                Leon tolerates ambiguity and ships at 90%. Richard wants proof before action and follows established standards.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-accent/60 mt-0.5 shrink-0">&mdash;</span>
                  <p className="text-[13px] leading-relaxed text-foreground/70">Richard&apos;s thoroughness is an asset, not a bottleneck. The detail work Leon skips is exactly what Richard catches.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent/60 mt-0.5 shrink-0">&mdash;</span>
                  <p className="text-[13px] leading-relaxed text-foreground/70">Agree on &ldquo;good enough&rdquo; thresholds per deliverable. Not everything needs 100%. Not everything ships at 90%. Define it per task.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Culture Map ═══ */}
      <section className="px-6 pb-10 md:pb-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">Where We Differ</h2>
          <p className="text-[13px] text-foreground/45 mb-6">
            Based on Erin Meyer&apos;s Culture Map. These aren&apos;t problems. They&apos;re the friction points 
            we address below, one by one.
          </p>
          <div className="glass-card p-8">
            <CultureMapChart />
          </div>
        </div>
      </section>

      {/* ═══ Friction Points → Protocols ═══ */}
      <section className="px-6 pb-10">
        <div className="max-w-2xl mx-auto space-y-5">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-4">How We Handle It</h2>

          <FrictionBlock
            number="01"
            dimension="Scheduling"
            tension="Leon operates on compressed time. Richard operates on relationship time. Neither is wrong."
            protocol={[
              "If Richard commits to a date, it's real. If he can't make it, he says so 24h before, not after.",
              "\"I'll try\" is not a commitment. \"I will by [date]\" is.",
              "Leon doesn't set Richard's deadlines. Richard proposes his own and owns them.",
              "Timelines are Richard's to set. Accountability to those timelines is mutual.",
            ]}
          />

          <FrictionBlock
            number="02"
            dimension="Trust"
            tension="Leon trusts through verified output. Richard trusts through relationship depth. Both are valid paths to the same place."
            protocol={[
              "Fugoku: Richard decides. Leon advises. Leon doesn't override on technical or operational calls.",
              "Strategy, positioning, pricing: collaborative, but Richard has final say on his company.",
              "Both sides assume positive intent until proven otherwise.",
              "Leon's Stripe/LLC involvement: Leon can pause billing infrastructure with 30 days notice if commitments aren't met. Richard can exit the arrangement anytime with the same notice.",
            ]}
          />

          <FrictionBlock
            number="03"
            dimension="Communication"
            tension="Leon communicates direct. Brevity is not harshness. Richard communicates with context. Silence is not disagreement."
            protocol={[
              "Default channel: Telegram, async.",
              "If it's urgent: say \"urgent\" explicitly. Everything else is responded to within 24h, not immediately.",
              "Leon communicates direct. Richard should not read harshness into brevity. If Leon's upset, he'll say so.",
              "Richard flags disagreement openly, not through silence or delay. Going dark is not the same as saying no.",
            ]}
          />

          <FrictionBlock
            number="04"
            dimension="Feedback"
            tension="Leon gives feedback straight. Richard processes internally first. The gap between these two styles is where misunderstandings live."
            protocol={[
              "Leon gives feedback straight. Richard can ask for the \"why\" but shouldn't take directness as disrespect.",
              "Richard gives feedback in whatever form feels natural. The only rule: it has to come out, not stay internal.",
              "Both sides assume positive intent until proven otherwise.",
            ]}
          />
        </div>
      </section>

      {/* ═══ Going Dark Protocol ═══ */}
      <section className="px-6 pb-10">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-accent font-mono text-[13px] shrink-0">05</span>
              <h3 className="text-[16px] font-semibold text-foreground">Going Dark Protocol</h3>
            </div>
            <p className="text-[13px] leading-relaxed text-foreground/50 mb-6 italic">
              This protocol exists to remove guesswork, not to punish.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-[12px] font-semibold text-accent shrink-0 w-20">48h</span>
                <p className="text-[13px] text-foreground/70">No response: Leon sends one check-in.</p>
              </div>
              <div className="border-t border-border/50" />
              <div className="flex gap-4">
                <span className="text-[12px] font-semibold text-accent shrink-0 w-20">+ 24h</span>
                <p className="text-[13px] text-foreground/70">No response to check-in: work is assumed paused. No hard feelings, but the clock stops on deliverables.</p>
              </div>
              <div className="border-t border-border/50" />
              <div className="flex gap-4">
                <span className="text-[12px] font-semibold text-accent shrink-0 w-20">Return</span>
                <p className="text-[13px] text-foreground/70">Just pick up. No apology needed. But say where things stand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Meta-Rule ═══ */}
      <section className="px-6 pb-10">
        <div className="max-w-2xl mx-auto">
          <div className="border-t border-border pt-12">
            <div className="text-center max-w-lg mx-auto">
              <h3 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-4">The Meta-Rule</h3>
              <p className="text-[15px] leading-relaxed text-foreground/60">
                When in doubt: say it, don&apos;t assume it.<br />
                A 10-second message beats 3 days of silence every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Navigation ═══ */}
      <section className="px-6 pb-10">
        <div className="max-w-2xl mx-auto flex items-center justify-center gap-6 md:gap-10">
          {[
            { word: "Alignment", href: "/fugoku/alignment" },
            { word: "Execution", href: "/fugoku/execution" },
          ].map((item, i) => (
            <div key={item.word} className="flex items-center gap-6 md:gap-10">
              <a href={item.href} className="text-[16px] font-medium text-foreground/60 hover:text-accent transition-colors">
                {item.word} →
              </a>
              {i < 1 && <span className="text-accent/30 text-[16px]">·</span>}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 pt-10 pb-10">
        <div className="max-w-2xl mx-auto border-t border-border pt-8 flex justify-between items-center">
          <p className="text-[13px] text-muted/50">leonfreier.com</p>
          <a href="mailto:leon@maxresult.ai" className="accent-link text-[13px]">leon@maxresult.ai</a>
        </div>
      </footer>

    </main>
  );
}
