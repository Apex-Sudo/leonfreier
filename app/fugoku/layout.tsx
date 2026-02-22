"use client";

import { useState, useEffect, type ReactNode } from "react";

const PASS_KEY = "fugoku_auth";
const CORRECT_PASS = "fG9k$xR7";

export default function FugokuLayout({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem(PASS_KEY);
      if (stored === CORRECT_PASS) setAuthed(true);
      setChecking(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === CORRECT_PASS) {
      sessionStorage.setItem(PASS_KEY, input);
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (checking) return null;

  if (!authed) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <form onSubmit={handleSubmit} className="text-center max-w-xs w-full">
          <p className="text-[11px] font-medium tracking-[0.25em] text-accent uppercase mb-8">
            Private Document
          </p>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            autoFocus
            className={`w-full text-center text-[16px] bg-transparent border-b ${
              error ? "border-red-400" : "border-foreground/15 focus:border-accent/40"
            } outline-none py-3 text-foreground/80 placeholder:text-foreground/20 transition-colors`}
          />
          {error && (
            <p className="text-[12px] text-red-400 mt-3">Incorrect password.</p>
          )}
          <button
            type="submit"
            className="mt-8 text-[14px] font-medium px-6 py-2.5 rounded-xl bg-accent text-white hover:bg-accent-dark transition-colors"
          >
            Enter
          </button>
        </form>
      </main>
    );
  }

  return <>{children}</>;
}
