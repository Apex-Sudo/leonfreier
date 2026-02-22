"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const STORAGE_KEY = "fugoku-vto-draft";

interface FormData {
  coreValues: string[];
  purpose: string;
  niche: string;
  tenYearTarget: string;
  threeYearRevenue: string;
  threeYearProfit: string;
  threeYearTeam: string;
  threeYearCustomers: string;
  threeYearWorld: string;
  oneYearRevenue: string;
  oneYearCustomers: string;
  oneYearGoals: string[];
  rocks: { description: string; owner: string; due: string }[];
  avoidingQuestion: string;
}

const emptyForm: FormData = {
  coreValues: ["", "", "", "", ""],
  purpose: "",
  niche: "",
  tenYearTarget: "",
  threeYearRevenue: "",
  threeYearProfit: "",
  threeYearTeam: "",
  threeYearCustomers: "",
  threeYearWorld: "",
  oneYearRevenue: "",
  oneYearCustomers: "",
  oneYearGoals: ["", "", "", "", "", "", ""],
  rocks: Array.from({ length: 5 }, () => ({ description: "", owner: "", due: "" })),
  avoidingQuestion: "",
};

export default function FugokuBeginForm() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [saved, setSaved] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const saveTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setForm(JSON.parse(stored));
    } catch {}
  }, []);

  // Auto-save on every change (debounced 500ms)
  const autoSave = useCallback((data: FormData) => {
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setSaved(true);
        setTimeout(() => setSaved(false), 1500);
      } catch {}
    }, 500);
  }, []);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    const next = { ...form, [key]: value };
    setForm(next);
    autoSave(next);
  };

  const updateArray = (key: "coreValues" | "oneYearGoals", index: number, value: string) => {
    const arr = [...form[key]];
    arr[index] = value;
    update(key, arr);
  };

  const updateRock = (index: number, field: keyof FormData["rocks"][0], value: string) => {
    const rocks = form.rocks.map((r, i) => (i === index ? { ...r, [field]: value } : r));
    update("rocks", rocks);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/fugoku/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      alert("Something went wrong. Your answers are saved locally. Try again.");
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-2xl font-semibold mb-4">Received.</p>
          <p className="text-[15px] text-foreground/60">
            I&apos;ll review this before our next call. No prep needed on your end beyond what you just wrote.
          </p>
          <a href="/fugoku" className="accent-link text-[14px] mt-8 inline-block">&larr; Back to proposal</a>
        </div>
      </main>
    );
  }

  const inputClass =
    "w-full bg-transparent border-b border-border/50 focus:border-accent/60 outline-none pb-1 text-[14px] text-foreground placeholder:text-foreground/25 transition-colors";
  const textareaClass =
    "w-full bg-transparent border border-border/30 focus:border-accent/40 rounded-lg outline-none p-3 text-[14px] text-foreground placeholder:text-foreground/25 transition-colors resize-none min-h-[100px]";

  return (
    <main className="min-h-screen">
      {/* Save indicator */}
      <div
        className={`fixed top-20 right-6 z-50 text-[12px] text-accent/70 transition-opacity duration-300 ${saved ? "opacity-100" : "opacity-0"}`}
      >
        Saved ✓
      </div>

      {/* ═══ Hero ═══ */}
      <section className="gradient-hero px-6 pt-24 pb-12 md:pt-36 md:pb-16 mt-14">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-medium tracking-widest text-accent uppercase mb-6">Step 1</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Vision/Traction Organizer</h1>
          <p className="text-[15px] text-foreground/50">
            Before we build, we align on where we&apos;re going. Fill this out before our next call.
            Be honest, not polished. Wrong answers are more useful than impressive ones.
          </p>
          <p className="text-[13px] text-foreground/35 mt-3">
            Your progress saves automatically. Come back anytime.
          </p>
        </div>
      </section>

      {/* ═══ Core Values ═══ */}
      <section className="px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">Core Values</h2>
          <p className="text-[13px] text-foreground/45 mb-8">
            3-5 words that describe how you operate at your best. Not aspirational. Descriptive.
            Think about the people you&apos;ve loved working with. What did they have in common?
          </p>
          <div className="space-y-4">
            {form.coreValues.map((val, i) => (
              <div key={i} className="glass-card p-5 flex items-center gap-4">
                <span className="text-accent font-mono text-[13px] shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <input
                  type="text"
                  className={inputClass}
                  placeholder={i < 3 ? "Required" : "Optional"}
                  value={val}
                  onChange={(e) => updateArray("coreValues", i, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Core Focus ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">Core Focus</h2>
          <p className="text-[13px] text-foreground/45 mb-8">
            Two things. Your purpose (why does Fugoku exist beyond money?) and your niche
            (what do you do better than anyone else, for whom?).
          </p>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <p className="text-[12px] font-medium text-accent mb-3">Purpose / Cause / Passion</p>
              <textarea
                className={textareaClass}
                placeholder="Why does Fugoku exist?"
                value={form.purpose}
                onChange={(e) => update("purpose", e.target.value)}
              />
            </div>
            <div className="glass-card p-6">
              <p className="text-[12px] font-medium text-accent mb-3">Niche</p>
              <textarea
                className={textareaClass}
                placeholder="What do you do better than anyone, for whom?"
                value={form.niche}
                onChange={(e) => update("niche", e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 10-Year Target ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">10-Year Target</h2>
          <p className="text-[13px] text-foreground/45 mb-8">
            One sentence. Where is Fugoku in 10 years if everything goes right?
            Be specific enough to be wrong.
          </p>
          <div className="glass-card p-6">
            <textarea
              className={textareaClass}
              placeholder="In 10 years, Fugoku is..."
              value={form.tenYearTarget}
              onChange={(e) => update("tenYearTarget", e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ═══ 3-Year Picture ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">3-Year Picture</h2>
          <p className="text-[13px] text-foreground/45 mb-8">
            What does Fugoku look like in 3 years? Revenue, team size, customers, product.
          </p>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                <div>
                  <p className="text-[12px] font-medium text-accent mb-2">Revenue</p>
                  <input type="text" className={inputClass} placeholder="$" value={form.threeYearRevenue} onChange={(e) => update("threeYearRevenue", e.target.value)} />
                </div>
                <div>
                  <p className="text-[12px] font-medium text-accent mb-2">Profit</p>
                  <input type="text" className={inputClass} placeholder="$" value={form.threeYearProfit} onChange={(e) => update("threeYearProfit", e.target.value)} />
                </div>
                <div>
                  <p className="text-[12px] font-medium text-accent mb-2">Team size</p>
                  <input type="text" className={inputClass} placeholder="People" value={form.threeYearTeam} onChange={(e) => update("threeYearTeam", e.target.value)} />
                </div>
                <div>
                  <p className="text-[12px] font-medium text-accent mb-2">Customers</p>
                  <input type="text" className={inputClass} placeholder="Number" value={form.threeYearCustomers} onChange={(e) => update("threeYearCustomers", e.target.value)} />
                </div>
              </div>
            </div>
            <div className="glass-card p-6">
              <p className="text-[12px] font-medium text-accent mb-3">What does the world look like?</p>
              <p className="text-[13px] text-foreground/40 mb-4">
                Describe it like you&apos;re telling a friend. &ldquo;Nigerian companies run on our infrastructure,
                identity verification takes 0.3 seconds, we process X transactions per month...&rdquo;
              </p>
              <textarea
                className={textareaClass}
                placeholder="In 3 years..."
                value={form.threeYearWorld}
                onChange={(e) => update("threeYearWorld", e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 1-Year Plan ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">1-Year Plan</h2>
          <p className="text-[13px] text-foreground/45 mb-8">
            What has to be true 12 months from now for you to feel like this year was a success?
          </p>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                <div>
                  <p className="text-[12px] font-medium text-accent mb-2">Revenue goal</p>
                  <input type="text" className={inputClass} placeholder="$" value={form.oneYearRevenue} onChange={(e) => update("oneYearRevenue", e.target.value)} />
                </div>
                <div>
                  <p className="text-[12px] font-medium text-accent mb-2">Customer goal</p>
                  <input type="text" className={inputClass} placeholder="Number" value={form.oneYearCustomers} onChange={(e) => update("oneYearCustomers", e.target.value)} />
                </div>
              </div>
            </div>
            <div className="glass-card p-6">
              <p className="text-[12px] font-medium text-accent mb-3">3-7 Goals for the year</p>
              <p className="text-[13px] text-foreground/40 mb-4">
                Specific, measurable, binary. &ldquo;Sign 10 paying customers&rdquo; not &ldquo;grow the business.&rdquo;
              </p>
              <div className="space-y-3">
                {form.oneYearGoals.map((goal, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-accent font-mono text-[12px] shrink-0">{i + 1}.</span>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder={i < 3 ? "Required" : "Optional"}
                      value={goal}
                      onChange={(e) => updateArray("oneYearGoals", i, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Rocks (90-Day Priorities) ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[11px] font-medium tracking-widest text-muted uppercase mb-3">Rocks</h2>
          <p className="text-[13px] text-foreground/45 mb-8">
            3-5 priorities for the next 90 days. These are the things that, if completed,
            move everything else forward. Each one should be completable and binary: done or not done.
          </p>
          <div className="space-y-4">
            {form.rocks.map((rock, i) => (
              <div key={i} className="glass-card p-5">
                <div className="flex items-start gap-4">
                  <span className="text-accent font-mono text-[13px] shrink-0 mt-2">R{i + 1}</span>
                  <div className="flex-1 space-y-3">
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="What needs to get done?"
                      value={rock.description}
                      onChange={(e) => updateRock(i, "description", e.target.value)}
                    />
                    <div className="flex gap-6">
                      <div className="flex-1">
                        <span className="text-[11px] text-foreground/35 mr-2">Owner:</span>
                        <input
                          type="text"
                          className="bg-transparent border-b border-border/30 focus:border-accent/40 outline-none text-[13px] text-foreground w-24 transition-colors"
                          placeholder="Who"
                          value={rock.owner}
                          onChange={(e) => updateRock(i, "owner", e.target.value)}
                        />
                      </div>
                      <div className="flex-1">
                        <span className="text-[11px] text-foreground/35 mr-2">Due:</span>
                        <input
                          type="text"
                          className="bg-transparent border-b border-border/30 focus:border-accent/40 outline-none text-[13px] text-foreground w-24 transition-colors"
                          placeholder="When"
                          value={rock.due}
                          onChange={(e) => updateRock(i, "due", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ The Real Question ═══ */}
      <section className="px-6 pb-14">
        <div className="max-w-2xl mx-auto">
          <div className="section-module text-center">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/70 mb-2">
              Last question. Answer it honestly.
            </p>
            <p className="text-[17px] md:text-[18px] font-medium text-foreground leading-relaxed mt-6 mb-8">
              &ldquo;What&apos;s the one thing you&apos;re avoiding that would change everything if you did it?&rdquo;
            </p>
            <textarea
              className={textareaClass + " text-center"}
              placeholder="Be honest."
              value={form.avoidingQuestion}
              onChange={(e) => update("avoidingQuestion", e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ═══ Submit ═══ */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="max-w-2xl mx-auto text-center">
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="bg-accent hover:bg-accent/90 text-white px-10 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
          >
            {submitting ? "Sending..." : "Submit"}
          </button>
          <p className="text-[12px] text-foreground/30 mt-4">
            Your answers go directly to Leon. Nobody else sees them.
          </p>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="px-6 pt-10 pb-10">
        <div className="max-w-2xl mx-auto border-t border-border pt-8 flex justify-between items-center">
          <a href="/fugoku" className="accent-link text-[13px]">&larr; Back to proposal</a>
          <a href="mailto:leon@maxresult.ai" className="accent-link text-[13px]">leon@maxresult.ai</a>
        </div>
      </footer>
    </main>
  );
}
