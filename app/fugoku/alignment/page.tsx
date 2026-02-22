import type { Metadata } from "next";
import AgreementDoc from "./AgreementDoc";

export const metadata: Metadata = {
  title: "Alignment — Fugoku × Leon Freier",
  description: "Consulting services agreement.",
  robots: { index: false, follow: false },
};

export default function AlignmentPage() {
  return <AgreementDoc />;
}
