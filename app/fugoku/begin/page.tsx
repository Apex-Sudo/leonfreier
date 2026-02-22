import type { Metadata } from "next";
import FugokuBeginForm from "./FugokuBeginForm";

export const metadata: Metadata = {
  title: "Fugoku — Let's Begin | Leon Freier",
  description: "EOS onboarding: Vision/Traction Organizer.",
  robots: { index: false, follow: false },
};

export default function FugokuBegin() {
  return <FugokuBeginForm />;
}
