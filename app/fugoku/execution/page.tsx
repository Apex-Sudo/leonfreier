import type { Metadata } from "next";
import ExecutionDoc from "./ExecutionDoc";

export const metadata: Metadata = {
  title: "Execution — Fugoku × Leon Freier",
  description: "EOS foundation homework.",
  robots: { index: false, follow: false },
};

export default function ExecutionPage() {
  return <ExecutionDoc />;
}
